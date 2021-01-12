import { NextMatch } from '../ts/nextMatch.type';
import { ChampionshipPageProps } from '../ts/championship.type';

import getNextMatches from './scraping/nextM';
import getPreviousMatches from './scraping/previousM';
import turnIntoRatio from './extraction/turn-into-ratios';
import getFairOdd from './valuebet/getFairOdd';
import getBetDetails from './valuebet/getBetDetails';
import keepOnlyNecessary from './valuebet/keepOnlyNecessary';

const scrap = async (props: ChampionshipPageProps): Promise<Array<NextMatch>> => {
    const { urlForNewMatches, urlForOldMatches, idIndicator, capital, maxOdd } = props;

    const oldM = await getPreviousMatches(urlForOldMatches);

    const newM = await getNextMatches(urlForNewMatches);

    const newMatchesWithRatios = turnIntoRatio(newM, oldM, idIndicator);
    const newMatchesWithFairOdd = getFairOdd(newMatchesWithRatios, idIndicator[0]);
    const newMatchesWithBetDetails = getBetDetails(newMatchesWithFairOdd, capital, maxOdd);

    const nextMatches = keepOnlyNecessary(newMatchesWithBetDetails, idIndicator[0]);

    return nextMatches;
};

export default scrap;
