// Object type when scraping in Betexplorer for upcoming matches
export interface Match {
    homeTeam: string | undefined;
    awayTeam: string | undefined;
    date: string | undefined;
    oddH: string | undefined;
    oddD: string | undefined;
    oddA: string | undefined;
}

// Object type when scraping in Football-data.co.uk for previous matches
// Take a little more than needed (Over/Under stuff for example) - can be useful
export interface MatchPlayed {
    Date: string;
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
}
