import React from 'react';

interface ButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    color?: string;
    purpose?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, color, purpose, children }): JSX.Element => (
    <button type="button" className={`btn btn-${purpose} btn-${purpose}--${color}`} onClick={onClick}>
        {children}
    </button>
);

Button.defaultProps = {
    onClick: () => {
        console.log('Click');
    },
};

export default Button;
