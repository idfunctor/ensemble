
import React from "react";
import { mount } from "../mounter";

export interface HomeProps {
  name: string;
}

export const Home: React.FC<HomeProps> = ({ name }: HomeProps) => {
  return (
    <section className="phx-hero">
      <h1>Welcome to {name} with TypeScript and React!</h1>
    </section>
  );
};

export const Home_Hook = {
  mounted() {
    this.unmountComponent = mount(this.el.id, this.opts(), Home);
  },

  destroyed() {
    if (!this.unmountComponent) {
      console.error("Greeter unmountComponent not set");
      return;
    }

    this.unmountComponent(this.el);
  },

  opts(): HomeProps {
    return {
      name: "Ensemble",
    };
  },
}