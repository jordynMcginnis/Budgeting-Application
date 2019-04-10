defmodule Server.Budgets.Budget do
  use Ecto.Schema
  import Ecto.Changeset


  schema "budgets" do
    field :budget, :integer

    timestamps()
  end

  @doc false
  def changeset(budget, attrs) do
    budget
    |> cast(attrs, [:budget])
    |> validate_required([:budget])
  end
end
