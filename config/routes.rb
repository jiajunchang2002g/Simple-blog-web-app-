Rails.application.routes.draw do
  resources :tags do 
    resources :posts do 
      resources :comments
    end
  end
end
