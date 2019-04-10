defmodule ServerWeb.BudgetController do
  use ServerWeb, :controller

  alias Server.Budgets
  alias Server.Budgets.Budget

  action_fallback ServerWeb.FallbackController

  def index(conn, _params) do
    budgets = Budgets.list_budgets()
    render(conn, "index.json", budgets: budgets)
  end

  def create(conn, %{"budget" => budget_params}) do
    with {:ok, %Budget{} = budget} <- Budgets.create_budget(budget_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", budget_path(conn, :show, budget))
      |> render("show.json", budget: budget)
    end
  end

  def show(conn, %{"id" => id}) do
    budget = Budgets.get_budget!(id)
    render(conn, "show.json", budget: budget)
  end

  def update(conn, %{"id" => id, "budget" => budget_params}) do
    budget = Budgets.get_budget!(id)

    with {:ok, %Budget{} = budget} <- Budgets.update_budget(budget, budget_params) do
      render(conn, "show.json", budget: budget)
    end
  end

  def delete(conn, %{"id" => id}) do
    budget = Budgets.get_budget!(id)
    with {:ok, %Budget{}} <- Budgets.delete_budget(budget) do
      send_resp(conn, :no_content, "")
    end
  end
end
