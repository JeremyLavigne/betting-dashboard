import React from 'react';

import './App.css';

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';

const App: React.FC = (): JSX.Element => {
    const listOfChampionship = ['Premier League', 'Ligue 1', 'Bundesliga', 'Serie A', 'Liga'];

    return (
        <div>
            <Navbar listOfChampionship={listOfChampionship} />
            <Home />
        </div>
    );
};

export default App;
