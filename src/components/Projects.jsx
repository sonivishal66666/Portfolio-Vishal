import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Server, Database, Globe, Shield, Zap, ExternalLink, Github, Terminal, X, ChevronRight, Layers, Cloud, Lock, Cpu } from 'lucide-react';
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
        if (window.innerWidth < 768) return; // Disable tilt on mobile
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
            className="relative w-full max-w-sm md:w-[350px] h-[480px] rounded-xl bg-black/40 border border-white/10 cursor-pointer group perspective-1000"
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
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                        {project.icon}
                    </div>
                    <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono text-primary animate-pulse">● LIVE</span>
                            {/* Source Code Button on Card */}
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="p-1.5 rounded bg-white/5 hover:bg-white/20 text-gray-400 hover:text-white transition-colors border border-white/5 hover:border-white/20"
                                title="View Source Code"
                            >
                                <Github className="w-3 h-3" />
                            </a>
                        </div>
                        <span className="text-[10px] font-mono text-gray-500">ID: {project.id}</span>
                    </div>
                </div>

                {/* Title & Desc */}
                <div className="mb-auto">
                    <h3 className="text-2xl font-bold font-display text-white mb-2 group-hover:text-primary transition-colors">
                        <HackerText text={project.title} speed={50} />
                    </h3>
                    <p className="text-sm text-gray-400 font-mono leading-relaxed line-clamp-3 mb-3">
                        {project.shortDesc}
                    </p>
                    {/* Infra Line */}
                    <div className="flex items-start gap-2 text-[10px] text-primary/80 font-mono bg-primary/5 p-2 rounded border border-primary/10">
                        <Cloud className="w-3 h-3 mt-0.5 shrink-0" />
                        <span>{project.infra}</span>
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="space-y-4 mt-4">
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
                className="fixed top-0 right-0 h-full w-full md:w-[600px] bg-black border-l border-primary/20 z-50 shadow-[0_0_50px_rgba(0,240,255,0.1)] flex flex-col"
            >
                {/* Fixed Header */}
                <div className="bg-black/90 backdrop-blur-md border-b border-white/10 p-6 flex items-center justify-between z-10 flex-none">
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

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-8 space-y-8" data-lenis-prevent>
                    <div>
                        <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                            <Terminal className="w-4 h-4 text-primary" /> MISSION BRIEF
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed font-mono border-l-2 border-primary/50 pl-4 bg-primary/5 p-4 rounded-r">
                            {project.description}
                        </p>
                    </div>

                    {/* Engineering Notes */}
                    <div>
                        <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                            <Cpu className="w-4 h-4 text-yellow-500" /> ENGINEERING NOTES
                        </h3>
                        <div className="text-gray-400 text-sm leading-relaxed font-mono bg-white/5 p-4 rounded border border-white/10">
                            {project.engineeringNotes}
                        </div>
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
                            {project.protocols.map((f, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-400 bg-white/5 p-3 rounded border border-white/5">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0 shadow-[0_0_5px_#00f0ff]" />
                                    {f}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Fixed Footer */}
                <div className="p-6 border-t border-white/10 bg-black z-10 flex-none flex gap-4">
                    <button className="flex-1 py-4 bg-primary text-black font-bold text-sm tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2 rounded relative overflow-hidden group">
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <ExternalLink className="w-4 h-4 relative z-10" /> <span className="relative z-10">INITIATE DEMO</span>
                    </button>
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-4 border border-white/10 text-white font-mono text-sm tracking-widest hover:bg-white/5 transition-colors flex items-center justify-center gap-2 rounded"
                    >
                        <Github className="w-4 h-4" /> ACCESS SOURCE
                    </a>
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
            shortDesc: "Serverless ticketing platform designed to handle concurrent bookings with minimal latency using AWS Lambda and managed databases.",
            infra: "Deployed using serverless infrastructure with managed scaling.",
            icon: <Globe className="w-8 h-8 text-primary" />,
            description: "Architected a serverless ticketing platform designed to handle concurrent bookings without double-allocation. Used AWS Lambda for stateless scaling and Amazon RDS for transactional consistency. Integrated Cashfree with idempotent payment handling to ensure safe retries and secure transaction flow.",
            engineeringNotes: "Designed assuming payment failures and retries are common. Database writes are guarded to prevent duplicate bookings.",
            githubUrl: "https://github.com/sonivishal66666/Arvis",
            tech: ["PHP", "AWS Lambda", "MySQL", "Cashfree"],
            stats: [
                { label: "ARCHITECTURE", value: "Serverless" },
                { label: "PAYMENTS", value: "Secure" },
                { label: "DB", value: "RDS" }
            ],
            protocols: [
                "Idempotent payment processing",
                "Transactional seat allocation",
                "Stateless backend with managed scaling"
            ]
        },
        {
            id: "PRJ-002",
            title: "Cafe Management",
            shortDesc: "Cloud-based ordering system focused on reliable payment workflows and failure handling during checkout using Stripe APIs.",
            infra: "Provisioned cloud resources via Infrastructure as Code.",
            icon: <Database className="w-8 h-8 text-secondary" />,
            description: "Developed a cloud-native ordering system with a focus on reliable payment workflows. Implemented REST APIs using AWS Lambda and API Gateway for high availability. Used DynamoDB for low-latency state management and integrated Stripe for secure, compliant payment processing.",
            engineeringNotes: "Optimized for high availability during peak ordering times. Implemented circuit breakers for external payment API calls.",
            githubUrl: "https://github.com/sonivishal66666/Cafe-Management",
            tech: ["React", "Node.js", "DynamoDB", "Stripe"],
            stats: [
                { label: "LATENCY", value: "Low" },
                { label: "API", value: "REST" },
                { label: "SCALE", value: "Auto" }
            ],
            protocols: [
                "Secure payment callbacks",
                "Low-latency state management",
                "RESTful API design"
            ]
        },
        {
            id: "PRJ-003",
            title: "Face-Body Suite",
            shortDesc: "Computer vision pipeline for real-time facial recognition and posture analysis, optimized for low-latency inference.",
            infra: "Designed with monitoring and failure recovery in mind.",
            icon: <Shield className="w-8 h-8 text-green-400" />,
            description: "Built a high-performance computer vision pipeline for real-time facial recognition and posture analysis. Optimized OpenCV and MediaPipe inference models for low-latency execution. Implemented efficient frame processing to ensure real-time feedback.",
            engineeringNotes: "Focused on minimizing inference latency to ensure smooth real-time user experience. Implemented frame dropping strategies for slower hardware.",
            githubUrl: "https://github.com/sonivishal66666/Face-Body-Detection-Suite",
            tech: ["Python", "OpenCV", "MediaPipe", "ML"],
            stats: [
                { label: "ACCURACY", value: "High" },
                { label: "SPEED", value: "Real-time" },
                { label: "TYPE", value: "CV" }
            ],
            protocols: [
                "Real-time inference optimization",
                "Efficient frame processing",
                "Privacy-first data handling"
            ]
        }
    ];

    const [isMobile, setIsMobile] = useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section className="py-20 relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Holographic Blueprint Background - Static on Mobile */}
            <div className="absolute inset-0 pointer-events-none bg-black">
                {isMobile ? (
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black" />
                ) : (
                    <>
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
                    </>
                )}
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
