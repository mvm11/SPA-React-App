import React, { useState } from "react";
import Heroes from "./componentes/Heroes";
import Navbar from "./componentes/Navbar";
import { HeroesProvider } from "./contexts/HeroesContext";
import { UserProvider } from "./contexts/UserContext";

export const HeroesApp = () => {
  return (
    <div>
      <UserProvider>
        <HeroesProvider>
          <Navbar />
          <Heroes />
        </HeroesProvider>
      </UserProvider>
    </div>
  );
};

export default HeroesApp;
