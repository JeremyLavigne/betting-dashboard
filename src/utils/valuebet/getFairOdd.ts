import { NextMatch, NextMatchWithRatios } from '../../ts/nextMatch.type';

const getFairOdds = (
    matchesWithRatios: Array<NextMatchWithRatios>,
    equationsH: Array<Array<number>>,
    equationsD: Array<Array<number>>,
    equationsA: Array<Array<number>>,
): Array<NextMatch> => {
    // For more about equations, see https://github.com/JeremyLavigne/benefice-simulation

    // Equations Home
    const predictS2H = (x: number) => {
        if (equationsH[0].length > 0) {
            // e.g if there is an equation
            return equationsH[0][0] * x * x + equationsH[0][1] * x + equationsH[0][2];
        }
        return 1000; // Arbitrary return a big number, means no value bet here.
    };
    const predictS7H = (x: number) => {
        if (equationsH[1].length > 0) {
            return equationsH[1][0] * x * x + equationsH[1][1] * x + equationsH[1][2];
        }
        return 1000;
    };
    const predictS9H = (x: number) => {
        if (equationsH[2].length > 0) {
            return equationsH[2][0] * x * x + equationsH[2][1] * x + equationsH[2][2];
        }
        return 1000;
    };

    // Equations Draw
    const predictS2D = (x: number) => {
        if (equationsD[0].length > 0) {
            return equationsD[0][0] * x * x + equationsD[0][1] * x + equationsD[0][2];
        }
        return 1000;
    };
    const predictS7D = (x: number) => {
        if (equationsD[1].length > 0) {
            return equationsD[1][0] * x * x + equationsD[1][1] * x + equationsD[1][2];
        }
        return 1000;
    };
    const predictS9D = (x: number) => {
        if (equationsD[2].length > 0) {
            return equationsD[2][0] * x * x + equationsD[2][1] * x + equationsD[2][2];
        }
        return 1000;
    };

    // Eqautions Away
    const predictS2A = (x: number) => {
        if (equationsA[0].length > 0) {
            return equationsA[0][0] * x * x + equationsA[0][1] * x + equationsA[0][2];
        }
        return 1000;
    };
    const predictS7A = (x: number) => {
        if (equationsA[1].length > 0) {
            return equationsA[1][0] * x * x + equationsA[1][1] * x + equationsA[1][2];
        }
        return 1000;
    };
    const predictS9A = (x: number) => {
        if (equationsA[2].length > 0) {
            return equationsA[2][0] * x * x + equationsA[2][1] * x + equationsA[2][2];
        }
        return 1000;
    };

    const matchesWithFairOdd: Array<NextMatch> = [];
    for (let i = 0; i < matchesWithRatios.length; i += 1) {
        const fairOddHomeWithS2 = Math.round((1 / predictS2H(matchesWithRatios[i].s2GameFormRatio)) * 100) / 100;
        const fairOddHomeWithS7 = Math.round((1 / predictS7H(matchesWithRatios[i].s7PowerRatingRatio)) * 100) / 100;
        const fairOddHomeWithS9 = Math.round((1 / predictS9H(matchesWithRatios[i].s9PpsRatio)) * 100) / 100;

        const fairOddDrawWithS2 = Math.round((1 / predictS2D(matchesWithRatios[i].s2GameFormRatio)) * 100) / 100;
        const fairOddDrawWithS7 = Math.round((1 / predictS7D(matchesWithRatios[i].s7PowerRatingRatio)) * 100) / 100;
        const fairOddDrawWithS9 = Math.round((1 / predictS9D(matchesWithRatios[i].s9PpsRatio)) * 100) / 100;

        const fairOddAwayWithS2 = Math.round((1 / predictS2A(matchesWithRatios[i].s2GameFormRatio)) * 100) / 100;
        const fairOddAwayWithS7 = Math.round((1 / predictS7A(matchesWithRatios[i].s7PowerRatingRatio)) * 100) / 100;
        const fairOddAwayWithS9 = Math.round((1 / predictS9A(matchesWithRatios[i].s9PpsRatio)) * 100) / 100;

        let fairOddH = (fairOddHomeWithS2 + fairOddHomeWithS7 + fairOddHomeWithS9) / 3;
        let fairOddD = (fairOddDrawWithS2 + fairOddDrawWithS7 + fairOddDrawWithS9) / 3;
        let fairOddA = (fairOddAwayWithS2 + fairOddAwayWithS7 + fairOddAwayWithS9) / 3;

        // Sometimes, when big odd for example, predict can return a negative value.
        if (fairOddH < 1) {
            fairOddH = 50; // Put arbitrary a huge odd (= no bet on this one);
        } else {
            fairOddH = Math.round(fairOddH * 100) / 100;
        }

        if (fairOddD < 1) {
            fairOddD = 50; // Put arbitrary a huge odd (= no bet on this one);
        } else {
            fairOddD = Math.round(fairOddD * 100) / 100;
        }

        if (fairOddA < 1) {
            fairOddA = 50; // Put arbitrary a huge odd (= no bet on this one);
        } else {
            fairOddA = Math.round(fairOddA * 100) / 100;
        }

        // Go with a new object to remove properly (?) 3 properties
        matchesWithFairOdd.push({
            championship: matchesWithRatios[i].championship,
            date: matchesWithRatios[i].date,
            homeTeam: matchesWithRatios[i].homeTeam,
            awayTeam: matchesWithRatios[i].awayTeam,
            oddH: matchesWithRatios[i].oddH,
            oddD: matchesWithRatios[i].oddD,
            oddA: matchesWithRatios[i].oddA,
            fairOddH,
            fairOddD,
            fairOddA,
            betAmountH: matchesWithRatios[i].betAmountH,
            betAmountD: matchesWithRatios[i].betAmountD,
            betAmountA: matchesWithRatios[i].betAmountA,
            betOnH: matchesWithRatios[i].betOnH,
            betOnD: matchesWithRatios[i].betOnD,
            betOnA: matchesWithRatios[i].betOnA,
        });
    }

    return matchesWithFairOdd;
};

export default getFairOdds;
