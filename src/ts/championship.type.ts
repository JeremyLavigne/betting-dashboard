export interface Championship {
    id: string;
    name: string;
    path: string;
    country: string;
    season: string;
    minOdd: Array<number>;
    maxOdd: Array<number>;
    equationsH: Array<Array<number>>;
    equationsD: Array<Array<number>>;
    equationsA: Array<Array<number>>;
    fullSeason: Array<Array<number>>;
    firstHalf: Array<Array<number>>;
    secondHalf: Array<Array<number>>;
    firstQuarter: Array<Array<number>>;
    secondQuarter: Array<Array<number>>;
    thirdQuarter: Array<Array<number>>;
    lastQuarter: Array<Array<number>>;
    teamsCheck: Array<Array<string>>;
    numberOfMatchSeason: number;
}
