import React, { useState } from "react";
import Heroes from "./componentes/Heroes";
import Navbar from "./componentes/Navbar";
import { UserProvider } from "./contexts/UserContext";

export const HeroesApp = () => {     
  return (
    <div>
      <UserProvider>
        <Navbar />
        <Heroes />
      </UserProvider>
    </div>
  );
};

export default HeroesApp;
