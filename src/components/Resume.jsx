import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowLeft, FileText, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resume = () => {
    const [imageError, setImageError] = useState(false);

    return (
        <div className="min-h-screen bg-black text-white p-6 md:p-12 flex flex-col">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between mb-8"
            >
                <Link
                    to="/"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-mono text-sm">RETURN_TO_BASE</span>
                </Link>

                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-2 text-primary/50 font-mono text-xs">
                        <FileText className="w-4 h-4" />
                        <span>PREVIEW_MODE_ACTIVE</span>
                    </div>
                    <a
                        href="/Resume.pdf"
                        download="Vishal_Resume.pdf"
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-black font-bold text-sm rounded hover:bg-white transition-colors"
                    >
                        <Download className="w-4 h-4" />
                        <span>DOWNLOAD_FILE</span>
                    </a>
                </div>
            </motion.div>

            {/* Image Viewer */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex-1 bg-white/5 rounded-lg border border-white/10 overflow-hidden relative flex flex-col items-center justify-start p-8 overflow-y-auto"
            >
                {!imageError ? (
                    <img
                        src="/Resume.png"
                        alt="Resume Preview"
                        onError={() => setImageError(true)}
                        className="max-w-4xl w-full h-auto shadow-2xl rounded border border-white/20"
                    />
                ) : (
                    <div className="flex flex-col items-center justify-center h-full text-center space-y-4 p-8">
                        <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mb-4">
                            <ImageIcon className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-white">PREVIEW_IMAGE_NOT_FOUND</h3>
                        <p className="text-gray-400 max-w-md">
                            Please upload an image of your resume named <code className="text-primary bg-primary/10 px-2 py-1 rounded">Resume.png</code> to the <code className="text-primary bg-primary/10 px-2 py-1 rounded">public</code> folder.
                        </p>
                        <p className="text-sm text-gray-500 mt-4">
                            You can still download the PDF using the button above.
                        </p>
                    </div>
                )}
            </motion.div>

            {/* Cyber-Reactor Download Button */}
            <motion.a
                href="/Resume.pdf"
                download="Vishal_Resume.pdf"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-8 right-8 z-50 group"
            >
                <div className="relative">
                    {/* Pulsing Glow Background */}
                    <motion.div
                        animate={{
                            boxShadow: ["0 0 20px rgba(0,240,255,0.3)", "0 0 60px rgba(0,240,255,0.6)", "0 0 20px rgba(0,240,255,0.3)"]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-primary/20 blur-xl rounded-lg"
                    />

                    {/* Main Button Container */}
                    <div className="relative bg-black border-2 border-primary/50 hover:border-primary transition-colors px-8 py-4 flex items-center gap-4 overflow-hidden"
                        style={{ clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)" }}
                    >
                        {/* Scanline Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:animate-[scanline_1s_linear_infinite]" />

                        {/* Icon Box */}
                        <div className="relative z-10 bg-primary text-black p-2 rounded-sm">
                            <Download className="w-6 h-6" />
                        </div>

                        {/* Text Content */}
                        <div className="relative z-10 flex flex-col">
                            <span className="text-[10px] font-mono text-primary/70 tracking-widest">SYSTEM_FILE</span>
                            <span className="text-lg font-bold text-white tracking-wider group-hover:text-primary transition-colors">DOWNLOAD_RESUME</span>
                        </div>

                        {/* Decorative Corner Markers */}
                        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary" />
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary" />
                    </div>
                </div>
            </motion.a>
        </div>
    );
};

export default Resume;
