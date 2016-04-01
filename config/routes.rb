Rails.application.routes.draw do
  resources :boards
  resources :static_pages

  devise_for :users,
              path: "auth",
              path_names: { sign_in: 'login',
                            sign_out: 'logout',
                            password: 'secret',
                            confirmation: 'verification',
                            unlock: 'unblock',
                            registration: 'register',
                            sign_up: 'cmon_let_me_in' }

  # scope :api, defaults: { format: 'json' } do
  #   scope :v1 do
  #     devise_scope :user do
  #       get "signup", to: "devise/registrations#new"
  #       get "login", to: "devise/sessions#new"
  #       get "logout", to: "devise/sessions#destroy"
  #     end
  #   end
  # end

  root "static_pages#index"

end
