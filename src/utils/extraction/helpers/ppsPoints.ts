/// ==============================================================================
// === Add All 'PPS Scoring points' details to match object
// ==============================================================================

import { MatchFull, MatchWithMatchNumber, MatchWithPpsPoints } from '../../../ts/app_types';

const ppsPoints = (
    existingMatch: MatchWithMatchNumber,
    homeTeamPreviousMatch: MatchFull | Record<string, never>,
    awayTeamPreviousMatch: MatchFull | Record<string, never>,
): MatchWithPpsPoints => {
    const { homeTeam, awayTeam } = existingMatch;

    // Local variables
    let homeTeamPpsPointsTotal = 0;
    let awayTeamPpsPointsTotal = 0;

    if (homeTeamPreviousMatch.homeTeam === homeTeam) {
        if (homeTeamPreviousMatch.ppsResult === 'H') {
            homeTeamPpsPointsTotal = homeTeamPreviousMatch.homeTeamPpsPointsTotal + 3 || 0;
        } else if (homeTeamPreviousMatch.ppsResult === 'D') {
            homeTeamPpsPointsTotal = homeTeamPreviousMatch.homeTeamPpsPointsTotal + 1 || 0;
        } else {
            homeTeamPpsPointsTotal = homeTeamPreviousMatch.homeTeamPpsPointsTotal || 0;
        }
    } else if (homeTeamPreviousMatch.ppsResult === 'A') {
        homeTeamPpsPointsTotal = homeTeamPreviousMatch.awayTeamPpsPointsTotal + 5 || 0;
    } else if (homeTeamPreviousMatch.ppsResult === 'D') {
        homeTeamPpsPointsTotal = homeTeamPreviousMatch.awayTeamPpsPointsTotal + 2 || 0;
    } else {
        homeTeamPpsPointsTotal = homeTeamPreviousMatch.awayTeamPpsPointsTotal || 0;
    }

    if (awayTeamPreviousMatch.homeTeam === awayTeam) {
        if (awayTeamPreviousMatch.ppsResult === 'H') {
            awayTeamPpsPointsTotal = awayTeamPreviousMatch.homeTeamPpsPointsTotal + 3 || 0;
        } else if (awayTeamPreviousMatch.ppsResult === 'D') {
            awayTeamPpsPointsTotal = awayTeamPreviousMatch.homeTeamPpsPointsTotal + 1 || 0;
        } else {
            awayTeamPpsPointsTotal = awayTeamPreviousMatch.homeTeamPpsPointsTotal || 0;
        }
    } else if (awayTeamPreviousMatch.ppsResult === 'A') {
        awayTeamPpsPointsTotal = awayTeamPreviousMatch.awayTeamPpsPointsTotal + 5 || 0;
    } else if (awayTeamPreviousMatch.ppsResult === 'D') {
        awayTeamPpsPointsTotal = awayTeamPreviousMatch.awayTeamPpsPointsTotal + 2 || 0;
    } else {
        awayTeamPpsPointsTotal = awayTeamPreviousMatch.awayTeamPpsPointsTotal || 0;
    }

    return { ...existingMatch, homeTeamPpsPointsTotal, awayTeamPpsPointsTotal };
};

export default ppsPoints;
