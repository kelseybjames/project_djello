Rails.application.routes.draw do
  

  devise_for :users,
              path: "auth",
              path_names: { sign_in: 'login',
                            sign_out: 'logout',
                            password: 'secret',
                            confirmation: 'verification',
                            unlock: 'unblock',
                            registration: 'register',
                            sign_up: 'cmon_let_me_in' }

  scope :api, defaults: { format: 'json' } do
    scope :v1 do
      resources :boards
      resources :lists
      resources :static_pages
    end
  end

  root "static_pages#index"

end
