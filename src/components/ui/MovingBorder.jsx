import { motion } from 'framer-motion';

export const MovingBorder = ({ children, duration = 2000, className, ...otherProps }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-lg p-[1px] ${className}`}
      {...otherProps}
    >
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: `conic-gradient(from 0deg, transparent, #3B82F6, transparent)`,
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: duration / 1000,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="relative bg-secondary rounded-lg">
        {children}
      </div>
    </div>
  );
};