import React from "react";
import Hero from "./Hero";
import initialHeroes from "../consts/initialHeroes";

export const Heroes = () => {
  return (
    <div className="container">
      <div className="row">
        {initialHeroes.map((hero) => (
          <div className="col-md-4" key={hero.id}>
            <Hero 
            hero={hero}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Heroes;
