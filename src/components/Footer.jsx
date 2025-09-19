import { motion } from 'framer-motion';
import { AnimatedSection } from './ui/AnimatedSection';

const Footer = () => {
  const footerSections = [
    {
      title: "Our Services",
      links: [
        { name: "Contract Staffing", href: "#services" },
        { name: "Direct Hires", href: "#services" },
        { name: "Executive Search", href: "#services" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Company Policy", href: "#" },
        { name: "Terms of Service", href: "#" }
      ]
    },
    {
      title: "Follow Us",
      links: [
        { name: "LinkedIn", href: "https://www.linkedin.com/company/the-eventus-consulting-group" },
        { name: "Twitter", href: "https://twitter.com/home?ref_src=twsrc%5Etfw" }
      ]
    }
  ];

  return (
    <footer className="bg-secondary border-t border-slate-700 py-16 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Copyright */}
          <AnimatedSection>
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.img
                src="/assets/logo.jpeg"
                alt="TECG Logo"
                className="w-24 h-auto rounded-2xl shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <p className="text-slate-400 text-sm">
                &copy; 2024 The Eventus Consulting Group. All Rights Reserved.
              </p>
            </motion.div>
          </AnimatedSection>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <AnimatedSection key={section.title} delay={index * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-slate-200 font-semibold text-lg mb-4 relative">
                  {section.title}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: '30px' }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 + linkIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <a
                        href={link.href}
                        className="text-slate-300 hover:text-white transition-colors duration-300 text-sm"
                        target={link.href.startsWith('http') ? '_blank' : '_self'}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom Border */}
        <motion.div
          className="mt-12 pt-8 border-t border-slate-700 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400 text-sm">
            Innovate. Integrate. Inspire. - Building the future workforce today.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;