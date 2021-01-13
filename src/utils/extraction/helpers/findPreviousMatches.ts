/// ==============================================================================
// === return previous match & 6th pevious match for both home&away team
// ==============================================================================

import { MatchFull } from '../../../ts/previousMatch.type';

interface PreviousMatches {
    homeTeamPreviousMatch: MatchFull | Record<string, never>; // cover case of {}
    awayTeamPreviousMatch: MatchFull | Record<string, never>;
    homeTeamPrevious6: MatchFull | Record<string, never>;
    awayTeamPrevious6: MatchFull | Record<string, never>;
}

const findPreviousMatches = (existingMatch: MatchFull, newDb: Array<MatchFull>): PreviousMatches => {
    // Find the match before
    const homeTeamPreviousMatch =
        newDb.find(
            (match) =>
                (match.homeTeam === existingMatch.homeTeam &&
                    match.homeTeamMatchNumber === existingMatch.homeTeamMatchNumber - 1) ||
                (match.awayTeam === existingMatch.homeTeam &&
                    match.awayTeamMatchNumber === existingMatch.homeTeamMatchNumber - 1),
        ) || {};

    const awayTeamPreviousMatch =
        newDb.find(
            (match) =>
                (match.homeTeam === existingMatch.awayTeam &&
                    match.homeTeamMatchNumber === existingMatch.awayTeamMatchNumber - 1) ||
                (match.awayTeam === existingMatch.awayTeam &&
                    match.awayTeamMatchNumber === existingMatch.awayTeamMatchNumber - 1),
        ) || {};

    // Find the 6th match before
    const homeTeamPrevious6 =
        newDb.find(
            (match) =>
                (match.homeTeam === existingMatch.homeTeam &&
                    match.homeTeamMatchNumber === existingMatch.homeTeamMatchNumber - 6) ||
                (match.awayTeam === existingMatch.homeTeam &&
                    match.awayTeamMatchNumber === existingMatch.homeTeamMatchNumber - 6),
        ) || {};

    const awayTeamPrevious6 =
        newDb.find(
            (match) =>
                (match.homeTeam === existingMatch.awayTeam &&
                    match.homeTeamMatchNumber === existingMatch.awayTeamMatchNumber - 6) ||
                (match.awayTeam === existingMatch.awayTeam &&
                    match.awayTeamMatchNumber === existingMatch.awayTeamMatchNumber - 6),
        ) || {};

    return {
        homeTeamPreviousMatch,
        awayTeamPreviousMatch,
        homeTeamPrevious6,
        awayTeamPrevious6,
    };
};

export default findPreviousMatches;
