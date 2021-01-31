import { NextMatch } from '../ts/nextMatch.type';
import { Championship } from '../ts/championship.type';

import getNextMatches from './scraping/nextM';
import getPreviousMatches from './scraping/previousM';
import turnIntoRatio from './extraction/turn-into-ratios';
import getFairOdd from './valuebet/getFairOdd';
import getBetDetails from './valuebet/getBetDetails';
import addOddBasedMethod from './addOddBasedMethod';

// Entry point for getting all matches and transform them into excepted data.
// ----------------------------------------------------------------------------------------------------------
const scrap = async (props: Championship): Promise<Array<NextMatch>> => {
    const {
        country,
        path,
        season,
        id,
        minOdd,
        maxOdd,
        equationsA,
        equationsD,
        equationsH,
        teamsCheck,
        fullSeason,
        firstHalf,
        secondHalf,
        firstQuarter,
        secondQuarter,
        thirdQuarter,
        lastQuarter,
        numberOfMatchSeason,
    } = props;

    const capital = 1000; // Must relocate that at some point

    const urlForOldMatches = `https://www.football-data.co.uk/mmz4281/${season}/${id}.csv`;
    const urlForNewMatches = `https://www.betexplorer.com/soccer/${country}/${path}`;

    const oldM = await getPreviousMatches(urlForOldMatches);
    const newM = await getNextMatches(urlForNewMatches, id);

    const newMatchesWithRatios = turnIntoRatio(newM, oldM, teamsCheck);

    const newMatchesWithFairOdd = getFairOdd(newMatchesWithRatios, equationsH, equationsD, equationsA);

    const newMatchesWithBetDetails = getBetDetails(newMatchesWithFairOdd, capital, minOdd, maxOdd);

    const newMatchesFull = addOddBasedMethod(
        newMatchesWithBetDetails,
        fullSeason,
        firstHalf,
        secondHalf,
        firstQuarter,
        secondQuarter,
        thirdQuarter,
        lastQuarter,
        capital,
        numberOfMatchSeason,
    );

    return newMatchesFull;
};

export default scrap;
