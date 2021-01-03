import { MatchWithBetDetails, MatchWithFairOdd } from '../../ts/app_types';

const getBenefices = (
    matchesWithFairOdd: Array<MatchWithFairOdd>,
    capital: number,
    maxOdd: number,
): Array<MatchWithBetDetails> => {
    const matchWithBetDetails = [];

    for (let i = 0; i < matchesWithFairOdd.length; i += 1) {
        let betAmount = 0;
        let betOn = false;
        const fairOdd = matchesWithFairOdd[i].fairOddH;
        const trueOdd = matchesWithFairOdd[i].oddH;

        if (trueOdd > fairOdd && trueOdd < maxOdd) {
            betOn = true;
            const edge = trueOdd / fairOdd;
            const percBank = (edge - 1) / (trueOdd - 1);
            betAmount = Math.round(capital * percBank * 100) / 100;
        }

        matchWithBetDetails.push({ ...matchesWithFairOdd[i], betOn, betAmount });
    }

    return matchWithBetDetails;
};

export default getBenefices;
