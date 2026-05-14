import { portfolioConfig } from '../config/portfolio';
import { usePortfolio } from '../context/PortfolioContext';
import Wave from 'react-wavify';

const About = () => {
  const { portfolioData } = usePortfolio();

  // Use backend data if available, otherwise fallback to local config
  const profilePic = portfolioData?.profilePicture || portfolioConfig.profilePicture;

  const skills = [
    'Java', 'Python', 'Node.js', 'Express', 'React', 'JavaScript',
    'MySQL', 'Git', 'GitHub', 'Docker', 'AWS', 'Minikube', 'K8s',
    'Microsoft Excel', 'Power BI'
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-start">

          <div className="w-full md:w-1/2 md:sticky md:top-32 z-10">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-500 rounded-2xl transform translate-x-4 translate-y-4 opacity-50 dark:opacity-30 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
              <div className="relative glass rounded-2xl p-4 border border-slate-200 dark:border-white/10 shadow-xl overflow-hidden">
                <img
                  src={profilePic.includes('cloudinary.com') ? profilePic.replace('/upload/', '/upload/f_auto,q_auto,w_800/') : profilePic}
                  alt="Profile"
                  className="w-full h-[400px] object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative">
            {/* Animated background element for skills section */}
            <div className="absolute -inset-6 rounded-3xl overflow-hidden -z-10 bg-gradient-to-b from-transparent to-primary/5 dark:to-primary/10 border border-slate-200 dark:border-white/5 shadow-inner hidden md:block">
              <div className="absolute bottom-0 left-0 right-0 h-2/3 opacity-30 dark:opacity-20 pointer-events-none mix-blend-screen dark:mix-blend-lighten">
                <Wave fill='url(#gradient)'
                  paused={false}
                  style={{ position: 'absolute', bottom: 0, height: '100%' }}
                  options={{ height: 20, amplitude: 30, speed: 0.15, points: 3 }}
                >
                  <defs>
                    <linearGradient id="gradient" gradientTransform="rotate(90)">
                      <stop offset="10%"  stopColor="#aa3bff" />
                      <stop offset="90%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </Wave>
                <Wave fill='url(#gradient2)'
                  paused={false}
                  style={{ position: 'absolute', bottom: 0, height: '100%', opacity: 0.5 }}
                  options={{ height: 30, amplitude: 40, speed: 0.2, points: 4 }}
                >
                  <defs>
                    <linearGradient id="gradient2" gradientTransform="rotate(90)">
                      <stop offset="10%"  stopColor="#3b82f6" />
                      <stop offset="90%" stopColor="#aa3bff" />
                    </linearGradient>
                  </defs>
                </Wave>
              </div>
            </div>
            

            <div className="relative glass rounded-2xl p-8 border border-slate-200 dark:border-white/10 shadow-xl mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                About Me
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400">
                <p>
                  Hello! I'm Gopi Krishna, a passionate full-stack developer who enjoys building scalable and impactful digital products. My journey into technology started with curiosity about how websites and applications work, which gradually led me into full-stack development, cloud technologies, and data-driven solutions.
                </p>
                <p>
                  Currently, I focus on developing modern web applications using the MERN stack, exploring DevOps practices, and working with data analytics to solve real-world problems. I enjoy creating clean, responsive, and user-friendly applications while continuously learning new technologies.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-2 bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-800 dark:text-slate-200 rounded-lg border border-slate-200 dark:border-white/10 hover:border-primary hover:bg-primary/5 hover:text-primary dark:hover:text-primary transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 hover:shadow-[0_0_20px_rgba(170,59,255,0.4)] cursor-pointer"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
