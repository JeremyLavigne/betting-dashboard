import React, { useState } from 'react';

import Button from '../button/Button';

import nextM from '../../utils/nextM';

import { Match } from '../../ts/app_types';

const Home: React.FC = (): JSX.Element => {
    const [nextMatches, setNextMatches] = useState<Array<Match>>([]);

    const handleScrap = () => {
        nextM('https://www.betexplorer.com/soccer/england/premier-league/').then((res) => setNextMatches(res));
    };

    return (
        <div>
            <h1>My React and TypeScript App!</h1>
            <div>
                <Button onClick={handleScrap}>Scrap it</Button>
            </div>
            <div>
                {nextMatches.map((match) => (
                    <li key={`${match.homeTeam}-${match.date}`}>
                        {match.date}
                        {match.homeTeam} vs {match.awayTeam}: {match.oddH}/{match.oddD}/{match.oddA}
                    </li>
                ))}
            </div>
        </div>
    );
};

export default Home;
