import React from 'react';

interface ChampionshipPageProps {
    test: string;
}

const Navbar: React.FC<ChampionshipPageProps> = ({ test }): JSX.Element => {
    console.log('nav');
    return <div>{test}</div>;
};

Navbar.defaultProps = {
    test: 'test',
};

export default Navbar;
