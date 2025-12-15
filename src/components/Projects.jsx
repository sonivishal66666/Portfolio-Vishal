import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Server, Database, Globe, Shield, Cpu, ExternalLink, Github, Terminal, X, ChevronRight, Layers, Cloud, Lock, Zap } from 'lucide-react';
import HackerText from './HackerText';

const ProjectCard = ({ project, onClick, index }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => onClick(project)}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative w-full md:w-[350px] h-[450px] rounded-xl bg-black/40 border border-white/10 cursor-pointer group perspective-1000"
        >
            {/* Neon Glow */}
            <div
                style={{
                    transform: "translateZ(75px)",
                }}
                className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
            />

            {/* Card Content */}
            <div
                style={{
                    transform: "translateZ(50px)",
                }}
                className="absolute inset-0 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 overflow-hidden flex flex-col p-6 shadow-2xl group-hover:border-primary/50 transition-colors duration-300"
            >
                {/* Header */}
                <div className="flex justify-between items-start mb-8">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                        {project.icon}
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] font-mono text-primary animate-pulse">● LIVE</span>
                        <span className="text-[10px] font-mono text-gray-500">ID: {project.id}</span>
                    </div>
                </div>

                {/* Title & Desc */}
                <div className="mb-auto">
                    <h3 className="text-2xl font-bold font-display text-white mb-2 group-hover:text-primary transition-colors">
                        <HackerText text={project.title} speed={50} />
                    </h3>
                    <p className="text-sm text-gray-400 font-mono leading-relaxed line-clamp-3">
                        {project.shortDesc}
                    </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-4">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((t, i) => (
                            <span key={i} className="text-[10px] px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5 group-hover:border-primary/30 transition-colors">
                                {t}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono text-gray-500 group-hover:text-primary transition-colors">
                        <span>ACCESS_TERMINAL</span>
                        <ChevronRight className="w-4 h-4" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const SidePanel = ({ project, onClose }) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            />
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-full w-full md:w-[600px] bg-black border-l border-primary/20 z-50 shadow-[0_0_50px_rgba(0,240,255,0.1)] overflow-y-auto"
            >
                <div className="sticky top-0 bg-black/90 backdrop-blur-md border-b border-white/10 p-6 flex items-center justify-between z-10">
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-primary/10 rounded border border-primary/30 text-primary">
                            {project.icon}
                        </div>
                        <div>
                            <h2 className="text-xl font-bold font-display text-white">{project.title}</h2>
                            <div className="text-xs font-mono text-gray-500">SYSTEM_DIAGNOSTIC // {project.id}</div>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="p-8 space-y-8">
                    <div>
                        <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                            <Terminal className="w-4 h-4 text-primary" /> MISSION BRIEF
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed font-mono border-l-2 border-primary/50 pl-4 bg-primary/5 p-4 rounded-r">
                            {project.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        {project.stats.map((stat, i) => (
                            <div key={i} className="bg-white/5 p-4 rounded border border-white/5 hover:border-primary/30 transition-colors group">
                                <div className="text-[10px] text-gray-500 mb-1 font-mono group-hover:text-primary transition-colors">{stat.label}</div>
                                <div className="text-xl font-bold text-white">{stat.value}</div>
                            </div>
                        ))}
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                            <Layers className="w-4 h-4 text-secondary" /> TECH STACK
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t, i) => (
                                <span key={i} className="px-3 py-1.5 text-xs font-mono rounded bg-white/5 border border-white/10 text-gray-300 hover:bg-primary/10 hover:border-primary/30 transition-all cursor-default">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                            <Shield className="w-4 h-4 text-green-400" /> CORE PROTOCOLS
                        </h3>
                        <ul className="space-y-3">
                            {project.features.map((f, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-400 bg-white/5 p-3 rounded border border-white/5">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0 shadow-[0_0_5px_#00f0ff]" />
                                    {f}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex gap-4 pt-4 border-t border-white/10">
                        <button className="flex-1 py-4 bg-primary text-black font-bold text-sm tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2 rounded relative overflow-hidden group">
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <ExternalLink className="w-4 h-4 relative z-10" /> <span className="relative z-10">INITIATE DEMO</span>
                        </button>
                        <button className="flex-1 py-4 border border-white/10 text-white font-mono text-sm tracking-widest hover:bg-white/5 transition-colors flex items-center justify-center gap-2 rounded">
                            <Github className="w-4 h-4" /> ACCESS SOURCE
                        </button>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: "PRJ-001",
            title: "Arvis Ticketing",
            shortDesc: "Serverless online ticketing platform for bus, train, and events.",
            icon: <Globe className="w-8 h-8 text-primary" />,
            description: "Architected a serverless online ticketing platform supporting bus, train, flight, and event bookings. Designed backend services using AWS Lambda and Amazon RDS to handle concurrent user requests efficiently. Integrated Cashfree Payment Gateway with secure transaction flow.",
            tech: ["PHP", "AWS Lambda", "MySQL", "Cashfree"],
            stats: [
                { label: "ARCHITECTURE", value: "Serverless" },
                { label: "PAYMENTS", value: "Secure" },
                { label: "DB", value: "RDS" }
            ],
            features: [
                "Real-time booking updates",
                "Secure transaction flow",
                "Dark mode UI"
            ]
        },
        {
            id: "PRJ-002",
            title: "Cafe Management",
            shortDesc: "Serverless ordering system with Stripe payments.",
            icon: <Database className="w-8 h-8 text-secondary" />,
            description: "Developed a serverless web application for online ordering, menu management, and customer payments. Implemented REST APIs using AWS Lambda and API Gateway. Used DynamoDB for low-latency storage and integrated Stripe API for payments.",
            tech: ["React", "Node.js", "DynamoDB", "Stripe"],
            stats: [
                { label: "LATENCY", value: "Low" },
                { label: "API", value: "REST" },
                { label: "SCALE", value: "Auto" }
            ],
            features: [
                "Real-time order status",
                "Menu management",
                "Secure Stripe integration"
            ]
        },
        {
            id: "PRJ-003",
            title: "Face-Body Suite",
            shortDesc: "Computer vision system for facial recognition and posture detection.",
            icon: <Shield className="w-8 h-8 text-green-400" />,
            description: "Built a computer vision system for facial recognition, posture detection, and face extraction. Implemented real-time facial recognition using OpenCV and face recognition library. Optimized for real-time performance.",
            tech: ["Python", "OpenCV", "MediaPipe", "ML"],
            stats: [
                { label: "ACCURACY", value: "High" },
                { label: "SPEED", value: "Real-time" },
                { label: "TYPE", value: "CV" }
            ],
            features: [
                "Facial recognition",
                "Posture detection",
                "Face extraction"
            ]
        }
    ];

    return (
        <section className="py-20 relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Holographic Blueprint Background */}
            <div className="absolute inset-0 pointer-events-none bg-black">
                {/* Technical Grid */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `linear-gradient(to right, #00f0ff 1px, transparent 1px), linear-gradient(to bottom, #00f0ff 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                        maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
                    }}
                />

                {/* Scanning Laser Line */}
                <motion.div
                    animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 w-full h-[2px] bg-primary shadow-[0_0_20px_#00f0ff]"
                />

                {/* Rotating Wireframe Cube (Simulated) */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-20 right-20 w-64 h-64 border border-primary/20 rounded-full opacity-20"
                    style={{ borderStyle: 'dashed' }}
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-20 left-20 w-48 h-48 border border-secondary/20 rounded-full opacity-20"
                    style={{ borderStyle: 'dotted' }}
                />

                {/* Digital Noise / Grain */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-6">
                        <Zap className="w-3 h-3 animate-pulse" />
                        <span>SYSTEM_OVERRIDE_ENGAGED</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold font-display mb-6 tracking-tight">
                        <HackerText text="PROJECT_ARCHIVE" />
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg font-mono">
                        Advanced infrastructure deployments and security protocols.
                    </p>
                </motion.div>

                {/* 3D Carousel Grid */}
                <div className="flex flex-wrap justify-center gap-8 perspective-2000">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            onClick={setSelectedProject}
                        />
                    ))}
                </div>
            </div>

            {/* Side Panel */}
            <AnimatePresence>
                {selectedProject && (
                    <SidePanel
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
