/// ==============================================================================
// === Arrange type of upcoming matches to fit with our existing functions
// ==============================================================================

import { Match } from '../../../ts/nextMatch.type';
import { MatchFull } from '../../../ts/previousMatch.type';

import teamNameCheck from './teamNameCheck';

const arrangeTypes = (newMatches: Array<Match>): Array<MatchFull> => {
    const newMatchesWithArrangedType: Array<MatchFull> = [];

    newMatches.forEach((m: Match) => {
        // Received a date like that: 12/09/2020 or 12.09 18:00 or 'Today ..' or 'Tomorrow ...'
        const day = m.date?.substr(0, 2);
        const month = m.date?.substr(3, 2);
        const year = m.date?.substr(6, 4);

        // Want a date like that: 09/12/2020
        let dateRightFormat = '';
        if (month === 'ay') {
            // Means we have a date like 'Today ...'
            dateRightFormat = new Date().toString();
        } else if (month === 'or') {
            // Means we have a date like 'Tomorrow ...'
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            dateRightFormat = tomorrow.toString();
        } else if (year?.includes(':')) {
            dateRightFormat = `${month}/${day}/${year}`;
        } else {
            dateRightFormat = `${month}/${day}/${new Date().getFullYear()}`;
        }

        newMatchesWithArrangedType.push({
            // Original values
            date: new Date(dateRightFormat),
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
