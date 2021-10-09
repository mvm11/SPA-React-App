import React from 'react'
import Heroes from './componentes/Heroes';
import Navbar from './componentes/Navbar';

export const HeroesApp = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Heroes></Heroes>
        </div>
    )
}

export default HeroesApp;