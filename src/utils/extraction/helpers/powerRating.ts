/// ==============================================================================
// === Team Power Rating
// ==============================================================================

import { MatchFull, MatchWithGameFormDiff, MatchWithPowerRating } from '../../../ts/app_types';

const powerRating = (
    existingMatch: MatchWithGameFormDiff,
    homeTeamPreviousMatch: MatchFull | Record<string, never>,
    awayTeamPreviousMatch: MatchFull | Record<string, never>,
): MatchWithPowerRating => {
    const newMatch = { ...existingMatch };

    const { homeTeam, awayTeam } = newMatch;

    // Local variables
    let homeTeamPowerRating = 20;
    let awayTeamPowerRating = 20;

    // Diff Match matches ago
    if (homeTeamPreviousMatch.homeTeam === homeTeam) {
        homeTeamPowerRating =
            homeTeamPreviousMatch.homeTeamPowerRating + homeTeamPreviousMatch.homeTeamPowerRatingAdjustment || 20;
    } else {
        homeTeamPowerRating =
            homeTeamPreviousMatch.awayTeamPowerRating + homeTeamPreviousMatch.awayTeamPowerRatingAdjustment || 20;
    }

    if (awayTeamPreviousMatch.homeTeam === awayTeam) {
        awayTeamPowerRating =
            awayTeamPreviousMatch.homeTeamPowerRating + awayTeamPreviousMatch.homeTeamPowerRatingAdjustment || 20;
    } else {
        awayTeamPowerRating =
            awayTeamPreviousMatch.awayTeamPowerRating + awayTeamPreviousMatch.awayTeamPowerRatingAdjustment || 20;
    }

    return {
        ...existingMatch,
        homeTeamPowerRating: Math.round((homeTeamPowerRating + Number.EPSILON) * 1000) / 1000,
        awayTeamPowerRating: Math.round((awayTeamPowerRating + Number.EPSILON) * 1000) / 1000,
    };
};

export default powerRating;