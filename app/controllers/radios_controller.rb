class RadiosController < ApplicationController
  before_filter :require_user, :except => [:search, :calculate]

  def index
    @radios = @books = Radio.paginate(:page => params[:page], :per_page => 20, :order => "name")
    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @radios }
    end
  end

  def show
    @radio = Radio.find(params[:id])
  end

  def new
    @radio = Radio.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @radio }
    end
  end

  def edit
    @radio = Radio.find(params[:id])
    @potential_partners = Radio.find(:all, :order => "name") - [@radio]
  end

  def create
    @radio = Radio.new(params[:radio])

    respond_to do |format|
      if @radio.save
        flash[:notice] = 'Radio was successfully created.'
        format.html { redirect_to(@radio) }
        format.xml  { render :xml => @radio, :status => :created, :location => @radio }
      else
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
        format.html { redirect_to(@radio) }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @radio.errors, :status => :unprocessable_entity }
      end
    end
  end

  def destroy
    @radio = Radio.find(params[:id])
    @radio.destroy

    respond_to do |format|
      format.html { redirect_to(radios_url) }
      format.xml  { head :ok }
    end
  end

  def search
    query = params[:query]
    type = params[:type]
    radios = execute_search(type, query)
    render :json => radios
  end

  def calculate
    identifiers = params[:identifiers]
    parts = identifiers.map do |identifier|
      identifier.split("-")
    end
    items = parts.map do |part|
      {:type => part[1], :id => part[0]}
    end
    stations = []
    items.each do |item|
      if item[:type] == "station"
        stations << item[:id]
      else
        network = Network.find(item[:id])
        stations = stations + network.radios.map {|radio| radio.id}
      end
    end
    total = FeeCalculator.new.calculate(stations)
    render :text => total
  end
    
  def execute_search(type, query)
    results = []
    case type
      when "alphabetical"
        radios = Radio.find(:all, :conditions => ['name ILIKE ?', query + "%"], :order => "name")
        networks = Network.find(:all, :conditions => ['name ILIKE ?', query + "%"], :order => "name")
        totals = Total.find(:all, :conditions => ['name ILIKE ?', query + "%"], :order => "name")
        results += totals.map {|total| total.to_hash}
        results += radios.map {|radio| radio.to_hash}
        results += networks.map {|network| network.to_hash}
      when "name"
        radios = Radio.find(:all, :conditions => ['name ILIKE ?', "%" + query + "%"], :order => "name")
        networks = Network.find(:all, :conditions => ['name ILIKE ?', "%" + query + "%"], :order => "name")
        totals = Total.find(:all, :conditions => ['name ILIKE ?', "%" + query + "%"], :order => "name")
        results += totals.map {|total| total.to_hash}
        results +=  radios.map {|radio| radio.to_hash}
        results +=  networks.map {|network| network.to_hash}
      when "type"
        case query
          when "Digital / Internet"
            results +=  Radio.find_all_by_category("DAB Only", :order => "name").map {|radio| radio.to_hash}
            results +=  Radio.find_all_by_category("DAB", :order => "name").map {|radio| radio.to_hash}
          when "Totals"
          results +=  Total.find(:all).map {|total| total.to_hash}
          when "Networks"
          results +=  Network.find(:all, :order => "name").map{|network| network.to_hash}
        else
          results +=  Radio.find_all_by_category(query, :order => "name").map {|radio| radio.to_hash}
        end
    end
    results.sort_by {|result| result[:name]}
  end

end
