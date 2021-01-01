/// ==============================================================================
// === Arrange type of upcoming matches to fit with our existing functions
// ==============================================================================

import { Match, MatchPlayed } from '../../../ts/app_types';

import teamNameCheck from './teamNameCheck';

const arrangeTypes = (newMatches: Array<Match>): Array<MatchPlayed> => {
    const newMatchesWithArrangedType: Array<MatchPlayed> = [];

    newMatches.forEach((m: Match) => {
        newMatchesWithArrangedType.push({
            Date: m.date,
            HomeTeam: teamNameCheck(m.homeTeam),
            AwayTeam: teamNameCheck(m.awayTeam),
            FTHG: 0,
            FTAG: 0,
            FTR: 'D',
            HS: 0,
            AS: 0,
            HST: 0,
            AST: 0,
            HC: 0,
            AC: 0,
            BbAvH: Number(m.oddH),
            BbAvD: Number(m.oddD),
            BbAvA: Number(m.oddA),
            'BbAv>2.5': 0,
            'BbAv<2.5': 0,
        });
    });

    return newMatchesWithArrangedType;
};

export default arrangeTypes;
