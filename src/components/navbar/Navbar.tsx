import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar: React.FC = (): JSX.Element => {
    return (
        <nav>
            <Link to="/premier-league">Premier League</Link>
            <Link to="/liga">Liga</Link>
            <Link to="/serie-a">Serie A</Link>
            <Link to="/ligue-1">Ligue 1</Link>
            <Link to="/bundesliga">Bundesliga</Link>
            <Link to="/league-one">League One</Link>
            <Link to="/league-two">League Two</Link>
        </nav>
    );
};

export default Navbar;
