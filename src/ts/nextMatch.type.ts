// Object as expected in database
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

// Object type for upcoming matches when adding ratios
export interface NextMatchWithRatios {
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
    s2GameFormRatio: number;
    s7PowerRatingRatio: number;
    s9PpsRatio: number;
}
