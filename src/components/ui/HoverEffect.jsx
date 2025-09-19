import { motion } from 'framer-motion';
import { useState } from 'react';

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-accent/20 to-purple-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            layoutId={hoveredIndex === idx ? "hovered-background" : undefined}
          />
          <div className="rounded-2xl h-full w-full p-6 overflow-hidden bg-secondary border border-slate-700 relative z-20">
            <div className="relative z-50">
              <div className="p-4">
                {item.icon && (
                  <div className="mb-4 text-accent">
                    {item.icon}
                  </div>
                )}
                <h4 className="text-slate-200 font-bold tracking-wide text-lg mb-3">
                  {item.title}
                </h4>
                <p className="text-slate-300 tracking-wide leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};