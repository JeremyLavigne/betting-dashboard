import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import ChampionshipPage from './pages/ChampionshipPage';
import Button from './components/Button';

import nextMatchesApi from './api/nextMatches';
import lastUpdateApi from './api/lastUpdate';

import scrap from './utils/scrap';
import championshipList from './championshipList';

import { NextMatch } from './ts/nextMatch.type';

// -----------------------------------------------------------------------------------------
const App: React.FC = (): JSX.Element => {
    const [allMatches, setAllMatches] = useState<Array<NextMatch>>([]);
    const [lastUpdate, setLastUpdate] = useState<string>(new Date().toISOString());
    const [refreshStatus, setRefreshStatus] = useState<string>('clear'); // 'should' - 'have to'

    // Get all matches and dispatch them into components
    useEffect(() => {
        nextMatchesApi.getAll().then((res) => {
            setAllMatches(res);
        });
        lastUpdateApi.getAll().then((res) => {
            setLastUpdate(res[0].date);
        });
    }, []);

    // Deal with Refresh status :
    useEffect(() => {
        const in1h = new Date(lastUpdate);
        in1h.setHours(in1h.getHours() + 1);

        const in1day = new Date(lastUpdate);
        in1day.setDate(in1day.getDate() + 1);

        if (in1day < new Date()) {
            setRefreshStatus('have to');
        } else if (in1h < new Date()) {
            setRefreshStatus('should');
        } else {
            setRefreshStatus('clear');
        }
    }, [lastUpdate]);

    // console.log(allMatches);

    // ---------------------- Deal with Refresh Action ---------------------------------
    const handleRefresh = async () => {
        const matchesPromises = [];
        for (let i = 0; i < championshipList.length; i += 1) {
            // Delete
            nextMatchesApi.deleteAllByChamp(championshipList[i].id);
            // & Fetch
            matchesPromises.push(scrap(championshipList[i]));
        }

        // Wait for it
        const matches = await Promise.all(matchesPromises); // Array<Array<NextMatch>> i.e. one array for each champiponship
        const matchesAll: Array<NextMatch> = []; // Array<NextMatch> i.e. one array with all matches inside

        for (let i = 0; i < matches.length; i += 1) {
            // Store
            nextMatchesApi.createAllForChamp(matches[i]).then(() => matchesAll.concat(matches[i]));
        }

        // Update
        setAllMatches(matchesAll);
        setRefreshStatus('clear');
        lastUpdateApi
            .update({
                championship: 'All',
                date: new Date().toISOString(),
            })
            .then(() => {
                setLastUpdate(new Date().toISOString());
                window.location.reload();
            });

        // Force page refresh, waiting for better
        // window.location.reload(); Not a good idea, cause is done before the end of the async actions..
    };

    // ---------------------------------------------------------------------------------------
    return (
        <Router>
            <Navbar allMatches={allMatches.filter((m) => new Date(m.date) >= new Date())} />
            <div className="last-update">
                {refreshStatus !== 'clear' && (
                    <div>
                        <Button
                            purpose="refresh"
                            color={refreshStatus === 'should' ? 'yellow' : 'red'}
                            onClick={handleRefresh}
                        >
                            Refresh
                        </Button>
                    </div>
                )}
                <div className="last-update__text">
                    Last update <br /> {lastUpdate.substr(0, 10)} {lastUpdate.substr(11, 5)}
                </div>
            </div>
            <Switch>
                {championshipList.map((champ) => (
                    <Route key={`/${champ.country}/${champ.path}`} path={`/${champ.country}-${champ.path}`}>
                        <ChampionshipPage
                            nextMatches={allMatches
                                .filter((m) => new Date(m.date) >= new Date())
                                .filter((m) => m.championship === champ.id)}
                            name={champ.name}
                        />
                    </Route>
                ))}
                <Route path="/">
                    <Home allMatches={allMatches.filter((m) => new Date(m.date) >= new Date())} />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
