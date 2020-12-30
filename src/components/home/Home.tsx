import React, { useState } from 'react';

import Button from '../button/Button';

import nextM from '../../utils/nextM';
import previousM from '../../utils/previousM';

import { Match, MatchPlayed } from '../../ts/app_types';

const Home: React.FC = (): JSX.Element => {
    const [nextMatches, setNextMatches] = useState<Array<Match>>([]);
    const [previousMatches, setPreviousMatches] = useState<Array<MatchPlayed>>([]);

    const handleScrap = () => {
        nextM('https://www.betexplorer.com/soccer/england/premier-league/').then((res) => setNextMatches(res));
        previousM('https://www.football-data.co.uk/mmz4281/2021/E0.csv').then((res) => setPreviousMatches(res));
    };

    return (
        <div>
            <h1>Home Page!</h1>
            <div>
                <Button onClick={handleScrap}>Scrap it</Button>
            </div>
            <div>
                <h3>Next matches</h3>
                {nextMatches.map((match) => (
                    <li key={`${match.homeTeam}-${match.date}`}>
                        {match.date} - {match.homeTeam} vs {match.awayTeam}: {match.oddH}/{match.oddD}/{match.oddA}
                    </li>
                ))}
            </div>
            <div>
                <h3>Previous Matches</h3>
                {previousMatches.map((match) => (
                    <li key={`${match.HomeTeam}-${match.Date}`}>
                        {match.Date} - {match.HomeTeam} vs {match.AwayTeam}: {match.FTHG} - {match.FTAG}
                    </li>
                ))}
            </div>
        </div>
    );
};

export default Home;
