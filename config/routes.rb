RadioFeeCalculator::Application.routes.draw do
  resources :radios do
    collection do
      post :calculate
      get :search
    end
  end

  resources :totals do
    member do
      get :stations
      post :remove_station
    end
  end

  resources :adverts do
    collection do
      get :active
    end
  end

  resources :partnerships, :networks, :users
  resource :user_session

  match 'reminders' => 'reminders#show'
  match 'reminders/send' => 'reminders#deliver', :via => :post
  match 'admin' => 'admin#home'
  match 'admin/logout' => 'user_sessions#destroy', :via => :get
  match 'admin/upload/clear' => 'admin#clear', :via => :get
  match 'admin/upload' => 'admin#upload', :via => :get
  match 'admin/upload' => 'admin#commit', :via => :post
  match ':controller/:action' => '#index'
  match '/:controller(/:action(/:id))'
  
end
