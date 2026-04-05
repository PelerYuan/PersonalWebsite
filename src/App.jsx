import { useLenis } from './hooks/useLenis';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import SoftwareArchitect from './components/sections/SoftwareArchitect';
import HardwareEngineer from './components/sections/HardwareEngineer';
import ServerOps from './components/sections/ServerOps';
import TechnicalWriter from './components/sections/TechnicalWriter';
import Photography from './components/sections/Photography';
import Contact from './components/sections/Contact';

export const SECTION_IDS = [
  'hero',
  'about',
  'software',
  'hardware',
  'server-ops',
  'writing',
  'photography',
  'contact',
];

export default function App() {
  useLenis();

  return (
    <div className="section-bg min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <SoftwareArchitect />
        <HardwareEngineer />
        <ServerOps />
        <TechnicalWriter />
        <Photography />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
