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
            fairOddD: matchesWithBetDetails[i].fairOddD,
            fairOddA: matchesWithBetDetails[i].fairOddA,
            betAmountH: matchesWithBetDetails[i].betAmountH,
            betAmountD: matchesWithBetDetails[i].betAmountD,
            betAmountA: matchesWithBetDetails[i].betAmountA,
            betOnH: matchesWithBetDetails[i].betOnH,
            betOnD: matchesWithBetDetails[i].betOnD,
            betOnA: matchesWithBetDetails[i].betOnA,
        });
    }

    return nextMatches;
};

export default keepOnlyNecessary;
