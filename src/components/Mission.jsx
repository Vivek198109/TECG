import { motion } from 'framer-motion';
import { AnimatedSection } from './ui/AnimatedSection';

const Mission = () => {
  return (
    <AnimatedSection className="max-w-6xl mx-auto py-20 px-5 text-center">
      <motion.h3
        className="text-3xl md:text-4xl font-semibold text-slate-300 mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our Mission
      </motion.h3>
      <motion.p
        className="text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto italic"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        We aim to simplify hiring through technology, transparency, and human-centric service, ensuring the right fit every time.
      </motion.p>
    </AnimatedSection>
  );
};

export default Mission;