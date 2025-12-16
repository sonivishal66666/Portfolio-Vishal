import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Code, Globe, Database, Terminal, Award, CheckCircle, Shield, Layers } from 'lucide-react';
import HackerText from './HackerText';

const SkillModule = ({ skill, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ delay: index * 0.05 }}
        className="group relative"
    >
        {/* Module Container */}
        <div className="relative h-full bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-4 overflow-hidden group-hover:border-primary/50 transition-all duration-300 hover:bg-white/5 shadow-lg group-hover:shadow-primary/20">

            {/* Decorative "Circuit" Lines */}
            <div className="absolute top-0 right-0 w-16 h-16 opacity-20 pointer-events-none">
                <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full group-hover:animate-ping" />
                <div className="absolute top-2 right-6 w-8 h-[1px] bg-primary" />
                <div className="absolute top-6 right-2 w-[1px] h-8 bg-primary" />
            </div>

            {/* Content */}
            <div className="flex flex-col h-full justify-between relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/30 transition-colors">
                        <Layers className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors group-hover:rotate-12" />
                    </div>
                    <div className="text-[10px] font-mono text-gray-600 group-hover:text-primary/50 transition-colors">
                        MOD-{index.toString().padStart(3, '0')}
                    </div>
                </div>

                <div>
                    <div className="flex justify-between items-center mb-1">
                        <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{skill.name}</h3>
                        {skill.type === 'academic' && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-gray-500 border border-white/5">
                                ACADEMIC
                            </span>
                        )}
                    </div>
                    <div className="text-xs font-mono text-gray-400 group-hover:text-white transition-colors">
                        {skill.capability}
                    </div>
                </div>
            </div>

            {/* Hover Glow */}
            <div className="absolute -inset-2 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
        </div>
    </motion.div>
);

const CertCard = ({ cert, index }) => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.02, x: 5 }}
        transition={{ delay: index * 0.1 }}
        className="relative group cursor-pointer"
    >
        <div className="relative bg-black/60 border border-white/10 rounded-lg p-4 group-hover:border-secondary/50 transition-all duration-300 flex items-center gap-4 overflow-hidden shadow-md group-hover:shadow-secondary/20">
            {/* Holographic Sheen */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

            <div className="p-3 bg-secondary/10 rounded-lg border border-secondary/20 text-secondary group-hover:scale-110 transition-transform">
                <Award className="w-5 h-5" />
            </div>

            <div className="flex-1 min-w-0">
                <h4 className="text-white font-bold text-sm truncate group-hover:text-secondary transition-colors">{cert.title}</h4>
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5 group-hover:border-white/20 transition-colors">
                        {cert.issuer}
                    </span>
                    <span className="text-[10px] font-mono text-green-500 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" /> VERIFIED
                    </span>
                </div>
            </div>
        </div>
    </motion.div>
);

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('devops'); // Default to DevOps
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    // Reordered Categories: DevOps -> Cloud -> Languages -> Frameworks
    const categories = {
        devops: {
            icon: <Terminal className="w-4 h-4" />,
            label: "DEVOPS",
            skills: [
                { name: "Docker", capability: "Containerization & Multi-stage Builds" },
                { name: "Kubernetes", capability: "Cluster Orchestration & Helm" },
                { name: "Jenkins", capability: "Pipeline as Code (Groovy)" },
                { name: "Terraform", capability: "Infrastructure as Code (IaC)" },
                { name: "GitHub Actions", capability: "CI/CD Automation" }
            ]
        },
        cloud: {
            icon: <Globe className="w-4 h-4" />,
            label: "CLOUD_INFRA",
            skills: [
                { name: "AWS Lambda", capability: "Serverless Functions" },
                { name: "Amazon RDS", capability: "Managed Database Operations" },
                { name: "Amazon S3", capability: "Object Storage & Lifecycle" },
                { name: "Cloud Run", capability: "Container Deployment" },
                { name: "Firebase", capability: "Realtime DB & Auth" }
            ]
        },
        languages: {
            icon: <Code className="w-4 h-4" />,
            label: "LANGUAGES",
            skills: [
                { name: "Python", capability: "Automation / Scripting / Tooling" },
                { name: "JavaScript", capability: "Frontend + CI Tooling" },
                { name: "SQL", capability: "Query Design / Optimization" },
                { name: "Java", capability: "Academic / Object-Oriented", type: "academic" },
                { name: "C++", capability: "Systems-Level / Academic", type: "academic" },
                { name: "PHP", capability: "Legacy Support / Academic", type: "academic" }
            ]
        },
        frameworks: {
            icon: <Database className="w-4 h-4" />,
            label: "FRAMEWORKS",
            skills: [
                { name: "React", capability: "Component-Based UI" },
                { name: "ArgoCD", capability: "GitOps Deployment" },
                { name: "JUnit", capability: "Unit Testing" }
            ]
        }
    };

    const certifications = [
        { title: "Frontend Developer (React)", issuer: "HackerRank" },
        { title: "SQL (Advanced)", issuer: "HackerRank" },
        { title: "Applied Machine Learning", issuer: "Coursera" },
        { title: "IoT Introduction", issuer: "NPTEL" },
        { title: "Advanced Kubernetes", issuer: "Udemy" }
    ];

    const [isMobile, setIsMobile] = useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section
            onMouseMove={isMobile ? undefined : handleMouseMove}
            className="py-24 relative overflow-hidden min-h-screen flex flex-col justify-center bg-black"
        >
            {/* Hex-Hive Background - Static on Mobile */}
            <div className="absolute inset-0 pointer-events-none">
                {isMobile ? (
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black" />
                ) : (
                    <>
                        {/* Base Hex Grid */}
                        <div
                            className="absolute inset-0 opacity-[0.03]"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-opacity='0' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
                                backgroundSize: '60px 60px'
                            }}
                        />

                        {/* Interactive Glow (Flashlight) */}
                        <div
                            className="absolute inset-0 transition-opacity duration-300"
                            style={{
                                background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 240, 255, 0.1), transparent 40%)`
                            }}
                        />

                        {/* Random Pulsing Hexagons (Simulated) */}
                        <motion.div
                            animate={{ opacity: [0, 0.5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                            className="absolute top-1/4 left-1/4 w-16 h-16 bg-primary/20 clip-path-hexagon blur-xl"
                        />
                        <motion.div
                            animate={{ opacity: [0, 0.3, 0] }}
                            transition={{ duration: 5, repeat: Infinity, repeatDelay: 3 }}
                            className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-secondary/20 clip-path-hexagon blur-xl"
                        />
                        <motion.div
                            animate={{ opacity: [0, 0.4, 0] }}
                            transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                            className="absolute top-1/2 right-1/3 w-12 h-12 bg-white/10 clip-path-hexagon blur-lg"
                        />
                    </>
                )}
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

                {/* Header */}
                <div className="mb-16">
                    <div className="flex items-center gap-2 text-primary font-mono text-xs mb-4">
                        <Cpu className="w-4 h-4" />
                        <span>SYSTEM_CAPABILITIES</span>
                    </div>
                    <h2 className="text-3xl md:text-6xl font-bold font-display mb-6">
                        <HackerText text="INSTALLED_MODULES" />
                    </h2>
                    <div className="h-1 w-24 bg-primary rounded-full" />
                </div>

                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Sidebar Navigation */}
                    <div className="lg:col-span-3 space-y-2">
                        {Object.entries(categories).map(([key, data]) => (
                            <button
                                key={key}
                                onClick={() => setActiveCategory(key)}
                                className={`w-full text-left px-4 py-3 rounded-lg border transition-all duration-300 flex items-center gap-3 group ${activeCategory === key
                                    ? 'bg-white/10 border-primary text-white'
                                    : 'bg-transparent border-transparent text-gray-500 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                <span className={`p-1.5 rounded ${activeCategory === key ? 'bg-primary text-black' : 'bg-white/10'}`}>
                                    {data.icon}
                                </span>
                                <span className="font-mono text-sm tracking-wider">{data.label}</span>
                                {activeCategory === key && (
                                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-9 space-y-12">
                        {/* Skills Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <AnimatePresence mode="popLayout">
                                {categories[activeCategory].skills.map((skill, index) => (
                                    <SkillModule key={skill.name} skill={skill} index={index} />
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Certifications */}
                        <div className="pt-8 border-t border-white/10">
                            <h3 className="text-xl font-bold text-white flex items-center gap-3 font-display mb-6">
                                <Shield className="w-5 h-5 text-secondary" />
                                VERIFIED_CREDENTIALS
                            </h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {certifications.map((cert, index) => (
                                    <CertCard key={index} cert={cert} index={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
