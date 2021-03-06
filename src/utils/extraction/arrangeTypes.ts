/* eslint-disable prefer-destructuring */
import { NextMatch } from '../../ts/nextMatch.type';
import { MatchFull } from '../../ts/previousMatch.type';

// Harmonise type between the two sources / types we use.
// -----------------------------------------------------------------------------------------------
const arrangeTypes = (newMatches: Array<NextMatch>, teamsCheck: Array<Array<string>>): Array<MatchFull> => {
    const newMatchesWithArrangedType: Array<MatchFull> = [];

    newMatches.forEach((m: NextMatch) => {
        // Need to have the same team name - see championshipList.js
        let homeTeamName = m.homeTeam;
        let awayTeamName = m.awayTeam;

        for (let i = 0; i < teamsCheck.length; i += 1) {
            if (homeTeamName === teamsCheck[i][0]) {
                homeTeamName = teamsCheck[i][1];
            }
            if (awayTeamName === teamsCheck[i][0]) {
                awayTeamName = teamsCheck[i][1];
            }
        }

        newMatchesWithArrangedType.push({
            // Original values
            date: m.date,
            homeTeam: homeTeamName,
            awayTeam: awayTeamName,
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
            matchNumber: 1,
        });
    });

    return newMatchesWithArrangedType;
};

export default arrangeTypes;
