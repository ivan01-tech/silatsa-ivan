import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import PageHeader from '../components/UI/PageHeader';
import Card from '../components/UI/Card';
import { experiences } from '../data/portfolio';

const Experience: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Mes Expériences"
        subtitle="Parcours professionnel et projets qui ont enrichi mes compétences"
        icon={Briefcase}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Experience Overview */}
        <Card delay={0.2} className="mb-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Parcours Professionnel</h2>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
              Chaque expérience m'a permis d'acquérir de nouvelles compétences et 
              de contribuer à des projets innovants dans le domaine du développement web et mobile.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">3+</div>
                <div className="text-sm text-gray-600">Expériences</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">18</div>
                <div className="text-sm text-gray-600">Mois d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">100%</div>
                <div className="text-sm text-gray-600">Satisfaction client</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
              className="relative"
            >
              <Card hover={false} className="overflow-hidden">
                {/* Timeline connector */}
                {index < experiences.length - 1 && (
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-amber-400 to-transparent"></div>
                )}
                
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* Company Info */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-400 rounded-lg flex items-center justify-center">
                        <Briefcase size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800">{exp.company}</h3>
                        <div className="flex items-center space-x-1 text-sm text-gray-600">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                      {exp.title}
                    </div>
                  </div>

                  {/* Experience Details */}
                  <div className="lg:col-span-3">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <h4 className="font-semibold text-slate-800 mb-3">Responsabilités principales :</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <motion.div
                          key={respIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + index * 0.2 + respIndex * 0.1, duration: 0.4 }}
                          className="flex items-start space-x-2"
                        >
                          <ChevronRight size={16} className="text-amber-600 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{responsibility}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Key Achievements */}
        <Card delay={1.0} className="mt-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            Réalisations Clés
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl"
            >
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-semibold text-slate-800 mb-2">Applications Mobiles</h3>
              <p className="text-sm text-gray-700">
                Développement de 5+ applications React Native avec des fonctionnalités avancées
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl"
            >
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-semibold text-slate-800 mb-2">Performance</h3>
              <p className="text-sm text-gray-700">
                Optimisation des performances applications avec réduction de 40% du temps de chargement
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl"
            >
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-semibold text-slate-800 mb-2">Collaboration</h3>
              <p className="text-sm text-gray-700">
                Travail en équipe agile avec des développeurs seniors et des designers UX/UI
              </p>
            </motion.div>
          </div>
        </Card>

        {/* Technologies Used */}
        <Card delay={1.2} className="mt-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Technologies Utilisées en Entreprise
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'React Native', 'React', 'Next.js', 'TypeScript', 'JavaScript',
              'Firebase', 'Node.js', 'Express', 'HTML/CSS', 'Tailwind CSS',
              'Git', 'GitHub', 'Slack', 'Trello', 'FCM', 'Cloud Functions'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + index * 0.05, duration: 0.3 }}
                className="px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-slate-800 rounded-full text-sm font-medium hover:from-amber-200 hover:to-orange-200 transition-colors duration-200"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Experience;