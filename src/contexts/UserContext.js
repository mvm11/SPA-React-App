import React, { createContext, useState } from "react";

export const UserContext = createContext();

const initialUser = {
  id: 1,
  name: "Mateo",
  favoriteHeroes: [1,2],
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);

  const login = () => {
    setUser(initialUser);
  };

  const logout = () => {
    setUser(null);
  };

  const toggleFavoriteHeroToUser = (heroId) =>{
    const isFavorite = user.favoriteHeroes.includes(heroId);
    const favoriteHeroes = isFavorite
    ? user.favoriteHeroes.filter(favHeroId => favHeroId !== heroId)
    : [...user.favoriteHeroes, heroId]
      setUser({
          ...user,
          favoriteHeroes
      })
  }

  const data = { user, login, logout, toggleFavoriteHeroToUser  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };
export default UserContext;
