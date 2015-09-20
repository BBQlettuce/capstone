Rails.application.routes.draw do

  root to: 'static_pages#main'

  namespace :api, defaults: { format: :json } do
    resources :jobs, only: [:show, :index, :create, :update, :destroy] do
      collection do
        get 'my_posted'
      end
    end
    resources :resumes, only: [:show, :index, :create, :update, :destroy] do
      collection do
        get 'my'
      end
    end
    # resource :currentuser, only: [:show]
    resources :users, only: [:new, :create, :show]
    resource :session, only: [:show, :create, :destroy]

    resource :jobsaves, only: [:create, :destroy]
  end

  # resources :users, only: [:new, :create, :show]

  # resources :jobs, only: [:new]

  # resource :session, only: [:new, :create, :destroy]

end
