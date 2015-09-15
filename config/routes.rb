Rails.application.routes.draw do

  root to: 'static_pages#main'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show]
  end

  resources :users, only: [:new, :create, :show]

  resources :jobs, only: [:new, :create, :destroy, :show, :index]

  resource :session, only: [:new, :create, :destroy]

end
