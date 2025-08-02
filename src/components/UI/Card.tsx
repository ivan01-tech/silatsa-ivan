import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true,
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-300 ${
        hover ? 'hover:shadow-xl border border-gray-100' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;