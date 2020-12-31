// ==============================================================================
// === Add one propery -> ppsResult (e.g. match result using PPS way)
// ==============================================================================

import { MatchWithPpsResults, MatchWithRenamedProps } from '../../../ts/app_types';

const ppsResults = (originalMatch: MatchWithRenamedProps): MatchWithPpsResults => {
    const {
        homeTeamCorner,
        awayTeamCorner,
        homeTeamShotsOnTarget,
        awayTeamShotsOnTarget,
        homeTeamShotsOff,
        awayTeamShotsOff,
        result,
    } = originalMatch;

    const homeTeamPpsScore =
        Math.round((homeTeamShotsOnTarget * 2 + homeTeamShotsOff + homeTeamCorner) / 10) + (result === 'H' ? 1 : 0);
    const awayTeamPpsScore =
        Math.round((awayTeamShotsOnTarget * 2 + awayTeamShotsOff + awayTeamCorner) / 10) + (result === 'A' ? 1 : 0);

    let ppsResult = '';

    if (homeTeamPpsScore > awayTeamPpsScore) {
        ppsResult = 'H';
    }
    if (homeTeamPpsScore < awayTeamPpsScore) {
        ppsResult = 'A';
    }
    if (homeTeamPpsScore === awayTeamPpsScore) {
        ppsResult = 'D';
    }

    return { ...originalMatch, ppsResult };
};

export default ppsResults;
