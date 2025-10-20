import React, { forwardRef, ButtonHTMLAttributes } from 'react';
import styles from './button.module.scss';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            variant = 'primary',
            size = 'sm',
            className = '',
            style,
            type = 'button',
            disabled = false,
            ...rest
        },
        ref,
    ) => {
        const classes = [styles.customButton, styles[variant], styles[size], className]
            .filter(Boolean)
            .join(' ');

        return (
            <button
                ref={ref}
                type={type}
                className={classes}
                style={style}
                disabled={disabled}
                {...rest}
            >
                {children}
            </button>
        );
    },
);

Button.displayName = 'Button';

export default Button;
