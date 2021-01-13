import React, { useEffect, useState } from 'react';

// Types
import { NextMatch } from '../ts/nextMatch.type';
import { ChampionshipPageProps } from '../ts/championship.type';

// Components
import MatchLine from '../components/MatchLine';
import Button from '../components/Button';

// Methods
import scrap from '../utils/scrap';

// Api
import lastUpdateApi from '../api/lastUpdate';
import nextMatchesApi from '../api/nextMatches';

// Css
import '../style/ChampionshipPage.css';

// ================================================================================

const ChampionshipPage: React.FC<ChampionshipPageProps> = (props): JSX.Element => {
    const [nextMatches, setNextMatches] = useState<Array<NextMatch>>([]);
    const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
    const [nolastUpdateInDb, setNoLastUpdateInDb] = useState<boolean>(true);
    const { champ } = props;
    const { id, name } = champ;

    useEffect(() => {
        lastUpdateApi.getByChamp(id).then((res) => {
            if (typeof res[0] !== 'undefined') {
                setLastUpdate(res[0].date);
                setNoLastUpdateInDb(false);
            } else {
                setNoLastUpdateInDb(true);
            }
        });
        nextMatchesApi.getAllByChamp(id).then((res) => {
            setNextMatches(res);
        });
    }, [id]);

    const handleRefresh = async () => {
        // Reset current data
        lastUpdateApi.deleteByChamp(id);
        nextMatchesApi.deleteAllByChamp(id);

        // Fetch update one
        const matches = await scrap(champ);

        // Store update data
        lastUpdateApi
            .createForChamp({
                championship: id,
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
            <h1>{name}</h1>
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
    champ: {
        id: '',
        name: '',
        path: '',
        country: '',
        season: '',
        maxOdd: [],
        equationsH: [],
        equationsD: [],
        equationsA: [],
        teamsCheck: [],
    },
};

export default ChampionshipPage;
