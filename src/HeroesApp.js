import React from "react";
import Heroes from "./componentes/Heroes";
import Navbar from "./componentes/Navbar";
import UserContext from "./contexts/UserContext";

export const HeroesApp = () => {
    const user = {
        id: 1,
        name: 'Mateo',
        favoriteHeroes: [1,2,3]
    }
  const data = {user};
  return (
    <div>
      <UserContext.Provider value={data}>
        <Navbar />
        <Heroes />
      </UserContext.Provider>
    </div>
  );
};

export default HeroesApp;
