import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    Terminal,
    Cpu,
    Layers,
    Settings,
    Activity,
    Wifi,
    Battery,
    Clock,
    Menu,
    X,
    ChevronRight
} from 'lucide-react';
import CustomCursor from './CustomCursor';

const SystemStatus = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex items-center gap-6 text-xs font-mono text-primary/70">
            <div className="flex items-center gap-2">
                <Cpu className="w-3 h-3" />
                <span>CPU: 12%</span>
            </div>
            <div className="flex items-center gap-2">
                <Activity className="w-3 h-3" />
                <span>MEM: 4.2GB</span>
            </div>
            <div className="flex items-center gap-2">
                <Wifi className="w-3 h-3" />
                <span>NET: CONNECTED</span>
            </div>
            <div className="flex items-center gap-2 text-white">
                <Clock className="w-3 h-3" />
                <span>{time.toLocaleTimeString()}</span>
            </div>
        </div>
    );
};

const DashboardLayout = ({ children }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSidebarHovered, setIsSidebarHovered] = useState(false);
    const location = useLocation();

    const navItems = [
        { path: '/', label: 'OVERVIEW', icon: LayoutDashboard },
        { path: '/projects', label: 'PROJECTS', icon: Layers },
        { path: '/skills', label: 'SKILLS', icon: Cpu },
        { path: '/experience', label: 'LOGS', icon: Terminal },
        { path: '/contact', label: 'CONTACT', icon: Wifi },
    ];

    return (
        <div className="min-h-screen bg-background text-white font-sans selection:bg-primary/30 selection:text-white relative">
            <CustomCursor />

            {/* Background Effects */}
            <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none z-0" />
            <div className="fixed inset-0 bg-scanline opacity-10 pointer-events-none z-50" />
            <div className="fixed inset-0 bg-noise opacity-5 pointer-events-none z-0" />

            {/* Top HUD Bar */}
            <div className="fixed top-0 left-0 right-0 h-12 border-b border-white/10 bg-black/80 backdrop-blur-md z-40 flex items-center justify-between px-6">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-primary font-mono text-xs tracking-widest">
                        <Activity className="w-4 h-4" />
                        <span>SYSTEM ONLINE</span>
                    </div>
                    <div className="h-4 w-[1px] bg-white/10" />
                    <div className="text-[10px] text-gray-500 font-mono">
                        V.2.0.4 // STABLE
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-8 font-mono text-[10px] text-gray-500">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span>NET: CONNECTED</span>
                    </div>
                    <div>CPU: 12%</div>
                    <div>MEM: 4.2GB</div>
                </div>

                <button
                    className="md:hidden p-2 text-gray-400 hover:text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Side Navigation (Desktop) */}
            <motion.div
                className="fixed left-0 top-12 bottom-0 border-r border-white/10 bg-black/90 z-40 hidden md:flex flex-col py-8 gap-2 overflow-hidden"
                initial={{ width: 64 }}
                animate={{ width: isSidebarHovered ? 240 : 64 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onMouseEnter={() => setIsSidebarHovered(true)}
                onMouseLeave={() => setIsSidebarHovered(false)}
            >
                {navItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <Link
                            key={item.label}
                            to={item.path}
                            className={`group relative flex items-center h-12 px-4 transition-colors ${isActive ? 'text-primary' : 'text-gray-500 hover:text-white'}`}
                        >
                            {/* Icon Container */}
                            <div className="min-w-[32px] flex items-center justify-center">
                                <item.icon className="w-5 h-5" />
                            </div>

                            {/* Label */}
                            <motion.span
                                className="ml-4 font-mono text-sm tracking-wider whitespace-nowrap overflow-hidden"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isSidebarHovered ? 1 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {item.label}
                            </motion.span>

                            {/* Active Indicator (Left Border) */}
                            {isActive && (
                                <motion.div
                                    layoutId="activeNav"
                                    className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary"
                                />
                            )}

                            {/* Hover Background */}
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                        </Link>
                    );
                })}

                {/* Expand Hint */}
                <div className="mt-auto px-4 flex items-center justify-center text-gray-700">
                    <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isSidebarHovered ? 'rotate-180' : ''}`} />
                </div>
            </motion.div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, x: '100%' }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: '100%' }}
                    className="fixed inset-0 z-30 bg-background/95 backdrop-blur-xl pt-20 px-6 md:hidden"
                >
                    <div className="space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                to={item.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-full text-left p-4 rounded-lg border border-white/10 hover:bg-white/5 hover:border-primary/50 transition-all flex items-center gap-4"
                            >
                                <div className="text-primary"><item.icon className="w-5 h-5" /></div>
                                <span className="font-mono text-lg">{item.label}</span>
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}

            {/* Main Content Area */}
            <main className="pt-12 md:pl-16 min-h-screen relative z-10 transition-all duration-300">
                <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-24 pb-32">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
