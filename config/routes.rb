JournalApp::Application.routes.draw do
  root :to => "sites#index"

  namespace :api, defaults: {format: :json} do
    resources :posts, except: [:new, :edit]
  end

end
