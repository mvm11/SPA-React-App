import React from "react";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export const Hero = ({ hero }) => {
  const { user, toggleFavoriteHeroToUser } = useContext(UserContext);
  const isFavorite = user?.favoriteHeroes?.includes(hero.id);
  return (
    <div className="card m-4">
      <img
        src={hero.imageUrl}
        alt={hero.superhero}
        className="card-img-top"
      ></img>
      <div className="card-body">
        <h4>{hero.superhero}</h4>
        {user?.id &&    

         <button
          className={`btn ${
            isFavorite ? "btn-success" : "btn-outline-primary"
          } `}
          onClick={() => toggleFavoriteHeroToUser(hero.id)}
        >
          favorite
        </button>
        }
        
      </div>
    </div>
  );
};

export default Hero;
