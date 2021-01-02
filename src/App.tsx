import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import ChampionshipPage from './components/championshipPage/ChampionshipPage';

const App: React.FC = (): JSX.Element => {
    const listOfChampionship = ['Premier League', 'Ligue 1', 'Bundesliga', 'Serie A', 'Liga'];

    return (
        <Router>
            <Navbar listOfChampionship={listOfChampionship} />
            <Switch>
                <Route path="/champ">
                    <ChampionshipPage test="hello" />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
