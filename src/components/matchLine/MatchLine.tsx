import React from 'react';

import './MatchLine.css';

import { MatchWithBetDetails } from '../../ts/app_types';

interface MatchLineProps {
    match: MatchWithBetDetails;
}

const MatchLine: React.FC<MatchLineProps> = ({ match }): JSX.Element => {
    return (
        <div className="match-line">
            <div className="match-line-date">{match.date.toLocaleDateString()}</div>
            <div>
                {match.homeTeam} vs {match.awayTeam}:<span className="match-line-odd">{match.oddH}</span>-
                <span className="match-line-odd">{match.oddD}</span>-
                <span className="match-line-odd">{match.oddA}</span>
                <span>{match.betOn && ` >> Go for it -> ${match.betAmount}`}</span>
            </div>
        </div>
    );
};

MatchLine.defaultProps = {
    match: {
        date: new Date(),
        homeTeam: 'Team 1',
        awayTeam: 'Team 2',
        s2GameFormRatio: 0,
        s7PowerRatingRatio: 0,
        s9PpsRatio: 0,
        oddH: 3,
        oddD: 3,
        oddA: 3,
        fairOddH: 3,
        betAmount: 0,
        betOn: false,
    },
};

export default MatchLine;