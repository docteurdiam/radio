class RadiosController < ApplicationController

  def search
    query = params[:query]
    type = params[:type]
    radios = execute_search(type, query)
    render :json => radios
  end

  private

  def execute_search(type, query)
    case type
      when "name"
        Radio.find(:all, :conditions => ['name LIKE ?', query + "%"])
      when "type"
        Radio.find_all_by_category(query)
    end
  end

end