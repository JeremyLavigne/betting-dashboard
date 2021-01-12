// Object type when scraping in Betexplorer for upcoming matches
export interface Match {
    homeTeam: string;
    awayTeam: string;
    date: string | undefined;
    oddH: string | undefined;
    oddD: string | undefined;
    oddA: string | undefined;
}

// Object type for upcoming matches when adding ratios
export interface MatchWithRatios {
    date: Date;
    homeTeam: string;
    awayTeam: string;
    s2GameFormRatio: number;
    s7PowerRatingRatio: number;
    s9PpsRatio: number;
    oddH: number;
    oddD: number;
    oddA: number;
}

// Adding Fair odd
export interface MatchWithFairOdd {
    date: Date;
    homeTeam: string;
    awayTeam: string;
    s2GameFormRatio: number;
    s7PowerRatingRatio: number;
    s9PpsRatio: number;
    oddH: number;
    oddD: number;
    oddA: number;
    fairOddH: number;
    fairOddD: number;
    fairOddA: number;
}

// Adding Bet details (bet on ? & how many to bet)
export interface MatchWithBetDetails {
    date: Date;
    homeTeam: string;
    awayTeam: string;
    s2GameFormRatio: number;
    s7PowerRatingRatio: number;
    s9PpsRatio: number;
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
