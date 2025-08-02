import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import PageHeader from '../components/UI/PageHeader';
import Card from '../components/UI/Card';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    setIsSubmitting(false);
    alert('Message envoyé avec succès !');
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+237 681 832 508',
      href: 'tel:+237681832508',
      color: 'text-green-600'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'ivansilatsa@gmail.com',
      href: 'mailto:ivansilatsa@gmail.com',
      color: 'text-blue-600'
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Douala, Cameroun',
      href: '#',
      color: 'text-red-600'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/silatsa-ivan',
      color: 'hover:text-gray-900'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/silatsa-ivan',
      color: 'hover:text-blue-600'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/silatsa_ivan',
      color: 'hover:text-blue-400'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/237681832508?text=Hello Ivan, I saw your portfolio and would like to talk to you!',
      color: 'hover:text-green-600'
    }
  ];

  return (
    <div>
      <PageHeader
        title="Contactez-moi"
        subtitle="Discutons de vos projets et collaborations potentielles"
        icon={Phone}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact CTA */}
        <Card delay={0.2} className="mb-16 text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Que vous ayez un projet en tête, une question technique ou simplement envie de discuter, 
            je suis toujours disponible pour échanger. N'hésitez pas à me contacter !
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://wa.me/237681832508?text=Hello Ivan, I saw your portfolio and would like to talk to you!"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-200"
            >
              <MessageCircle size={20} className="mr-2" />
              WhatsApp Direct
            </motion.a>
            
            <motion.a
              href="mailto:ivansilatsa@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
            >
              <Mail size={20} className="mr-2" />
              Envoyer un Email
            </motion.a>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card delay={0.4}>
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Envoyez-moi un message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 resize-vertical"
                  placeholder="Décrivez votre projet ou votre question..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Envoyer le message</span>
                  </>
                )}
              </motion.button>
            </form>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card delay={0.6}>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Informations de contact</h2>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                      className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-amber-50 transition-colors duration-200 group"
                    >
                      <div className={`w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-200`}>
                        <Icon size={24} className={info.color} />
                      </div>
                      <div>
                        <div className="font-medium text-slate-800">{info.label}</div>
                        <div className="text-gray-600">{info.value}</div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </Card>

            {/* Social Links */}
            <Card delay={0.8}>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Suivez-moi</h2>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0 + index * 0.1, duration: 0.5 }}
                      whileHover={{ y: -5, scale: 1.05 }}
                      className={`flex flex-col items-center space-y-2 p-4 bg-gray-50 rounded-lg hover:bg-white transition-all duration-200 group shadow-sm hover:shadow-md ${social.color}`}
                    >
                      <Icon size={24} className="text-gray-700 group-hover:text-current" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-current">
                        {social.label}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </Card>

            {/* Availability */}
            <Card delay={1.0}>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Disponibilité</h2>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-700">Actuellement disponible pour de nouveaux projets</span>
                </div>
                
                <div className="text-sm text-gray-600 space-y-1">
                  <p>📅 Réponse sous 24h maximum</p>
                  <p>⏰ Disponible du lundi au vendredi (8h - 18h GMT+1)</p>
                  <p>🌍 Ouvert aux collaborations locales et internationales</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;