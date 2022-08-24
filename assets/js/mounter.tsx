import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

export function mount<T>(id: string, opts: T, Component: React.FC<T>) {
  const rootElement = document.getElementById(id);
  console.log({ yolo: rootElement })

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