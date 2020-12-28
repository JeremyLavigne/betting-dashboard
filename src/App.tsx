import React from 'react';

import './App.css';

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';

const App: React.FC = (): JSX.Element => {
    console.log('start');

    return (
        <div>
            <Navbar />
            <Home />
        </div>
    );
};

export default App;
