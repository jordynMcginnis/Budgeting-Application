defmodule ServerWeb.BudgetView do
  use ServerWeb, :view
  alias ServerWeb.BudgetView

  def render("index.json", %{budgets: budgets}) do
    %{data: render_many(budgets, BudgetView, "budget.json")}
  end

  def render("show.json", %{budget: budget}) do
    %{data: render_one(budget, BudgetView, "budget.json")}
  end

  def render("budget.json", %{budget: budget}) do
    %{id: budget.id,
      budget: budget.budget}
  end
end
