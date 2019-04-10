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
    put "/update_budget/:id", BudgetController, :update
    post "/add_budget", BudgetController, :create
    get "/show_budget", BudgetController, :index
  end
end
