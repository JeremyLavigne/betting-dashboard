import React from 'react';

import './Button.css';

interface ButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    color?: string;
    role?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, color, role, children }): JSX.Element => (
    <button type="button" className={`${role} button-${color}`} onClick={onClick}>
        {children}
    </button>
);

Button.defaultProps = {
    onClick: () => {
        console.log('Click');
    },
    color: 'primary',
    role: 'link',
};

export default Button;
