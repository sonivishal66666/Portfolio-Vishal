import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Award, CheckCircle, ExternalLink, Cpu, Star, Zap, CloudCog } from 'lucide-react';
import HackerText from './HackerText';

// ─── Floating Particles Background ─────────────────────────────────
const FloatingParticles = () => {
    const particles = useMemo(() =>
        Array.from({ length: 20 }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            size: Math.random() * 3 + 1,
            duration: Math.random() * 8 + 6,
            delay: Math.random() * 5,
            opacity: Math.random() * 0.4 + 0.1,
        })), []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full"
                    style={{
                        left: p.left,
                        bottom: '-10px',
                        width: p.size,
                        height: p.size,
                        background: `rgba(255, 153, 0, ${p.opacity})`,
                    }}
                    animate={{
                        y: [0, -800],
                        x: [0, Math.random() * 40 - 20],
                        opacity: [0, p.opacity, p.opacity, 0],
                    }}
                    transition={{
                        duration: p.duration,
                        delay: p.delay,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />
            ))}
        </div>
    );
};

// ─── AWS Certification Spotlight Card ───────────────────────────────
const AWSCertCard = ({ cert, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Different accent angles per card for visual variety
    const glowColors = [
        'from-[#FF9900]/20 via-[#00f0ff]/10 to-[#FF9900]/20',
        'from-[#00f0ff]/20 via-[#FF9900]/10 to-[#00f0ff]/20',
        'from-[#FF9900]/15 via-[#7000ff]/10 to-[#FF9900]/15',
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
            whileHover={{ y: -8, scale: 1.03 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative group cursor-pointer"
        >
            {/* Animated Gradient Border */}
            <div className="aws-gradient-border aws-card-glow holographic-sheen rounded-2xl">
                <div className="relative bg-black/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 overflow-hidden">

                    {/* Background gradient glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${glowColors[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl`} />

                    {/* Top decorative elements */}
                    <div className="relative z-10">
                        {/* AWS Badge + Status Row */}
                        <div className="flex items-start justify-between mb-6">
                            {/* Badge Icon */}
                            <div className="relative">
                                <div className="aws-badge-pulse w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF9900]/20 to-[#FF9900]/5 border border-[#FF9900]/30 flex items-center justify-center group-hover:from-[#FF9900]/30 group-hover:to-[#FF9900]/10 transition-all duration-500">
                                    <Shield className="w-8 h-8 text-[#FF9900] group-hover:drop-shadow-[0_0_8px_rgba(255,153,0,0.6)]" style={{ animation: 'shimmer 3s ease-in-out infinite', animationDelay: `${index * 0.5}s` }} />
                                </div>
                                {/* Floating star accent */}
                                <motion.div
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.3 }}
                                    className="absolute -top-2 -right-2"
                                >
                                    <Star className="w-4 h-4 text-[#FF9900] fill-[#FF9900] opacity-60" />
                                </motion.div>
                            </div>

                            {/* Cert Index & Status */}
                            <div className="flex flex-col items-end gap-2">
                                <span className="text-[10px] font-mono text-[#FF9900]/50 tracking-widest">
                                    AWS-CERT-{(index + 1).toString().padStart(3, '0')}
                                </span>
                                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                                    <CheckCircle className="w-3 h-3 text-green-400" />
                                    <span className="text-[10px] font-mono text-green-400 tracking-wider">VERIFIED</span>
                                </div>
                            </div>
                        </div>

                        {/* Cert Title */}
                        <h3 className="text-xl md:text-2xl font-bold font-display text-white mb-2 group-hover:text-[#FF9900] transition-colors duration-300" style={{ textShadow: isHovered ? '0 0 20px rgba(255,153,0,0.3)' : 'none' }}>
                            {cert.title}
                        </h3>

                        {/* Issuer */}
                        <div className="flex items-center gap-2 mb-4">
                            <CloudCog className="w-4 h-4 text-[#FF9900]/70" />
                            <span className="text-sm font-mono text-[#FF9900]/70 tracking-wide">
                                {cert.issuer}
                            </span>
                        </div>

                        {/* Skill Tags */}
                        <div className="flex flex-wrap gap-2 mb-5">
                            {cert.skills.map((skill, i) => (
                                <span
                                    key={i}
                                    className="text-[10px] font-mono px-2 py-1 rounded-md bg-white/5 text-gray-400 border border-white/5 group-hover:border-[#FF9900]/20 group-hover:text-gray-300 transition-all duration-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* Bottom Separator & Detail */}
                        <div className="pt-4 border-t border-white/5 group-hover:border-[#FF9900]/10 transition-colors">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-gray-500 group-hover:text-[#FF9900]/60 transition-colors">
                                    <Zap className="w-3.5 h-3.5" />
                                    <span className="text-xs font-mono">{cert.level}</span>
                                </div>
                                <motion.div
                                    animate={{ x: isHovered ? 4 : 0 }}
                                    className="flex items-center gap-1 text-xs font-mono text-gray-600 group-hover:text-[#FF9900] transition-colors"
                                >
                                    <span>View credential</span>
                                    <ExternalLink className="w-3 h-3" />
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative corner accent lines */}
                    <div className="absolute top-0 right-0 w-20 h-20 opacity-10 pointer-events-none group-hover:opacity-30 transition-opacity">
                        <div className="absolute top-3 right-3 w-2 h-2 bg-[#FF9900] rounded-full" />
                        <div className="absolute top-3 right-7 w-10 h-[1px] bg-[#FF9900]" />
                        <div className="absolute top-7 right-3 w-[1px] h-10 bg-[#FF9900]" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 opacity-10 pointer-events-none group-hover:opacity-30 transition-opacity">
                        <div className="absolute bottom-3 left-3 w-2 h-2 bg-[#FF9900] rounded-full" />
                        <div className="absolute bottom-3 left-7 w-10 h-[1px] bg-[#FF9900]" />
                        <div className="absolute bottom-7 left-3 w-[1px] h-10 bg-[#FF9900]" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// ─── Other Certification Card ───────────────────────────────────────
const OtherCertCard = ({ cert, index }) => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02, x: 5 }}
        transition={{ delay: index * 0.08 }}
        className="relative group cursor-pointer"
    >
        <div className="relative bg-black/60 border border-white/10 rounded-lg p-4 group-hover:border-secondary/50 transition-all duration-300 flex items-center gap-4 overflow-hidden shadow-md group-hover:shadow-secondary/20">
            {/* Holographic Sheen */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

            <div className="p-3 bg-secondary/10 rounded-lg border border-secondary/20 text-secondary group-hover:scale-110 transition-transform">
                <Award className="w-5 h-5" />
            </div>

            <div className="flex-1 min-w-0">
                <h4 className="text-white font-bold text-sm truncate group-hover:text-secondary transition-colors">{cert.title}</h4>
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5 group-hover:border-white/20 transition-colors">
                        {cert.issuer}
                    </span>
                    <span className="text-[10px] font-mono text-green-500 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" /> VERIFIED
                    </span>
                </div>
            </div>
        </div>
    </motion.div>
);

// ─── Main Certifications Page ───────────────────────────────────────
const Certifications = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const awsCertifications = [
        {
            title: 'AWS Certified AI Practitioner',
            issuer: 'Amazon Web Services',
            level: 'FOUNDATIONAL',
            skills: ['AI/ML', 'SageMaker', 'Bedrock', 'Responsible AI', 'Generative AI'],
        },
        {
            title: 'AWS Certified Cloud Practitioner',
            issuer: 'Amazon Web Services',
            level: 'FOUNDATIONAL',
            skills: ['Cloud Concepts', 'Security', 'Billing', 'AWS Core Services'],
        },
        {
            title: 'AWS Certified Solutions Architect',
            issuer: 'Amazon Web Services',
            level: 'ASSOCIATE',
            skills: ['Architecture', 'High Availability', 'Cost Optimization', 'Security', 'Networking'],
        },
    ];

    const otherCertifications = [
        { title: 'Frontend Developer (React)', issuer: 'HackerRank' },
        { title: 'SQL (Advanced)', issuer: 'HackerRank' },
        { title: 'Applied Machine Learning', issuer: 'Coursera' },
        { title: 'IoT Introduction', issuer: 'NPTEL' },
        { title: 'Advanced Kubernetes', issuer: 'Udemy' },
    ];

    return (
        <section
            onMouseMove={isMobile ? undefined : handleMouseMove}
            className="py-24 relative overflow-hidden min-h-screen flex flex-col justify-center bg-black"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                {isMobile ? (
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black" />
                ) : (
                    <>
                        {/* Hex Grid */}
                        <div
                            className="absolute inset-0 opacity-[0.03]"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-opacity='0' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
                                backgroundSize: '60px 60px',
                            }}
                        />

                        {/* Mouse Flashlight */}
                        <div
                            className="absolute inset-0 transition-opacity duration-300"
                            style={{
                                background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 153, 0, 0.07), transparent 40%)`,
                            }}
                        />

                        {/* AWS-colored pulsing blobs */}
                        <motion.div
                            animate={{ opacity: [0, 0.5, 0] }}
                            transition={{ duration: 5, repeat: Infinity, repeatDelay: 2 }}
                            className="absolute top-1/4 left-1/3 w-32 h-32 bg-[#FF9900]/10 rounded-full blur-3xl"
                        />
                        <motion.div
                            animate={{ opacity: [0, 0.3, 0] }}
                            transition={{ duration: 6, repeat: Infinity, repeatDelay: 3 }}
                            className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-[#00f0ff]/10 rounded-full blur-3xl"
                        />
                        <motion.div
                            animate={{ opacity: [0, 0.4, 0] }}
                            transition={{ duration: 4, repeat: Infinity, repeatDelay: 4 }}
                            className="absolute top-1/2 right-1/3 w-24 h-24 bg-[#FF9900]/15 rounded-full blur-2xl"
                        />

                        {/* Floating particles */}
                        <FloatingParticles />
                    </>
                )}
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

                {/* ═══ Page Header ═══ */}
                <div className="mb-16">
                    <div className="flex items-center gap-2 text-[#FF9900] font-mono text-xs mb-4 tracking-widest">
                        <Shield className="w-4 h-4" />
                        <span>CERTIFIED_CREDENTIALS</span>
                    </div>
                    <h2 className="text-3xl md:text-6xl font-bold font-display mb-6">
                        <HackerText text="VERIFIED_MODULES" />
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-[#FF9900] to-[#00f0ff] rounded-full" />
                </div>

                {/* ═══ AWS SPOTLIGHT SECTION ═══ */}
                <div className="mb-20">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FF9900]/10 border border-[#FF9900]/20">
                                    <div className="w-2 h-2 rounded-full bg-[#FF9900] animate-pulse" />
                                    <span className="text-[11px] font-mono text-[#FF9900] tracking-widest">AWS CERTIFIED</span>
                                </div>
                                <div className="h-4 w-[1px] bg-white/10" />
                                <span className="text-[10px] font-mono text-gray-600">3 ACTIVE CREDENTIALS</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold font-display text-white">
                                Amazon Web Services
                            </h3>
                        </div>

                        <p className="text-sm text-gray-400 max-w-md leading-relaxed font-mono md:text-right">
                            Production-grade expertise validated across cloud architecture, AI/ML services, and infrastructure design on AWS.
                        </p>
                    </motion.div>

                    {/* AWS Cert Cards Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {awsCertifications.map((cert, index) => (
                            <AWSCertCard key={cert.title} cert={cert} index={index} />
                        ))}
                    </div>

                    {/* AWS Stats Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-8 grid grid-cols-3 gap-4"
                    >
                        {[
                            { label: 'CERTIFICATIONS', value: '3', accent: 'text-[#FF9900]' },
                            { label: 'AWS SERVICES', value: '30+', accent: 'text-[#00f0ff]' },
                            { label: 'CLOUD EXPERTISE', value: 'ADVANCED', accent: 'text-[#7000ff]' },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                                <div className={`text-2xl md:text-3xl font-bold font-display ${stat.accent} mb-1`}>
                                    {stat.value}
                                </div>
                                <div className="text-[10px] font-mono text-gray-500 tracking-widest">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* ═══ OTHER CREDENTIALS SECTION ═══ */}
                <div className="pt-8 border-t border-white/10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <h3 className="text-xl font-bold text-white flex items-center gap-3 font-display mb-2">
                            <Award className="w-5 h-5 text-secondary" />
                            OTHER_CREDENTIALS
                        </h3>
                        <p className="text-xs font-mono text-gray-500">Additional certifications and platform credentials</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {otherCertifications.map((cert, index) => (
                            <OtherCertCard key={index} cert={cert} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
