import axios from 'axios';
import cheerio from 'cheerio';

import { Match } from '../../ts/nextMatch.type';

// Return a Promise with expected Array
const getMatches = async (url: string): Promise<Array<Match>> => {
    const page = await axios.get(url);

    if (!page) {
        console.error(`failed to load ${url}`);
        return [];
    }

    const $ = cheerio.load(page.data);

    // Filter to remove live or finished matches
    // (parent of parent have no class except in that case)
    const teams: Array<Array<string>> = [];
    $('.table-main--leaguefixtures .in-match')
        .filter((i, el) => typeof $(el).parent().parent().attr('class') === 'undefined')
        .each((i, el) => {
            const helper: Array<string> = []; // 2 span : [homeTeam, AwayTeam]
            $('span', el).each((j, elt) => {
                helper.push($(elt).text());
            });
            teams.push(helper);
        });

    // Filter to remove unwanted data.
    const dates: Array<string | undefined> = [];
    $('.table-main--leaguefixtures .h-text-right')
        .filter((i, el) => $(el).text() !== '\n' && !$(el).text().match('Live'))
        .each((i, el) => {
            dates.push($(el).text());
        });

    // Same as teams, filter to remove live or finished matches
    const odds: Array<string | undefined> = [];
    $('.table-main--leaguefixtures .table-main__odds')
        .filter((i, el) => typeof $(el).parent().attr('class') === 'undefined')
        .each((i, el) => {
            odds.push($(el).children().attr('data-odd'));
        });

    const matches = [];
    // 3 times more odds than dates or teams.
    // Odds always in order : Home-Draw-Away
    for (let i = 0; i < odds.length; i += 3) {
        const match = {
            homeTeam: teams[i / 3][0],
            awayTeam: teams[i / 3][1],
            date: dates[i / 3],
            oddH: odds[i],
            oddD: odds[i + 1],
            oddA: odds[i + 2],
        };
        matches.push(match);
    }

    return matches;
};

export default getMatches;
