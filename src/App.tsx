import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './style/App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import ChampionshipPage from './pages/ChampionshipPage';

import championshipList from './utils/championshipList';

const App: React.FC = (): JSX.Element => {
    return (
        <Router>
            <Navbar />
            <Switch>
                {championshipList.map((champ) => (
                    <Route key={champ.path} path={`/${champ.path}`}>
                        <ChampionshipPage champ={champ} />
                    </Route>
                ))}
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
