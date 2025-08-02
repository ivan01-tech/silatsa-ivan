import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Star } from 'lucide-react';
import PageHeader from '../components/UI/PageHeader';
import Card from '../components/UI/Card';
import { skills } from '../data/portfolio';

const Skills: React.FC = () => {
  const skillCategories = {
    frontend: 'Frontend',
    backend: 'Backend',
    mobile: 'Mobile',
    devops: 'DevOps & Databases',
    tools: 'Outils & Collaboration'
  };

  const renderStars = (level: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={`${
              star <= level
                ? 'text-amber-400 fill-current'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const getSkillsByCategory = (category: keyof typeof skillCategories) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <div>
      <PageHeader
        title="Mes Compétences"
        subtitle="Technologies et outils que je maîtrise pour créer des solutions complètes"
        icon={Wrench}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Skills Overview */}
        <div className="text-center mb-16">
          <Card delay={0.2}>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Stack Technique</h2>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
              Spécialisé dans les technologies modernes du web et du mobile, 
              je développe des applications complètes avec une approche fullstack.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">{skills.filter(s => s.category === 'frontend').length}</div>
                <div className="text-sm text-gray-600">Frontend</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">{skills.filter(s => s.category === 'backend').length}</div>
                <div className="text-sm text-gray-600">Backend</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">{skills.filter(s => s.category === 'mobile').length}</div>
                <div className="text-sm text-gray-600">Mobile</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">{skills.filter(s => s.category === 'devops').length + skills.filter(s => s.category === 'tools').length}</div>
                <div className="text-sm text-gray-600">DevOps & Outils</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {Object.entries(skillCategories).map(([category, title], categoryIndex) => {
            const categorySkills = getSkillsByCategory(category as keyof typeof skillCategories);
            
            if (categorySkills.length === 0) return null;

            return (
              <Card key={category} delay={0.4 + categoryIndex * 0.1}>
                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                  <span className="w-2 h-8 bg-gradient-to-b from-amber-400 to-orange-400 rounded-full mr-3"></span>
                  {title}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + categoryIndex * 0.1 + index * 0.05, duration: 0.5 }}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-amber-50 transition-colors duration-200"
                    >
                      <div>
                        <div className="font-medium text-slate-800">{skill.name}</div>
                        <div className="text-sm text-gray-600">
                          {skill.level === 5 ? 'Expert' :
                           skill.level === 4 ? 'Avancé' :
                           skill.level === 3 ? 'Intermédiaire' :
                           skill.level === 2 ? 'Débutant+' : 'Débutant'}
                        </div>
                      </div>
                      {renderStars(skill.level)}
                    </motion.div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Learning & Growth */}
        <div className="mt-16">
          {/* <Card delay={1.0}>
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Apprentissage Continu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">🎯 Actuellement en apprentissage</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-gray-700">AWS & Cloud Services</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-gray-700">Kubernetes & DevOps</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-gray-700">GraphQL & Apollo</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">🚀 Objectifs 2024</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Certification AWS Solutions Architect</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Maîtrise de la stack MERN</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Contribution à des projets open source</span>
                  </div>
                </div>
              </div>
            </div>
          </Card> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;