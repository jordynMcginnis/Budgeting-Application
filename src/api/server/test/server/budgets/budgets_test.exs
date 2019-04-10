defmodule Server.BudgetsTest do
  use Server.DataCase

  alias Server.Budgets

  describe "budgets" do
    alias Server.Budgets.Budget

    @valid_attrs %{budget: 42}
    @update_attrs %{budget: 43}
    @invalid_attrs %{budget: nil}

    def budget_fixture(attrs \\ %{}) do
      {:ok, budget} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Budgets.create_budget()

      budget
    end

    test "list_budgets/0 returns all budgets" do
      budget = budget_fixture()
      assert Budgets.list_budgets() == [budget]
    end

    test "get_budget!/1 returns the budget with given id" do
      budget = budget_fixture()
      assert Budgets.get_budget!(budget.id) == budget
    end

    test "create_budget/1 with valid data creates a budget" do
      assert {:ok, %Budget{} = budget} = Budgets.create_budget(@valid_attrs)
      assert budget.budget == 42
    end

    test "create_budget/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Budgets.create_budget(@invalid_attrs)
    end

    test "update_budget/2 with valid data updates the budget" do
      budget = budget_fixture()
      assert {:ok, budget} = Budgets.update_budget(budget, @update_attrs)
      assert %Budget{} = budget
      assert budget.budget == 43
    end

    test "update_budget/2 with invalid data returns error changeset" do
      budget = budget_fixture()
      assert {:error, %Ecto.Changeset{}} = Budgets.update_budget(budget, @invalid_attrs)
      assert budget == Budgets.get_budget!(budget.id)
    end

    test "delete_budget/1 deletes the budget" do
      budget = budget_fixture()
      assert {:ok, %Budget{}} = Budgets.delete_budget(budget)
      assert_raise Ecto.NoResultsError, fn -> Budgets.get_budget!(budget.id) end
    end

    test "change_budget/1 returns a budget changeset" do
      budget = budget_fixture()
      assert %Ecto.Changeset{} = Budgets.change_budget(budget)
    end
  end
end
