import React, { useEffect, useState } from 'react';

// Types
import { NextMatch } from '../../ts/db_types';
import { ChampionshipPageProps } from '../../ts/cpnt_types';

// Components
import MatchLine from '../matchLine/MatchLine';
import Button from '../button/Button';

// Methods
import scrap from '../../utils/scrap';

// Api
import lastUpdateApi from '../../api/lastUpdate';
import nextMatchesApi from '../../api/nextMatches';

// Css
import './ChampionshipPage.css';

// ================================================================================
const ChampionshipPage: React.FC<ChampionshipPageProps> = (props): JSX.Element => {
    const [nextMatches, setNextMatches] = useState<Array<NextMatch>>([]);
    const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
    const [nolastUpdateInDb, setNoLastUpdateInDb] = useState<boolean>(true);
    const { idIndicator } = props;

    useEffect(() => {
        lastUpdateApi.getByChamp(idIndicator[0]).then((res) => {
            if (typeof res[0] !== 'undefined') {
                setLastUpdate(res[0].date);
                setNoLastUpdateInDb(false);
            } else {
                setNoLastUpdateInDb(true);
            }
        });
        nextMatchesApi.getAllByChamp(idIndicator[0]).then((res) => {
            setNextMatches(res);
        });
    }, [idIndicator]);

    const handleRefresh = async () => {
        // Reset current data
        lastUpdateApi.deleteByChamp(idIndicator[0]);
        nextMatchesApi.deleteAllByChamp(idIndicator[0]);

        // Fetch update one
        const matches = await scrap(props);

        // Store update data
        lastUpdateApi
            .createForChamp({
                championship: idIndicator[0],
                date: new Date(),
            })
            .then(() => {
                setLastUpdate(new Date());
            });
        nextMatchesApi.createAllForChamp(matches).then((res) => setNextMatches(res));
    };

    console.log(nextMatches);
    // console.log(lastUpdate);

    return (
        <div className="championship_page">
            <h1>{idIndicator[2]}</h1>
            <div>
                <Button purpose="refresh" color="yellow" onClick={handleRefresh}>
                    Refresh
                </Button>
                {!nolastUpdateInDb && (
                    <span className="championship_last_update">
                        Last Update : {lastUpdate.toString().substr(0, 10)} {lastUpdate.toString().substr(11, 5)}
                    </span>
                )}
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
    urlForNewMatches: '',
    urlForOldMatches: '',
    idIndicator: ['', ''],
    capital: 1,
    maxOdd: [0, 0, 0],
};

export default ChampionshipPage;
