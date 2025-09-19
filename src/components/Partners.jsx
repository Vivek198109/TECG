import { motion } from 'framer-motion';
import { AnimatedSection } from './ui/AnimatedSection';
import { HoverEffect } from './ui/HoverEffect';
import { Wrench, Settings, TrendingUp, Server, Heart, Pill } from 'lucide-react';

const Partners = () => {
  const partners = [
    {
      title: "Engineering Partners",
      description: "Collaborating with leaders in R&D, industrial innovation, and infrastructure.",
      icon: <Wrench className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2670"
    },
    {
      title: "Services Implementation Partners",
      description: "Ensuring seamless integration and deployment of enterprise-level software and solutions.",
      icon: <Settings className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2670"
    },
    {
      title: "Financial Partners",
      description: "Driving growth and stability with top-tier talent in banking, investment, and fintech.",
      icon: <TrendingUp className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2670"
    },
    {
      title: "Tech Partners",
      description: "Powering digital transformation with elite talent in software, cybersecurity, and cloud.",
      icon: <Server className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670"
    },
    {
      title: "HealthCare Partners",
      description: "Advancing patient care by sourcing specialized professionals for medical and administrative roles.",
      icon: <Heart className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=2670"
    },
    {
      title: "Pharma Partners",
      description: "Supporting life-saving innovations with expert talent in research, development, and compliance.",
      icon: <Pill className="w-8 h-8" />,
      image: "https://www.biopharlifesciences.co.in/public/Blogs/1735552692jpg"
    }
  ];

  return (
    <section id="partners" className="py-20 px-5">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-slate-300 text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Partners
        </motion.h1>
        
        <motion.p
          className="text-xl text-slate-200 text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We collaborate with industry leaders across a diverse range of sectors, leveraging specialized expertise to deliver unparalleled value. Our partnerships are the cornerstone of our success, enabling us to provide comprehensive solutions tailored to the unique demands of each domain.
        </motion.p>

        <AnimatedSection>
          <HoverEffect items={partners} className="mt-12" />
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Partners;