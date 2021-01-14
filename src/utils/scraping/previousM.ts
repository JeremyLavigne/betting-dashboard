import csv from 'csvtojson';
import axios from 'axios';

import { PreviousMatch } from '../../ts/previousMatch.type';

// Get all matches played since the beginning of the season. Source : football-data.co.uk - CSV format
// -----------------------------------------------------------------------------------------------------
const getMatches = async (url: string): Promise<Array<PreviousMatch>> => {
    const matches: Array<PreviousMatch> = [];

    const response = await axios.get(url);
    await csv()
        .fromString(response.data)
        .then((data) => {
            // Then format data as we want
            data.forEach((json) => {
                const dateRightFormat = `${json.Date.substr(3, 2)}/${json.Date.substr(0, 2)}/${json.Date.substr(6, 4)}`;
                matches.push({
                    date: new Date(dateRightFormat),
                    homeTeam: json.HomeTeam,
                    awayTeam: json.AwayTeam,
                    homeTeamGoalsFor: Number(json.FTHG),
                    awayTeamGoalsFor: Number(json.FTAG),
                    homeTeamGoalsAgainst: Number(json.FTAG),
                    awayTeamGoalsAgainst: Number(json.FTHG),
                    result: json.FTR,
                    homeTeamShotsOff: Number(json.HS) - Number(json.HST),
                    awayTeamShotsOff: Number(json.AS) - Number(json.AST),
                    homeTeamShotsOnTarget: Number(json.HST),
                    awayTeamShotsOnTarget: Number(json.AST),
                    homeTeamCorner: Number(json.HC),
                    awayTeamCorner: Number(json.AC),
                    oddH: Number(json.AvgH),
                    oddD: Number(json.AvgD),
                    oddA: Number(json.AvgA),
                });
            });
        });

    return matches;
};

export default getMatches;
