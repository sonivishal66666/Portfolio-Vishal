import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Code, User, Terminal, Cpu, Zap, Globe } from 'lucide-react';
import HackerText from './HackerText';

const About = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

                {/* Left Column: Profile & Stats */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8 sticky top-24"
                >
                    {/* Profile Card */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
                        <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2 overflow-hidden">
                            <div className="relative aspect-square rounded-xl overflow-hidden">
                                <img
                                    src="/Port.jpg"
                                    alt="Vishal Soni"
                                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                                />
                                {/* Holographic Overlay */}
                                <div className="absolute inset-0 bg-scanline opacity-10 pointer-events-none" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                                {/* Corner Accents */}
                                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/50" />
                                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-secondary/50" />
                            </div>

                            {/* Status Bar */}
                            <div className="mt-2 flex items-center justify-between px-2 py-1 font-mono text-[10px] text-primary/70">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span>STATUS: ONLINE</span>
                                </div>
                                <div>ID: V-2025-X</div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 border border-white/10 p-4 rounded-xl hover:border-primary/30 transition-colors">
                            <div className="text-primary mb-2"><Code className="w-5 h-5" /></div>
                            <div className="text-2xl font-bold text-white font-display">50+</div>
                            <div className="text-xs text-gray-400 font-mono">PROJECTS DEPLOYED</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-4 rounded-xl hover:border-secondary/30 transition-colors">
                            <div className="text-secondary mb-2"><Globe className="w-5 h-5" /></div>
                            <div className="text-2xl font-bold text-white font-display">Global</div>
                            <div className="text-xs text-gray-400 font-mono">INFRASTRUCTURE</div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Bio, Education, Achievements */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    {/* Bio Section */}
                    <div className="relative">
                        <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/50 to-transparent hidden lg:block" />
                        <div className="flex items-center gap-2 text-primary font-mono text-xs mb-4">
                            <Terminal className="w-4 h-4" />
                            <span>/usr/bin/whoami</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-white">
                            <HackerText text="ABOUT_ME" />
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-white/10 pl-6">
                            Cloud & DevOps Engineer with a passion for building scalable, serverless architectures.
                            Specializing in <span className="text-primary">AWS</span>, <span className="text-secondary">Kubernetes</span>, and <span className="text-green-400">Automation</span>.
                            I transform complex infrastructure challenges into elegant, self-healing systems.
                        </p>
                    </div>

                    {/* Education Module */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-white flex items-center gap-3 font-display">
                            <BookOpen className="w-5 h-5 text-secondary" />
                            ACADEMIC_LOGS
                        </h3>

                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                            <div className="relative bg-black/60 border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <div>
                                        <h4 className="text-lg font-bold text-white">VIT Bhopal University</h4>
                                        <p className="text-sm text-primary font-mono">B.Tech CSE (Cloud Computing & Automation)</p>
                                    </div>
                                    <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono flex items-center gap-2 w-fit">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                        IN_PROGRESS
                                    </div>
                                </div>
                                <div className="flex justify-between items-end text-xs text-gray-500 font-mono border-t border-white/5 pt-4">
                                    <span>2023 - 2027 (EXPECTED)</span>
                                    <span>BHOPAL, MP</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative bg-black/40 border border-white/5 rounded-xl p-6 hover:border-white/20 transition-colors">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                <div>
                                    <h4 className="text-lg font-bold text-gray-300">Tagore Public School</h4>
                                    <p className="text-sm text-gray-500 font-mono">Secondary Education</p>
                                </div>
                                <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-mono w-fit">
                                    COMPLETED
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm text-gray-400 mt-4">
                                <div className="bg-white/5 p-2 rounded text-center border border-white/5">
                                    <div className="text-xs text-gray-500 mb-1">CLASS XII</div>
                                    <div className="font-bold text-white">90%</div>
                                </div>
                                <div className="bg-white/5 p-2 rounded text-center border border-white/5">
                                    <div className="text-xs text-gray-500 mb-1">CLASS X</div>
                                    <div className="font-bold text-white">85%</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Achievements Module */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-white flex items-center gap-3 font-display">
                            <Award className="w-5 h-5 text-yellow-500" />
                            HONORS_&_AWARDS
                        </h3>

                        <div className="bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary p-6 rounded-r-xl">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/20 rounded-lg text-primary">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-1">Top Performer</h4>
                                    <p className="text-gray-300 leading-relaxed">
                                        Secured <strong className="text-white">AIR 207</strong> in CodeVita Season 13 (Round 1) and achieved <strong className="text-white">Rank 3</strong> at VIT Bhopal University.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default About;
