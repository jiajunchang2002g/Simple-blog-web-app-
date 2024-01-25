Rails.application.routes.draw do
  post '/login', to: 'users#login'
  resources :tags do 
    resources :posts do 
      resources :comments
    end
  end
end
