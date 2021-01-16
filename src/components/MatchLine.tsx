import React from 'react';

import { NextMatch } from '../ts/nextMatch.type';

interface MatchLineProps {
    match: NextMatch;
}

// One Line, display all Match details : teams, odds, bet, etc..
// -------------------------------------------------------------------------------------------------------
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
                    <span className={`match-line-odd ${match.betOnH && 'match-line-odd-active'}`}>{match.oddH}</span>
                    <span className={`match-line-odd ${match.betOnD && 'match-line-odd-active'}`}>{match.oddD}</span>
                    <span className={`match-line-odd ${match.betOnA && 'match-line-odd-active'}`}>{match.oddA}</span>
                </div>
            </div>
            {match.betOnH && (
                <div className="match-line-secondary">
                    Bet {match.betAmountH} kr on {match.homeTeam}
                </div>
            )}
            {match.betOnD && <div className="match-line-secondary">Bet {match.betAmountD} kr on Draw</div>}
            {match.betOnA && (
                <div className="match-line-secondary">
                    Bet {match.betAmountA} kr on {match.awayTeam}
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
        fairOddD: 3,
        fairOddA: 3,
        betAmountH: 0,
        betAmountD: 0,
        betAmountA: 0,
        betOnH: false,
        betOnD: false,
        betOnA: false,
    },
};

export default MatchLine;
