import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioConfig } from '../config/portfolio';
import { usePortfolio } from '../context/PortfolioContext';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const { portfolioData } = usePortfolio();

  // Use backend certifications if available, otherwise fallback to local config
  const certifications = portfolioData?.certifications || portfolioConfig.certifications;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-lg">
            Validated technical expertise through industry-leading certifications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id || cert._id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
              onClick={() => setSelectedCert(cert)}
            >
              {/* Gradient Border Glow */}
              <div className="absolute -inset-[1px] bg-gradient-to-b from-white/20 to-transparent group-hover:from-primary/50 group-hover:to-blue-500/50 rounded-2xl transition-all duration-500 opacity-50"></div>
              
              <div className="relative h-full glass rounded-2xl overflow-hidden border border-white/10 flex flex-col transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(170,59,255,0.2)]">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={cert.image.includes('cloudinary.com') ? cert.image.replace('.pdf', '.jpg').replace('/upload/', '/upload/f_auto,q_auto,w_600/') : cert.image.replace('.pdf', '.jpg')}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                  
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-bold text-white uppercase tracking-widest">
                    {cert.date}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium mb-6">
                    {cert.issuer}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-bold text-primary tracking-widest uppercase">View Details</span>
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal View */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full glass rounded-3xl overflow-hidden border border-white/20 shadow-[0_0_100px_rgba(170,59,255,0.2)]"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-primary transition-all duration-300 z-50 border border-white/10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="p-8 md:p-12">
                <div className="aspect-[16/10] bg-slate-900 rounded-2xl overflow-hidden relative border border-white/5 shadow-2xl flex items-center justify-center">
                  <img
                    src={selectedCert.image.replace('.pdf', '.jpg')}
                    alt={selectedCert.title}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
                </div>
                
                <div className="mt-10 flex flex-col md:flex-row items-end justify-between gap-6">
                  <div className="space-y-2">
                    <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase">{selectedCert.issuer}</span>
                    <h3 className="text-3xl font-bold text-white leading-tight">{selectedCert.title}</h3>
                    <p className="text-slate-400">Awarded on {selectedCert.date}</p>
                  </div>
                  <button 
                    onClick={() => window.open(selectedCert.image, '_blank')}
                    className="w-full md:w-auto px-10 py-4 bg-primary text-white font-bold rounded-xl hover:scale-105 transition-transform shadow-[0_10px_30px_rgba(170,59,255,0.4)]"
                  >
                    Verify Certificate
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
