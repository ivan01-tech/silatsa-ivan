import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Github, ArrowUp } from 'lucide-react';

const FloatingButtons: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello Ivan, I saw your portfolio and would like to talk to you!");
    window.open(`https://wa.me/237681832508?text=${message}`, '_blank');
  };

  const buttons = [
    {
      icon: MessageCircle,
      onClick: openWhatsApp,
      className: 'bg-green-500 hover:bg-green-600 text-white',
      label: 'WhatsApp'
    },
    {
      icon: Mail,
      onClick: () => window.open('mailto:ivansilatsa@gmail.com', '_blank'),
      className: 'bg-blue-500 hover:bg-blue-600 text-white',
      label: 'Email'
    },
    {
      icon: Github,
      onClick: () => window.open('https://github.com/ivan01-tech', '_blank'),
      className: 'bg-gray-800 hover:bg-gray-900 text-white',
      label: 'GitHub'
    },
    {
      icon: ArrowUp,
      onClick: scrollToTop,
      className: 'bg-slate-800 hover:bg-slate-900 text-white',
      label: 'Haut de page'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      {buttons.map((button, index) => {
        const Icon = button.icon;
        return (
          <motion.button
            key={index}
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={button.onClick}
            className={`p-3 rounded-full shadow-lg transition-all duration-200 group relative ${button.className}`}
            title={button.label}
          >
            <Icon size={24} />
            
            {/* Tooltip */}
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {button.label}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
};

export default FloatingButtons;