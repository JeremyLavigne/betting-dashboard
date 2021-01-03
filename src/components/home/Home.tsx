import React from 'react';
import MatchLine from '../matchLine/MatchLine';

import './Home.css';

const Home: React.FC = (): JSX.Element => {
    const nextMatches = [
        {
            homeTeam: 'Team 1',
            awayTeam: 'Team 2',
            date: new Date(),
            oddH: 2,
            oddD: 3,
            oddA: 4,
            betOn: true,
            betAmount: 100,
            s2GameFormRatio: 0,
            s7PowerRatingRatio: 0,
            s9PpsRatio: 0,
            fairOddH: 2,
        },
        {
            homeTeam: 'Team 3',
            awayTeam: 'Team 4',
            date: new Date(),
            oddH: 4,
            oddD: 3,
            oddA: 2,
            betOn: false,
            betAmount: 100,
            s2GameFormRatio: 0,
            s7PowerRatingRatio: 0,
            s9PpsRatio: 0,
            fairOddH: 2,
        },
    ];
    return (
        <div id="home_page">
            <h1>Home Page!</h1>
            <div className="justfortest" style={{ paddingLeft: '10px' }}>
                {nextMatches.map((m) => (
                    <MatchLine key={`${m.homeTeam}-${m.date}`} match={m} />
                ))}
            </div>
        </div>
    );
};

export default Home;
