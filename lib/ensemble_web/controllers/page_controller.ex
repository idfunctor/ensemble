defmodule EnsembleWeb.PageController do
  use EnsembleWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
