// ==============================================================================
// === Calculate Adjustment using result of the match
// ==============================================================================

import { MatchFull } from '../../../ts/previousMatch.type';

const powerRatingAdjustment = (originalMatch: MatchFull): MatchFull => {
    const { homeTeamPowerRating, awayTeamPowerRating, homeTeamGoalsFor, awayTeamGoalsFor } = originalMatch;

    let adjuster = 0;
    if (typeof homeTeamPowerRating !== 'undefined') {
        const prediction = homeTeamPowerRating - awayTeamPowerRating + 0.2;
        const marginOfVictory = homeTeamGoalsFor - awayTeamGoalsFor;
        const homeMarginMinusPrediction = marginOfVictory - prediction;
        adjuster = Math.round((homeMarginMinusPrediction * 0.1 + Number.EPSILON) * 1000) / 1000;
    }

    const homeTeamPowerRatingAdjustment = adjuster;
    const awayTeamPowerRatingAdjustment = -adjuster;

    return { ...originalMatch, homeTeamPowerRatingAdjustment, awayTeamPowerRatingAdjustment };
};

export default powerRatingAdjustment;
