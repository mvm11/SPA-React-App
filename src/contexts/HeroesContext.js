import React, {createContext} from 'react';
import initialHeroes from '../consts/initialHeroes';

const HeroesContext = createContext();
const HeroesProvider = ({children}) => {

    const data = {
        heroes: initialHeroes
    }
    return (
        <HeroesContext.Provider value={data}>
            {children}
        </HeroesContext.Provider>
    )
}

export {HeroesProvider}
export default HeroesContext;