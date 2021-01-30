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
    const amount = capital * 0.02; // For now, always 2% of bankroll

    for (let i = 0; i < matchesWithBetDetails.length; i += 1) {
        const { oddH, oddD, oddA, matchNumber } = matchesWithBetDetails[i];

        if (fullSeason[0].length > 0) {
            if (oddH > fullSeason[0][0] && oddH < fullSeason[0][1]) {
                matchesWithBetDetails[i].betOnH = true;
                matchesWithBetDetails[i].betAmountH += amount;
            }
        }
        if (fullSeason[1].length > 0) {
            if (oddD > fullSeason[1][0] && oddD < fullSeason[1][1]) {
                matchesWithBetDetails[i].betOnD = true;
                matchesWithBetDetails[i].betAmountD += amount;
            }
        }
        if (fullSeason[2].length > 0) {
            if (oddA > fullSeason[2][0] && oddA < fullSeason[2][1]) {
                matchesWithBetDetails[i].betOnA = true;
                matchesWithBetDetails[i].betAmountA += amount;
            }
        }

        // Half
        if (matchNumber < numberOfMatchSeason / 2) {
            if (firstHalf[0].length > 0) {
                if (oddH > firstHalf[0][0] && oddH < firstHalf[0][1]) {
                    matchesWithBetDetails[i].betOnH = true;
                    matchesWithBetDetails[i].betAmountH += amount;
                }
            }
            if (firstHalf[1].length > 0) {
                if (oddD > firstHalf[1][0] && oddD < firstHalf[1][1]) {
                    matchesWithBetDetails[i].betOnD = true;
                    matchesWithBetDetails[i].betAmountD += amount;
                }
            }
            if (firstHalf[2].length > 0) {
                if (oddA > firstHalf[2][0] && oddA < firstHalf[2][1]) {
                    matchesWithBetDetails[i].betOnA = true;
                    matchesWithBetDetails[i].betAmountA += amount;
                }
            }
        } else {
            if (secondHalf[0].length > 0) {
                if (oddH > secondHalf[0][0] && oddH < secondHalf[0][1]) {
                    matchesWithBetDetails[i].betOnH = true;
                    matchesWithBetDetails[i].betAmountH += amount;
                }
            }
            if (secondHalf[1].length > 0) {
                if (oddD > secondHalf[1][0] && oddD < secondHalf[1][1]) {
                    matchesWithBetDetails[i].betOnD = true;
                    matchesWithBetDetails[i].betAmountD += amount;
                }
            }
            if (secondHalf[2].length > 0) {
                if (oddA > secondHalf[2][0] && oddA < secondHalf[2][1]) {
                    matchesWithBetDetails[i].betOnA = true;
                    matchesWithBetDetails[i].betAmountA += amount;
                }
            }
        }

        // Quarter
        if (matchNumber < numberOfMatchSeason / 4) {
            if (firstQuarter[0].length > 0) {
                if (oddH > firstQuarter[0][0] && oddH < firstQuarter[0][1]) {
                    matchesWithBetDetails[i].betOnH = true;
                    matchesWithBetDetails[i].betAmountH += amount;
                }
            }
            if (firstQuarter[1].length > 0) {
                if (oddD > firstQuarter[1][0] && oddD < firstQuarter[1][1]) {
                    matchesWithBetDetails[i].betOnD = true;
                    matchesWithBetDetails[i].betAmountD += amount;
                }
            }
            if (firstQuarter[2].length > 0) {
                if (oddA > firstQuarter[2][0] && oddA < firstQuarter[2][1]) {
                    matchesWithBetDetails[i].betOnA = true;
                    matchesWithBetDetails[i].betAmountA += amount;
                }
            }
        } else if (matchNumber < numberOfMatchSeason / 2) {
            if (secondQuarter[0].length > 0) {
                if (oddH > secondQuarter[0][0] && oddH < secondQuarter[0][1]) {
                    matchesWithBetDetails[i].betOnH = true;
                    matchesWithBetDetails[i].betAmountH += amount;
                }
            }
            if (secondQuarter[1].length > 0) {
                if (oddD > secondQuarter[1][0] && oddD < secondQuarter[1][1]) {
                    matchesWithBetDetails[i].betOnD = true;
                    matchesWithBetDetails[i].betAmountD += amount;
                }
            }
            if (secondQuarter[2].length > 0) {
                if (oddA > secondQuarter[2][0] && oddA < secondQuarter[2][1]) {
                    matchesWithBetDetails[i].betOnA = true;
                    matchesWithBetDetails[i].betAmountA += amount;
                }
            }
        } else if (matchNumber < (numberOfMatchSeason * 3) / 4) {
            if (thirdQuarter[0].length > 0) {
                if (oddH > thirdQuarter[0][0] && oddH < thirdQuarter[0][1]) {
                    matchesWithBetDetails[i].betOnH = true;
                    matchesWithBetDetails[i].betAmountH += amount;
                }
            }
            if (thirdQuarter[1].length > 0) {
                if (oddD > thirdQuarter[1][0] && oddD < thirdQuarter[1][1]) {
                    matchesWithBetDetails[i].betOnD = true;
                    matchesWithBetDetails[i].betAmountD += amount;
                }
            }
            if (thirdQuarter[2].length > 0) {
                if (oddA > thirdQuarter[2][0] && oddA < thirdQuarter[2][1]) {
                    matchesWithBetDetails[i].betOnA = true;
                    matchesWithBetDetails[i].betAmountA += amount;
                }
            }
        } else {
            if (lastQuarter[0].length > 0) {
                if (oddH > lastQuarter[0][0] && oddH < lastQuarter[0][1]) {
                    matchesWithBetDetails[i].betOnH = true;
                    matchesWithBetDetails[i].betAmountH += amount;
                }
            }
            if (lastQuarter[1].length > 0) {
                if (oddD > lastQuarter[1][0] && oddD < lastQuarter[1][1]) {
                    matchesWithBetDetails[i].betOnD = true;
                    matchesWithBetDetails[i].betAmountD += amount;
                }
            }
            if (lastQuarter[2].length > 0) {
                if (oddA > lastQuarter[2][0] && oddA < lastQuarter[2][1]) {
                    matchesWithBetDetails[i].betOnA = true;
                    matchesWithBetDetails[i].betAmountA += amount;
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
