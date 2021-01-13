/// ==============================================================================
// === Add All 'GameForm Scoring points' details to match object
// ==============================================================================

import { MatchFull } from '../../../ts/previousMatch.type';

const gameFormPoints = (
    existingMatch: MatchFull,
    homeTeamPreviousMatch: MatchFull | Record<string, never>,
    awayTeamPreviousMatch: MatchFull | Record<string, never>,
): MatchFull => {
    const { homeTeam, awayTeam } = existingMatch;

    // Local variables
    let homeTeamGameFormPoints = 0;
    let awayTeamGameFormPoints = 0;

    if (homeTeamPreviousMatch.homeTeam === homeTeam) {
        if (homeTeamPreviousMatch.result === 'H') {
            homeTeamGameFormPoints = homeTeamPreviousMatch.homeTeamGameFormPoints + 3 || 0;
        } else if (homeTeamPreviousMatch.result === 'D') {
            homeTeamGameFormPoints = homeTeamPreviousMatch.homeTeamGameFormPoints + 1 || 0;
        } else {
            homeTeamGameFormPoints = homeTeamPreviousMatch.homeTeamGameFormPoints || 0;
        }
    } else if (homeTeamPreviousMatch.result === 'A') {
        homeTeamGameFormPoints = homeTeamPreviousMatch.awayTeamGameFormPoints + 5 || 0;
    } else if (homeTeamPreviousMatch.result === 'D') {
        homeTeamGameFormPoints = homeTeamPreviousMatch.awayTeamGameFormPoints + 2 || 0;
    } else {
        homeTeamGameFormPoints = homeTeamPreviousMatch.awayTeamGameFormPoints || 0;
    }

    if (awayTeamPreviousMatch.homeTeam === awayTeam) {
        if (awayTeamPreviousMatch.result === 'H') {
            awayTeamGameFormPoints = awayTeamPreviousMatch.homeTeamGameFormPoints + 3 || 0;
        } else if (awayTeamPreviousMatch.result === 'D') {
            awayTeamGameFormPoints = awayTeamPreviousMatch.homeTeamGameFormPoints + 1 || 0;
        } else {
            awayTeamGameFormPoints = awayTeamPreviousMatch.homeTeamGameFormPoints || 0;
        }
    } else if (awayTeamPreviousMatch.result === 'A') {
        awayTeamGameFormPoints = awayTeamPreviousMatch.awayTeamGameFormPoints + 5 || 0;
    } else if (awayTeamPreviousMatch.result === 'D') {
        awayTeamGameFormPoints = awayTeamPreviousMatch.awayTeamGameFormPoints + 2 || 0;
    } else {
        awayTeamGameFormPoints = awayTeamPreviousMatch.awayTeamGameFormPoints || 0;
    }

    return { ...existingMatch, homeTeamGameFormPoints, awayTeamGameFormPoints };
};

export default gameFormPoints;
