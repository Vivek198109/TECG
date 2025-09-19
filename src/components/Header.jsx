import { motion } from 'framer-motion';
import { FloatingNav } from './ui/FloatingNav';

const Header = () => {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About Us", link: "#about" },
    { name: "Our Services", link: "#services" },
    { name: "Contact Us", link: "#contact" },
    { name: "Our Partners", link: "#partners" },
  ];

  return (
    <>
      <FloatingNav navItems={navItems} />
      <header className="flex justify-between items-center p-5 bg-secondary">
        <motion.img
          src="/assets/logo.jpeg"
          alt="TECG Logo"
          className="w-32 h-auto rounded-[20%] shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        />
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={item.link}
                  className="text-white hover:text-accent transition-colors duration-300 px-5 py-2 rounded-md hover:bg-slate-700"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;