import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        let requestRef;
        let mouseX = 0;
        let mouseY = 0;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const updateCursor = () => {
            if (cursor) {
                // Direct DOM manipulation for zero latency
                cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            }
            requestRef = requestAnimationFrame(updateCursor);
        };

        const onMouseOver = (e) => {
            if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('button') || e.target.closest('a')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', onMouseMove, { passive: true });
        window.addEventListener('mouseover', onMouseOver, { passive: true });
        requestRef = requestAnimationFrame(updateCursor);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseover', onMouseOver);
            cancelAnimationFrame(requestRef);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
            style={{ willChange: 'transform', marginTop: '-12px', marginLeft: '-12px' }}
        >
            <div className={`relative flex items-center justify-center transition-all duration-150 ${isHovering ? 'scale-150' : 'scale-100'}`}>
                {/* Crosshair Lines */}
                <div className="absolute w-[24px] h-[1px] bg-primary/80" />
                <div className="absolute w-[1px] h-[24px] bg-primary/80" />

                {/* Center Dot */}
                <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />

                {/* Outer Ring (Only on Hover) */}
                <div className={`absolute border border-primary/50 rounded-full transition-all duration-300 ${isHovering ? 'w-8 h-8 opacity-100 rotate-45' : 'w-4 h-4 opacity-0 rotate-0'
                    }`} />
            </div>
        </div>
    );
};

export default CustomCursor;
