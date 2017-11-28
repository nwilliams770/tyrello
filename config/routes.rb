Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :boards, except: [ :new ]
    resources :lists, only: [:create, :destroy, :update]
    resources :cards, only: [:create, :destroy, :update]
  end
  root "static_pages#root"
end
