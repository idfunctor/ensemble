
import React from "react";

export interface GreeterProps {
  name: string;
}

export const Greeter: React.FC<GreeterProps> = ({ name }: GreeterProps) => {
  return (
    <section className="phx-hero">
      <h1>Welcome to {name} with TypeScript and React!</h1>
    </section>
  );
};
