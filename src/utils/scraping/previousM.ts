import csv from 'csvtojson';
import axios from 'axios';

import { MatchFull } from '../../ts/previousMatch.type';

const getMatches = async (url: string): Promise<Array<MatchFull>> => {
    const matches: Array<MatchFull> = [];

    // First fetch data from online csv file
    const response = await axios.get(url);
    await csv()
        .fromString(response.data)
        .then((data) => {
            // Then format data as we want
            data.forEach((json) => {
                // Calcul of PPS Result
                const homeTeamShotsOff = Number(json.HS) - Number(json.HST);
                const awayTeamShotsOff = Number(json.AS) - Number(json.AST);
                const homeTeamShotsOnTarget = Number(json.HST);
                const awayTeamShotsOnTarget = Number(json.AST);
                const homeTeamCorner = Number(json.HC);
                const awayTeamCorner = Number(json.AC);
                const result = json.FTR;

                const homeTeamPpsScore =
                    Math.round((homeTeamShotsOnTarget * 2 + homeTeamShotsOff + homeTeamCorner) / 10) +
                    (result === 'H' ? 1 : 0);
                const awayTeamPpsScore =
                    Math.round((awayTeamShotsOnTarget * 2 + awayTeamShotsOff + awayTeamCorner) / 10) +
                    (result === 'A' ? 1 : 0);

                let ppsResult = '';

                if (homeTeamPpsScore > awayTeamPpsScore) {
                    ppsResult = 'H';
                }
                if (homeTeamPpsScore < awayTeamPpsScore) {
                    ppsResult = 'A';
                }
                if (homeTeamPpsScore === awayTeamPpsScore) {
                    ppsResult = 'D';
                }

                // Calcul of Power Rating Adjustment

                matches.push({
                    // Original values, renamed
                    date: new Date(json.Date),
                    homeTeam: json.HomeTeam,
                    awayTeam: json.AwayTeam,
                    homeTeamGoalsFor: Number(json.FTHG),
                    awayTeamGoalsFor: Number(json.FTAG),
                    homeTeamGoalsAgainst: Number(json.FTAG),
                    awayTeamGoalsAgainst: Number(json.FTHG),
                    result,
                    homeTeamShotsOff,
                    awayTeamShotsOff,
                    homeTeamShotsOnTarget,
                    awayTeamShotsOnTarget,
                    homeTeamCorner,
                    awayTeamCorner,
                    oddH: Number(json.AvgH),
                    oddD: Number(json.AvgD),
                    oddA: Number(json.AvgA),
                    // Calcul we did directly here
                    ppsResult,
                    // Default value for the rest
                    homeTeamMatchNumber: 1,
                    awayTeamMatchNumber: 1,
                    homeTeamPpsPointsTotal: 0,
                    awayTeamPpsPointsTotal: 0,
                    homeTeamGameFormPoints: 0,
                    awayTeamGameFormPoints: 0,
                    homeTeamGameFormPointsOn6: 0,
                    awayTeamGameFormPointsOn6: 0,
                    homeTeamPowerRating: 0,
                    awayTeamPowerRating: 0,
                    homeTeamPowerRatingAdjustment: 0,
                    awayTeamPowerRatingAdjustment: 0,
                });
            });
        });

    return matches;
};

export default getMatches;
