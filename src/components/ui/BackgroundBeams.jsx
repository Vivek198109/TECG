import { motion } from 'framer-motion';

export const BackgroundBeams = ({ className }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <svg
        className="absolute inset-0 h-full w-full"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="beam1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </linearGradient>
          <linearGradient id="beam2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(147, 51, 234, 0.1)" />
            <stop offset="100%" stopColor="rgba(147, 51, 234, 0)" />
          </linearGradient>
        </defs>
        
        <motion.path
          d="M0,20 Q50,10 100,30 L100,40 Q50,20 0,30 Z"
          fill="url(#beam1)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        
        <motion.path
          d="M0,60 Q50,70 100,50 L100,60 Q50,80 0,70 Z"
          fill="url(#beam2)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
      </svg>
    </div>
  );
};