import React from "react";


export const Hero = ({hero}) => {


  return (
    <div className="card">
      <img
        src={hero.imageUrl}
        alt={hero.superhero}
        className="card-img-top"
      ></img>
      <div className="card-body">
          <h4>{hero.superhero}</h4>
          <button className="btn btn-outline-primary">
              favorite 
          </button>
      </div>
      <h1>Hero</h1>
    </div>
  );
};

export default Hero;
