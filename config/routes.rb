# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  get 'home/index'

  scope '/api' do
    get '/categories', to: 'categories#all'
    post '/categories', to: 'categories#create'
  end

  root 'home#index'
end
