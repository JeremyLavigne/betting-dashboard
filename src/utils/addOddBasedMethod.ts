import { NextMatch } from '../ts/nextMatch.type';

// Finally, when there is a value bet ( bookmaker odd > fair odd ), set up a bet. Use Kelly Criterion
const addOddBasedMethod = (
    matchesWithBetDetails: Array<NextMatch>,
    fullSeason: Array<Array<number>>,
    firstHalf: Array<Array<number>>,
    secondHalf: Array<Array<number>>,
    firstQuarter: Array<Array<number>>,
    secondQuarter: Array<Array<number>>,
    thirdQuarter: Array<Array<number>>,
    lastQuarter: Array<Array<number>>,
    capital: number,
    numberOfMatchSeason: number,
): Array<NextMatch> => {
    const matchesFull = [];
    const edge = 1.1; // Arbitrary edge

    for (let i = 0; i < matchesWithBetDetails.length; i += 1) {
        const { oddH, oddD, oddA, matchNumber } = matchesWithBetDetails[i];

        const amountH = Math.round(((capital * (edge - 1)) / (oddH - 1)) * 100) / 100;
        const amountD = Math.round(((capital * (edge - 1)) / (oddD - 1)) * 100) / 100;
        const amountA = Math.round(((capital * (edge - 1)) / (oddA - 1)) * 100) / 100;

        if (fullSeason[0].length > 0) {
            if (oddH > fullSeason[0][0] && oddH < fullSeason[0][1]) {
                matchesWithBetDetails[i].betOnH = true;
                matchesWithBetDetails[i].betAmountH += amountH;
            }
        }
        if (fullSeason[1].length > 0) {
            if (oddD > fullSeason[1][0] && oddD < fullSeason[1][1]) {
                matchesWithBetDetails[i].betOnD = true;
                matchesWithBetDetails[i].betAmountD += amountD;
            }
        }
        if (fullSeason[2].length > 0) {
            if (oddA > fullSeason[2][0] && oddA < fullSeason[2][1]) {
                matchesWithBetDetails[i].betOnA = true;
                matchesWithBetDetails[i].betAmountA += amountA;
            }
        }

        // Half
        if (matchNumber < numberOfMatchSeason / 2) {
            if (firstHalf[0].length > 0) {
                if (oddH > firstHalf[0][0] && oddH < firstHalf[0][1]) {
                    matchesWithBetDetails[i].betOnH = true;
                    matchesWithBetDetails[i].betAmountH += amountH;
                }
            }
            if (firstHalf[1].length > 0) {
                if (oddD > firstHalf[1][0] && oddD < firstHalf[1][1]) {
                    matchesWithBetDetails[i].betOnD = true;
                    matchesWithBetDetails[i].betAmountD += amountD;
                }
            }
            if (firstHalf[2].length > 0) {
                if (oddA > firstHalf[2][0] && oddA < firstHalf[2][1]) {
                    matchesWithBetDetails[i].betOnA = true;
                    matchesWithBetDetails[i].betAmountA += amountA;
                }
            }
        } else {
            if (secondHalf[0].length > 0) {
                if (oddH > secondHalf[0][0] && oddH < secondHalf[0][1]) {
                    matchesWithBetDetails[i].betOnH = true;
                    matchesWithBetDetails[i].betAmountH += amountH;
                }
            }
            if (secondHalf[1].length > 0) {
                if (oddD > secondHalf[1][0] && oddD < secondHalf[1][1]) {
                    matchesWithBetDetails[i].betOnD = true;
                    matchesWithBetDetails[i].betAmountD += amountD;
                }
            }
            if (secondHalf[2].length > 0) {
                if (oddA > secondHalf[2][0] && oddA < secondHalf[2][1]) {
                    matchesWithBetDetails[i].betOnA = true;
                    matchesWithBetDetails[i].betAmountA += amountA;
                }
            }
        }

        // Quarter
        if (matchNumber < numberOfMatchSeason / 4) {
            if (firstQuarter[0].length > 0) {
                if (oddH > firstQuarter[0][0] && oddH < firstQuarter[0][1]) {
                    matchesWithBetDetails[i].betOnH = true;
                    matchesWithBetDetails[i].betAmountH += amountH;
                }
            }
            if (firstQuarter[1].length > 0) {
                if (oddD > firstQuarter[1][0] && oddD < firstQuarter[1][1]) {
                    matchesWithBetDetails[i].betOnD = true;
                    matchesWithBetDetails[i].betAmountD += amountD;
                }
            }
            if (firstQuarter[2].length > 0) {
                if (oddA > firstQuarter[2][0] && oddA < firstQuarter[2][1]) {
                    matchesWithBetDetails[i].betOnA = true;
                    matchesWithBetDetails[i].betAmountA += amountA;
                }
            }
        } else if (matchNumber < numberOfMatchSeason / 2) {
            if (secondQuarter[0].length > 0) {
                if (oddH > secondQuarter[0][0] && oddH < secondQuarter[0][1]) {
                    matchesWithBetDetails[i].betOnH = true;
                    matchesWithBetDetails[i].betAmountH += amountH;
                }
            }
            if (secondQuarter[1].length > 0) {
                if (oddD > secondQuarter[1][0] && oddD < secondQuarter[1][1]) {
                    matchesWithBetDetails[i].betOnD = true;
                    matchesWithBetDetails[i].betAmountD += amountD;
                }
            }
            if (secondQuarter[2].length > 0) {
                if (oddA > secondQuarter[2][0] && oddA < secondQuarter[2][1]) {
                    matchesWithBetDetails[i].betOnA = true;
                    matchesWithBetDetails[i].betAmountA += amountA;
                }
            }
        } else if (matchNumber < (numberOfMatchSeason * 3) / 4) {
            if (thirdQuarter[0].length > 0) {
                if (oddH > thirdQuarter[0][0] && oddH < thirdQuarter[0][1]) {
                    matchesWithBetDetails[i].betOnH = true;
                    matchesWithBetDetails[i].betAmountH += amountH;
                }
            }
            if (thirdQuarter[1].length > 0) {
                if (oddD > thirdQuarter[1][0] && oddD < thirdQuarter[1][1]) {
                    matchesWithBetDetails[i].betOnD = true;
                    matchesWithBetDetails[i].betAmountD += amountD;
                }
            }
            if (thirdQuarter[2].length > 0) {
                if (oddA > thirdQuarter[2][0] && oddA < thirdQuarter[2][1]) {
                    matchesWithBetDetails[i].betOnA = true;
                    matchesWithBetDetails[i].betAmountA += amountA;
                }
            }
        } else {
            if (lastQuarter[0].length > 0) {
                if (oddH > lastQuarter[0][0] && oddH < lastQuarter[0][1]) {
                    matchesWithBetDetails[i].betOnH = true;
                    matchesWithBetDetails[i].betAmountH += amountH;
                }
            }
            if (lastQuarter[1].length > 0) {
                if (oddD > lastQuarter[1][0] && oddD < lastQuarter[1][1]) {
                    matchesWithBetDetails[i].betOnD = true;
                    matchesWithBetDetails[i].betAmountD += amountD;
                }
            }
            if (lastQuarter[2].length > 0) {
                if (oddA > lastQuarter[2][0] && oddA < lastQuarter[2][1]) {
                    matchesWithBetDetails[i].betOnA = true;
                    matchesWithBetDetails[i].betAmountA += amountA;
                }
            }
        }

        matchesFull.push({
            ...matchesWithBetDetails[i],
        });
    }

    return matchesWithBetDetails;
};

export default addOddBasedMethod;
