import React from 'react';
import { motion } from 'framer-motion';

const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    secondary: 'bg-secondary text-white hover:bg-secondary/90',
    outline: 'border border-border text-text-primary hover:bg-background-primary',
    ghost: 'text-text-primary hover:bg-background-primary',
    danger: 'bg-error text-white hover:bg-error/90',
};

const sizes = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-5 py-2.5',
};

export default function Button({
    type = 'button',
    variant = 'primary',
    size = 'md',
    loading = false,
    disabled = false,
    className = '',
    children,
    ...props
}) {
    const isDisabled = disabled || loading;
    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            type={type}
            disabled={isDisabled}
            className={`rounded transition ${variants[variant]} ${sizes[size]} ${isDisabled ? 'opacity-60 cursor-not-allowed' : ''
                } ${className}`}
            {...props}
        >
            {loading && (
                <span className="inline-block w-4 h-4 mr-2 border-2 border-white/70 border-t-transparent rounded-full animate-spin align-[-2px]" />
            )}
            {children}
        </motion.button>
    );
}


