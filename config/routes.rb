Rails.application.routes.draw do

  get '/collective', :to => redirect('/foo.html')

  namespace :api do
    namespace :v1 do
      resources :employees
      resources :groups do
        collection do
          get "search"
          get "categories"
        end
      end
    end
  end
end
