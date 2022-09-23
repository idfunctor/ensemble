
import React from "react";
import { mount } from "../mounter";
import usePikaso from 'pikaso-react-hook';

export interface HomeProps {
  name: string;
}

export const Home: React.FC<HomeProps> = ({ name }: HomeProps) => {
  const [ref, editor] = usePikaso()
  
  const createCircle = () => {
    console.log({ editor })
    editor?.shapes.circle.insert({
      x: 200,
      y: 200,
      radius: 50,
      fill: 'red'
    })
  }

  return (
    <>
      <div
        ref={ref}
        style={{
          background: '#ccc',
          width: '100vw',
          height: '90vh'
        }}
      />
      
      <button onClick={createCircle}>Create Circle</button>
    </>
  )

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