import React from "react";
import Hero from "./Hero";
import { useContext } from "react";
import HeroesContext from "../contexts/HeroesContext";

export const Heroes = () => {

    const {heroes} = useContext(HeroesContext);
  return (
    <div className="container">
      <div className="row">
        {heroes.map((hero) => (
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
