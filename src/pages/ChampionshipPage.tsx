import React, { useEffect, useState } from 'react';

import { NextMatch } from '../ts/nextMatch.type';
import { ChampionshipPageProps } from '../ts/championship.type';

import MatchLine from '../components/MatchLine';

import nextMatchesApi from '../api/nextMatches';

import '../style/ChampionshipPage.css';

// One page with all upcoming matches for one championship
// ================================================================================
const ChampionshipPage: React.FC<ChampionshipPageProps> = (props): JSX.Element => {
    const [nextMatches, setNextMatches] = useState<Array<NextMatch>>([]);
    const { champ } = props;
    const { id, name } = champ;

    useEffect(() => {
        nextMatchesApi.getAllByChamp(id).then((res) => {
            setNextMatches(res);
        });
    }, [id]);

    console.log(nextMatches);

    return (
        <div className="championship_page">
            <h1>{name}</h1>
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
    champ: {
        id: '',
        name: '',
        path: '',
        country: '',
        season: '',
        maxOdd: [],
        equationsH: [],
        equationsD: [],
        equationsA: [],
        teamsCheck: [],
    },
};

export default ChampionshipPage;
