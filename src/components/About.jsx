import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Cpu, Globe } from 'lucide-react';

const TerminalLine = ({ text, delay = 0 }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            let i = 0;
            const interval = setInterval(() => {
                setDisplayedText(text.substring(0, i + 1));
                i++;
                if (i > text.length) clearInterval(interval);
            }, 30);
            return () => clearInterval(interval);
        }, delay);
        return () => clearTimeout(timeout);
    }, [text, delay]);

    return (
        <div className="font-mono text-sm md:text-base text-gray-300 mb-2">
            <span className="text-secondary">➜</span> <span className="text-primary">~</span> {displayedText}
        </div>
    );
};

const About = () => {
    return (
        <section id="about" className="py-20 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-2 mb-6">
                        <Terminal className="w-6 h-6 text-primary" />
                        <h2 className="text-3xl font-bold tracking-tight">System Status</h2>
                    </div>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                        I'm a Cloud & DevOps Engineer with a passion for automation and reliability.
                        My mission is to build systems that are self-healing, scalable, and secure by default.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { icon: <Code className="w-5 h-5" />, title: "Infrastructure as Code", desc: "Terraform, Ansible" },
                            { icon: <Cpu className="w-5 h-5" />, title: "Containerization", desc: "Docker, Kubernetes" },
                            { icon: <Globe className="w-5 h-5" />, title: "Cloud Native", desc: "AWS, GCP, Azure" },
                            { icon: <Terminal className="w-5 h-5" />, title: "CI/CD Pipelines", desc: "Jenkins, GitHub Actions" },
                        ].map((item, index) => (
                            <div key={index} className="p-4 bg-surface border border-white/5 rounded-lg hover:border-primary/30 transition-colors">
                                <div className="text-primary mb-2">{item.icon}</div>
                                <h3 className="font-bold text-white mb-1">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Terminal Visual */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-20" />
                    <div className="relative bg-[#0d1117] rounded-lg border border-white/10 overflow-hidden shadow-2xl">
                        <div className="flex items-center px-4 py-2 bg-white/5 border-b border-white/5">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="ml-4 text-xs text-gray-500 font-mono">vishal@cloud-station:~/profile</div>
                        </div>

                        <div className="p-6 h-[400px] overflow-y-auto font-mono text-sm">
                            <TerminalLine text="whoami" delay={500} />
                            <TerminalLine text="Cloud & DevOps Engineer based in India." delay={1500} />
                            <br />
                            <TerminalLine text="cat mindset.txt" delay={3000} />
                            <TerminalLine text="Automation first. If you have to do it twice, script it." delay={4000} />
                            <br />
                            <TerminalLine text="./show-skills.sh --verbose" delay={6000} />
                            <div className="mt-2 text-gray-400">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 7.5, duration: 0.5 }}
                                >
                                    &gt; Loading cloud modules... <span className="text-green-500">Done</span><br />
                                    &gt; Initializing Kubernetes clusters... <span className="text-green-500">Done</span><br />
                                    &gt; Configuring CI/CD pipelines... <span className="text-green-500">Done</span><br />
                                    &gt; System ready for deployment.
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 9, duration: 0.5 }}
                                className="mt-4"
                            >
                                <span className="text-secondary">➜</span> <span className="text-primary">~</span> <span className="animate-pulse">_</span>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

            </div >
        </section >
    );
};

export default About;
