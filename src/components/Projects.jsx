import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, Database, Globe, Shield, Cpu, ExternalLink, Github, Terminal, X, ChevronRight, Code, Layers, Cloud } from 'lucide-react';

const ProjectCard = ({ project, onClick }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            onClick={() => onClick(project)}
            className="group relative bg-black/40 border border-white/10 rounded-xl overflow-hidden cursor-pointer hover:border-primary/50 transition-colors duration-300 h-[300px] flex flex-col"
        >
            {/* Holographic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

            {/* Content */}
            <div className="p-6 relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/30 transition-colors">
                        {project.icon}
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                        <span className="text-[10px] font-mono text-gray-500">ONLINE</span>
                    </div>
                </div>

                <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                </h3>

                <p className="text-sm text-gray-400 font-mono line-clamp-3 mb-4 flex-1">
                    {project.shortDesc}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex gap-2">
                        {project.tech.slice(0, 2).map((t, i) => (
                            <span key={i} className="text-[10px] px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5">
                                {t}
                            </span>
                        ))}
                        {project.tech.length > 2 && (
                            <span className="text-[10px] px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5">
                                +{project.tech.length - 2}
                            </span>
                        )}
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-primary transition-colors" />
                </div>
            </div>

            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
    );
};

const SidePanel = ({ project, onClose }) => {
    return (
        <>
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />

            {/* Panel */}
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-full w-full md:w-[600px] bg-black border-l border-white/10 z-50 shadow-2xl overflow-y-auto"
            >
                {/* Header */}
                <div className="sticky top-0 bg-black/90 backdrop-blur-md border-b border-white/10 p-6 flex items-center justify-between z-10">
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-primary/10 rounded border border-primary/30 text-primary">
                            {project.icon}
                        </div>
                        <div>
                            <h2 className="text-xl font-bold font-display text-white">{project.title}</h2>
                            <div className="text-xs font-mono text-gray-500">ID: {project.id} // SYSTEM_READY</div>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-8 space-y-8">
                    {/* Description */}
                    <div>
                        <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                            <Terminal className="w-4 h-4 text-primary" /> SYSTEM OVERVIEW
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed font-mono border-l-2 border-white/10 pl-4">
                            {project.description}
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4">
                        {project.stats.map((stat, i) => (
                            <div key={i} className="bg-white/5 p-4 rounded border border-white/5">
                                <div className="text-[10px] text-gray-500 mb-1 font-mono">{stat.label}</div>
                                <div className="text-xl font-bold text-white">{stat.value}</div>
                            </div>
                        ))}
                    </div>

                    {/* Tech Stack */}
                    <div>
                        <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                            <Layers className="w-4 h-4 text-secondary" /> TECH STACK
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t, i) => (
                                <span key={i} className="px-3 py-1.5 text-xs font-mono rounded bg-white/5 border border-white/10 text-gray-300">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Key Features */}
                    <div>
                        <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                            <Shield className="w-4 h-4 text-green-400" /> CORE PROTOCOLS
                        </h3>
                        <ul className="space-y-3">
                            {project.features.map((f, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-400 bg-white/5 p-3 rounded border border-white/5">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                    {f}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4 pt-4 border-t border-white/10">
                        <button className="flex-1 py-3 bg-primary text-black font-bold text-sm tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2 rounded">
                            <ExternalLink className="w-4 h-4" /> LIVE DEMO
                        </button>
                        <button className="flex-1 py-3 border border-white/10 text-white font-mono text-sm tracking-widest hover:bg-white/5 transition-colors flex items-center justify-center gap-2 rounded">
                            <Github className="w-4 h-4" /> SOURCE CODE
                        </button>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: "PRJ-001",
            title: "EKS Auto-Scaler",
            shortDesc: "Production-grade Kubernetes cluster with Karpenter auto-scaling.",
            icon: <Cloud className="w-6 h-6" />,
            description: "Deployed a high-availability EKS cluster on AWS. Integrated Karpenter for intelligent, just-in-time node provisioning, resulting in a 40% reduction in compute costs compared to standard Cluster Autoscaler.",
            tech: ["AWS EKS", "Terraform", "Karpenter", "Helm"],
            stats: [
                { label: "COST SAVINGS", value: "40%" },
                { label: "SCALE TIME", value: "<60s" },
                { label: "UPTIME", value: "99.99%" }
            ],
            features: [
                "Spot Instance orchestration for non-critical workloads",
                "Multi-AZ deployment for disaster recovery",
                "Automated node rotation and patching"
            ]
        },
        {
            id: "PRJ-002",
            title: "GitOps Pipeline",
            shortDesc: "Self-healing CI/CD pipeline using ArgoCD and GitHub Actions.",
            icon: <Globe className="w-6 h-6" />,
            description: "Architected a complete GitOps workflow. Application state is defined in Git and automatically synchronized to the cluster by ArgoCD. Includes automated drift detection and self-healing capabilities.",
            tech: ["ArgoCD", "GitHub Actions", "Docker", "Kustomize"],
            stats: [
                { label: "DEPLOY TIME", value: "45s" },
                { label: "SUCCESS RATE", value: "99.8%" },
                { label: "RECOVERY", value: "AUTO" }
            ],
            features: [
                "Automated canary deployments with analysis",
                "Policy-as-Code enforcement using OPA",
                "Integrated image vulnerability scanning"
            ]
        },
        {
            id: "PRJ-003",
            title: "Zero-Trust Mesh",
            shortDesc: "Service mesh implementation with mTLS and dynamic secrets.",
            icon: <Shield className="w-6 h-6" />,
            description: "Implemented a comprehensive Zero-Trust security model using Istio. All service-to-service communication is encrypted via mTLS. HashiCorp Vault manages dynamic secret injection for database credentials.",
            tech: ["Istio", "Vault", "Cert-Manager", "Python"],
            stats: [
                { label: "ENCRYPTION", value: "mTLS" },
                { label: "SECRETS", value: "DYNAMIC" },
                { label: "AUDIT LOGS", value: "100%" }
            ],
            features: [
                "Fine-grained access control policies",
                "Automated certificate rotation",
                "Real-time traffic observability"
            ]
        }
    ];

    return (
        <section className="py-20 relative min-h-screen flex flex-col items-center justify-center">
            <div className="max-w-6xl mx-auto px-6 w-full">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-2 text-primary font-mono text-xs mb-4">
                        <Database className="w-4 h-4" />
                        <span>ARCHIVE_ACCESS_GRANTED</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">PROJECT ARCHIVE</h2>
                    <p className="text-gray-400 max-w-xl text-lg">
                        Selected case studies in cloud infrastructure, automation, and security engineering.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={setSelectedProject}
                        />
                    ))}
                </div>
            </div>

            {/* Side Panel */}
            <AnimatePresence>
                {selectedProject && (
                    <SidePanel
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
