import React from "react";

export const Hero = ({ hero }) => {
  const isFavorite = false;
  return (
    <div className="card m-4">
      <img
        src={hero.imageUrl}
        alt={hero.superhero}
        className="card-img-top"
      ></img>
      <div className="card-body">
        <h4>{hero.superhero}</h4>
        <button
          className={`btn ${
            isFavorite ? "btn-success" : "btn-outline-primary"
          } `}
        >
          favorite
        </button>
      </div>
      <h1>Hero</h1>
    </div>
  );
};

export default Hero;
