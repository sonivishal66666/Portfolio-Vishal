import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Calendar, MapPin, ChevronRight, Server, Cloud, Code } from 'lucide-react';
import HackerText from './HackerText';

const Experience = () => {
    const experiences = [
        {
            id: "EXP-003",
            role: "Kubernetes Cluster Orchestration",
            company: "Infrastructure Engineering",
            location: "Self-Initiated",
            period: "Oct 2024 - Present",
            description: "Designed a self-healing microservices cluster with automated scaling and monitoring.",
            bullet: "Implemented HPA (Horizontal Pod Autoscaling) and configured Prometheus/Grafana for real-time metrics.",
            tags: ["Kubernetes", "Docker", "Helm", "Monitoring"],
            icon: Server
        },
        {
            id: "EXP-002",
            role: "Cloud Infrastructure Deployment",
            company: "AWS / Terraform Project",
            location: "Self-Initiated",
            period: "Aug 2024 - Sep 2024",
            description: "Architected and deployed a highly available 3-tier web application on AWS using Terraform.",
            bullet: "Provisioned VPCs, EC2 instances, and RDS databases with automated state management.",
            tags: ["AWS", "Terraform", "IaC", "Networking"],
            icon: Cloud
        },
        {
            id: "EXP-001",
            role: "Python Developer Intern",
            company: "CodSoft",
            location: "Remote",
            period: "June 2024 - July 2024",
            description: "Developed Python scripts for automation and data processing, reinforcing scripting practices that translate directly into CI/CD workflows and infrastructure automation.",
            bullet: "Built reusable automation scripts to streamline data processing tasks, reducing manual execution time by 40%.",
            tags: ["Python", "Task Automation", "Scripting", "CLI Tooling"],
            icon: Code
        }
    ];

    return (
        <section className="py-20 min-h-screen flex flex-col justify-center relative overflow-hidden bg-black perspective-1000">
            {/* Infinity Corridor Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* 3D Grid Tunnel */}
                <div
                    className="absolute inset-[-100%] opacity-20"
                    style={{
                        backgroundImage: `
                            linear-gradient(transparent 0%, #00f0ff 2px, transparent 3px),
                            linear-gradient(90deg, transparent 0%, #00f0ff 2px, transparent 3px)
                        `,
                        backgroundSize: '100px 100px',
                        transform: 'perspective(500px) rotateX(60deg)',
                        transformOrigin: 'center top',
                        animation: 'grid-move 20s linear infinite'
                    }}
                />

                {/* Speed Lines (Stars) */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, scale: 0 }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 3],
                            z: [0, 100] // Simulated Z-depth via scale
                        }}
                        transition={{
                            duration: Math.random() * 2 + 1,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 2
                        }}
                        className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_10px_white]"
                    />
                ))}

                {/* Central Fog / Void */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
            </div>

            <style>{`
                @keyframes grid-move {
                    0% { transform: perspective(500px) rotateX(60deg) translateY(0); }
                    100% { transform: perspective(500px) rotateX(60deg) translateY(100px); }
                }
            `}</style>

            <div className="max-w-4xl mx-auto px-6 w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-2 text-primary font-mono text-xs mb-4">
                        <Terminal className="w-4 h-4" />
                        <span>SYSTEM_LOGS_ACCESSED</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                        <HackerText text="CAREER_LOGS" />
                    </h2>
                </motion.div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative pl-8 border-l border-white/10 group"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-black border border-white/30 group-hover:border-primary group-hover:bg-primary transition-colors shadow-[0_0_10px_rgba(0,0,0,0.5)]" />

                            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-primary/30 transition-colors group-hover:bg-white/10">
                                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                                    <div className="flex gap-4">
                                        <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-primary h-fit">
                                            <exp.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                                {exp.role}
                                            </h3>
                                            <div className="text-lg text-gray-400 font-mono">{exp.company}</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex items-center gap-2 text-xs font-mono text-gray-500 justify-end">
                                            <Calendar className="w-3 h-3" /> {exp.period}
                                        </div>
                                        <div className="flex items-center gap-2 text-xs font-mono text-gray-500 justify-end mt-1">
                                            <MapPin className="w-3 h-3" /> {exp.location}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-6 border-l-2 border-white/10 pl-4">
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        {exp.description}
                                    </p>
                                    <div className="flex items-start gap-2 text-sm text-gray-400">
                                        <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                        <span>{exp.bullet}</span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {exp.tags.map((tag, i) => (
                                        <span key={i} className="text-[10px] px-2 py-1 rounded bg-black/50 border border-white/10 text-gray-400 font-mono hover:text-white hover:border-primary/50 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
