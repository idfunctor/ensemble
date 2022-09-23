
import React, { useEffect, useState } from "react";
import { mount } from "../../mounter";
import usePikaso from 'pikaso-react-hook';
import { Drawings } from "./draw-config";

export interface HomeProps {
  name: string;
}

type DrawingType = keyof typeof Drawings

export const Home: React.FC<HomeProps> = ({ name }: HomeProps) => {
  const [ref, editor] = usePikaso({
    selection: {
      transformer: {
        borderStroke: '#262626',
        anchorFill: '#262626'
      }
    }
  })

  const [activeDrawing, setActiveDrawing] = useState<DrawingType>('pencil')

  useEffect(() => {
    if (editor) {
      editor.shapes.pencil.draw({
        stroke: 'blue',
        strokeWidth: 15
      })
    }
  }, [editor])

  const handleChangeDrawer = (shape: DrawingType) => {
    if (!editor) {
      return
    }

    editor.shapes[activeDrawing].stopDrawing()
    editor.shapes[shape].draw(Drawings[shape].config as any)
    setActiveDrawing(shape)
  }

  return (
    <>
      <div style={{ display: 'flex '}}>
        {Object.entries(Drawings).map(([name, shape]) => (
          <div
            key={shape.title}
            onClick={() => {
              handleChangeDrawer(name as DrawingType)
              close()
            }}
          >
            <img src={shape.image} style={{ width: '30px', height: '30px' }} />
          </div>
        ))}
      </div>
      <div
        ref={ref}
        style={{
          background: '#ccc',
          width: '100vw',
          height: '90vh'
        }}
      />
    </>
  )

};

export const Editor_Hook = {
  mounted() {
    this.unmountComponent = mount(this.el.id, this.opts(), Home);
  },

  destroyed() {
    if (!this.unmountComponent) {
      console.error("Editor unmountComponent not set");
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