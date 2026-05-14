import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Resume from './components/Resume';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import { PortfolioProvider } from './context/PortfolioContext';

function App() {
  return (
    <PortfolioProvider>
      <div className="min-h-screen">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
    </PortfolioProvider>
  );
}

export default App;
