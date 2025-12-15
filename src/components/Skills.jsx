import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Cloud, Shield, Database, Terminal, Globe, Code, Layers } from 'lucide-react';

const SkillCategory = ({ category, index, isActive, onActivate }) => {
    return (
        <motion.button
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={onActivate}
            className={`w-full text-left p-4 rounded-lg border transition-all duration-300 relative overflow-hidden group ${isActive
                    ? 'bg-primary/10 border-primary text-primary'
                    : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
        >
            {isActive && (
                <motion.div
                    layoutId="activeSkill"
                    className="absolute inset-0 bg-primary/5"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
            )}

            <div className="flex items-center gap-4 relative z-10">
                <div className={`p-2 rounded ${isActive ? 'bg-primary text-black' : 'bg-black border border-white/20'}`}>
                    {category.icon}
                </div>
                <div>
                    <div className="font-bold font-display tracking-wide">{category.title}</div>
                    <div className="text-[10px] font-mono opacity-60">{category.skills.length} MODULES</div>
                </div>
                {isActive && (
                    <div className="ml-auto w-2 h-2 rounded-full bg-primary animate-pulse" />
                )}
            </div>
        </motion.button>
    );
};

const SkillNode = ({ skill, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="bg-black/50 border border-white/10 p-4 rounded-lg hover:border-primary/50 transition-colors group cursor-default"
        >
            <div className="flex justify-between items-start mb-2">
                <span className="text-primary font-mono text-xs">v{skill.version}</span>
                <div className="flex gap-1">
                    {[...Array(skill.level)].map((_, i) => (
                        <div key={i} className="w-1 h-3 bg-primary/50 rounded-full" />
                    ))}
                </div>
            </div>
            <div className="font-bold text-white mb-1 group-hover:text-primary transition-colors">{skill.name}</div>
            <div className="text-xs text-gray-500 font-mono">{skill.desc}</div>
        </motion.div>
    );
};

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState(0);

    const categories = [
        {
            id: 'cloud',
            title: 'CLOUD INFRASTRUCTURE',
            icon: <Cloud className="w-5 h-5" />,
            skills: [
                { name: 'AWS', version: '2.0', level: 5, desc: 'EKS, Lambda, VPC, IAM' },
                { name: 'Terraform', version: '1.6', level: 5, desc: 'IaC, State Management' },
                { name: 'Kubernetes', version: '1.28', level: 4, desc: 'Helm, Operators, CNI' },
                { name: 'Azure', version: 'AZ-104', level: 3, desc: 'AKS, Entra ID, VNet' }
            ]
        },
        {
            id: 'devops',
            title: 'CI/CD & AUTOMATION',
            icon: <Layers className="w-5 h-5" />,
            skills: [
                { name: 'GitHub Actions', version: 'v4', level: 5, desc: 'Custom Runners, Secrets' },
                { name: 'ArgoCD', version: '2.8', level: 4, desc: 'GitOps, App of Apps' },
                { name: 'Jenkins', version: 'LTS', level: 4, desc: 'Groovy Pipelines' },
                { name: 'Ansible', version: '2.14', level: 3, desc: 'Playbooks, Roles' }
            ]
        },
        {
            id: 'security',
            title: 'DevSecOps',
            icon: <Shield className="w-5 h-5" />,
            skills: [
                { name: 'Vault', version: '1.15', level: 4, desc: 'Secrets Engine, PKI' },
                { name: 'Trivy', version: '0.45', level: 5, desc: 'Container Scanning' },
                { name: 'SonarQube', version: '10.2', level: 4, desc: 'Code Quality Gates' },
                { name: 'Istio', version: '1.19', level: 3, desc: 'mTLS, Traffic Mgmt' }
            ]
        },
        {
            id: 'code',
            title: 'PROGRAMMING',
            icon: <Code className="w-5 h-5" />,
            skills: [
                { name: 'Python', version: '3.11', level: 5, desc: 'Boto3, Flask, Automation' },
                { name: 'Go', version: '1.21', level: 3, desc: 'CLI Tools, k8s Controllers' },
                { name: 'Bash', version: '5.2', level: 5, desc: 'Shell Scripting' },
                { name: 'JavaScript', version: 'ES6+', level: 4, desc: 'React, Node.js' }
            ]
        }
    ];

    return (
        <section className="py-20 relative min-h-screen flex items-center">
            <div className="max-w-6xl mx-auto px-6 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-2 text-primary font-mono text-xs mb-4">
                        <Terminal className="w-4 h-4" />
                        <span>SKILL_MATRIX.JSON</span>
                    </div>
                    <h2 className="text-4xl font-bold font-display mb-4">TECHNICAL ARSENAL</h2>
                    <p className="text-gray-400 max-w-xl">
                        Comprehensive toolchain for building, deploying, and securing cloud-native applications.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Left: Category Selection */}
                    <div className="lg:col-span-4 space-y-4">
                        {categories.map((cat, idx) => (
                            <SkillCategory
                                key={cat.id}
                                category={cat}
                                index={idx}
                                isActive={activeCategory === idx}
                                onActivate={() => setActiveCategory(idx)}
                            />
                        ))}
                    </div>

                    {/* Right: Skill Visualization */}
                    <div className="lg:col-span-8 bg-surface/30 border border-white/10 rounded-xl p-8 relative overflow-hidden min-h-[500px]">
                        {/* Background Grid */}
                        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
                        <div className="absolute top-0 right-0 p-4">
                            <Cpu className="w-24 h-24 text-white/5" />
                        </div>

                        <div className="relative z-10">
                            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                    {categories[activeCategory].icon}
                                    {categories[activeCategory].title}
                                </h3>
                                <div className="text-xs font-mono text-primary animate-pulse">
                                    LOADING MODULES...
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <AnimatePresence mode="wait">
                                    {categories[activeCategory].skills.map((skill, idx) => (
                                        <SkillNode key={`${categories[activeCategory].id}-${skill.name}`} skill={skill} index={idx} />
                                    ))}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Decorative Code Snippet */}
                        <div className="absolute bottom-4 right-4 text-[10px] font-mono text-gray-600 text-right hidden md:block">
                            <div>class {categories[activeCategory].id.charAt(0).toUpperCase() + categories[activeCategory].id.slice(1)} implements Skill {'{'}</div>
                            <div>  constructor() {'{'}</div>
                            <div>    this.mastery = 'EXPERT';</div>
                            <div>    this.deployed = true;</div>
                            <div>  {'}'}</div>
                            <div>{'}'}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
