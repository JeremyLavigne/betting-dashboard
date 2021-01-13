import { NextMatch } from '../ts/nextMatch.type';
import { Championship } from '../ts/championship.type';

import getNextMatches from './scraping/nextM';
import getPreviousMatches from './scraping/previousM';
import turnIntoRatio from './extraction/turn-into-ratios';
import getFairOdd from './valuebet/getFairOdd';
import getBetDetails from './valuebet/getBetDetails';

const scrap = async (props: Championship): Promise<Array<NextMatch>> => {
    const { country, path, season, id, maxOdd, equationsA, equationsD, equationsH } = props;
    const capital = 100; // Must relocate that at some point

    const urlForOldMatches = `https://www.football-data.co.uk/mmz4281/${season}/${id}.csv`;
    const urlForNewMatches = `https://www.betexplorer.com/soccer/${country}/${path}`;

    const oldM = await getPreviousMatches(urlForOldMatches);
    const newM = await getNextMatches(urlForNewMatches, id);

    const newMatchesWithRatios = turnIntoRatio(newM, oldM);

    const newMatchesWithFairOdd = getFairOdd(newMatchesWithRatios, equationsH, equationsD, equationsA);
    const newMatchesWithBetDetails = getBetDetails(newMatchesWithFairOdd, capital, maxOdd);

    return newMatchesWithBetDetails;
};

export default scrap;
