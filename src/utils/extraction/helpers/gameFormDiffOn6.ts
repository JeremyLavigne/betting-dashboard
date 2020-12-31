/// ==============================================================================
// === Add All 'Diff on 6 Game form' details to match object
// ==============================================================================

import { MatchFull, MatchWithGameFormDiff, MatchWithGameFormPoints } from '../../../ts/app_types';

const gameFormDiffOn6 = (
    existingMatch: MatchWithGameFormPoints,
    homeTeamPrevious6: MatchFull | Record<string, never>,
    awayTeamPrevious6: MatchFull | Record<string, never>,
): MatchWithGameFormDiff => {
    const { homeTeam, awayTeam, homeTeamGameFormPoints, awayTeamGameFormPoints } = existingMatch;

    // Local variables
    let homeTeamGameFormPointsOn6 = 0;
    let awayTeamGameFormPointsOn6 = 0;

    if (homeTeamPrevious6.homeTeam === homeTeam) {
        homeTeamGameFormPointsOn6 = homeTeamGameFormPoints - homeTeamPrevious6.homeTeamGameFormPoints || 0;
    } else {
        homeTeamGameFormPointsOn6 = homeTeamGameFormPoints - homeTeamPrevious6.awayTeamGameFormPoints || 0;
    }

    if (awayTeamPrevious6.homeTeam === awayTeam) {
        awayTeamGameFormPointsOn6 = awayTeamGameFormPoints - awayTeamPrevious6.homeTeamGameFormPoints || 0;
    } else {
        awayTeamGameFormPointsOn6 = awayTeamGameFormPoints - awayTeamPrevious6.awayTeamGameFormPoints || 0;
    }

    return { ...existingMatch, homeTeamGameFormPointsOn6, awayTeamGameFormPointsOn6 };
};

export default gameFormDiffOn6;
