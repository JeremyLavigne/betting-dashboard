import { MatchPlayed, MatchWithRenamedProps } from '../../ts/app_types';

import renameProperties from './helpers/renameProperties';

const extendsData = (championship: string, season: string, db: Array<MatchPlayed>): Array<MatchWithRenamedProps> => {
    // Create new db
    const newDb: Array<MatchWithRenamedProps> = [];

    // Fill it using old one
    // for (let i = 0; i < db.length; i += 1) {
    db.forEach((match, i) => {
        const newMatch = renameProperties(match, i, championship, season);
        // newMatch = ppsResults(newMatch);
        // newMatch = addMatchNumber(newMatch, newDb, i);

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
        newDb.push(newMatch);
    });

    return newDb;
};

export default extendsData;
