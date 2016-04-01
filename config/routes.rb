Rails.application.routes.draw do
  devise_for :users
  root to: "boards#index"

  devise_for :users
end
