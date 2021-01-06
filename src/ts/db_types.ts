export interface LastUpdate {
    championship: string;
    date: Date;
}

export interface NextMatch {
    championship: string;
    date: Date;
    homeTeam: string;
    awayTeam: string;
    oddH: number;
    oddD: number;
    oddA: number;
    fairOddH: number;
    betAmount: number;
    betOn: boolean;
}
