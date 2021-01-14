import { PreviousMatch, MatchFull } from '../../ts/previousMatch.type';

// Default is used when looking for previous matches - Can't find a  match before the first one
const defaultMatch = {
    homeTeam: '',
    awayTeam: '',
    date: new Date(),
    homeTeamGoalsFor: 0,
    awayTeamGoalsFor: 0,
    homeTeamGoalsAgainst: 0,
    awayTeamGoalsAgainst: 0,
    result: '',
    homeTeamShotsOnTarget: 0,
    awayTeamShotsOnTarget: 0,
    homeTeamCorner: 0,
    awayTeamCorner: 0,
    homeTeamShotsOff: 0,
    awayTeamShotsOff: 0,
    oddH: 0,
    oddD: 0,
    oddA: 0,
    ppsResult: '',
    homeTeamMatchNumber: 0,
    awayTeamMatchNumber: 0,
    homeTeamPpsPointsTotal: 0,
    awayTeamPpsPointsTotal: 0,
    homeTeamGameFormPoints: 0,
    awayTeamGameFormPoints: 0,
    homeTeamGameFormPointsOn6: 0,
    awayTeamGameFormPointsOn6: 0,
    homeTeamPowerRating: 20,
    awayTeamPowerRating: 20,
    homeTeamPowerRatingAdjustment: 0,
    awayTeamPowerRatingAdjustment: 0,
};

// Extends original data with more properties - Properties we actually need to calcultate Ratios
// ----------------------------------------------------------------------------------------------------
const extendsData = (db: Array<PreviousMatch>): Array<MatchFull> => {
    const newDb: Array<MatchFull> = [];

    db.forEach((match: PreviousMatch, i: number) => {
        // -------------------------- PPS Result ----------------------------------
        const ppsScoreH =
            Math.round((match.homeTeamShotsOnTarget * 2 + match.homeTeamShotsOff + match.homeTeamCorner) / 10) +
            (match.result === 'H' ? 1 : 0);
        const ppsScoreA =
            Math.round((match.awayTeamShotsOnTarget * 2 + match.awayTeamShotsOff + match.awayTeamCorner) / 10) +
            (match.result === 'A' ? 1 : 0);

        // eslint-disable-next-line no-nested-ternary
        const ppsResult = ppsScoreH > ppsScoreA ? 'H' : ppsScoreH < ppsScoreA ? 'A' : 'D';

        // --------------------------- Match number -------------------------------
        let foundHomeTeam = false;
        let foundAwayTeam = false;
        let homeTeamMatchNumber = 1;
        let awayTeamMatchNumber = 1;

        for (let j = i - 1; j >= 0; j -= 1) {
            if (!foundHomeTeam && match.homeTeam === db[j].homeTeam) {
                homeTeamMatchNumber = newDb[j].homeTeamMatchNumber + 1;
                foundHomeTeam = true;
            }
            if (!foundHomeTeam && match.homeTeam === db[j].awayTeam) {
                homeTeamMatchNumber = newDb[j].awayTeamMatchNumber + 1;
                foundHomeTeam = true;
            }
            if (!foundAwayTeam && match.awayTeam === db[j].homeTeam) {
                awayTeamMatchNumber = newDb[j].homeTeamMatchNumber + 1;
                foundAwayTeam = true;
            }
            if (!foundAwayTeam && match.awayTeam === db[j].awayTeam) {
                awayTeamMatchNumber = newDb[j].awayTeamMatchNumber + 1;
                foundAwayTeam = true;
            }
            if (foundAwayTeam) {
                if (foundHomeTeam) {
                    break;
                }
            }
        }

        // --------------------------- Previous matches -------------------------------
        // Find the match before
        const homeTeamPreviousMatch =
            newDb.find(
                (m) =>
                    (m.homeTeam === match.homeTeam && m.homeTeamMatchNumber === homeTeamMatchNumber - 1) ||
                    (m.awayTeam === match.homeTeam && m.awayTeamMatchNumber === homeTeamMatchNumber - 1),
            ) || defaultMatch;

        const awayTeamPreviousMatch =
            newDb.find(
                (m) =>
                    (m.homeTeam === match.awayTeam && m.homeTeamMatchNumber === awayTeamMatchNumber - 1) ||
                    (m.awayTeam === match.awayTeam && m.awayTeamMatchNumber === awayTeamMatchNumber - 1),
            ) || defaultMatch;

        // Find the 6th match before
        const homeTeamPrevious6 =
            newDb.find(
                (m) =>
                    (m.homeTeam === match.homeTeam && m.homeTeamMatchNumber === homeTeamMatchNumber - 6) ||
                    (m.awayTeam === match.homeTeam && m.awayTeamMatchNumber === homeTeamMatchNumber - 6),
            ) || defaultMatch;

        const awayTeamPrevious6 =
            newDb.find(
                (m) =>
                    (m.homeTeam === match.awayTeam && m.homeTeamMatchNumber === awayTeamMatchNumber - 6) ||
                    (m.awayTeam === match.awayTeam && m.awayTeamMatchNumber === awayTeamMatchNumber - 6),
            ) || defaultMatch;

        // --------------------------------- PPS Points ------------------------------------------
        let homeTeamPpsPointsTotal;
        let awayTeamPpsPointsTotal;

        if (homeTeamPreviousMatch.homeTeam === match.homeTeam) {
            if (homeTeamPreviousMatch.ppsResult === 'H') {
                homeTeamPpsPointsTotal = homeTeamPreviousMatch.homeTeamPpsPointsTotal + 3;
            } else if (homeTeamPreviousMatch.ppsResult === 'D') {
                homeTeamPpsPointsTotal = homeTeamPreviousMatch.homeTeamPpsPointsTotal + 1;
            } else {
                homeTeamPpsPointsTotal = homeTeamPreviousMatch.homeTeamPpsPointsTotal;
            }
        } else if (homeTeamPreviousMatch.ppsResult === 'A') {
            homeTeamPpsPointsTotal = homeTeamPreviousMatch.awayTeamPpsPointsTotal + 5;
        } else if (homeTeamPreviousMatch.ppsResult === 'D') {
            homeTeamPpsPointsTotal = homeTeamPreviousMatch.awayTeamPpsPointsTotal + 2;
        } else {
            homeTeamPpsPointsTotal = homeTeamPreviousMatch.awayTeamPpsPointsTotal;
        }

        if (awayTeamPreviousMatch.homeTeam === match.awayTeam) {
            if (awayTeamPreviousMatch.ppsResult === 'H') {
                awayTeamPpsPointsTotal = awayTeamPreviousMatch.homeTeamPpsPointsTotal + 3;
            } else if (awayTeamPreviousMatch.ppsResult === 'D') {
                awayTeamPpsPointsTotal = awayTeamPreviousMatch.homeTeamPpsPointsTotal + 1;
            } else {
                awayTeamPpsPointsTotal = awayTeamPreviousMatch.homeTeamPpsPointsTotal;
            }
        } else if (awayTeamPreviousMatch.ppsResult === 'A') {
            awayTeamPpsPointsTotal = awayTeamPreviousMatch.awayTeamPpsPointsTotal + 5;
        } else if (awayTeamPreviousMatch.ppsResult === 'D') {
            awayTeamPpsPointsTotal = awayTeamPreviousMatch.awayTeamPpsPointsTotal + 2;
        } else {
            awayTeamPpsPointsTotal = awayTeamPreviousMatch.awayTeamPpsPointsTotal;
        }

        // --------------------------------- GameForm Points ------------------------------------------
        let homeTeamGameFormPoints;
        let awayTeamGameFormPoints;

        if (homeTeamPreviousMatch.homeTeam === match.homeTeam) {
            if (homeTeamPreviousMatch.result === 'H') {
                homeTeamGameFormPoints = homeTeamPreviousMatch.homeTeamGameFormPoints + 3;
            } else if (homeTeamPreviousMatch.result === 'D') {
                homeTeamGameFormPoints = homeTeamPreviousMatch.homeTeamGameFormPoints + 1;
            } else {
                homeTeamGameFormPoints = homeTeamPreviousMatch.homeTeamGameFormPoints;
            }
        } else if (homeTeamPreviousMatch.result === 'A') {
            homeTeamGameFormPoints = homeTeamPreviousMatch.awayTeamGameFormPoints + 5;
        } else if (homeTeamPreviousMatch.result === 'D') {
            homeTeamGameFormPoints = homeTeamPreviousMatch.awayTeamGameFormPoints + 2;
        } else {
            homeTeamGameFormPoints = homeTeamPreviousMatch.awayTeamGameFormPoints;
        }

        if (awayTeamPreviousMatch.homeTeam === match.awayTeam) {
            if (awayTeamPreviousMatch.result === 'H') {
                awayTeamGameFormPoints = awayTeamPreviousMatch.homeTeamGameFormPoints + 3;
            } else if (awayTeamPreviousMatch.result === 'D') {
                awayTeamGameFormPoints = awayTeamPreviousMatch.homeTeamGameFormPoints + 1;
            } else {
                awayTeamGameFormPoints = awayTeamPreviousMatch.homeTeamGameFormPoints;
            }
        } else if (awayTeamPreviousMatch.result === 'A') {
            awayTeamGameFormPoints = awayTeamPreviousMatch.awayTeamGameFormPoints + 5;
        } else if (awayTeamPreviousMatch.result === 'D') {
            awayTeamGameFormPoints = awayTeamPreviousMatch.awayTeamGameFormPoints + 2;
        } else {
            awayTeamGameFormPoints = awayTeamPreviousMatch.awayTeamGameFormPoints;
        }

        // --------------------------------- GameForm Diff On 6 ------------------------------------------
        let homeTeamGameFormPointsOn6;
        let awayTeamGameFormPointsOn6;

        if (homeTeamPrevious6?.homeTeam === match.homeTeam) {
            homeTeamGameFormPointsOn6 = homeTeamGameFormPoints - homeTeamPrevious6.homeTeamGameFormPoints;
        } else {
            homeTeamGameFormPointsOn6 = homeTeamGameFormPoints - homeTeamPrevious6.awayTeamGameFormPoints;
        }

        if (awayTeamPrevious6?.homeTeam === match.awayTeam) {
            awayTeamGameFormPointsOn6 = awayTeamGameFormPoints - awayTeamPrevious6.homeTeamGameFormPoints;
        } else {
            awayTeamGameFormPointsOn6 = awayTeamGameFormPoints - awayTeamPrevious6.awayTeamGameFormPoints;
        }

        // --------------------------------- Power Rating -----------------------------------------------
        let homeTeamPowerRating = 20;
        let awayTeamPowerRating = 20;

        if (homeTeamPreviousMatch.homeTeam === match.homeTeam) {
            homeTeamPowerRating =
                homeTeamPreviousMatch.homeTeamPowerRating + homeTeamPreviousMatch.homeTeamPowerRatingAdjustment;
        } else {
            homeTeamPowerRating =
                homeTeamPreviousMatch.awayTeamPowerRating + homeTeamPreviousMatch.awayTeamPowerRatingAdjustment;
        }

        if (awayTeamPreviousMatch.homeTeam === match.awayTeam) {
            awayTeamPowerRating =
                awayTeamPreviousMatch.homeTeamPowerRating + awayTeamPreviousMatch.homeTeamPowerRatingAdjustment;
        } else {
            awayTeamPowerRating =
                awayTeamPreviousMatch.awayTeamPowerRating + awayTeamPreviousMatch.awayTeamPowerRatingAdjustment;
        }

        homeTeamPowerRating = Math.round((homeTeamPowerRating + Number.EPSILON) * 1000) / 1000;
        awayTeamPowerRating = Math.round((awayTeamPowerRating + Number.EPSILON) * 1000) / 1000;

        // Adjustment
        let adjuster = 0;
        if (typeof homeTeamPowerRating !== 'undefined') {
            const prediction = homeTeamPowerRating - awayTeamPowerRating + 0.2;
            const marginOfVictory = match.homeTeamGoalsFor - match.awayTeamGoalsFor;
            const homeMarginMinusPrediction = marginOfVictory - prediction;
            adjuster = Math.round((homeMarginMinusPrediction * 0.1 + Number.EPSILON) * 1000) / 1000;
        }

        const homeTeamPowerRatingAdjustment = adjuster;
        const awayTeamPowerRatingAdjustment = -adjuster;

        // --------------------------------- Wrap it up -----------------------------------------------
        newDb.push({
            ...match,
            ppsResult,
            homeTeamMatchNumber,
            awayTeamMatchNumber,
            homeTeamPpsPointsTotal,
            awayTeamPpsPointsTotal,
            homeTeamGameFormPoints,
            awayTeamGameFormPoints,
            homeTeamGameFormPointsOn6,
            awayTeamGameFormPointsOn6,
            homeTeamPowerRating,
            awayTeamPowerRating,
            homeTeamPowerRatingAdjustment,
            awayTeamPowerRatingAdjustment,
        });
    });

    return newDb;
};

export default extendsData;
