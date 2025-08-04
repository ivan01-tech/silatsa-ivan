import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/ivan01-tech',
      color: 'hover:text-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/silatsa-ivan',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/silatsa_ivan',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:ivansilatsa@gmail.com',
      color: 'hover:text-red-500'
    }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Silatsa Ivan</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Fullstack Developer passionné par la création d'applications web et mobiles 
              innovantes. Toujours à la recherche de nouveaux défis techniques.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Liens Rapides</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="/about" className="text-gray-300 hover:text-amber-400 transition-colors">À propos</a>
              <a href="/skills" className="text-gray-300 hover:text-amber-400 transition-colors">Compétences</a>
              <a href="/experience" className="text-gray-300 hover:text-amber-400 transition-colors">Expériences</a>
              <a href="/projects" className="text-gray-300 hover:text-amber-400 transition-colors">Projets</a>
              <a href="/contact" className="text-gray-300 hover:text-amber-400 transition-colors">Contact</a>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📧 ivansilatsa@gmail.com</p>
              <p>📱 +237 681 832 508</p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2 bg-slate-800 rounded-lg transition-all duration-200 ${social.color}`}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center space-x-1">
            <span>© {currentYear} Silatsa Ivan. Fait avec</span>
            <Heart size={16} className="text-red-500 mx-1" />
            <span>et React</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;