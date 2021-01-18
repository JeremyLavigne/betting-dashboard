// Match object when scraping it from web
export interface PreviousMatch {
    homeTeam: string;
    awayTeam: string;
    date: string;
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

// Match object after adding and calculating properties we need
export interface MatchFull {
    homeTeam: string;
    awayTeam: string;
    date: string;
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
