import { NextMatch, NextMatchWithRatios } from '../../ts/nextMatch.type';

// Use the ratios we created and turn them into a 'Fair odd'. i.e. our own odd.
// ------------------------------------------------------------------------------------------
const getFairOdds = (
    matchesWithRatios: Array<NextMatchWithRatios>,
    equationsH: Array<Array<number>>,
    equationsD: Array<Array<number>>,
    equationsA: Array<Array<number>>,
): Array<NextMatch> => {
    // ------------- Fetch the equations regarding the championship ---------------

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

    // ----------------- Use thoses equations to find fair odds -------------------

    const matchesWithFairOdd: Array<NextMatch> = [];
    for (let i = 0; i < matchesWithRatios.length; i += 1) {
        const fairOddHomeWithS2 = 1 / predictS2H(matchesWithRatios[i].s2GameFormRatio);
        const fairOddHomeWithS7 = 1 / predictS7H(matchesWithRatios[i].s7PowerRatingRatio);
        const fairOddHomeWithS9 = 1 / predictS9H(matchesWithRatios[i].s9PpsRatio);

        const fairOddDrawWithS2 = 1 / predictS2D(matchesWithRatios[i].s2GameFormRatio);
        const fairOddDrawWithS7 = 1 / predictS7D(matchesWithRatios[i].s7PowerRatingRatio);
        const fairOddDrawWithS9 = 1 / predictS9D(matchesWithRatios[i].s9PpsRatio);

        const fairOddAwayWithS2 = 1 / predictS2A(matchesWithRatios[i].s2GameFormRatio);
        const fairOddAwayWithS7 = 1 / predictS7A(matchesWithRatios[i].s7PowerRatingRatio);
        const fairOddAwayWithS9 = 1 / predictS9A(matchesWithRatios[i].s9PpsRatio);

        let tempfairOddH = 50;
        let tempfairOddD = 50;
        let tempfairOddA = 50;

        if (equationsH[2].length === 0) {
            // a.k.a There is only two system took in count
            tempfairOddH = Math.round(((fairOddHomeWithS2 + fairOddHomeWithS7) / 2) * 100) / 100;
        } else {
            tempfairOddH = Math.round(((fairOddHomeWithS2 + fairOddHomeWithS7 + fairOddHomeWithS9) / 3) * 100) / 100;
        }
        if (equationsD[2].length === 0) {
            tempfairOddD = Math.round(((fairOddDrawWithS2 + fairOddDrawWithS7) / 2) * 100) / 100;
        } else {
            tempfairOddD = Math.round(((fairOddDrawWithS2 + fairOddDrawWithS7 + fairOddDrawWithS9) / 3) * 100) / 100;
        }
        if (equationsA[2].length === 0) {
            tempfairOddA = Math.round(((fairOddAwayWithS2 + fairOddAwayWithS7) / 2) * 100) / 100;
        } else {
            tempfairOddA = Math.round(((fairOddAwayWithS2 + fairOddAwayWithS7 + fairOddAwayWithS9) / 3) * 100) / 100;
        }

        // Sometimes, when big odd for example, predict can return a non exploitable value.
        if (Number.isNaN(tempfairOddH) || tempfairOddH < 1) {
            tempfairOddH = 50; // Put arbitrary a huge odd (= no bet on this one);
        }
        if (Number.isNaN(tempfairOddD) || tempfairOddD < 1) {
            tempfairOddD = 50;
        }
        if (Number.isNaN(tempfairOddA) || tempfairOddA < 1) {
            tempfairOddA = 50;
        }

        // Go through a new object to remove (properly ?) 3 properties.
        matchesWithFairOdd.push({
            championship: matchesWithRatios[i].championship,
            date: matchesWithRatios[i].date,
            homeTeam: matchesWithRatios[i].homeTeam,
            awayTeam: matchesWithRatios[i].awayTeam,
            oddH: matchesWithRatios[i].oddH,
            oddD: matchesWithRatios[i].oddD,
            oddA: matchesWithRatios[i].oddA,
            fairOddH: tempfairOddH,
            fairOddD: tempfairOddD,
            fairOddA: tempfairOddA,
            betAmountH: matchesWithRatios[i].betAmountH,
            betAmountD: matchesWithRatios[i].betAmountD,
            betAmountA: matchesWithRatios[i].betAmountA,
            betOnH: matchesWithRatios[i].betOnH,
            betOnD: matchesWithRatios[i].betOnD,
            betOnA: matchesWithRatios[i].betOnA,
            matchNumber: matchesWithRatios[i].matchNumber,
        });
    }

    return matchesWithFairOdd;
};

export default getFairOdds;
