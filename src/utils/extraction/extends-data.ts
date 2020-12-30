// ==============================================================================
// === For more info on all of this - see https://github.com/JeremyLavigne/ratios-extractor
// ==============================================================================

import { MatchPlayed, MatchWithMatchNumber } from '../../ts/app_types';

import renameProperties from './helpers/renameProperties';
import ppsResults from './helpers/ppsResults';
import addMatchNumber from './helpers/addMatchNumber';

const extendsData = (championship: string, season: string, db: Array<MatchPlayed>): Array<MatchWithMatchNumber> => {
    // Create new db
    const newDb: Array<MatchWithMatchNumber> = [];

    // Fill it using old one
    // for (let i = 0; i < db.length; i += 1) {
    db.forEach((match, i) => {
        const matchWithRenamedProps = renameProperties(match, i, championship, season);
        const matchWithPpsResults = ppsResults(matchWithRenamedProps);
        const matchwithMatchNumber = addMatchNumber(matchWithPpsResults, newDb, i);

        // const {
        //     homeTeamPreviousMatch,
        //     awayTeamPreviousMatch,
        //     homeTeamPrevious6,
        //     awayTeamPrevious6,
        // } = findPreviousMatches(newMatch, newDb);

        // // How many matches ...
        // newMatch = howManyMatchesPlayed(newMatch, homeTeamPreviousMatch, awayTeamPreviousMatch);
        // newMatch = howManyMatchesWon(newMatch, homeTeamPreviousMatch, awayTeamPreviousMatch);
        // newMatch = howManyMatchesLost(newMatch, homeTeamPreviousMatch, awayTeamPreviousMatch);

        // // How many goals ...
        // newMatch = howManyGoalsScored(newMatch, homeTeamPreviousMatch, awayTeamPreviousMatch);
        // newMatch = howManyGoalsConceded(newMatch, homeTeamPreviousMatch, awayTeamPreviousMatch);

        // // How many points ...
        // newMatch = officialPoints(newMatch, homeTeamPreviousMatch, awayTeamPreviousMatch);
        // newMatch = ppsPoints(newMatch, homeTeamPreviousMatch, awayTeamPreviousMatch);
        // newMatch = gameFormPoints(newMatch, homeTeamPreviousMatch, awayTeamPreviousMatch);

        // // Difference on 6 matches played
        // newMatch = gameFormDiffOn6(newMatch, homeTeamPrevious6, awayTeamPrevious6);
        // newMatch = diffGoalsOn6(newMatch, homeTeamPrevious6, awayTeamPrevious6);

        // // Power Rating
        // newMatch = powerRating(newMatch, homeTeamPreviousMatch, awayTeamPreviousMatch);
        // newMatch = powerRatingAdjustment(newMatch);

        // Finally save new object into newDB
        newDb.push(matchwithMatchNumber);
    });

    return newDb;
};

export default extendsData;
