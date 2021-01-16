export interface Championship {
    id: string;
    name: string;
    path: string;
    country: string;
    season: string;
    maxOdd: Array<number>;
    equationsH: Array<Array<number>>;
    equationsD: Array<Array<number>>;
    equationsA: Array<Array<number>>;
    teamsCheck: Array<Array<string>>;
}

export interface ChampionshipPageProps {
    champ: Championship;
}
