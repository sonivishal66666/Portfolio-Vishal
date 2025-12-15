import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Lock, Mail, MessageSquare, User, CheckCircle, Loader, Globe } from 'lucide-react';
import Globe3D from './Globe3D';

const Contact = () => {
    const [formState, setFormState] = useState('idle'); // idle, sending, sent

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState('sending');
        // Simulate network request
        setTimeout(() => {
            setFormState('sent');
            setTimeout(() => setFormState('idle'), 3000);
        }, 2000);
    };

    return (
        <section className="py-20 relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* 3D Background */}
            <Globe3D />

            <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left: Context */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-6">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        SECURE UPLINK ESTABLISHED
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                        GLOBAL <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            CONNECTIVITY
                        </span>
                    </h2>

                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Initialize handshake protocol. Transmit your project parameters for immediate analysis and architectural consultation.
                    </p>

                    <div className="grid grid-cols-2 gap-4 font-mono text-sm">
                        <div className="p-4 rounded bg-white/5 border border-white/10">
                            <div className="text-xs text-gray-500 mb-1">EMAIL</div>
                            <div className="text-primary truncate" title="vishalsoni6350@gmail.com">vishalsoni6350@gmail.com</div>
                        </div>
                        <div className="p-4 rounded bg-white/5 border border-white/10">
                            <div className="text-xs text-gray-500 mb-1">PHONE</div>
                            <div className="text-primary">+91 6375188332</div>
                        </div>
                        <div className="col-span-2 p-4 rounded bg-white/5 border border-white/10">
                            <div className="text-xs text-gray-500 mb-1">LINKEDIN</div>
                            <div className="text-primary">linkedin.com/in/vishalsoni18</div>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Form Interface */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-black/80 border border-primary/30 rounded-xl p-1 relative overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.1)]"
                >
                    {/* Holographic Border Effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent opacity-20 pointer-events-none" />

                    <div className="bg-black rounded-lg p-8 relative z-10">
                        <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                            <div className="flex items-center gap-2 text-primary font-mono text-sm">
                                <Lock className="w-4 h-4" />
                                <span>TRANSMISSION_MODULE_V2</span>
                            </div>
                            <div className="flex gap-1">
                                <div className="w-2 h-2 rounded-full bg-red-500" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-gray-500 flex items-center gap-2">
                                    <User className="w-3 h-3" /> SOURCE_ID
                                </label>
                                <input
                                    type="text"
                                    placeholder="ENTER IDENTIFIER"
                                    className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-primary focus:outline-none focus:bg-white/10 transition-all font-mono text-sm placeholder:text-gray-700"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono text-gray-500 flex items-center gap-2">
                                    <Mail className="w-3 h-3" /> RETURN_PATH
                                </label>
                                <input
                                    type="email"
                                    placeholder="ENTER CONTACT VECTOR"
                                    className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-primary focus:outline-none focus:bg-white/10 transition-all font-mono text-sm placeholder:text-gray-700"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono text-gray-500 flex items-center gap-2">
                                    <MessageSquare className="w-3 h-3" /> DATA_PACKET
                                </label>
                                <textarea
                                    rows="4"
                                    placeholder="INPUT MESSAGE STREAM..."
                                    className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-primary focus:outline-none focus:bg-white/10 transition-all font-mono text-sm placeholder:text-gray-700 resize-none"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={formState !== 'idle'}
                                className={`w-full py-4 font-bold text-sm tracking-widest flex items-center justify-center gap-2 transition-all duration-300 relative overflow-hidden group ${formState === 'sent'
                                    ? 'bg-success text-black'
                                    : 'bg-primary text-black'
                                    }`}
                            >
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <div className="relative flex items-center gap-2">
                                    {formState === 'idle' && (
                                        <>
                                            <Send className="w-4 h-4" /> INITIATE UPLINK
                                        </>
                                    )}
                                    {formState === 'sending' && (
                                        <>
                                            <Loader className="w-4 h-4 animate-spin" /> ENCRYPTING...
                                        </>
                                    )}
                                    {formState === 'sent' && (
                                        <>
                                            <CheckCircle className="w-4 h-4" /> PACKET SENT
                                        </>
                                    )}
                                </div>
                            </button>
                        </form>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;
