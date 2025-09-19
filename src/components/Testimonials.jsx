import { motion } from 'framer-motion';
import { AnimatedSection } from './ui/AnimatedSection';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "TECG transformed our hiring process. Their understanding of the tech landscape is unparalleled, and they delivered top-tier candidates faster than we thought possible.",
      author: "John Carter",
      title: "CTO, Innovatech",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2680"
    },
    {
      quote: "The quality of talent we've onboarded through TECG has been exceptional. Their direct hire service is seamless, professional, and truly understands our company culture.",
      author: "Sarah Lee",
      title: "HR Director, FinSolutions",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2561"
    },
    {
      quote: "For executive roles, discretion and expertise are key. TECG's executive search team exceeded our expectations, finding us a leader who has been instrumental to our growth.",
      author: "Michael Rodriguez",
      title: "CEO, HealthForward",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574"
    },
    {
      quote: "Their contract staffing service is incredibly agile. We were able to scale our engineering team for a critical project with highly skilled professionals in just a matter of days.",
      author: "Emily Chen",
      title: "Project Manager, BuildRight",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574"
    }
  ];

  return (
    <AnimatedSection className="py-20 px-5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h3
          className="text-3xl md:text-4xl font-semibold text-slate-300 text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Customer Testimonials
        </motion.h3>

        <div className="relative">
          <motion.div
            className="flex gap-6 pb-6"
            animate={{ x: [0, -100 * testimonials.length] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ width: `${200 * testimonials.length}%` }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-secondary border border-slate-700 rounded-2xl p-8 min-w-[400px] shadow-2xl"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <blockquote className="text-slate-300 text-lg leading-relaxed mb-6 italic border-l-4 border-accent pl-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-slate-600"
                  />
                  <div>
                    <p className="text-slate-200 font-semibold">{testimonial.author}</p>
                    <p className="text-slate-400 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Testimonials;