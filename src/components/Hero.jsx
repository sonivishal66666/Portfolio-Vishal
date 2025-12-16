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

const LiveTerminal = () => {
    const [lines, setLines] = useState([
        { type: 'cmd', text: 'terraform init' },
        { type: 'log', text: 'Initializing provider plugins...' },
        { type: 'success', text: 'Terraform has been successfully initialized!' }
    ]);
    const [currentCommand, setCurrentCommand] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const commands = [
        { cmd: 'terraform apply -auto-approve', output: ['Plan: 4 to add, 0 to change, 0 to destroy.', 'aws_vpc.main: Creating...', 'aws_vpc.main: Creation complete after 4s', 'aws_eks_cluster.main: Creating...', 'aws_eks_cluster.main: Creation complete after 12m', 'Apply complete! Resources: 4 added, 0 changed, 0 destroyed.'] },
        { cmd: 'kubectl get pods -n production', output: ['NAME                              READY   STATUS    RESTARTS   AGE', 'api-gateway-7f8b9c6d5-x2z1y       1/1     Running   0          2d', 'auth-service-6d5c9b8f7-a1b2c      1/1     Running   0          2d', 'payment-service-5a4b3c2d1-e3f4g   1/1     Running   0          2d'] },
        { cmd: 'docker build -t app:latest .', output: ['Sending build context to Docker daemon  2.048kB', 'Step 1/5 : FROM node:18-alpine', 'Step 2/5 : WORKDIR /app', 'Step 3/5 : COPY package*.json ./', 'Step 4/5 : RUN npm install', 'Successfully built 7f8b9c6d5'] },
        { cmd: 'git push origin main', output: ['Enumerating objects: 15, done.', 'Counting objects: 100% (15/15), done.', 'Delta compression using up to 8 threads', 'Compressing objects: 100% (8/8), done.', 'Writing objects: 100% (9/9), 1.24 KiB | 1.24 MiB/s, done.', 'Total 9 (delta 6), reused 0 (delta 0)', 'To github.com:vishal-soni/portfolio.git', '   a1b2c3d..e4f5g6h  main -> main'] }
    ];

    useEffect(() => {
        let isMounted = true;

        const typeString = async (str) => {
            for (let i = 0; i <= str.length; i++) {
                if (!isMounted) return;
                setCurrentCommand(str.slice(0, i));
                await new Promise(r => setTimeout(r, Math.random() * 50 + 30));
            }
        };

        const processCommands = async () => {
            while (isMounted) {
                for (const commandObj of commands) {
                    if (!isMounted) return;

                    // Wait if hovered
                    while (isHovered) {
                        await new Promise(r => setTimeout(r, 500));
                        if (!isMounted) return;
                    }

                    setIsTyping(true);
                    await typeString(commandObj.cmd);
                    setIsTyping(false);

                    if (!isMounted) return;
                    setLines(prev => [...prev, { type: 'cmd', text: commandObj.cmd }]);
                    setCurrentCommand('');

                    for (const outputLine of commandObj.output) {
                        if (!isMounted) return;
                        await new Promise(r => setTimeout(r, Math.random() * 300 + 100));
                        setLines(prev => {
                            const newLines = [...prev, { type: 'log', text: outputLine }];
                            return newLines.slice(-12);
                        });
                    }

                    await new Promise(r => setTimeout(r, 2000));
                }
            }
        };

        processCommands();

        return () => { isMounted = false; };
    }, [isHovered]);

    return (
        <div
            className="absolute inset-10 border border-white/10 bg-black/80 backdrop-blur-md rounded-lg p-6 font-mono text-xs overflow-hidden shadow-2xl neon-border group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Header */}
            <div className="flex justify-between border-b border-white/10 pb-2 mb-2 text-gray-500">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="flex items-center gap-2">
                    <Terminal className="w-3 h-3" />
                    <span>root@vishal-devops:~</span>
                </div>
            </div>

            {/* Terminal Content */}
            <div className="space-y-1 h-[280px] overflow-y-auto scrollbar-hide flex flex-col justify-end">
                {lines.map((line, i) => (
                    <div key={i} className={`${line.type === 'cmd' ? 'text-white font-bold mt-4' : line.type === 'success' ? 'text-green-400' : 'text-gray-400'}`}>
                        {line.type === 'cmd' && <span className="text-primary mr-2">➜</span>}
                        {line.text}
                    </div>
                ))}

                {/* Active Typing Line */}
                <div className="flex items-center text-white font-bold mt-2">
                    <span className="text-primary mr-2">➜</span>
                    <span>{currentCommand}</span>
                    <span className="w-2 h-4 bg-primary ml-1 animate-pulse" />
                </div>
            </div>

            {/* Hover Tooltip Overlay */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute bottom-4 right-4 bg-surface border border-white/10 p-3 rounded-lg shadow-xl z-20"
                    >
                        <div className="flex items-center gap-2 text-primary mb-1">
                            <Cpu className="w-4 h-4" />
                            <span className="font-bold">SYSTEM PAUSED</span>
                        </div>
                        <div className="text-gray-400 text-[10px]">
                            Reviewing logs... <br />
                            Process ID: 8921
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Badges */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-[-10px] p-2 bg-surface border border-white/10 rounded-lg shadow-xl flex items-center gap-2 text-white scale-90 opacity-80"
            >
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-[10px]">SECURE</span>
            </motion.div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-[-10px] p-2 bg-surface border border-white/10 rounded-lg shadow-xl flex items-center gap-2 text-white scale-90 opacity-80"
            >
                <Cpu className="w-4 h-4 text-secondary" />
                <span className="text-[10px]">SCALABLE</span>
            </motion.div>
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
                    className="pointer-events-auto flex flex-col items-center text-center lg:items-start lg:text-left"
                >
                    <div className="flex items-center gap-2 mb-6">
                        <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono tracking-widest flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            SYSTEM ONLINE
                        </div>
                    </div>

                    <div className="relative mb-8">
                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter leading-none font-display relative z-10">
                            <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">VISHAL</span> <br />
                            <span className="text-primary drop-shadow-[0_0_20px_rgba(0,240,255,0.8)] group-hover:text-white transition-colors duration-300">
                                SONI
                            </span>
                        </h1>
                        {/* Glow Effect */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl -z-10 opacity-50 animate-pulse-slow" />

                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/50 rounded-tr-3xl opacity-50" />
                        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-secondary/50 rounded-bl-3xl opacity-50" />
                    </div>

                    <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-lg border-l-2 border-primary/30 pl-6">
                        I build AWS & Kubernetes systems that recover automatically under failure.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-12">
                        <a href="/projects" className="cyber-button px-6 py-3 md:px-8 md:py-4 bg-[#00f0ff] text-black font-bold text-xs md:text-sm tracking-widest hover:bg-white transition-colors inline-block text-center">
                            VIEW PROJECTS
                        </a>
                        <button className="px-6 py-3 md:px-8 md:py-4 border border-white/10 hover:bg-white/5 text-white font-mono text-xs md:text-sm tracking-widest transition-colors">
                            VIEW LOGS
                        </button>
                    </div>

                    {/* Proof Strip */}
                    <div className="mb-12 border-t border-white/10 pt-6">
                        <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-2 text-xs md:text-sm font-mono text-gray-500">
                            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                                <span className="text-primary">AWS</span> • <span>Terraform</span> • <span>Kubernetes</span> • <span>Docker</span> • <span>CI/CD</span>
                            </div>
                            <div className="hidden md:inline text-gray-600">•</div>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-2 text-gray-600">
                                <span>Production deployments</span> • <span>Serverless + Containers</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 flex gap-8 text-gray-500 font-mono text-[10px] md:text-xs">
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
                    className="relative block pointer-events-auto mt-8 lg:mt-0"
                >
                    <div className="relative w-full aspect-square max-w-md mx-auto lg:max-w-none">
                        {/* Holographic Globe Placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse-slow" />

                        <LiveTerminal />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
