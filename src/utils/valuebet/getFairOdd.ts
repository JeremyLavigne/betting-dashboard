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
