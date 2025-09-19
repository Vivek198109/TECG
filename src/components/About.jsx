import { motion } from 'framer-motion';
import { AnimatedSection } from './ui/AnimatedSection';

const About = () => {
  const aboutSections = [
    {
      title: "Our Story",
      content: "Founded on the principles of integrity, innovation, and partnership, The Eventus Consulting Group (TECG) has grown into a leading provider of strategic staffing solutions. Our journey began with a simple mission: to bridge the gap between exceptional talent and forward-thinking companies. Today, we proudly serve a diverse range of industries, from cutting-edge technology and finance to robust manufacturing and engineering sectors.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      reverse: false
    },
    {
      title: "Our Philosophy",
      content: "Our team of experienced recruiters is dedicated to understanding the unique challenges and opportunities within the U.S. recruitment landscape. We believe in a human-centric approach, powered by technology. This allows us to deliver tailored solutions that not only meet but exceed expectations, ensuring every placement drives success and fosters long-term growth for both clients and candidates.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      reverse: true
    },
    {
      title: "Our Core Values",
      content: "Our work is anchored in a set of unwavering values: Integrity in every interaction, Excellence in our delivery, Partnership with our clients and candidates, and a commitment to fostering Diversity and Inclusion. These principles guide our decisions and define our identity, ensuring we operate with transparency and a relentless focus on quality.",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      reverse: false
    }
  ];

  return (
    <section id="about" className="py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-slate-300 text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About The Eventus Consulting Group
        </motion.h1>

        {aboutSections.map((section, index) => (
          <AnimatedSection key={index} delay={index * 0.2}>
            <div className={`flex flex-col lg:flex-row items-center gap-12 mb-20 ${section.reverse ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                className="flex-1 max-w-2xl"
                initial={{ opacity: 0, x: section.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-200 mb-6 relative">
                  {section.title}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: '60px' }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </h2>
                <p className="text-slate-300 leading-relaxed text-lg">
                  {section.content}
                </p>
              </motion.div>
              
              <motion.div
                className="flex-1 max-w-lg"
                initial={{ opacity: 0, x: section.reverse ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.img
                  src={section.image}
                  alt={`${section.title} representation`}
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default About;