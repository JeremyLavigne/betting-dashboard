import React, { useState, useEffect } from 'react';

import Button from '../components/Button';

import championshipList from '../championshipList';
import nextMatchesApi from '../api/nextMatches';

import scrap from '../utils/scrap';

import '../style/Home.css';
import { NextMatch } from '../ts/nextMatch.type';
import lastUpdateApi from '../api/lastUpdate';

const Home: React.FC = (): JSX.Element => {
    const [allMatches, setAllMatches] = useState<Array<NextMatch>>([]);
    const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

    useEffect(() => {
        nextMatchesApi.getAll().then((res) => {
            setAllMatches(res);
        });
        lastUpdateApi.getAll().then((res) => {
            setLastUpdate(res[0].date);
        });
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
        <div id="home_page">
            <h1>Home</h1>
            <div>
                Currently : <br />
                <ul>
                    <li>{allMatches.length} matches are going to be played</li>
                    <li>{allMatches.filter((m) => m.betOnA || m.betOnD || m.betOnH).length} values found</li>
                </ul>
            </div>
            <div>
                <Button purpose="refresh" color="yellow" onClick={handleRefresh}>
                    Refresh
                </Button>
                <span className="last_update">
                    Last update : {lastUpdate.toString().substr(0, 10)} - {lastUpdate.toString().substr(11, 5)}
                </span>
            </div>
            <div className="home_page_text">
                <h3>About</h3>
                <p>
                    If you landed here, it probably means you clone the repo on Github, so, let´s say you deserve a
                    little explanation.
                </p>
                <p>
                    I like to think that it is possible to bet on football using a magic formula, based on statistics
                    and maths. I searched this formula during a long time, for leasure more than for money.
                </p>
                <p>
                    This webpage was made for personnal use, the concept is to open it every morning, see who is playing
                    and where I should bet. Everything behind has been thought, prepared, considered, tested, etc. Only
                    thing to do is follow the app and bet.
                </p>
                <p>
                    The other purpose is to code and apply coding skills, this app is made with React, Typescript,
                    Webpack.
                </p>
                <p>It is version 1.0.0, please do not expect too much for now :-)</p>
            </div>
        </div>
    );
};

export default Home;
