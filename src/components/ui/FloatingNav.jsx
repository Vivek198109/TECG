import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export const FloatingNav = ({ navItems, className }) => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-secondary/80 backdrop-blur-md rounded-full px-6 py-3 border border-slate-700 ${className}`}
        >
          <ul className="flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={item.link}
                  className="text-slate-300 hover:text-white transition-colors duration-300 text-sm font-medium"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};