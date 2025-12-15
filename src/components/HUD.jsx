import React, { useState, useEffect } from 'react';
import { Activity, Wifi, Battery, Clock } from 'lucide-react';

const HUD = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        const timer = setInterval(() => setTime(new Date()), 1000);

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {/* Corner Brackets */}
            <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-primary/50 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-primary/50 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-primary/50 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-primary/50 rounded-br-lg" />

            {/* Top Center Status */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-8 bg-black/50 backdrop-blur-sm px-6 py-2 rounded-full border border-white/10">
                <div className="flex items-center gap-2 text-primary text-xs font-mono">
                    <Activity className="w-3 h-3 animate-pulse" />
                    <span>SYS_NORMAL</span>
                </div>
                <div className="flex items-center gap-2 text-primary text-xs font-mono">
                    <Wifi className="w-3 h-3" />
                    <span>CONNECTED</span>
                </div>
                <div className="flex items-center gap-2 text-primary text-xs font-mono">
                    <Clock className="w-3 h-3" />
                    <span>{time.toLocaleTimeString()}</span>
                </div>
            </div>

            {/* Mouse Coordinates */}
            <div className="absolute bottom-8 right-8 text-right font-mono text-[10px] text-primary/70">
                <div>X: {mousePos.x.toString().padStart(4, '0')}</div>
                <div>Y: {mousePos.y.toString().padStart(4, '0')}</div>
            </div>

            {/* Decorative Lines */}
            <div className="absolute top-1/2 left-4 w-1 h-24 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
            <div className="absolute top-1/2 right-4 w-1 h-24 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

            {/* Scanline Effect */}
            <div className="absolute inset-0 bg-scanline opacity-5 pointer-events-none" />

            {/* Vignette */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/40 pointer-events-none" />
        </div>
    );
};

export default HUD;
