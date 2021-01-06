import React, { useState } from 'react';

import { NextMatch } from '../../ts/db_types';
import { ChampionshipPageProps } from '../../ts/cpnt_types';

import MatchLine from '../matchLine/MatchLine';
import Button from '../button/Button';

import scrap from '../../utils/scrap';

import './ChampionshipPage.css';

const ChampionshipPage: React.FC<ChampionshipPageProps> = (props): JSX.Element => {
    const [nextMatches, setNextMatches] = useState<Array<NextMatch>>([]);
    const { idIndicator } = props;

    const handleRefresh = async () => {
        const matches = await scrap(props);
        setNextMatches(matches);
    };

    console.log(nextMatches);

    return (
        <div className="championship_page">
            <h1>{idIndicator[2]}</h1>
            <Button onClick={handleRefresh}>Refresh</Button>
            <div className="championship_next_matches">
                <h3>Next matches</h3>
                {nextMatches.map((m) => (
                    <MatchLine key={`${m.homeTeam}-${m.date}`} match={m} />
                ))}
            </div>
        </div>
    );
};

ChampionshipPage.defaultProps = {
    urlForNewMatches: 'https://www.betexplorer.com/soccer/england/premier-league/',
    urlForOldMatches: 'https://www.football-data.co.uk/mmz4281/2021/E0.csv',
    idIndicator: ['PL', '20192020'],
    capital: 100,
    maxOdd: 3,
};

export default ChampionshipPage;
