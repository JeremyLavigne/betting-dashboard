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
            <div className="match-line__main">
                <div className="match-line__title">
                    <span className="match-line_date">{match.date.substr(0, 10)}</span>
                </div>
                <div className="match-line__body">
                    <span className="match-line__teams">
                        {match.homeTeam} vs {match.awayTeam}
                    </span>
                    <span className={`match-line__odd ${match.betOnH && 'match-line__odd--active'}`}>{match.oddH}</span>
                    <span className={`match-line__odd ${match.betOnD && 'match-line__odd--active'}`}>{match.oddD}</span>
                    <span className={`match-line__odd ${match.betOnA && 'match-line__odd--active'}`}>{match.oddA}</span>
                </div>
            </div>
            {match.betOnH && (
                <div className="match-line__secondary">
                    Bet <span className="match-line__secondary--strong">{match.betAmountH}</span> kr on
                    <span className="match-line__secondary--strong">{match.homeTeam}</span>
                </div>
            )}
            {match.betOnD && (
                <div className="match-line__secondary">
                    Bet <span className="match-line__secondary--strong">{match.betAmountD}</span> kr on
                    <span className="match-line__secondary--strong">Draw</span>
                </div>
            )}
            {match.betOnA && (
                <div className="match-line__secondary">
                    Bet <span className="match-line__secondary--strong">{match.betAmountA}</span> kr on
                    <span className="match-line__secondary--strong">{match.awayTeam}</span>
                </div>
            )}
        </div>
    );
};

MatchLine.defaultProps = {
    match: {
        championship: 'PL',
        date: new Date().toISOString(),
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
        matchNumber: 1,
    },
};

export default MatchLine;
