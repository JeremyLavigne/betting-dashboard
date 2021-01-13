import React from 'react';
import { Link } from 'react-router-dom';

import championshipList from '../utils/championshipList';

import '../style/Navbar.css';

const Navbar: React.FC = (): JSX.Element => {
    return (
        <nav>
            <Link className="menu_home_link" to="/">
                Home
            </Link>
            {championshipList.map((champ) => (
                <Link key={champ.path} className="menu_champ_link" to={`/${champ.path}`}>
                    {champ.name}
                </Link>
            ))}
        </nav>
    );
};

export default Navbar;
