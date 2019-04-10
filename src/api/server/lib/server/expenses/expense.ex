defmodule Server.Expenses.Expense do
  use Ecto.Schema
  import Ecto.Changeset


  schema "expenses" do
    field :category, :string
    field :price, :integer

    timestamps()
  end

  @doc false
  def changeset(expense, attrs) do
    expense
    |> cast(attrs, [:category, :price])
    |> validate_required([:category, :price])
  end
end
