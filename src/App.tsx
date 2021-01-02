import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import ChampionshipPage from './components/championshipPage/ChampionshipPage';

const App: React.FC = (): JSX.Element => {
    // Set the capital here
    const capital = 100;

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/premier-league">
                    <ChampionshipPage
                        urlForNewMatches="https://www.betexplorer.com/soccer/england/premier-league/"
                        urlForOldMatches="https://www.football-data.co.uk/mmz4281/2021/E0.csv"
                        idIndicator={['PL', '20192020']}
                        capital={capital}
                        maxOdd={4.2}
                    />
                </Route>
                <Route path="/liga">
                    <ChampionshipPage
                        urlForNewMatches="https://www.betexplorer.com/soccer/spain/laliga/"
                        urlForOldMatches="https://www.football-data.co.uk/mmz4281/2021/SP1.csv"
                        idIndicator={['SP1', '20192020']}
                        capital={capital}
                        maxOdd={2.4}
                    />
                </Route>
                <Route path="/serie-a">
                    <ChampionshipPage
                        urlForNewMatches="https://www.betexplorer.com/soccer/italy/serie-a/"
                        urlForOldMatches="https://www.football-data.co.uk/mmz4281/2021/I1.csv"
                        idIndicator={['SA', '20192020']}
                        capital={capital}
                        maxOdd={2.6}
                    />
                </Route>
                <Route path="/ligue-1">
                    <ChampionshipPage
                        urlForNewMatches="https://www.betexplorer.com/soccer/france/ligue-1/"
                        urlForOldMatches="https://www.football-data.co.uk/mmz4281/2021/F1.csv"
                        idIndicator={['L1', '20192020']}
                        capital={capital}
                        maxOdd={2.3}
                    />
                </Route>
                <Route path="/bundesliga">
                    <ChampionshipPage
                        urlForNewMatches="https://www.betexplorer.com/soccer/germany/bundesliga/"
                        urlForOldMatches="https://www.football-data.co.uk/mmz4281/2021/D1.csv"
                        idIndicator={['B1', '20192020']}
                        capital={capital}
                        maxOdd={2.6}
                    />
                </Route>
                <Route path="/league-one">
                    <ChampionshipPage
                        urlForNewMatches="https://www.betexplorer.com/soccer/england/league-one/"
                        urlForOldMatches="https://www.football-data.co.uk/mmz4281/2021/E2.csv"
                        idIndicator={['LO', '20192020']}
                        capital={capital}
                        maxOdd={2.4}
                    />
                </Route>
                <Route path="/league-two">
                    <ChampionshipPage
                        urlForNewMatches="https://www.betexplorer.com/soccer/england/league-two/"
                        urlForOldMatches="https://www.football-data.co.uk/mmz4281/2021/E3.csv"
                        idIndicator={['LT', '20192020']}
                        capital={capital}
                        maxOdd={2.5}
                    />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;