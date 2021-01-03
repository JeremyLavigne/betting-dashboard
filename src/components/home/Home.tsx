import React from 'react';

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
        },
    ];
    return (
        <div>
            <h1>Home Page!</h1>
            {nextMatches.map((match) => (
                <li key={`${match.homeTeam}-${match.date.toLocaleDateString()}`}>
                    {match.date.toLocaleDateString()} - {match.homeTeam} vs {match.awayTeam}:{match.oddH}/{match.oddD}/
                    {match.oddA}
                    <br />
                    {match.betOn && `Go for it -> ${match.betAmount}`}
                    <br />
                    <br />
                </li>
            ))}
        </div>
    );
};

export default Home;
