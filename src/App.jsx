import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import ImageShowcase from './components/ImageShowcase';
import About from './components/About';
import Services from './components/Services';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <motion.div
      className="min-h-screen bg-primary text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main>
        <Hero />
        <Mission />
        <ImageShowcase />
        <About />
        <Services />
        <Partners />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;