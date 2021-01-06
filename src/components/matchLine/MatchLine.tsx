import React from 'react';

import './MatchLine.css';

import { NextMatch } from '../../ts/db_types';

interface MatchLineProps {
    match: NextMatch;
}

const MatchLine: React.FC<MatchLineProps> = ({ match }): JSX.Element => {
    return (
        <div className="match-line">
            <div className="match-line-main">
                <div className="match-line-title">
                    <span className="match-line-date">{match.date.toString().substr(0, 10)}</span>
                </div>
                <div className="match-line-body">
                    <span className="match-line-teams">
                        {match.homeTeam} vs {match.awayTeam}
                    </span>
                    <span className={`match-line-odd ${match.betOn && 'match-line-odd-active'}`}>{match.oddH}</span>
                    <span className="match-line-odd">{match.oddD}</span>
                    <span className="match-line-odd">{match.oddA}</span>
                </div>
            </div>
            {match.betOn && (
                <div className="match-line-secondary">
                    Bet {match.betAmount} kr on {match.homeTeam}
                </div>
            )}
        </div>
    );
};

MatchLine.defaultProps = {
    match: {
        championship: 'PL',
        date: new Date(),
        homeTeam: 'Team 1',
        awayTeam: 'Team 2',
        oddH: 3,
        oddD: 3,
        oddA: 3,
        fairOddH: 3,
        betAmount: 0,
        betOn: false,
    },
};

export default MatchLine;
