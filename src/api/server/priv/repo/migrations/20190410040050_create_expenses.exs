defmodule Server.Repo.Migrations.CreateExpenses do
  use Ecto.Migration

  def change do
    create table(:expenses) do
      add :category, :string
      add :price, :integer

      timestamps()
    end

  end
end
