import extendsData from './extends-data';

import { MatchFull, PreviousMatch } from '../../ts/previousMatch.type';
import { NextMatch, NextMatchWithRatios } from '../../ts/nextMatch.type';
import arrangeTypes from './arrangeTypes';

// Take all original data, mix it, shake it, ... and return only what we need, i.e. "Matchs with Ratios"
const turnIntoRatio = (
    newMatches: Array<NextMatch>,
    oldMatches: Array<PreviousMatch>,
    teamsCheck: Array<Array<string>>,
): Array<NextMatchWithRatios> => {
    // Put new matches under same format as old ones, for convenience
    // No matter if some data (Goals, corners, etc..) are wrong, because won't be used
    const newMatchesWithArrangedType: Array<MatchFull> = arrangeTypes(newMatches, teamsCheck);

    // Add those matches to existing matches - it stays in date order
    const allMatches = oldMatches.concat(newMatchesWithArrangedType);

    // Need old matches to have the whole history and get ratios for new ones
    const transformedMatches = extendsData(allMatches);

    // No need to carry old ones anymore
    const transformedNewMatches = transformedMatches.slice(oldMatches.length);

    // Calcul ratios for each match remaining.
    const newMatchesWithRatios = [];
    for (let i = 0; i < transformedNewMatches.length; i += 1) {
        const {
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

        // Game Form
        const s2 = (homeTeamGameFormPointsOn6 - awayTeamGameFormPointsOn6) / 8;

        // Power Rating
        const s7 = homeTeamPowerRating - awayTeamPowerRating;

        // PPS
        const s9 =
            homeTeamPpsPointsTotal / (homeTeamMatchNumber - 1) - awayTeamPpsPointsTotal / (awayTeamMatchNumber - 1);

        newMatchesWithRatios.push({
            ...newMatches[i],
            s2GameFormRatio: Math.round(s2 * 1000) / 1000,
            s7PowerRatingRatio: Math.round(s7 * 1000) / 1000,
            s9PpsRatio: Math.round(s9 * 1000) / 1000,
        });
    }

    return newMatchesWithRatios;
};

export default turnIntoRatio;
