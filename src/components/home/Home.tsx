import React, { useState } from 'react';

import Button from '../button/Button';

import getNextMatches from '../../utils/scraping/nextM';
import getPreviousMatches from '../../utils/scraping/previousM';
import extendsData from '../../utils/extraction/extends-data';

import { Match } from '../../ts/app_types';

const Home: React.FC = (): JSX.Element => {
    const [nextMatches, setNextMatches] = useState<Array<Match>>([]);
    // const [previousMatches, setPreviousMatches] = useState<Array<MatchWithRenamedProps>>([]);

    const handleScrap = () => {
        getNextMatches('https://www.betexplorer.com/soccer/england/premier-league/').then((res) => setNextMatches(res));
        getPreviousMatches('https://www.football-data.co.uk/mmz4281/2021/E0.csv').then((res) => {
            const transformedData = extendsData('PL', '20192020', res);
            console.log(transformedData[100]);
        });
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
        </div>
    );
};

export default Home;
