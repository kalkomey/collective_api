Rails.application.routes.draw do

  get '/collective', :to => redirect('/foo.html')

  namespace :api do
    namespace :v1 do
      resources :categories, except: [:new, :edit, :show]
      resources :employees
      resources :groups do
        collection do
          get "search"
          get "categories"
        end
      end
      resources :memberships, only: [:create]
    end
  end
end
