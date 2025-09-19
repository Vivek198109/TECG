import { motion } from 'framer-motion';
import { AnimatedSection } from './ui/AnimatedSection';

const ImageShowcase = () => {
  const galleryItems = [
    {
      src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Diverse team collaborating in a modern office",
      overlay: "Connecting Talent with Opportunity"
    },
    {
      src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Global recruitment network representation",
      overlay: "Global Reach, Local Expertise"
    },
    {
      src: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Professional in a high-tech environment",
      overlay: "Driving Future-Ready Workforces"
    }
  ];

  return (
    <AnimatedSection className="max-w-6xl mx-auto py-20 px-5 text-center">
      <motion.h3
        className="text-3xl md:text-4xl font-semibold text-slate-300 mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our Vision in Action
      </motion.h3>
      <motion.p
        className="text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto mb-12 italic"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        To create a recruitment ecosystem where every hire is a step toward innovation, diversity, and growth.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {galleryItems.map((item, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-2xl cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <motion.img
              src={item.src}
              alt={item.alt}
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
            >
              <p className="text-lg font-semibold">{item.overlay}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default ImageShowcase;