import LiveBackground from './LiveBackground';
import { usePortfolio } from '../context/PortfolioContext';
import { portfolioConfig } from '../config/portfolio';

const Hero = () => {
  const { portfolioData } = usePortfolio();
  const profilePic = portfolioData?.profilePicture || portfolioConfig.profilePicture;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background container */}
      <div className="absolute inset-0 z-0">
        <LiveBackground />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-semibold tracking-wider mb-6">
              HELLO WORLD
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8">
              I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">Gopi Krishna</span>
              <br />
              <span className="text-slate-800 dark:text-slate-100">Full Stack Developer.</span>
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              I build exceptional and accessible digital experiences for the web. Transforming ideas into robust, scalable, and elegant solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="px-8 py-3.5 rounded-full bg-primary hover:bg-primary-dark text-white font-medium transition-all shadow-[0_0_20px_rgba(170,59,255,0.4)] hover:shadow-[0_0_30px_rgba(170,59,255,0.6)] transform hover:-translate-y-1 text-center"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-full glass hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-medium transition-all transform hover:-translate-y-1 text-center"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Photo Section */}
          <div className="flex-1 flex justify-center md:justify-end w-full">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full p-2 border border-white/20 glass shadow-2xl overflow-hidden group">
                <img 
                  src={profilePic.includes('cloudinary.com') ? profilePic.replace('/upload/', '/upload/f_auto,q_auto,w_800/') : profilePic} 
                  alt="Gopi Krishna" 
                  className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
