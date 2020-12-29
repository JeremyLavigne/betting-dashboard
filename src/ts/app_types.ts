// Object type when scraping in Betexplorer for upcoming match
export interface Match {
    homeTeam: string | undefined;
    awayTeam: string | undefined;
    date: string | undefined;
    oddH: string | undefined;
    oddD: string | undefined;
    oddA: string | undefined;
}
