Rails.application.routes.draw do
  scope :api, defaults: { format: 'json' } do
    scope :v1 do
      devise_scope :user do
        get "signup", to: "devise/registrations#new"
        get "login", to: "devise/sessions#new"
        get "logout", to: "devise/sessions#destroy"
      end
    end
  end
  root to: "devise/sessions#new"

end