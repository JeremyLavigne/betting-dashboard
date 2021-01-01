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
    // Received a date like that: 12/09/2020
    const day = oldObject.Date?.substr(0, 2);
    const month = oldObject.Date?.substr(3, 2);
    const year = oldObject.Date?.substr(6, 4);

    // Want a date like that: 09/12/2020
    let dateRightFormat = '';
    if (month === 'ay') {
        // Means we have a date like 'Today ...'
        dateRightFormat = new Date().toString();
    } else if (month === 'or') {
        // Means we have a date like 'Tomorrow ...'
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        dateRightFormat = tomorrow.toString();
    } else {
        dateRightFormat = `${month}/${day}/${year}`;
    }

    return {
        id: `${championship}${season}-${index}`,
        homeTeam: oldObject.HomeTeam,
        awayTeam: oldObject.AwayTeam,
        date: new Date(dateRightFormat),
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
        oddD: oldObject.BbAvD,
        oddA: oldObject.BbAvA,
    };
};

export default renameProperties;
