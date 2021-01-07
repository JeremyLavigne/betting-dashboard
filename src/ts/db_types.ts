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
    fairOddD: number;
    fairOddA: number;
    betAmountH: number;
    betAmountD: number;
    betAmountA: number;
    betOnH: boolean;
    betOnD: boolean;
    betOnA: boolean;
}
