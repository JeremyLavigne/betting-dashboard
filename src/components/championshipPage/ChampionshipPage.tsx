import React, { useState } from 'react';

import getNextMatches from '../../utils/scraping/nextM';
import getPreviousMatches from '../../utils/scraping/previousM';
import turnIntoRatio from '../../utils/extraction/turn-into-ratios';
import getFairOdd from '../../utils/valuebet/getFairOdd';
import getBetDetails from '../../utils/valuebet/getBetDetails';

import { MatchWithBetDetails } from '../../ts/app_types';

import Button from '../button/Button';
import MatchLine from '../matchLine/MatchLine';

import './ChampionshipPage.css';

interface ChampionshipPageProps {
    urlForNewMatches: string;
    urlForOldMatches: string;
    idIndicator: Array<string>;
    capital: number;
    maxOdd: number;
}

const ChampionshipPage: React.FC<ChampionshipPageProps> = (props): JSX.Element => {
    const [nextMatches, setNextMatches] = useState<Array<MatchWithBetDetails>>([]);
    const { urlForNewMatches, urlForOldMatches, idIndicator, capital, maxOdd } = props;

    const handleScrap = () => {
        getPreviousMatches(urlForOldMatches).then((oldM) => {
            getNextMatches(urlForNewMatches).then((newM) => {
                const newMatchesWithRatios = turnIntoRatio(newM, oldM, idIndicator);
                const newMatchesWithFairOdd = getFairOdd(newMatchesWithRatios, idIndicator[0]);
                const newMatchesWithBetDetails = getBetDetails(newMatchesWithFairOdd, capital, maxOdd);
                setNextMatches(newMatchesWithBetDetails);
            });
        });
    };

    console.log(nextMatches);

    return (
        <div className="championship_page">
            <h1>{idIndicator[0]}</h1>
            <div>
                <Button purpose="scrap" color="yellow" onClick={handleScrap}>
                    Scrap it
                </Button>
            </div>
            <div className="championship_next_matches">
                <h3>Next matches</h3>
                {nextMatches.map((m) => (
                    <MatchLine key={`${m.homeTeam}-${m.date}`} match={m} />
                ))}
            </div>
        </div>
    );
};

ChampionshipPage.defaultProps = {
    urlForNewMatches: 'https://www.betexplorer.com/soccer/england/premier-league/',
    urlForOldMatches: 'https://www.football-data.co.uk/mmz4281/2021/E0.csv',
    idIndicator: ['PL', '20192020'],
    capital: 100,
    maxOdd: 3,
};

export default ChampionshipPage;
