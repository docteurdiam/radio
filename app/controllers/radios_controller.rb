class RadiosController < ApplicationController
  before_filter :require_user, :except => [:search]

  def index
    @radios = @books = Radio.paginate(:page => params[:page], :per_page => 20)
    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @radios }
    end
  end

  def show
    @radio = Radio.find(params[:id])
    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @radio }
    end
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

#  def calculate
#    radios =  Radio.find(params[:radios].split(","))
#    total = 0
#    radios.each do |radio|
#      partner = Partnership.check(radio)
#      if partner && (radios.contains? partner)
#        total = total + radio.partnership.fee / 2
#        next
#      end
#    end
#  end

  private

  def execute_search(type, query)
    case type
      when "name"
        Radio.find(:all, :conditions => ['name ILIKE ?', query + "%"], :order => "name")
      when "type"
        Radio.find_all_by_category(query, :order => "name")
    end
  end

end
