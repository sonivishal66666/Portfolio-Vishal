import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Code, User } from 'lucide-react';
import HackerText from './HackerText';

const About = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Profile Photo Hologram */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative group"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="relative w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border border-white/10 bg-black/50 backdrop-blur-sm">
                        {/* Placeholder for Profile Photo */}
                        <div className="absolute inset-0 flex items-center justify-center bg-white/5">
                            <User className="w-24 h-24 text-white/20" />
                        </div>
                        <img
                            src="/Port.jpg"
                            alt="Vishal Soni"
                            className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                        />

                        {/* Holographic Overlay */}
                        <div className="absolute inset-0 bg-scanline opacity-20 pointer-events-none" />
                        <div className="absolute top-0 left-0 w-full h-1 bg-primary/50 shadow-[0_0_10px_#00f0ff]" />
                        <div className="absolute bottom-0 right-0 w-full h-1 bg-secondary/50 shadow-[0_0_10px_#7000ff]" />
                    </div>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div>
                        <div className="flex items-center gap-2 text-primary font-mono text-xs mb-4">
                            <User className="w-4 h-4" />
                            <span>IDENTITY_VERIFIED</span>
                        </div>
                        <h2 className="text-4xl font-bold font-display mb-6">
                            <HackerText text="ABOUT_ME" />
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Cloud & DevOps Engineer with a passion for building scalable, serverless architectures.
                            Proven track record in full-stack development, computer vision, and cloud infrastructure.
                        </p>
                    </div>

                    {/* Education */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-secondary" /> EDUCATION
                        </h3>
                        <div className="space-y-4">
                            <div className="bg-white/5 p-4 rounded border border-white/10 hover:border-primary/50 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="font-bold text-white">VIT Bhopal University</span>
                                    <span className="text-xs font-mono text-gray-500">2023 - 2027 (Expected)</span>
                                </div>
                                <div className="text-sm text-gray-400">B.Tech CSE (Cloud Computing & Automation)</div>
                                <div className="text-xs text-gray-500 mt-1">Bhopal, Madhya Pradesh</div>
                            </div>

                            <div className="bg-white/5 p-4 rounded border border-white/10 hover:border-white/30 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="font-bold text-white">Tagore Public School</span>
                                    <span className="text-xs font-mono text-gray-500">2008 - 2023</span>
                                </div>
                                <div className="text-sm text-gray-400">Class XII: 90% | Class X: 85%</div>
                                <div className="text-xs text-gray-500 mt-1">Surajgarh, Rajasthan</div>
                            </div>
                        </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                            <Award className="w-5 h-5 text-primary" /> ACHIEVEMENTS
                        </h3>
                        <div className="grid gap-3">
                            <div className="flex items-center gap-3 bg-white/5 p-3 rounded border border-white/10 hover:border-primary/50 transition-colors">
                                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_5px_#00f0ff]" />
                                <span className="text-sm text-gray-300">
                                    <strong className="text-white">AIR 207</strong> in CodeVita Season 13 (Round 1) & <strong className="text-white">Rank 3</strong> at VIT Bhopal University
                                </span>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default About;
