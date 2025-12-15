import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Calendar, MapPin, ChevronRight } from 'lucide-react';
import HackerText from './HackerText';

const Experience = () => {
    const experiences = [
        {
            id: "EXP-001",
            role: "Python Developer Intern",
            company: "CodSoft",
            location: "Remote",
            period: "June 2024 - July 2024",
            description: "Worked on Python-based projects, enhancing scripting and automation skills.",
            tags: ["Python", "Automation", "Scripting"]
        }
    ];

    return (
        <section className="py-20 min-h-screen flex flex-col justify-center relative overflow-hidden">
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
                                    <div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                            {exp.role}
                                        </h3>
                                        <div className="text-lg text-gray-400 font-mono">{exp.company}</div>
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

                                <p className="text-gray-400 text-sm leading-relaxed mb-4 border-l-2 border-white/10 pl-4">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.tags.map((tag, i) => (
                                        <span key={i} className="text-[10px] px-2 py-1 rounded bg-black/50 border border-white/10 text-gray-400 font-mono">
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
