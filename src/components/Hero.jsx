import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github, FileText, Terminal, Shield, Cpu, Globe } from 'lucide-react';
import Scene3D from './Scene3D';

const BootSequence = ({ onComplete }) => {
    const [logs, setLogs] = useState([]);

    const bootLogs = [
        "INITIALIZING KERNEL...",
        "LOADING MODULES: [NET, SEC, CLOUD]...",
        "MOUNTING FILESYSTEM...",
        "ESTABLISHING SECURE CONNECTION...",
        "AUTHENTICATING USER: VISHAL...",
        "ACCESS GRANTED.",
        "SYSTEM READY."
    ];

    useEffect(() => {
        let delay = 0;
        bootLogs.forEach((log, index) => {
            delay += Math.random() * 300 + 100;
            setTimeout(() => {
                setLogs(prev => [...prev, log]);
                if (index === bootLogs.length - 1) {
                    setTimeout(onComplete, 800);
                }
            }, delay);
        });
    }, []);

    return (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center font-mono text-primary">
            <div className="w-full max-w-md p-6">
                <div className="mb-4 flex items-center gap-2 border-b border-primary/30 pb-2">
                    <Terminal className="w-5 h-5 animate-pulse" />
                    <span className="font-bold tracking-widest">SYSTEM BOOT</span>
                </div>
                <div className="space-y-1 h-64 overflow-hidden relative">
                    {logs.map((log, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-sm"
                        >
                            <span className="text-gray-500">[{new Date().toLocaleTimeString()}]</span> {log}
                        </motion.div>
                    ))}
                    <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black to-transparent" />
                </div>
                <div className="mt-4 h-1 bg-gray-900 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-primary"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                    />
                </div>
            </div>
        </div>
    );
};

const Hero = () => {
    const [booted, setBooted] = useState(false);

    if (!booted) {
        return <BootSequence onComplete={() => setBooted(true)} />;
    }

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* 3D Network Background */}
            <Scene3D />

            <div className="relative z-10 max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center pointer-events-none">

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="pointer-events-auto"
                >
                    <div className="flex items-center gap-2 mb-6">
                        <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono tracking-widest flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            SYSTEM ONLINE
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-none font-display">
                        AUTOMATING <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary glitch-text" data-text="THE FUTURE">
                            THE FUTURE
                        </span>
                    </h1>

                    <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-lg border-l-2 border-primary/30 pl-6">
                        Architecting self-healing cloud infrastructure and high-velocity DevOps pipelines.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="cyber-button px-8 py-4 bg-primary text-black font-bold text-sm tracking-widest hover:bg-white transition-colors clip-path-polygon">
                            INITIATE PROJECT
                        </button>
                        <button className="px-8 py-4 border border-white/10 hover:bg-white/5 text-white font-mono text-sm tracking-widest transition-colors">
                            VIEW LOGS
                        </button>
                    </div>

                    <div className="mt-12 flex gap-8 text-gray-500 font-mono text-xs">
                        <div>
                            <div className="text-primary mb-1">UPTIME</div>
                            <div>99.999%</div>
                        </div>
                        <div>
                            <div className="text-primary mb-1">LATENCY</div>
                            <div>24ms</div>
                        </div>
                        <div>
                            <div className="text-primary mb-1">REGION</div>
                            <div>AP-SOUTH-1</div>
                        </div>
                    </div>
                </motion.div>

                {/* Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative hidden lg:block pointer-events-auto"
                >
                    <div className="relative w-full aspect-square">
                        {/* Holographic Globe Placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse-slow" />

                        <div className="absolute inset-10 border border-white/10 bg-black/50 backdrop-blur-sm rounded-lg p-6 font-mono text-xs text-green-400 overflow-hidden shadow-2xl neon-border">
                            <div className="flex justify-between border-b border-white/10 pb-2 mb-2 text-gray-500">
                                <span>TERMINAL</span>
                                <span>BASH</span>
                            </div>
                            <div className="space-y-1">
                                <div className="flex gap-2">
                                    <span className="text-primary">➜</span>
                                    <span>terraform apply -auto-approve</span>
                                </div>
                                <div className="text-gray-500">Initializing modules...</div>
                                <div className="text-gray-500">Creating VPC... <span className="text-green-500">Done (4s)</span></div>
                                <div className="text-gray-500">Provisioning EKS Cluster... <span className="text-green-500">Done (12m)</span></div>
                                <div className="text-gray-500">Deploying Ingress Controller... <span className="text-green-500">Done (30s)</span></div>
                                <div className="flex gap-2 mt-2">
                                    <span className="text-primary">➜</span>
                                    <span className="animate-pulse">_</span>
                                </div>
                            </div>

                            {/* Floating Badges */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-10 right-[-20px] p-3 bg-surface border border-white/10 rounded-lg shadow-xl flex items-center gap-2 text-white"
                            >
                                <Shield className="w-4 h-4 text-primary" />
                                <span>SECURE</span>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-20 left-[-20px] p-3 bg-surface border border-white/10 rounded-lg shadow-xl flex items-center gap-2 text-white"
                            >
                                <Cpu className="w-4 h-4 text-secondary" />
                                <span>SCALABLE</span>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
