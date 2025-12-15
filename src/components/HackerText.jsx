import React, { useState, useEffect, useRef } from 'react';

const HackerText = ({ text, className = "", speed = 30 }) => {
    const [displayText, setDisplayText] = useState(text);
    const [isHovered, setIsHovered] = useState(false);
    const intervalRef = useRef(null);

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

    const scramble = () => {
        let iteration = 0;

        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText(prev =>
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(intervalRef.current);
            }

            iteration += 1 / 3;
        }, speed);
    };

    useEffect(() => {
        scramble();
        return () => clearInterval(intervalRef.current);
    }, [text]);

    return (
        <span
            className={`font-mono cursor-default ${className}`}
            onMouseEnter={scramble}
        >
            {displayText}
        </span>
    );
};

export default HackerText;
