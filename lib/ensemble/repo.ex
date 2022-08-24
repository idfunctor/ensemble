defmodule Ensemble.Repo do
  use Ecto.Repo,
    otp_app: :ensemble,
    adapter: Ecto.Adapters.Postgres
end
