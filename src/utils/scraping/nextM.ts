import axios from 'axios';
import cheerio from 'cheerio';

import { NextMatch } from '../../ts/nextMatch.type';

// Scraping betexplorer website to receive upcoming matches (team, date & odds)
const getMatches = async (url: string, id: string): Promise<Array<NextMatch>> => {
    const page = await axios.get(url);

    if (!page) {
        console.error(`failed to load ${url}`);
        return [];
    }

    const $ = cheerio.load(page.data);

    // Filter to remove live or finished matches - (parent of parent have no class except in that case)
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

    // 3 times more odds than dates or teams. Odds always in order : Home-Draw-Away
    const odds: Array<string | undefined> = [];
    $('.table-main--leaguefixtures .table-main__odds')
        .filter((i, el) => typeof $(el).parent().attr('class') === 'undefined')
        .each((i, el) => {
            odds.push($(el).children().attr('data-odd'));
        });

    const matches: Array<NextMatch> = [];
    for (let i = 0; i < odds.length; i += 3) {
        // Fix date format - Received a date like that: 12.09 18:00 or 'Today ..' or 'Tomorrow ...'
        const day = dates[i / 3]?.substr(0, 2);
        const month = dates[i / 3]?.substr(3, 2);

        let dateRightFormat = '';
        if (month === 'ay') {
            // Means we have a date like 'Today ...'
            dateRightFormat = new Date().toString();
        } else if (month === 'or') {
            // Means we have a date like 'Tomorrow ...'
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            dateRightFormat = tomorrow.toString();
        } else {
            dateRightFormat = `${month}/${day}/${new Date().getFullYear()}`;
        }

        const match: NextMatch = {
            championship: id,
            homeTeam: teams[i / 3][0],
            awayTeam: teams[i / 3][1],
            date: new Date(dateRightFormat).toISOString(),
            oddH: Number(odds[i]),
            oddD: Number(odds[i + 1]),
            oddA: Number(odds[i + 2]),
            // Default properties - to match a single object type
            fairOddH: 50,
            fairOddD: 50,
            fairOddA: 50,
            betAmountH: 0,
            betAmountD: 0,
            betAmountA: 0,
            betOnH: false,
            betOnD: false,
            betOnA: false,
        };
        matches.push(match);
    }

    return matches;
};

export default getMatches;
