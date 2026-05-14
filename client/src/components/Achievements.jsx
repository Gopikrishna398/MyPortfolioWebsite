import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';

const Achievements = () => {
  const { portfolioData } = usePortfolio();
  const achievements = portfolioData?.achievements || [];

  if (achievements.length === 0) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: 'blur(0px)',
      transition: { duration: 1, ease: "easeOut" }
    },
  };

  return (
    <section id="achievements" className="py-24 relative bg-slate-900/5 dark:bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Key Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8"
        >
          {achievements.map((item, index) => {
             // Optimized Cloudinary Image
             const optimizedImage = item.image.includes('cloudinary.com') 
             ? item.image.replace('/upload/', '/upload/f_auto,q_auto,w_600/') 
             : item.image;

            return (
              <motion.div
                key={item.id || item._id}
                variants={itemVariants}
                className="flex flex-col md:flex-row gap-8 glass p-6 md:p-10 rounded-[2rem] border border-white/20 items-center hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all group"
              >
                <div className="w-full md:w-1/3 aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={optimizedImage}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="flex-1 space-y-4 text-center md:text-left">
                  <span className="text-primary font-bold tracking-widest text-sm uppercase">
                    {item.date}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
