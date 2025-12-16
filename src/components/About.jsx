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
                    {/* Profile Card - Reduced Size & De-emphasized */}
                    <div className="relative group max-w-xs mx-auto lg:mx-0">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-500" />
                        <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2 overflow-hidden">
                            <div className="relative aspect-square rounded-xl overflow-hidden">
                                <img
                                    src="/Port.jpg"
                                    alt="Vishal Soni"
                                    className="w-full h-full object-cover opacity-80 brightness-75 grayscale-[0.3] group-hover:scale-105 transition-transform duration-700"
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

                    {/* Quick Stats - Reframed */}
                    <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto lg:mx-0">
                        <div className="bg-white/5 border border-white/10 p-4 rounded-xl hover:border-primary/30 transition-colors">
                            <div className="text-primary mb-2"><Code className="w-5 h-5" /></div>
                            <div className="text-xl font-bold text-white font-display">Multiple</div>
                            <div className="text-[10px] text-gray-400 font-mono uppercase">Production Deployments</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-4 rounded-xl hover:border-secondary/30 transition-colors">
                            <div className="text-secondary mb-2"><Globe className="w-5 h-5" /></div>
                            <div className="text-xl font-bold text-white font-display">Global</div>
                            <div className="text-[10px] text-gray-400 font-mono uppercase">Infrastructure</div>
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
                        <div className="space-y-6 border-l-2 border-white/10 pl-6">
                            <p className="text-gray-300 text-lg leading-relaxed">
                                I build resilient <span className="text-primary">AWS</span> and <span className="text-secondary">Kubernetes</span> infrastructure using Terraform and CI/CD pipelines. My focus is on production-grade deployments where reliability is non-negotiable.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                I design systems assuming things will break. My goal is to ensure they recover automatically without manual intervention.
                            </p>

                            {/* Scope Signal */}
                            <div className="flex items-center gap-2 text-sm text-gray-500 font-mono pt-2">
                                <Cpu className="w-4 h-4" />
                                <span>Worked across containerized, serverless, and CI-driven environments.</span>
                            </div>
                        </div>
                    </div>

                    {/* Problem Solving Logs (Honors) */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-white flex items-center gap-3 font-display uppercase tracking-wider">
                            <Award className="w-4 h-4 text-yellow-500" />
                            Problem_Solving_Logs
                        </h3>

                        <div className="bg-gradient-to-r from-primary/5 to-transparent border-l-2 border-primary p-4 rounded-r-lg">
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                    <Zap className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-base font-bold text-white mb-1">Algorithmic Efficiency</h4>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        Demonstrated advanced problem-solving skills by securing <strong className="text-white">AIR 207</strong> in CodeVita Season 13 (Round 1) and <strong className="text-white">Rank 3</strong> at VIT Bhopal University.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Education Module */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold text-white flex items-center gap-3 font-display uppercase tracking-wider">
                            <BookOpen className="w-4 h-4 text-secondary" />
                            Academic_Background
                        </h3>

                        <div className="grid gap-4">
                            {/* University */}
                            <div className="relative border-l-2 border-white/10 pl-4 py-2 flex flex-col gap-2">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="text-base font-bold text-white">Vellore Institute of Technology Bhopal</h4>
                                        <p className="text-sm text-gray-400 font-mono">B.Tech CSE (Cloud Computing & Automation)</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xs text-primary font-mono">2023 - 2027</div>
                                    </div>
                                </div>
                            </div>

                            {/* School */}
                            <div className="relative border-l-2 border-white/10 pl-4 py-2 flex flex-col gap-2">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="text-base font-bold text-white">Tagore Public School</h4>
                                        <p className="text-sm text-gray-400 font-mono">Secondary Education</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xs text-green-400 font-mono">COMPLETED</div>
                                    </div>
                                </div>
                                {/* Marks */}
                                <div className="flex gap-4 mt-1">
                                    <div className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs font-mono text-gray-300">
                                        CLASS XII: <span className="text-white font-bold">90%</span>
                                    </div>
                                    <div className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs font-mono text-gray-300">
                                        CLASS X: <span className="text-white font-bold">85%</span>
                                    </div>
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
