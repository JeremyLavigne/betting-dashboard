import { NextMatch } from '../ts/nextMatch.type';
import { Championship } from '../ts/championship.type';

import getNextMatches from './scraping/nextM';
import getPreviousMatches from './scraping/previousM';
import turnIntoRatio from './extraction/turn-into-ratios';
import getFairOdd from './valuebet/getFairOdd';
import getBetDetails from './valuebet/getBetDetails';
import keepOnlyNecessary from './valuebet/keepOnlyNecessary';

const scrap = async (props: Championship): Promise<Array<NextMatch>> => {
    const { country, path, season, id, maxOdd, name } = props;
    const capital = 100; // Must relocate that at some point

    const urlForOldMatches = `https://www.football-data.co.uk/mmz4281/${season}/${id}.csv`;
    const urlForNewMatches = `https://www.betexplorer.com/soccer/${country}/${path}`;

    const oldM = await getPreviousMatches(urlForOldMatches);
    const newM = await getNextMatches(urlForNewMatches);

    const idIndicator = [id, season, name];

    const newMatchesWithRatios = turnIntoRatio(newM, oldM);
    const newMatchesWithFairOdd = getFairOdd(newMatchesWithRatios, idIndicator[0]);
    const newMatchesWithBetDetails = getBetDetails(newMatchesWithFairOdd, capital, maxOdd);

    const nextMatches = keepOnlyNecessary(newMatchesWithBetDetails, idIndicator[0]);

    return nextMatches;
};

export default scrap;
