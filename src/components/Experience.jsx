import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Clock, CheckCircle, AlertCircle, ChevronRight, Hash } from 'lucide-react';

const LogEntry = ({ role, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-8 pb-12 border-l border-white/10 last:border-0 last:pb-0 group"
        >
            {/* Timeline Dot */}
            <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-black border border-primary group-hover:bg-primary transition-colors" />

            <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                        <span className="text-primary font-mono text-sm font-bold">{role.period}</span>
                        <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-gray-400 border border-white/10 font-mono">
                            PID: {role.id}
                        </span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                        {role.title}
                    </h3>
                    <div className="text-gray-400 font-mono text-sm mb-4">
                        @ {role.company}
                    </div>
                </div>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-lg p-4 font-mono text-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent" />

                <div className="space-y-3">
                    {role.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span className="text-gray-300">
                                <span className="text-primary/50 mr-2">[{new Date().toLocaleTimeString()}]</span>
                                {achievement}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="mt-4 pt-4 border-t border-white/5 flex gap-2">
                    {role.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] px-2 py-1 rounded bg-primary/5 text-primary border border-primary/10">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    const roles = [
        {
            id: "8942",
            title: "Senior DevOps Engineer",
            company: "TechCorp Solutions",
            period: "2023 - PRESENT",
            achievements: [
                "Orchestrated migration of legacy monolith to microservices on AWS EKS, reducing deployment time by 70%.",
                "Implemented 'Shift-Left' security practices, integrating Trivy and SonarQube into GitHub Actions pipelines.",
                "Designed a multi-region disaster recovery strategy with < 15min RTO."
            ],
            tags: ["AWS", "K8s", "Terraform"]
        },
        {
            id: "5521",
            title: "Cloud Infrastructure Engineer",
            company: "InnovateX",
            period: "2021 - 2023",
            achievements: [
                "Automated infrastructure provisioning using Terraform modules, achieving 100% IaC coverage.",
                "Optimized cloud costs by implementing Spot Instances and auto-scaling policies, saving $50k/year.",
                "Built centralized logging and monitoring stack using ELK and Prometheus."
            ],
            tags: ["Azure", "Ansible", "Python"]
        },
        {
            id: "2201",
            title: "Junior Systems Admin",
            company: "StartUp Inc",
            period: "2019 - 2021",
            achievements: [
                "Managed Linux server fleet (Ubuntu/CentOS), ensuring 99.9% uptime.",
                "Scripted routine maintenance tasks using Bash and Python.",
                "Deployed internal tools using Docker containers."
            ],
            tags: ["Linux", "Bash", "Docker"]
        }
    ];

    return (
        <section className="py-20 relative min-h-screen flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-6 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-mono mb-4">
                        <Terminal className="w-3 h-3" />
                        <span>/var/log/career.log</span>
                    </div>
                    <h2 className="text-4xl font-bold font-display mb-4">SYSTEM LOGS</h2>
                    <p className="text-gray-400">
                        Chronological trace of professional execution and milestones.
                    </p>
                </motion.div>

                <div className="bg-surface/30 border border-white/10 rounded-xl p-8 md:p-12 relative overflow-hidden">
                    {/* Terminal Header */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        <div className="ml-4 text-[10px] font-mono text-gray-500">user@vishal-portfolio:~/experience</div>
                    </div>

                    <div className="mt-8">
                        {roles.map((role, idx) => (
                            <LogEntry key={role.id} role={role} index={idx} />
                        ))}

                        {/* Terminal Cursor */}
                        <div className="pl-8 pt-4 flex items-center gap-2 font-mono text-sm text-primary">
                            <span className="animate-pulse">➜</span>
                            <span className="w-2 h-4 bg-primary animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
