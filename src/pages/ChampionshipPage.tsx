import React from 'react';

import { NextMatch } from '../ts/nextMatch.type';

import MatchLine from '../components/MatchLine';

interface ChampionshipPageProps {
    nextMatches: Array<NextMatch>;
    name: string;
}

// One page with all upcoming matches for one championship
// ================================================================================
const ChampionshipPage: React.FC<ChampionshipPageProps> = ({ nextMatches, name }): JSX.Element => {
    return (
        <div className="championship-page">
            <h1>{name}</h1>
            <div className="championship-page__next-matches">
                <h3>Next matches</h3>
                {nextMatches
                    .sort((m1, m2) => new Date(m1.date).getTime() - new Date(m2.date).getTime())
                    .map((m) => (
                        <MatchLine key={`${m.homeTeam}-${m.date}`} match={m} />
                    ))}
            </div>
        </div>
    );
};

ChampionshipPage.defaultProps = {
    nextMatches: [],
    name: '',
};

export default ChampionshipPage;
