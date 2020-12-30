import csv from 'csvtojson';
import axios from 'axios';

import { MatchPlayed } from '../ts/app_types';

const getMatches = async (url: string): Promise<Array<MatchPlayed>> => {
    const matches: Array<MatchPlayed> = [];

    // First fetch data from online csv file
    const response = await axios.get(url);
    csv()
        .fromString(response.data)
        .then((data) => {
            // Then format data as we want
            data.map((json) =>
                matches.push({
                    Date: json.Date,
                    HomeTeam: json.HomeTeam,
                    AwayTeam: json.AwayTeam,
                    FTHG: Number(json.FTHG),
                    FTAG: Number(json.FTAG),
                    FTR: json.FTR,
                    HS: Number(json.HS),
                    AS: Number(json.AS),
                    HST: Number(json.HST),
                    AST: Number(json.AST),
                    HC: Number(json.HC),
                    AC: Number(json.AC),
                    BbAvH: Number(json.AvgH),
                    BbAvD: Number(json.AvgD),
                    BbAvA: Number(json.AvgA),
                    'BbAv>2.5': Number(json['Avg>2'][5]),
                    'BbAv<2.5': Number(json['Avg<2'][5]),
                }),
            );
        });

    return matches;
};

export default getMatches;
