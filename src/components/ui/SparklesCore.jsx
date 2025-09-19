import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const SparklesCore = ({ 
  id = "sparkles",
  background = "transparent",
  minSize = 0.4,
  maxSize = 1,
  particleDensity = 120,
  className,
  particleColor = "#3B82F6"
}) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < particleDensity; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * (maxSize - minSize) + minSize,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 2,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, [particleDensity, minSize, maxSize]);

  return (
    <div className={`absolute inset-0 ${className}`} style={{ background }}>
      <svg className="absolute inset-0 h-full w-full">
        {particles.map((particle) => (
          <motion.circle
            key={particle.id}
            cx={`${particle.x}%`}
            cy={`${particle.y}%`}
            r={particle.size}
            fill={particleColor}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        ))}
      </svg>
    </div>
  );
};