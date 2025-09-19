import { motion } from 'framer-motion';
import { AnimatedSection } from './ui/AnimatedSection';
import { HoverEffect } from './ui/HoverEffect';
import { Users, UserCheck, Search, TrendingUp, Briefcase, Code } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Contract Staffing",
      description: "Gain the agility to scale your workforce with our contract staffing solutions. We provide access to a pre-vetted pool of top-tier professionals ready to tackle your project-based needs, ensuring you have the right expertise exactly when you need it, without the long-term overhead.",
      icon: <Users className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Direct Hires",
      description: "Building a strong, permanent team is crucial for sustained growth. Our direct hire service is a meticulous, end-to-end process designed to find candidates who not only possess the right skills but also align perfectly with your company culture and long-term vision.",
      icon: <UserCheck className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Executive Search",
      description: "Leadership defines direction. Our executive search practice operates with the utmost discretion and a deep network of industry leaders to identify and attract transformative executives who will guide your organization to its next stage of innovation and success.",
      icon: <Search className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Strategic HR Consulting",
      description: "Beyond recruitment, we offer strategic HR consulting to help you optimize your talent management framework. From workforce planning and employer branding to retention strategies, our insights empower you to build a resilient and competitive organization.",
      icon: <TrendingUp className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Recruitment Process Outsourcing (RPO)",
      description: "Delegate your entire recruitment lifecycle to us. Our RPO solutions embed our expert team within your organization, managing everything from sourcing and screening to onboarding. This seamless partnership enhances hiring quality and reduces costs.",
      icon: <Briefcase className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Technical & Niche Skill Sourcing",
      description: "In a competitive market, securing specialized talent is paramount. We excel in sourcing professionals with rare and in-demand technical skills, enabling you to drive your most critical technology and engineering initiatives forward.",
      icon: <Code className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <section id="services" className="py-20 px-5 bg-gradient-to-b from-primary to-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-slate-300 text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h1>
        
        <motion.p
          className="text-xl text-slate-200 text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We provide a spectrum of specialized recruitment services designed to build dynamic, high-performing teams. Our tailored approach ensures that we meet your unique talent needs with precision, speed, and unparalleled expertise.
        </motion.p>

        <AnimatedSection>
          <HoverEffect items={services} className="mt-12" />
        </AnimatedSection>

        {/* Address Section */}
        <AnimatedSection className="mt-20">
          <div className="text-center">
            <motion.h2
              className="text-3xl font-semibold text-slate-300 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              TECG Headquarters
            </motion.h2>
            
            <motion.div
              className="bg-secondary p-8 rounded-2xl shadow-2xl max-w-md mx-auto border border-slate-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold text-slate-200 mb-4">Delaware, USA</h3>
              <p className="text-slate-200 mb-4">
                1309 Coffeen Avenue STE 1200<br />
                Sheridan Wyoming 82801
              </p>
              <a
                href="mailto:hello@theeventusconsultinggroup.com"
                className="text-accent hover:text-blue-400 transition-colors duration-300"
              >
                hello@theeventusconsultinggroup.com
              </a>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;