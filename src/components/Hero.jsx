import { motion } from 'framer-motion';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { BackgroundBeams } from './ui/BackgroundBeams';
import { SparklesCore } from './ui/SparklesCore';

const Hero = () => {
  const mainHeading = "Innovate. Integrate. Inspire.";
  const subHeading = "Delivering Talent That Drives Innovation Across Industries";
  const mainText = "At The Eventus Consulting Group (TECG), we specialize in providing strategic staffing solutions across a wide spectrum of industries—including technology, finance, manufacturing, engineering, and non-technical roles. Our deep expertise in the U.S. recruitment landscape enables us to connect businesses with highly skilled professionals who align with their goals and culture. Whether you're seeking contract staffing, direct hires, or executive search services, we deliver with speed, precision, and integrity. Our commitment to quality, diversity, and long-term partnerships ensures that every placement contributes to your success. Let us help you build a workforce that's ready to lead the future.";

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center px-5 overflow-hidden">
      <BackgroundBeams className="z-0" />
      <SparklesCore
        id="hero-sparkles"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="z-10"
        particleColor="#3B82F6"
      />
      
      <div className="relative z-20 max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-slate-300 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <TextGenerateEffect words={mainHeading} />
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl font-semibold text-slate-300 mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {subHeading}
        </motion.h2>

        <motion.p
          className="text-lg text-slate-200 leading-relaxed max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          {mainText}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
        >
          <motion.a
            href="#services"
            className="bg-accent hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Our Services
          </motion.a>
          <motion.a
            href="#contact"
            className="border border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;