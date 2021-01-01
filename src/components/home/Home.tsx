import React, { useState } from 'react';

import Button from '../button/Button';

import getNextMatches from '../../utils/scraping/nextM';
import getPreviousMatches from '../../utils/scraping/previousM';
import turnIntoRatio from '../../utils/extraction/turn-into-ratios';

import { MatchWithRatios } from '../../ts/app_types';

const Home: React.FC = (): JSX.Element => {
    const [nextMatches, setNextMatches] = useState<Array<MatchWithRatios>>([]);
    const urlForNewMatches = 'https://www.betexplorer.com/soccer/england/premier-league/';
    const urlForOldMatches = 'https://www.football-data.co.uk/mmz4281/2021/E0.csv';
    const idIndicator = ['PL', '20192020'];

    const handleScrap = () => {
        getPreviousMatches(urlForOldMatches).then((oldM) => {
            getNextMatches(urlForNewMatches).then((newM) => {
                const newMatchesWithRatios = turnIntoRatio(newM, oldM, idIndicator);
                setNextMatches(newMatchesWithRatios);
            });
        });
    };

    console.log(nextMatches);

    return (
        <div>
            <h1>Home Page!</h1>
            <div>
                <Button onClick={handleScrap}>Scrap it</Button>
            </div>
            <div>
                <h3>Next matches</h3>
                {nextMatches.map((match) => (
                    <li key={`${match.homeTeam}-${match.date.toLocaleDateString()}`}>
                        {match.date.toLocaleDateString()} - {match.homeTeam} vs {match.awayTeam}:{match.oddH}/
                        {match.oddD}/{match.oddA}
                    </li>
                ))}
            </div>
        </div>
    );
};

export default Home;
