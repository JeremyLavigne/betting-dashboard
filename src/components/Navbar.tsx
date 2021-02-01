import React from 'react';
import { Link } from 'react-router-dom';

import championshipList from '../championshipList';
import { NextMatch } from '../ts/nextMatch.type';

interface NavProps {
    allMatches: Array<NextMatch>;
}

const Navbar: React.FC<NavProps> = ({ allMatches }): JSX.Element => {
    return (
        <nav className="main-menu">
            <Link className="menu-link menu-link__home" to="/">
                Home
            </Link>
            {championshipList.map((champ) => {
                const numberOfValues = allMatches
                    .filter((m) => m.championship === champ.id)
                    .filter((m) => m.betOnA || m.betOnD || m.betOnH).length;

                return (
                    <div key={`/${champ.country}/${champ.path}`} className="menu-link">
                        <Link className="menu-link menu-link__champ" to={`/${champ.country}/${champ.path}`}>
                            {champ.name}
                        </Link>
                        {numberOfValues > 0 && <span className="menu-link__values-number">{numberOfValues}</span>}
                    </div>
                );
            })}
        </nav>
    );
};

export default Navbar;
