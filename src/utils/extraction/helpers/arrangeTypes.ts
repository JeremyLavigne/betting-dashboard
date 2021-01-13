/// ==============================================================================
// === Arrange type of upcoming matches to fit with our existing functions
// ==============================================================================

import { NextMatch } from '../../../ts/nextMatch.type';
import { MatchFull } from '../../../ts/previousMatch.type';

import teamNameCheck from './teamNameCheck';

const arrangeTypes = (newMatches: Array<NextMatch>): Array<MatchFull> => {
    const newMatchesWithArrangedType: Array<MatchFull> = [];

    newMatches.forEach((m: NextMatch) => {
        newMatchesWithArrangedType.push({
            // Original values
            date: m.date,
            homeTeam: teamNameCheck(m.homeTeam),
            awayTeam: teamNameCheck(m.awayTeam),
            oddH: Number(m.oddH),
            oddD: Number(m.oddD),
            oddA: Number(m.oddA),
            // Default value for the rest
            homeTeamGoalsFor: 0,
            awayTeamGoalsFor: 0,
            homeTeamGoalsAgainst: 0,
            awayTeamGoalsAgainst: 0,
            result: 'D',
            homeTeamShotsOff: 0,
            awayTeamShotsOff: 0,
            homeTeamShotsOnTarget: 0,
            awayTeamShotsOnTarget: 0,
            homeTeamCorner: 0,
            awayTeamCorner: 0,
            ppsResult: 'D',
            homeTeamMatchNumber: 1,
            awayTeamMatchNumber: 1,
            homeTeamPpsPointsTotal: 0,
            awayTeamPpsPointsTotal: 0,
            homeTeamGameFormPoints: 0,
            awayTeamGameFormPoints: 0,
            homeTeamGameFormPointsOn6: 0,
            awayTeamGameFormPointsOn6: 0,
            homeTeamPowerRating: 0,
            awayTeamPowerRating: 0,
            homeTeamPowerRatingAdjustment: 0,
            awayTeamPowerRatingAdjustment: 0,
        });
    });

    return newMatchesWithArrangedType;
};

export default arrangeTypes;
