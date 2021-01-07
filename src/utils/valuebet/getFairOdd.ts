import { MatchWithRatios, MatchWithFairOdd } from '../../ts/app_types';

const getFairOdds = (matchesWithRatios: Array<MatchWithRatios>, champIndicator: string): Array<MatchWithFairOdd> => {
    // Put equations regarding the championship
    // For more about equations, see https://github.com/JeremyLavigne/benefice-simulation

    // Variables
    let predictS2H = (x: number) => x;
    let predictS7H = (x: number) => x;
    let predictS9H = (x: number) => x;

    let predictS2D = (x: number) => x;
    let predictS7D = (x: number) => x;
    let predictS9D = (x: number) => x;

    let predictS2A = (x: number) => x;
    let predictS7A = (x: number) => x;
    let predictS9A = (x: number) => x;

    if (champIndicator === 'PL') {
        predictS2H = (x: number) => 0.01 * x * x + 0.12 * x + 0.46;
        predictS7H = (x: number) => -0.01 * x * x + 0.13 * x + 0.49;
        predictS9H = (x: number) => 0 * x * x + 0.12 * x + 0.47;

        predictS2D = () => 1000;
        predictS7D = () => 1000;
        predictS9D = () => 1000;

        predictS2A = () => 1000;
        predictS7A = () => 1000;
        predictS9A = () => 1000;
    }

    if (champIndicator === 'SP1') {
        predictS2H = (x: number) => 0.01 * x * x + 0.11 * x + 0.47;
        predictS7H = (x: number) => 0.01 * x * x + 0.14 * x + 0.49;
        predictS9H = (x: number) => 0.01 * x * x + 0.13 * x + 0.47;

        predictS2D = () => 1000;
        predictS7D = () => 1000;
        predictS9D = () => 1000;

        predictS2A = () => 1000;
        predictS7A = () => 1000;
        predictS9A = () => 1000;
    }

    if (champIndicator === 'SA') {
        predictS2H = (x: number) => 0.01 * x * x + 0.15 * x + 0.43;
        predictS7H = (x: number) => 0.01 * x * x + 0.16 * x + 0.44;
        predictS9H = (x: number) => 0 * x * x + 0.14 * x + 0.44;

        predictS2D = (x: number) => -0.03 * x * x + 0.02 * x + 0.28;
        predictS7D = (x: number) => -0.03 * x * x - 0.01 * x + 0.27;
        predictS9D = (x: number) => -0.01 * x * x - 0.01 * x + 0.26;

        predictS2A = (x: number) => 0.01 * x * x - 0.13 * x + 0.3;
        predictS7A = (x: number) => 0.02 * x * x - 0.16 * x + 0.28;
        predictS9A = (x: number) => 0.01 * x * x - 0.11 * x + 0.3;
    }

    if (champIndicator === 'L1') {
        predictS2H = (x: number) => 0.02 * x * x + 0.09 * x + 0.44;
        predictS7H = (x: number) => 0.01 * x * x + 0.16 * x + 0.46;
        predictS9H = (x: number) => 0.02 * x * x + 0.14 * x + 0.43;

        predictS2D = () => 1000;
        predictS7D = () => 1000;
        predictS9D = () => 1000;

        predictS2A = () => 1000;
        predictS7A = () => 1000;
        predictS9A = () => 1000;
    }

    if (champIndicator === 'B1') {
        predictS2H = (x: number) => 0 * x * x + 0.11 * x + 0.45;
        predictS7H = (x: number) => 0 * x * x + 0.14 * x + 0.45;
        predictS9H = (x: number) => -0.01 * x * x + 0.11 * x + 0.46;

        predictS2D = (x: number) => -0.01 * x * x + 0 * x + 0.25;
        predictS7D = (x: number) => -0.02 * x * x - 0.01 * x + 0.25;
        predictS9D = (x: number) => -0.01 * x * x + 0.01 * x + 0.26;

        predictS2A = (x: number) => 0.01 * x * x - 0.11 * x + 0.31;
        predictS7A = (x: number) => 0.02 * x * x - 0.14 * x + 0.29;
        predictS9A = (x: number) => 0.01 * x * x - 0.12 * x + 0.3;
    }

    if (champIndicator === 'CH') {
        predictS2H = () => 1000;
        predictS7H = () => 1000;
        predictS9H = () => 1000;

        predictS2D = (x: number) => -0.01 * x * x + 0.02 * x + 0.28;
        predictS7D = (x: number) => -0.03 * x * x - 0.01 * x + 0.29;
        predictS9D = (x: number) => -0.01 * x * x + 0 * x + 0.28;

        predictS2A = () => 1000;
        predictS7A = () => 1000;
        predictS9A = () => 1000;
    }

    if (champIndicator === 'LO') {
        predictS2H = (x: number) => 0.01 * x * x + 0.06 * x + 0.42;
        predictS7H = (x: number) => -0.01 * x * x + 0.11 * x + 0.44;
        predictS9H = (x: number) => -0.02 * x * x + 0.05 * x + 0.47;

        predictS2D = (x: number) => 0.02 * x * x - 0.03 * x + 0.24;
        predictS7D = (x: number) => 0.01 * x * x - 0.02 * x + 0.25;
        predictS9D = (x: number) => 0.02 * x * x + 0.02 * x + 0.21;

        predictS2A = (x: number) => -0.02 * x * x - 0.05 * x + 0.32;
        predictS7A = (x: number) => 0 * x * x - 0.08 * x + 0.31;
        predictS9A = (x: number) => 0.01 * x * x - 0.07 * x + 0.29;
    }

    if (champIndicator === 'LT') {
        predictS2H = (x: number) => 0.01 * x * x + 0.09 * x + 0.4;
        predictS7H = (x: number) => -0.02 * x * x + 0.09 * x + 0.44;
        predictS9H = (x: number) => 0.01 * x * x + 0.1 * x + 0.4;

        predictS2D = (x: number) => 0.02 * x * x - 0.04 * x + 0.24;
        predictS7D = (x: number) => 0.04 * x * x - 0.02 * x + 0.23;
        predictS9D = (x: number) => -0.01 * x * x - 0.01 * x + 0.29;

        predictS2A = () => 1000;
        predictS7A = () => 1000;
        predictS9A = () => 1000;
    }

    if (champIndicator === 'SCO') {
        predictS2H = () => 1000;
        predictS7H = () => 1000;
        predictS9H = () => 1000;

        predictS2D = (x: number) => -0.02 * x * x + 0.02 * x + 0.25;
        predictS7D = (x: number) => -0.02 * x * x - 0.02 * x + 0.25;
        predictS9D = (x: number) => -0.02 * x * x + 0 * x + 0.27;

        predictS2A = (x: number) => 0.01 * x * x - 0.13 * x + 0.33;
        predictS7A = (x: number) => 0.01 * x * x - 0.15 * x + 0.33;
        predictS9A = (x: number) => 0.01 * x * x - 0.12 * x + 0.33;
    }

    const matchesWithFairOdd = [];
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
        console.log(fairOddA, fairOddD, fairOddH);

        matchesWithFairOdd.push({ ...matchesWithRatios[i], fairOddH, fairOddD, fairOddA });
    }

    return matchesWithFairOdd;
};

export default getFairOdds;
