import React from 'react';
import { motion } from 'framer-motion';
import { Folder, Calendar, ExternalLink, Github, Smartphone, Globe } from 'lucide-react';
import PageHeader from '../components/UI/PageHeader';
import Card from '../components/UI/Card';
import { projects } from '../data/portfolio';

const Projects: React.FC = () => {
  const additionalProjects = [
    {
      id: 'portfolio',
      title: 'Portfolio Personnel',
      description: 'Site web personnel développé avec React, TypeScript et Tailwind CSS pour présenter mes compétences et projets.',
      period: 'Décembre 2024',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      features: [
        'Design responsive et moderne',
        'Animations fluides',
        'SEO optimisé',
        'Performance optimale'
      ],
      type: 'web'
    },
    // {
    //   id: 'ecommerce',
    //   title: 'E-commerce Mobile',
    //   description: 'Application mobile de commerce électronique avec gestion des produits, panier et paiements.',
    //   period: 'Octobre - Novembre 2024',
    //   technologies: ['React Native', 'Firebase', 'Stripe', 'Redux'],
    //   features: [
    //     'Catalogue de produits dynamique',
    //     'Panier et favoris',
    //     'Paiements sécurisés',
    //     'Notifications push'
    //   ],
    //   type: 'mobile'
    // }
  ];

  const allProjects = [...projects, ...additionalProjects];

  const getProjectIcon = (type?: string) => {
    if (type === 'web') return Globe;
    if (type === 'mobile') return Smartphone;
    return Folder;
  };

  return (
    <div>
      <PageHeader
        title="Mes Projets"
        subtitle="Portfolio de mes créations et contributions au monde du développement"
        icon={Folder}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Projects Overview */}
        <Card delay={0.2} className="mb-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Aperçu de mes Projets</h2>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
              Chaque projet représente une étape importante dans mon parcours de développeur. 
              Voici quelques-unes de mes créations les plus significatives.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">{allProjects.length}</div>
                <div className="text-sm text-gray-600">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">2</div>
                <div className="text-sm text-gray-600">En production</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">5+</div>
                <div className="text-sm text-gray-600">Technologies utilisées</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">100%</div>
                <div className="text-sm text-gray-600">Passion investie</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {allProjects.map((project, index) => {
            const ProjectIcon = getProjectIcon(project.type);
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              >
                <Card hover className="h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-400 rounded-lg flex items-center justify-center">
                        <ProjectIcon size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
                        <div className="flex items-center space-x-1 text-sm text-gray-600">
                          <Calendar size={14} />
                          <span>{project.period}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200">
                        <Github size={16} className="text-gray-700" />
                      </button>
                      <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200">
                        <ExternalLink size={16} className="text-gray-700" />
                      </button>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-3">Technologies utilisées :</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + index * 0.1 + techIndex * 0.05, duration: 0.3 }}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Fonctionnalités principales :</h4>
                    <div className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + index * 0.1 + featureIndex * 0.1, duration: 0.4 }}
                          className="flex items-start space-x-2"
                        >
                          <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Work in Progress */}
        {/* <Card delay={1.0} className="mt-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Projets en Cours & À Venir
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl">
              <div className="text-3xl mb-3">🚧</div>
              <h3 className="font-semibold text-slate-800 mb-2">SaaS Management Platform</h3>
              <p className="text-sm text-gray-700 mb-3">
                Plateforme de gestion SaaS avec React, Node.js et PostgreSQL
              </p>
              <div className="text-xs text-yellow-700 bg-yellow-200 px-2 py-1 rounded-full inline-block">
                En développement
              </div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <div className="text-3xl mb-3">💡</div>
              <h3 className="font-semibold text-slate-800 mb-2">AI-Powered Task Manager</h3>
              <p className="text-sm text-gray-700 mb-3">
                Gestionnaire de tâches intelligent avec IA et analytics avancés
              </p>
              <div className="text-xs text-purple-700 bg-purple-200 px-2 py-1 rounded-full inline-block">
                Planifié Q1 2025
              </div>
            </div>
          </div>
        </Card> */}

        {/* GitHub Stats */}
        <Card delay={1.2} className="mt-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Mon Github
          </h2>
          
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Retrouvez tous mes projets et contributions sur GitHub
            </p>
            
            <motion.a
              href="https://github.com/ivan01-tech"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors duration-200"
            >
              <Github size={20} />
              <span>Voir mon GitHub</span>
            </motion.a>
            
            <div className="grid grid-cols-3 gap-4 mt-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800">15+</div>
                <div className="text-sm text-gray-600">Repositories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800">50+</div>
                <div className="text-sm text-gray-600">Commits</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800">5+</div>
                <div className="text-sm text-gray-600">Languages</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Projects;