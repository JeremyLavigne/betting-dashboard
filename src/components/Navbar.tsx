import React from 'react';
import { Link } from 'react-router-dom';

import championshipList from '../championshipList';

const Navbar: React.FC = (): JSX.Element => {
    return (
        <nav className="main-menu">
            <Link className="menu-link menu-link__home" to="/">
                Home
            </Link>
            {championshipList.map((champ) => (
                <Link key={champ.path} className="menu-link menu-link__champ" to={`/${champ.path}`}>
                    {champ.name}
                </Link>
            ))}
        </nav>
    );
};

export default Navbar;
