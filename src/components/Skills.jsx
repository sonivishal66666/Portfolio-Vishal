import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Code, Globe, Database, Terminal, Award, CheckCircle } from 'lucide-react';
import HackerText from './HackerText';

const SkillCategory = ({ title, icon, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`w-full text-left p-4 rounded-lg border transition-all duration-300 flex items-center gap-4 group ${isActive
                ? 'bg-primary/10 border-primary text-white shadow-[0_0_20px_rgba(0,240,255,0.2)]'
                : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/30'
            }`}
    >
        <div className={`p-2 rounded ${isActive ? 'bg-primary text-black' : 'bg-black border border-white/20'}`}>
            {icon}
        </div>
        <span className="font-mono font-bold tracking-wider">{title}</span>
        {isActive && <div className="ml-auto w-2 h-2 rounded-full bg-primary animate-pulse" />}
    </button>
);

const SkillNode = ({ skill, index }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.05 }}
        className="relative group"
    >
        <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative bg-black/50 border border-white/10 p-4 rounded hover:border-primary/50 transition-colors">
            <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-white">{skill.name}</span>
                <span className="text-[10px] font-mono text-primary">{skill.level}</span>
            </div>
            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.progress}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-primary shadow-[0_0_10px_#00f0ff]"
                />
            </div>
        </div>
    </motion.div>
);

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('languages');

    const categories = {
        languages: {
            icon: <Code className="w-5 h-5" />,
            skills: [
                { name: "Python", level: "ADVANCED", progress: 90 },
                { name: "Java", level: "INTERMEDIATE", progress: 75 },
                { name: "C++", level: "INTERMEDIATE", progress: 70 },
                { name: "PHP", level: "INTERMEDIATE", progress: 70 },
                { name: "JavaScript", level: "ADVANCED", progress: 85 },
                { name: "SQL", level: "ADVANCED", progress: 85 }
            ]
        },
        cloud: {
            icon: <Globe className="w-5 h-5" />,
            skills: [
                { name: "AWS Lambda", level: "ADVANCED", progress: 90 },
                { name: "Amazon RDS", level: "INTERMEDIATE", progress: 75 },
                { name: "Amazon S3", level: "ADVANCED", progress: 85 },
                { name: "Google Cloud Run", level: "INTERMEDIATE", progress: 70 },
                { name: "Firebase", level: "INTERMEDIATE", progress: 75 }
            ]
        },
        devops: {
            icon: <Terminal className="w-5 h-5" />,
            skills: [
                { name: "Docker", level: "ADVANCED", progress: 85 },
                { name: "Kubernetes", level: "INTERMEDIATE", progress: 75 },
                { name: "Jenkins", level: "INTERMEDIATE", progress: 70 },
                { name: "Terraform", level: "INTERMEDIATE", progress: 70 },
                { name: "GitHub Actions", level: "ADVANCED", progress: 85 }
            ]
        },
        frameworks: {
            icon: <Database className="w-5 h-5" />,
            skills: [
                { name: "React", level: "ADVANCED", progress: 90 },
                { name: "ArgoCD", level: "INTERMEDIATE", progress: 70 },
                { name: "JUnit", level: "INTERMEDIATE", progress: 65 }
            ]
        }
    };

    const certifications = [
        "Frontend Developer (React) - HackerRank",
        "SQL (Advanced) - HackerRank",
        "Applied Machine Learning in Python - Coursera",
        "Introduction to Internet of Things - NPTEL",
        "Advanced Kubernetes/AKS Network & Infrastructure - Udemy"
    ];

    return (
        <section className="py-20 min-h-screen flex flex-col justify-center relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-2 text-primary font-mono text-xs mb-4">
                        <Cpu className="w-4 h-4" />
                        <span>NEURAL_LINK_ESTABLISHED</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                        <HackerText text="SKILL_MATRIX" />
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Categories */}
                    <div className="space-y-4">
                        {Object.entries(categories).map(([key, data]) => (
                            <SkillCategory
                                key={key}
                                title={key.toUpperCase()}
                                icon={data.icon}
                                isActive={activeCategory === key}
                                onClick={() => setActiveCategory(key)}
                            />
                        ))}

                        {/* Certifications Block */}
                        <div className="mt-8 p-6 rounded-lg bg-white/5 border border-white/10">
                            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                                <Award className="w-4 h-4 text-secondary" /> CERTIFICATIONS
                            </h3>
                            <ul className="space-y-3">
                                {certifications.map((cert, i) => (
                                    <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
                                        <CheckCircle className="w-3 h-3 text-primary mt-0.5 shrink-0" />
                                        {cert}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="lg:col-span-2">
                        <div className="bg-black/50 border border-white/10 rounded-xl p-8 min-h-[400px] relative overflow-hidden">
                            <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeCategory}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="grid sm:grid-cols-2 gap-4 relative z-10"
                                >
                                    {categories[activeCategory].skills.map((skill, index) => (
                                        <SkillNode key={skill.name} skill={skill} index={index} />
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
