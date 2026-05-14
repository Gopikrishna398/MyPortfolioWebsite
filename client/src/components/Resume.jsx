import React from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../config/portfolio';
import { usePortfolio } from '../context/PortfolioContext';

const Resume = () => {
  const { portfolioData } = usePortfolio();

  // Fallback to local config if backend data is not yet loaded
  const resumeViewUrl = portfolioData?.resume?.viewUrl || portfolioConfig.resume.viewUrl;
  const resumeDownloadUrl = portfolioData?.resume?.downloadUrl || portfolioConfig.resume.downloadUrl;

  const handleView = () => {
    window.open(resumeViewUrl, '_blank');
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeDownloadUrl;
    link.download = 'Gopi_Krishna_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-slate-50/30 dark:bg-black/40">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 0, filter: 'blur(15px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Resume
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my professional journey, skills, and academic background.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 0, filter: 'blur(20px)' }}
          whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >
          {/* Animated Glow Border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

          <div className="relative glass p-8 md:p-16 rounded-[2.5rem] border border-white/20 dark:border-white/10 shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                    Professional Experience
                  </h3>
                  <div className="space-y-6">
                    <div className="border-l-2 border-primary/30 pl-6 py-1">
                      <h4 className="font-bold text-slate-800 dark:text-slate-200">Full Stack Developer</h4>
                      <p className="text-sm text-primary font-medium">Freelance • 2025 - Present</p>
                      <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">
                        Building high-performance web applications using MERN stack and modern cloud solutions.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                    Education
                  </h3>
                  <div className="border-l-2 border-blue-500/30 pl-6 py-1">
                    <h4 className="font-bold text-slate-800 dark:text-slate-200">B.Tech Computer Science</h4>
                    <p className="text-sm text-blue-500 font-medium">Undergraduate</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center space-y-6">
                <div className="relative w-full aspect-[4/5] max-w-[300px] bg-slate-200 dark:bg-slate-800/50 rounded-2xl p-4 shadow-inner overflow-hidden group/resume cursor-pointer" onClick={handleView}>

                  {/* Animated Dummy Template (Modern SVG Logo/Illustration) */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 2, -2, 0]
                      }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="w-full h-full border-2 border-dashed border-primary/30 rounded-xl flex flex-col items-center justify-center gap-4 bg-white/5"
                    >
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="space-y-2 w-full px-8">
                        <div className="h-2 w-full bg-slate-300 dark:bg-slate-600 rounded"></div>
                        <div className="h-2 w-3/4 bg-slate-300 dark:bg-slate-600 rounded"></div>
                        <div className="h-2 w-5/6 bg-slate-300 dark:bg-slate-600 rounded"></div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center opacity-0 group-hover/resume:opacity-100 transition-opacity duration-500">
                    <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 shadow-xl">
                      <svg className="w-12 h-12 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[300px] md:max-w-none justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleView}
                    className="flex-1 px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-[0_10px_20px_rgba(170,59,255,0.3)] hover:shadow-[0_15px_25px_rgba(170,59,255,0.4)] transition-all flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Resume
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleDownload}
                    className="flex-1 px-8 py-4 bg-white/10 dark:bg-white/5 border border-white/20 text-slate-900 dark:text-white font-bold rounded-xl hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
