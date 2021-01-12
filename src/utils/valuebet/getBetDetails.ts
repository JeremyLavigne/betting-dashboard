import { MatchWithBetDetails, MatchWithFairOdd } from '../../ts/nextMatch.type';

const getBenefices = (
    matchesWithFairOdd: Array<MatchWithFairOdd>,
    capital: number,
    maxOdd: Array<number>,
): Array<MatchWithBetDetails> => {
    const matchWithBetDetails = [];

    const maxOddH = maxOdd[0];
    const maxOddD = maxOdd[1];
    const maxOddA = maxOdd[2];

    for (let i = 0; i < matchesWithFairOdd.length; i += 1) {
        let betAmountH = 0;
        let betAmountD = 0;
        let betAmountA = 0;
        let betOnH = false;
        let betOnD = false;
        let betOnA = false;
        const { fairOddH, fairOddD, fairOddA, oddH, oddD, oddA } = matchesWithFairOdd[i];

        if (oddH > fairOddH && oddH < maxOddH) {
            betOnH = true;
            const edge = oddH / fairOddH;
            const percBank = (edge - 1) / (oddH - 1);
            betAmountH = Math.round(capital * percBank * 100) / 100;
        }

        if (oddD > fairOddD && oddD < maxOddD) {
            betOnD = true;
            const edge = oddD / fairOddD;
            const percBank = (edge - 1) / (oddD - 1);
            betAmountD = Math.round(capital * percBank * 100) / 100;
        }

        if (oddA > fairOddA && oddA < maxOddA) {
            betOnA = true;
            const edge = oddA / fairOddA;
            const percBank = (edge - 1) / (oddA - 1);
            betAmountA = Math.round(capital * percBank * 100) / 100;
        }

        matchWithBetDetails.push({
            ...matchesWithFairOdd[i],
            betOnH,
            betAmountH,
            betOnD,
            betAmountD,
            betOnA,
            betAmountA,
        });
    }

    return matchWithBetDetails;
};

export default getBenefices;
