defmodule Server.Repo.Migrations.CreateBudgets do
  use Ecto.Migration

  def change do
    create table(:budgets) do
      add :budget, :integer

      timestamps()
    end

  end
end
