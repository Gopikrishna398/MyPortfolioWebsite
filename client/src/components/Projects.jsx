import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePortfolio } from '../context/PortfolioContext';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const container = useRef(null);
  const { portfolioData } = usePortfolio();

  // Use backend projects if available, otherwise use a minimal fallback
  const projects = portfolioData?.projects || [];

  useGSAP(() => {
    if (projects.length === 0) return;

    const cards = gsap.utils.toArray('.project-card');

    cards.forEach((card, index) => {
      if (index === cards.length - 1) return;

      // Calculate the start and end precisely based on the sticky positions
      const currentTop = 100 + (index * 20);
      const nextTop = 100 + ((index + 1) * 20);

      gsap.to(card, {
        scale: 0.9,
        opacity: 0.4,
        scrollTrigger: {
          trigger: card,
          start: `top ${currentTop}px`, // when THIS card sticks
          endTrigger: cards[index + 1],
          end: `top ${nextTop}px`, // when NEXT card sticks
          scrub: true,
          invalidateOnRefresh: true,
        }
      });
    });
  }, { scope: container, dependencies: [projects] });

  if (projects.length === 0) return null;

  return (
    <section id="projects" className="py-24 relative bg-slate-50/50 dark:bg-black/20" ref={container}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Stacked Cards Container */}
        {/* We add massive padding-bottom so there is enough scroll space for the cards to slide up and stack */}
        <div className="flex flex-col" style={{ gap: '0vh', paddingBottom: `${projects.length * 1}vh` }}>
          {projects.map((project, index) => {
            // CSS Sticky combined with GSAP for the animation
            const topOffset = 100 + (index * 20); // cascade offset

            // Apply Cloudinary Optimization (if it's a cloudinary URL)
            const optimizedImage = project.image.includes('cloudinary.com')
              ? project.image.replace('/upload/', '/upload/f_auto,q_auto,w_800/')
              : project.image;

            return (
              <div
                key={project.id || project._id}
                className="project-card sticky shadow-2xl glass rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10"
                style={{ top: `${topOffset}px`, transformOrigin: 'top center' }}
              >
                <div className="flex flex-col md:flex-row h-full">
                  {/* Content Side */}
                  <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white/50 dark:bg-black/40">
                    <div className="text-primary text-sm font-bold tracking-widest mb-2 uppercase">
                      Featured Project 0{index + 1}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-sm font-medium px-4 py-1.5 bg-slate-100 dark:bg-white/5 text-primary rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-6 mt-auto">
                      {project.links?.github && (
                        <a href={project.links.github} className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors font-semibold">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                          GitHub
                        </a>
                      )}
                      {project.links?.live && (
                        <a href={project.links.live} className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors font-semibold">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden relative">
                    <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10 hover:opacity-0 transition-opacity duration-500"></div>
                    <img
                      src={optimizedImage}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
