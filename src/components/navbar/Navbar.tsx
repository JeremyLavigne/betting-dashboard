import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar: React.FC = (): JSX.Element => {
    return (
        <nav>
            <Link className="menu_home_link" to="/">
                Home
            </Link>
            <Link className="menu_champ_link" to="/premier-league">
                Premier League
            </Link>
            <Link className="menu_champ_link" to="/liga">
                Liga
            </Link>
            <Link className="menu_champ_link" to="/serie-a">
                Serie A
            </Link>
            <Link className="menu_champ_link" to="/ligue-1">
                Ligue 1
            </Link>
            <Link className="menu_champ_link" to="/bundesliga">
                Bundesliga
            </Link>
            <Link className="menu_champ_link" to="/league-one">
                League One
            </Link>
            <Link className="menu_champ_link" to="/league-two">
                League Two
            </Link>
        </nav>
    );
};

export default Navbar;
