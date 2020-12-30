/// ==============================================================================
// === Add Match Number to match object
// ==============================================================================

import { MatchWithMatchNumber, MatchWithPpsResults } from '../../../ts/app_types';

const getMatchNumber = (
    existingMatch: MatchWithPpsResults,
    existingDb: Array<MatchWithMatchNumber>,
    index: number,
): MatchWithMatchNumber => {
    const { homeTeam, awayTeam } = existingMatch;

    let homeTeamMatchNumber = 1;
    let awayTeamMatchNumber = 1;
    let foundHomeTeam = false;
    let foundAwayTeam = false;

    for (let j = index - 1; j >= 0; j -= 1) {
        if (!foundHomeTeam && homeTeam === existingDb[j].homeTeam) {
            homeTeamMatchNumber = existingDb[j].homeTeamMatchNumber + 1;
            foundHomeTeam = true;
        }
        if (!foundHomeTeam && homeTeam === existingDb[j].awayTeam) {
            homeTeamMatchNumber = existingDb[j].awayTeamMatchNumber + 1;
            foundHomeTeam = true;
        }
        if (!foundAwayTeam && awayTeam === existingDb[j].homeTeam) {
            awayTeamMatchNumber = existingDb[j].homeTeamMatchNumber + 1;
            foundAwayTeam = true;
        }
        if (!foundAwayTeam && awayTeam === existingDb[j].awayTeam) {
            awayTeamMatchNumber = existingDb[j].awayTeamMatchNumber + 1;
            foundAwayTeam = true;
        }
        if (foundAwayTeam) {
            if (foundHomeTeam) {
                break;
            }
        }
    }

    return { ...existingMatch, homeTeamMatchNumber, awayTeamMatchNumber };
};

export default getMatchNumber;
