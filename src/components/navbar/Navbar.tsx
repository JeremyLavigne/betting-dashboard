import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../button/Button';

import './Navbar.css';

interface NavbarProps {
    listOfChampionship: Array<string>;
}

const Navbar: React.FC<NavbarProps> = ({ listOfChampionship }): JSX.Element => {
    console.log('nav');
    return (
        <nav>
            {listOfChampionship.map((champ: string) => (
                <Link to="/champ" key={champ}>
                    {champ}
                </Link>
            ))}
            <Button
                color="primary"
                onClick={() => {
                    console.log('click');
                }}
            >
                Test
            </Button>
        </nav>
    );
};

Navbar.defaultProps = {
    listOfChampionship: ['Championship 1'],
};

export default Navbar;
