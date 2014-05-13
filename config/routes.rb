JournalApp::Application.routes.draw do
  namespace :api do
    resources :posts, except: [:new, :edit]
  end
end
