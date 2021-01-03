import React from 'react';

import './Button.css';

interface ButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    color?: string;
    purpose?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, color, purpose, children }): JSX.Element => (
    <button type="button" className={`${purpose} button-${color}`} onClick={onClick}>
        {children}
    </button>
);

Button.defaultProps = {
    onClick: () => {
        console.log('Click');
    },
    color: 'primary',
    purpose: 'link',
};

export default Button;
