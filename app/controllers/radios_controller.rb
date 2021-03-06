class RadiosController < ApplicationController
  resource_controller
  before_filter :require_user, :except => [:search, :calculate]

  def index
    @per_page = params[:per_page] || 15
    @radios = @books = Radio.search(params[:s]).paginate(:page => params[:page], :per_page => @per_page, :order => "name")
    @all_categories = ["Local & Regional", "National and News", "Irish and ROI", "DAB Only", "Internet Only"]
  end

  new_action.before do
    @all_categories = ["Local & Regional", "National and News", "Irish and ROI", "DAB Only", "Internet Only"]
  end

  def change_search
    redirect_to :action => :index, :s => params[:s]
  end

  def edit
    @radio = Radio.find(params[:id])
    @potential_partners = Radio.order("name") - [@radio]
  end

  def create
    @radio = Radio.new(params[:radio])

    respond_to do |format|
      if @radio.save
        flash[:notice] = 'Radio was successfully created.'
        format.html { redirect_to(radios_path) }
        format.xml  { render :xml => @radio, :status => :created, :location => @radio }
      else
        @all_categories = ["Local & Regional", "National and News", "Irish and ROI", "DAB Only", "Internet Only"]
        format.html { render :action => "new" }
        format.xml  { render :xml => @radio.errors, :status => :unprocessable_entity }
      end
    end
  end

  def update
    @radio = Radio.find(params[:id])

    respond_to do |format|
      if @radio.update_attributes(params[:radio])
        flash[:notice] = 'Radio was successfully updated.'
        format.html { redirect_to(radios_path) }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @radio.errors, :status => :unprocessable_entity }
      end
    end
  end

  def search
    query = params[:query]
    type = params[:type]
    radios = execute_search(type, query)
    render :json => radios
  end

  def calculate
    stations = parse(params[:identifiers])
    worksheet = FeeCalculator.new.calculate(stations)
    render :text => {:total => worksheet.total, :messages => worksheet.messages,
                     :total_without_discounts => worksheet.total_without_discounts}.to_json
  end
    
  def execute_search(type, query)
    results = []
    case type
      when "alphabetical"
        radios = Radio.where("name ilike ? ", "#{query}%").order("name")
        networks = Network.where("name ilike ? ", "#{query}%").order("name")
        totals = Total.where("name ilike ? ", "#{query}%").order("name")
        results += totals.map {|total| total.to_hash} + radios.map {|radio| radio.to_hash} + networks.map {|network| network.to_hash}
      when "name"
        query = query.split(/ /).join("%")
        radios = Radio.where("name ilike ? ", "%#{query}%").order("name")
        networks = Network.where("name ilike ? ", "%#{query}%").order("name")
        totals = Total.where("name ilike ? ", "%#{query}%").order("name")
        results += totals.map {|total| total.to_hash}
        results +=  radios.map {|radio| radio.to_hash}
        results +=  networks.map {|network| network.to_hash}
      when "type"
        case query
          when "Digital / Internet"
            results +=  Radio.find_all_by_category("Internet Only", :order => "name").map {|radio| radio.to_hash}
            results +=  Radio.find_all_by_category("DAB Only", :order => "name").map {|radio| radio.to_hash}
          when "Totals"
          results +=  Total.all.map {|total| total.to_hash}
          when "Networks"
          results +=  Network.order("name").map{|network| network.to_hash}
        else
          results +=  Radio.find_all_by_category(query, :order => "name").map {|radio| radio.to_hash}
        end
    end
    results.sort_by {|result| result[:name]}
  end

  def update_collection
    params[:station].each_value do |station|
      name = station["name"]
      id = station["id"]
      fee = station["fee"]
      radio = Radio.find(id)
      radio.name = name
      radio.fee = fee
      radio.save!
    end
    redirect_to "/radios"
  end

  def edit_collection
    @stations = Radio.find(params["selected-stations"].split(",").map {|x| x.to_i})
  end

end
