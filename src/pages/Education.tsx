import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import PageHeader from '../components/UI/PageHeader';
import Card from '../components/UI/Card';
import { education } from '../data/portfolio';

const Education: React.FC = () => {
  const achievements = [
    {
      title: 'Projet de fin d\'études',
      description: 'Développement d\'une application de gestion scolaire avec React et Node.js',
      year: '2024'
    },
    {
      title: 'Stage académique',
      description: 'Stage de 3 mois chez Ova Consulting - Développement web',
      year: '2023'
    },
    {
      title: 'Formations en ligne',
      description: 'Certifications sur Udemy, Coursera et freeCodeCamp',
      year: '2022-2024'
    }
  ];

  const certifications = [
    'React - The Complete Guide (Udemy)',
    'Node.js - The Complete Guide (Udemy)',
    'React Native - Practical Guide (Udemy)',
    'Firebase Fundamentals',
    'Git & GitHub Masterclass'
  ];

  return (
    <div>
      <PageHeader
        title="Mon Parcours Éducatif"
        subtitle="Formation académique et apprentissage continu qui ont façonné ma carrière"
        icon={GraduationCap}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Education Timeline */}
        <Card delay={0.2}>
          <h2 className="text-2xl font-bold text-slate-800 mb-8">Formation Académique</h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                className="relative pl-8 border-l-2 border-amber-200 last:border-l-0"
              >
                {/* Timeline dot */}
                <div className="absolute -left-2 top-2 w-4 h-4 bg-amber-400 rounded-full border-4 border-white shadow-md"></div>
                
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-amber-50 transition-colors duration-200">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-800">{edu.degree}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mt-2 lg:mt-0">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <MapPin size={16} className="text-amber-600" />
                    <span className="font-medium text-slate-700">{edu.institution}</span>
                  </div>
                  
                  {edu.description && (
                    <p className="text-gray-600">{edu.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </Card>

        {/* Achievements */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card delay={0.6}>
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <Award size={24} className="text-amber-600 mr-3" />
              Réalisations Académiques
            </h2>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  className="border-l-4 border-amber-400 pl-4 py-2"
                >
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-slate-800">{achievement.title}</h3>
                    <span className="text-sm text-amber-600 font-medium">{achievement.year}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </Card>

          <Card delay={0.8}>
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <BookOpen size={24} className="text-amber-600 mr-3" />
              Certifications & Formations
            </h2>
            
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0 + index * 0.1, duration: 0.5 }}
                  className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-amber-50 transition-colors duration-200"
                >
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-slate-800">{cert}</span>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="mt-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200"
              >
                <p className="text-sm text-slate-700">
                  <strong>En cours:</strong> AWS Solutions Architect Associate, 
                  Advanced React Patterns, Docker & Kubernetes Fundamentals
                </p>
              </motion.div>
            </div>
          </Card>
        </div>

        {/* Skills Developed */}
        <Card delay={1.0} className="mt-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Compétences Développées Durant ma Formation
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Programmation</h3>
              <p className="text-sm text-gray-600">
                Bases solides en algorithmique, structures de données et programmation orientée objet
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Méthodologie</h3>
              <p className="text-sm text-gray-600">
                Approche scientifique, analyse de problèmes et méthodes de développement
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Travail d'équipe</h3>
              <p className="text-sm text-gray-600">
                Projets de groupe, collaboration et communication technique
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Education;