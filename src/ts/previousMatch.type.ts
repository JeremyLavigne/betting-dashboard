// ==================== Previous matches =================================

// Object type when scraping in Football-data.co.uk for previous matches
// Take a little more than needed (Over/Under stuff for example) - can be useful
export interface MatchPlayed {
    Date: string | undefined;
    HomeTeam: string;
    AwayTeam: string;
    FTHG: number;
    FTAG: number;
    FTR: string;
    HS: number;
    AS: number;
    HST: number;
    AST: number;
    HC: number;
    AC: number;
    BbAvH: number;
    BbAvD: number;
    BbAvA: number;
    'BbAv>2.5': number;
    'BbAv<2.5': number;
}

// Extraction Step 1 - Rename Props
export interface MatchWithRenamedProps {
    id: string;
    homeTeam: string;
    awayTeam: string;
    date: Date;
    homeTeamGoalsFor: number;
    awayTeamGoalsFor: number;
    homeTeamGoalsAgainst: number;
    awayTeamGoalsAgainst: number;
    result: string;
    homeTeamShotsOnTarget: number;
    awayTeamShotsOnTarget: number;
    homeTeamCorner: number;
    awayTeamCorner: number;
    homeTeamShotsOff: number;
    awayTeamShotsOff: number;
    oddH: number;
    oddD: number;
    oddA: number;
}

// Extraction Step 2 - Pps Result
export interface MatchWithPpsResults {
    id: string;
    homeTeam: string;
    awayTeam: string;
    date: Date;
    homeTeamGoalsFor: number;
    awayTeamGoalsFor: number;
    homeTeamGoalsAgainst: number;
    awayTeamGoalsAgainst: number;
    result: string;
    homeTeamShotsOnTarget: number;
    awayTeamShotsOnTarget: number;
    homeTeamCorner: number;
    awayTeamCorner: number;
    homeTeamShotsOff: number;
    awayTeamShotsOff: number;
    oddH: number;
    oddD: number;
    oddA: number;
    ppsResult: string;
}

// Extraction Step 3 - Match Number
export interface MatchWithMatchNumber {
    id: string;
    homeTeam: string;
    awayTeam: string;
    date: Date;
    homeTeamGoalsFor: number;
    awayTeamGoalsFor: number;
    homeTeamGoalsAgainst: number;
    awayTeamGoalsAgainst: number;
    result: string;
    homeTeamShotsOnTarget: number;
    awayTeamShotsOnTarget: number;
    homeTeamCorner: number;
    awayTeamCorner: number;
    homeTeamShotsOff: number;
    awayTeamShotsOff: number;
    oddH: number;
    oddD: number;
    oddA: number;
    ppsResult: string;
    homeTeamMatchNumber: number;
    awayTeamMatchNumber: number;
}

// Previous matches
export interface PreviousMatches {
    homeTeamPreviousMatch: MatchFull | Record<string, never>; // cover case of {}
    awayTeamPreviousMatch: MatchFull | Record<string, never>;
    homeTeamPrevious6: MatchFull | Record<string, never>;
    awayTeamPrevious6: MatchFull | Record<string, never>;
}

// Extraction Step 4 - Add Pps points
export interface MatchWithPpsPoints {
    id: string;
    homeTeam: string;
    awayTeam: string;
    date: Date;
    homeTeamGoalsFor: number;
    awayTeamGoalsFor: number;
    homeTeamGoalsAgainst: number;
    awayTeamGoalsAgainst: number;
    result: string;
    homeTeamShotsOnTarget: number;
    awayTeamShotsOnTarget: number;
    homeTeamCorner: number;
    awayTeamCorner: number;
    homeTeamShotsOff: number;
    awayTeamShotsOff: number;
    oddH: number;
    oddD: number;
    oddA: number;
    ppsResult: string;
    homeTeamMatchNumber: number;
    awayTeamMatchNumber: number;
    homeTeamPpsPointsTotal: number;
    awayTeamPpsPointsTotal: number;
}

// Extraction Step 5 - Add Game form points
export interface MatchWithGameFormPoints {
    id: string;
    homeTeam: string;
    awayTeam: string;
    date: Date;
    homeTeamGoalsFor: number;
    awayTeamGoalsFor: number;
    homeTeamGoalsAgainst: number;
    awayTeamGoalsAgainst: number;
    result: string;
    homeTeamShotsOnTarget: number;
    awayTeamShotsOnTarget: number;
    homeTeamCorner: number;
    awayTeamCorner: number;
    homeTeamShotsOff: number;
    awayTeamShotsOff: number;
    oddH: number;
    oddD: number;
    oddA: number;
    ppsResult: string;
    homeTeamMatchNumber: number;
    awayTeamMatchNumber: number;
    homeTeamPpsPointsTotal: number;
    awayTeamPpsPointsTotal: number;
    homeTeamGameFormPoints: number;
    awayTeamGameFormPoints: number;
}

// Extraction Step 6 - Add Game form Diff
export interface MatchWithGameFormDiff {
    id: string;
    homeTeam: string;
    awayTeam: string;
    date: Date;
    homeTeamGoalsFor: number;
    awayTeamGoalsFor: number;
    homeTeamGoalsAgainst: number;
    awayTeamGoalsAgainst: number;
    result: string;
    homeTeamShotsOnTarget: number;
    awayTeamShotsOnTarget: number;
    homeTeamCorner: number;
    awayTeamCorner: number;
    homeTeamShotsOff: number;
    awayTeamShotsOff: number;
    oddH: number;
    oddD: number;
    oddA: number;
    ppsResult: string;
    homeTeamMatchNumber: number;
    awayTeamMatchNumber: number;
    homeTeamPpsPointsTotal: number;
    awayTeamPpsPointsTotal: number;
    homeTeamGameFormPoints: number;
    awayTeamGameFormPoints: number;
    homeTeamGameFormPointsOn6: number;
    awayTeamGameFormPointsOn6: number;
}

// Extraction Step 7 - Add Power Rating
export interface MatchWithPowerRating {
    id: string;
    homeTeam: string;
    awayTeam: string;
    date: Date;
    homeTeamGoalsFor: number;
    awayTeamGoalsFor: number;
    homeTeamGoalsAgainst: number;
    awayTeamGoalsAgainst: number;
    result: string;
    homeTeamShotsOnTarget: number;
    awayTeamShotsOnTarget: number;
    homeTeamCorner: number;
    awayTeamCorner: number;
    homeTeamShotsOff: number;
    awayTeamShotsOff: number;
    oddH: number;
    oddD: number;
    oddA: number;
    ppsResult: string;
    homeTeamMatchNumber: number;
    awayTeamMatchNumber: number;
    homeTeamPpsPointsTotal: number;
    awayTeamPpsPointsTotal: number;
    homeTeamGameFormPoints: number;
    awayTeamGameFormPoints: number;
    homeTeamGameFormPointsOn6: number;
    awayTeamGameFormPointsOn6: number;
    homeTeamPowerRating: number;
    awayTeamPowerRating: number;
}

// Extraction Step 8 - Final Step, all we need is here
export interface MatchFull {
    id: string;
    homeTeam: string;
    awayTeam: string;
    date: Date;
    homeTeamGoalsFor: number;
    awayTeamGoalsFor: number;
    homeTeamGoalsAgainst: number;
    awayTeamGoalsAgainst: number;
    result: string;
    homeTeamShotsOnTarget: number;
    awayTeamShotsOnTarget: number;
    homeTeamCorner: number;
    awayTeamCorner: number;
    homeTeamShotsOff: number;
    awayTeamShotsOff: number;
    oddH: number;
    oddD: number;
    oddA: number;
    ppsResult: string;
    homeTeamMatchNumber: number;
    awayTeamMatchNumber: number;
    homeTeamPpsPointsTotal: number;
    awayTeamPpsPointsTotal: number;
    homeTeamGameFormPoints: number;
    awayTeamGameFormPoints: number;
    homeTeamGameFormPointsOn6: number;
    awayTeamGameFormPointsOn6: number;
    homeTeamPowerRating: number;
    awayTeamPowerRating: number;
    homeTeamPowerRatingAdjustment: number;
    awayTeamPowerRatingAdjustment: number;
}
