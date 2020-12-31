// ==============================================================================
// === Rename existing properties to more exploitable names
// ==============================================================================

import { MatchPlayed, MatchWithRenamedProps } from '../../../ts/app_types';

const renameProperties = (
    oldObject: MatchPlayed,
    index: number,
    championship: string,
    season: string,
): MatchWithRenamedProps => {
    return {
        id: `${championship}${season}-${index}`,
        homeTeam: oldObject.HomeTeam,
        awayTeam: oldObject.AwayTeam,
        date: new Date(oldObject.Date),
        homeTeamGoalsFor: oldObject.FTHG,
        awayTeamGoalsFor: oldObject.FTAG,
        homeTeamGoalsAgainst: oldObject.FTAG,
        awayTeamGoalsAgainst: oldObject.FTHG,
        result: oldObject.FTR,
        homeTeamShotsOnTarget: oldObject.HST,
        awayTeamShotsOnTarget: oldObject.AST,
        homeTeamCorner: oldObject.HC,
        awayTeamCorner: oldObject.AC,
        homeTeamShotsOff: oldObject.HS - oldObject.HST,
        awayTeamShotsOff: oldObject.AS - oldObject.AST,
        oddH: oldObject.BbAvH,
    };
};

export default renameProperties;
