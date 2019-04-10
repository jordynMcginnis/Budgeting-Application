defmodule ServerWeb.Router do
  use ServerWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", ServerWeb do
    pipe_through :api

    get "/show_posts", ExpenseController, :index
    post "/add_expense", ExpenseController, :create
    delete "/delete_expenses/:id", ExpenseController, :delete
  end
end
