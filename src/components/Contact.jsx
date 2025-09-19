import { motion } from 'framer-motion';
import { AnimatedSection } from './ui/AnimatedSection';
import { MovingBorder } from './ui/MovingBorder';
import { Download, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-5 bg-gradient-to-b from-secondary to-primary">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-slate-300 text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h1>
        
        <motion.p
          className="text-xl text-slate-200 text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Have a question or want to work with us? We'd love to hear from you. Fill out the form below, and one of our expert consultants will be in touch shortly. You can also find our office locations on the map.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedSection>
            <MovingBorder className="p-1">
              <form className="bg-secondary p-8 rounded-2xl">
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="name" className="block text-slate-300 mb-2 font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full p-4 bg-slate-700 border border-slate-600 rounded-lg text-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="block text-slate-300 mb-2 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full p-4 bg-slate-700 border border-slate-600 rounded-lg text-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="message" className="block text-slate-300 mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      className="w-full p-4 bg-slate-700 border border-slate-600 rounded-lg text-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 resize-vertical"
                    ></textarea>
                  </motion.div>

                  <motion.button
                    type="submit"
                    className="w-full bg-accent hover:bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 animate-pulse-shadow"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </MovingBorder>
          </AnimatedSection>

          {/* Contact Info */}
          <div className="space-y-8">
            <AnimatedSection delay={0.2}>
              <motion.div
                className="bg-secondary p-8 rounded-2xl shadow-2xl border border-slate-700"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-semibold text-slate-200 mb-4">TECG Headquarters</h2>
                <h3 className="text-xl text-slate-300 mb-4">Delaware, USA</h3>
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
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <motion.a
                href="/assets/Eventus Consulting Group Brochure.pdf"
                download
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 px-8 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Download TECG Portfolio</span>
                <Download className="w-5 h-5" />
              </motion.a>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <motion.div
                className="flex items-center justify-center gap-3 bg-primary text-white py-4 px-8 rounded-full font-semibold"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                viewport={{ once: true }}
              >
                <Clock className="w-5 h-5" />
                <div className="text-center">
                  <span className="font-bold">Business Hours:</span>
                  <span className="ml-2 text-accent">09:00 AM EST - 05:00 PM EST</span>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;