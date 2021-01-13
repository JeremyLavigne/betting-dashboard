import extendsData from './extends-data';

import { MatchFull } from '../../ts/previousMatch.type';
import { Match, MatchWithRatios } from '../../ts/nextMatch.type';
import arrangeTypes from './helpers/arrangeTypes';

const turnIntoRatio = (newMatches: Array<Match>, oldMatches: Array<MatchFull>): Array<MatchWithRatios> => {
    // Put new matches under same format, for convenience
    // No matter if some data (Goals, corners, etc..) are wrong, because won't be used
    const newMatchesWithArrangedType: Array<MatchFull> = arrangeTypes(newMatches);

    // Add those matches to existing matches - it stays in date order
    const allMatches = oldMatches.concat(newMatchesWithArrangedType);

    // Need old matches to have the whole history and get ratios for new ones
    const transformedMatches = extendsData(allMatches);

    // No need to work with old ones anymore
    const transformedNewMatches = transformedMatches.slice(oldMatches.length);

    const newMatchesWithRatios = [];
    for (let i = 0; i < transformedNewMatches.length; i += 1) {
        const {
            date,
            homeTeam,
            awayTeam,
            homeTeamGameFormPointsOn6,
            awayTeamGameFormPointsOn6,
            homeTeamPowerRating,
            awayTeamPowerRating,
            homeTeamPpsPointsTotal,
            awayTeamPpsPointsTotal,
            homeTeamMatchNumber,
            awayTeamMatchNumber,
            oddH,
            oddD,
            oddA,
        } = transformedNewMatches[i];

        if (Number.isNaN(oddH) || Number.isNaN(oddD) || Number.isNaN(oddA)) {
            break; // Stop the loop when data become unuseful
        }

        const s2 = (homeTeamGameFormPointsOn6 - awayTeamGameFormPointsOn6) / 8;

        const s7 = homeTeamPowerRating - awayTeamPowerRating;

        const s9 =
            homeTeamPpsPointsTotal / (homeTeamMatchNumber - 1) - awayTeamPpsPointsTotal / (awayTeamMatchNumber - 1);

        const newMatchWithRatios = {
            date,
            homeTeam,
            awayTeam,
            s2GameFormRatio: Math.round(s2 * 1000) / 1000,
            s7PowerRatingRatio: Math.round(s7 * 1000) / 1000,
            s9PpsRatio: Math.round(s9 * 1000) / 1000,
            oddH,
            oddD,
            oddA,
        };

        newMatchesWithRatios.push(newMatchWithRatios);
    }

    return newMatchesWithRatios;
};

export default turnIntoRatio;
