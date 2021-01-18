import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import ChampionshipPage from './pages/ChampionshipPage';
import Button from './components/Button';

import championshipList from './championshipList';
import nextMatchesApi from './api/nextMatches';
import lastUpdateApi from './api/lastUpdate';

import scrap from './utils/scrap';

import { NextMatch } from './ts/nextMatch.type';

const App: React.FC = (): JSX.Element => {
    const [allMatches, setAllMatches] = useState<Array<NextMatch>>([]);
    const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

    useEffect(() => {
        nextMatchesApi.getAll().then((res) => {
            setAllMatches(res);
        });
        lastUpdateApi.getAll().then((res) => {
            setLastUpdate(res[0].date);
        });
        console.log('here');
    }, []);

    const handleRefresh = async () => {
        const matchesPromises = [];
        for (let i = 0; i < championshipList.length; i += 1) {
            // Delete
            nextMatchesApi.deleteAllByChamp(championshipList[i].id);
            // Fetch
            matchesPromises.push(scrap(championshipList[i]));
        }

        // Wait for it
        const matches = await Promise.all(matchesPromises); // Array<Array<NextMatch>> i.e. one array for each champiponship
        const matchesAll: Array<NextMatch> = []; // Array<NextMatch> i.e. one array with all matches inside

        for (let i = 0; i < matches.length; i += 1) {
            // Store
            nextMatchesApi.createAllForChamp(matches[i]).then(() => matchesAll.concat(matches[i]));
        }

        // Update variable
        setAllMatches(matchesAll);

        // Update last update date -  it is a lot of date
        lastUpdateApi
            .update({
                championship: 'All',
                date: new Date(),
            })
            .then((res) => setLastUpdate(res[0].date));
    };

    return (
        <Router>
            <Navbar />
            <div className="last-update">
                <div>
                    <Button purpose="refresh" color="yellow" onClick={handleRefresh}>
                        Refresh
                    </Button>
                </div>
                <div className="last-update__text">
                    Last update <br /> {lastUpdate.toString().substr(0, 10)} - {lastUpdate.toString().substr(11, 5)}
                </div>
            </div>
            <Switch>
                {championshipList.map((champ) => (
                    <Route key={champ.path} path={`/${champ.path}`}>
                        <ChampionshipPage
                            nextMatches={allMatches.filter((m) => m.championship === champ.id)}
                            name={champ.name}
                        />
                    </Route>
                ))}
                <Route path="/">
                    <Home allMatches={allMatches} />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
