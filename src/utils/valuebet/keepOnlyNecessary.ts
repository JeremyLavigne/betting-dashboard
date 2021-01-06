import { NextMatch } from '../../ts/db_types';
import { MatchWithBetDetails } from '../../ts/app_types';

const keepOnlyNecessary = (
    matchesWithBetDetails: Array<MatchWithBetDetails>,
    championship: string,
): Array<NextMatch> => {
    const nextMatches = [];

    for (let i = 0; i < matchesWithBetDetails.length; i += 1) {
        nextMatches.push({
            championship,
            date: matchesWithBetDetails[i].date,
            homeTeam: matchesWithBetDetails[i].homeTeam,
            awayTeam: matchesWithBetDetails[i].awayTeam,
            oddH: matchesWithBetDetails[i].oddH,
            oddD: matchesWithBetDetails[i].oddD,
            oddA: matchesWithBetDetails[i].oddA,
            fairOddH: matchesWithBetDetails[i].fairOddH,
            betAmount: matchesWithBetDetails[i].betAmount,
            betOn: matchesWithBetDetails[i].betOn,
        });
    }

    return nextMatches;
};

export default keepOnlyNecessary;
