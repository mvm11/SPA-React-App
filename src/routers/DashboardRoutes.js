import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroesScreen } from '../components/heroes/HeroesScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { Navbar } from '../components/ui/Navbar'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>
            <div>
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen}></Route>
                    <Route exact path="/heroe/:heroeId" component={HeroesScreen}></Route>
                    <Route exact path="/dc/" component={DcScreen}></Route>
                    <Redirect to="/marvel"></Redirect>
                </Switch>
            </div>
        </>
    )
}
