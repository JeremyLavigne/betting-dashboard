import { MatchFull } from '../../ts/app_types';

const turnIntoRatio = (db: Array<MatchFull>) => {
    // Create new db
    const newDb = [];

    // Fill it using old one
    for (let i = 0; i < db.length; i += 1) {
        if (db[i].homeTeamMatchNumber >= 6 && db[i].awayTeamMatchNumber >= 6) {
            const {
                homeTeam,
                awayTeam,
                homeTeamGameFormPointsOn6,
                awayTeamGameFormPointsOn6,
                homeTeamPowerRating,
                awayTeamPowerRating,
                homeTeamPpsPointsTotal,
                awayTeamPpsPointsTotal,
                homeTeamMatchNumber,
                awayTeamMatchNumber,
                result,
                oddH,
            } = db[i];

            const s2 = (homeTeamGameFormPointsOn6 - awayTeamGameFormPointsOn6) / 8;

            const s7 = homeTeamPowerRating - awayTeamPowerRating;

            const s9 =
                homeTeamPpsPointsTotal / (homeTeamMatchNumber - 1) - awayTeamPpsPointsTotal / (awayTeamMatchNumber - 1);

            const newRatios = {
                homeTeam,
                awayTeam,
                s2GameFormRatio: Math.round(s2 * 1000) / 1000,
                s7PowerRatingRatio: Math.round(s7 * 1000) / 1000,
                s9PpsRatio: Math.round(s9 * 1000) / 1000,
                result,
                oddH,
            };

            newDb.push(newRatios);
        }
    }

    return newDb;
};

export default turnIntoRatio;
