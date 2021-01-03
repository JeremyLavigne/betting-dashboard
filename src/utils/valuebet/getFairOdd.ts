import { MatchWithRatios, MatchWithFairOdd } from '../../ts/app_types';

const getFairOdds = (matchesWithRatios: Array<MatchWithRatios>, champIndicator: string): Array<MatchWithFairOdd> => {
    // Put equations regarding the championship
    // For more about equations, see https://github.com/JeremyLavigne/benefice-simulation

    let predictS2 = (x: number): number => {
        return x;
    };
    let predictS7 = (x: number): number => {
        return x;
    };
    let predictS9 = (x: number): number => {
        return x;
    };

    if (champIndicator === 'PL') {
        predictS2 = (x: number) => {
            return 0.01 * x * x + 0.12 * x + 0.46;
        };
        predictS7 = (x: number) => {
            return -0.01 * x * x + 0.13 * x + 0.49;
        };
        predictS9 = (x: number) => {
            return 0 * x * x + 0.12 * x + 0.47;
        };
    }

    if (champIndicator === 'SP1') {
        predictS2 = (x: number) => {
            return 0.01 * x * x + 0.11 * x + 0.47;
        };
        predictS7 = (x: number) => {
            return 0.01 * x * x + 0.14 * x + 0.49;
        };
        predictS9 = (x: number) => {
            return 0.01 * x * x + 0.13 * x + 0.47;
        };
    }

    if (champIndicator === 'SA') {
        predictS2 = (x: number) => {
            return 0.01 * x * x + 0.15 * x + 0.43;
        };
        predictS7 = (x: number) => {
            return 0.01 * x * x + 0.16 * x + 0.44;
        };
        predictS9 = (x: number) => {
            return 0 * x * x + 0.14 * x + 0.44;
        };
    }

    if (champIndicator === 'L1') {
        predictS2 = (x: number) => {
            return 0.02 * x * x + 0.09 * x + 0.44;
        };
        predictS7 = (x: number) => {
            return 0.01 * x * x + 0.16 * x + 0.46;
        };
        predictS9 = (x: number) => {
            return 0.02 * x * x + 0.14 * x + 0.43;
        };
    }

    if (champIndicator === 'B1') {
        predictS2 = (x: number) => {
            return 0 * x * x + 0.11 * x + 0.45;
        };
        predictS7 = (x: number) => {
            return 0 * x * x + 0.14 * x + 0.45;
        };
        predictS9 = (x: number) => {
            return -0.01 * x * x + 0.11 * x + 0.46;
        };
    }

    if (champIndicator === 'LO') {
        predictS2 = (x: number) => {
            return 0.01 * x * x + 0.06 * x + 0.42;
        };
        predictS7 = (x: number) => {
            return -0.01 * x * x + 0.11 * x + 0.44;
        };
        predictS9 = (x: number) => {
            return -0.02 * x * x + 0.05 * x + 0.47;
        };
    }

    if (champIndicator === 'LT') {
        predictS2 = (x: number) => {
            return 0.01 * x * x + 0.09 * x + 0.4;
        };
        predictS7 = (x: number) => {
            return -0.02 * x * x + 0.09 * x + 0.44;
        };
        predictS9 = (x: number) => {
            return 0.01 * x * x + 0.1 * x + 0.4;
        };
    }

    const matchesWithFairOdd = [];
    for (let i = 0; i < matchesWithRatios.length; i += 1) {
        const fairOddHomeWithS2 = Math.round((1 / predictS2(matchesWithRatios[i].s2GameFormRatio)) * 100) / 100;
        const fairOddHomeWithS7 = Math.round((1 / predictS7(matchesWithRatios[i].s7PowerRatingRatio)) * 100) / 100;
        const fairOddHomeWithS9 = Math.round((1 / predictS9(matchesWithRatios[i].s9PpsRatio)) * 100) / 100;

        let fairOddH = (fairOddHomeWithS2 + fairOddHomeWithS7 + fairOddHomeWithS9) / 3;

        // Sometimes, when big odd for example, predict can return a negative value.
        if (fairOddH < 1) {
            fairOddH = 50; // Put arbitrary a huge odd (= no bet on this one);
        } else {
            fairOddH = Math.round(fairOddH * 100) / 100;
        }

        matchesWithFairOdd.push({ ...matchesWithRatios[i], fairOddH });
    }

    return matchesWithFairOdd;
};

export default getFairOdds;
