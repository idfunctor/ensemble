defmodule EnsembleWeb.HomeLive do
  use EnsembleWeb, :live_view

  def mount(_params, _session, socket) do
    {:ok,
     socket
     |> assign(:count, 0)}
  end

  def render(assigns) do
    ~H"""
    <div
      id="greeting"
      phx-hook="Home"
      phx-update="ignore">
    </div>
    """
  end
end
