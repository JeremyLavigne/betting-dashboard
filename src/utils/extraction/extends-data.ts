// ==============================================================================
// === For more info on all of this - see https://github.com/JeremyLavigne/ratios-extractor
// ==============================================================================

import { MatchFull, MatchPlayed } from '../../ts/previousMatch.type';

import renameProperties from './helpers/renameProperties';
import ppsResults from './helpers/ppsResults';
import addMatchNumber from './helpers/addMatchNumber';
import findPreviousMatches from './helpers/findPreviousMatches';
import ppsPoints from './helpers/ppsPoints';
import gameFormPoints from './helpers/gameFormPoints';
import gameFormDiffOn6 from './helpers/gameFormDiffOn6';
import powerRating from './helpers/powerRating';
import powerRatingAdjustment from './helpers/powerRatingAdjustment';

const extendsData = (championship: string, season: string, db: Array<MatchPlayed>): Array<MatchFull> => {
    // Create new db
    const newDb: Array<MatchFull> = [];

    // Fill it using old one
    db.forEach((match: MatchPlayed, i: number) => {
        const matchWithRenamedProps = renameProperties(match, i, championship, season);
        const matchWithPpsResults = ppsResults(matchWithRenamedProps);
        const matchWithMatchNumber = addMatchNumber(matchWithPpsResults, newDb, i);

        const {
            homeTeamPreviousMatch,
            awayTeamPreviousMatch,
            homeTeamPrevious6,
            awayTeamPrevious6,
        } = findPreviousMatches(matchWithMatchNumber, newDb);

        const matchWithPpsPoints = ppsPoints(matchWithMatchNumber, homeTeamPreviousMatch, awayTeamPreviousMatch);
        const matchWithGameFormPoints = gameFormPoints(
            matchWithPpsPoints,
            homeTeamPreviousMatch,
            awayTeamPreviousMatch,
        );

        const matchWithGameFormDiff = gameFormDiffOn6(matchWithGameFormPoints, homeTeamPrevious6, awayTeamPrevious6);

        // Power Rating
        const matchWithPowerRating = powerRating(matchWithGameFormDiff, homeTeamPreviousMatch, awayTeamPreviousMatch);
        const matchFull = powerRatingAdjustment(matchWithPowerRating);

        // Finally save new object into newDB
        newDb.push(matchFull);
    });

    return newDb;
};

export default extendsData;
