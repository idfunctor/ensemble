import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

export function mount<T extends JSX.IntrinsicAttributes>(id: string, opts: T, Component: React.FC<T>) {
  const rootElement = document.getElementById(id);

  render(
    <React.StrictMode>
      <Component {...opts} />
    </React.StrictMode>,
    rootElement
  );

  return (el: Element) => {
    if (!unmountComponentAtNode(el)) {
      console.warn("unmount failed", el);
    }
  };
}
