import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Languages, Coffee, Code2 } from 'lucide-react';
import PageHeader from '../components/UI/PageHeader';
import Card from '../components/UI/Card';

const About: React.FC = () => {
  const personalInfo = [
    { icon: MapPin, label: 'Localisation', value: 'Douala, Cameroun' },
    { icon: Calendar, label: 'Âge', value: '23 ans' },
    { icon: Languages, label: 'Langues', value: 'Français (natif), Anglais (courant)' },
    { icon: Coffee, label: 'Passion', value: 'Développement & Innovation' }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Toujours à la recherche de nouvelles technologies et méthodes pour créer des solutions modernes.'
    },
    {
      title: 'Qualité',
      description: 'Je privilégie la qualité du code et l\'expérience utilisateur dans tous mes projets.'
    },
    {
      title: 'Apprentissage',
      description: 'Apprentissage continu et veille technologique pour rester à jour avec les dernières tendances.'
    },
    {
      title: 'Collaboration',
      description: 'J\'aime travailler en équipe et partager mes connaissances avec les autres développeurs.'
    }
  ];

  return (
    <div>
      <PageHeader
        title="À propos de moi"
        subtitle="Découvrez mon parcours, mes valeurs et ma passion pour le développement"
        icon={User}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Card delay={0.2}>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Mon Histoire</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Salut ! Je suis <strong className="text-slate-800">Silatsa Ivan</strong>, 
                  un développeur fullstack de 23 ans passionné par la création d'applications 
                  web et mobiles qui ont un impact réel.
                </p>
                <p>
                  Diplômé récemment de l'Université de Douala avec un diplôme en informatique, 
                  je me spécialise dans le développement fullstack avec une expertise particulière 
                  en ReactJS pour le frontend et Node.js/NestJS pour le backend.
                </p>
                <p>
                  Ce qui me motive le plus, c'est de résoudre des problèmes complexes à travers 
                  la technologie et de créer des expériences utilisateur exceptionnelles. 
                  Je suis toujours enthousiaste à l'idée d'apprendre de nouvelles technologies 
                  et de relever de nouveaux défis.
                </p>
                <p>
                  Actuellement, je travaille en tant que développeur React Native chez Sahel BTP, 
                  où je développe des applications mobiles innovantes. Je suis également ouvert 
                  aux opportunités de collaboration sur des projets passionnants.
                </p>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card delay={0.4}>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Informations Personnelles</h3>
              <div className="space-y-4">
                {personalInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-10 h-10 bg-amber-100 rounded-lg">
                        <Icon size={20} className="text-amber-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">{info.label}</div>
                        <div className="font-medium text-slate-800">{info.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card delay={0.6}>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Objectifs</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Code2 size={20} className="text-amber-600 mt-1" />
                  <div>
                    <div className="font-medium text-slate-800">Court terme</div>
                    <div className="text-sm text-gray-600">Maîtriser les technologies cloud et DevOps</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Code2 size={20} className="text-amber-600 mt-1" />
                  <div>
                    <div className="font-medium text-slate-800">Long terme</div>
                    <div className="text-sm text-gray-600">Devenir Tech Lead dans une équipe dynamique</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Values */}
        <Card delay={0.8}>
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Mes Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className="text-center p-4 bg-gray-50 rounded-lg hover:bg-amber-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-bold text-slate-800 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Card>

        {/* Fun Facts */}
        <div className="mt-16">
          <Card delay={1.2}>
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Quelques Faits Amusants</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl mb-2">☕</div>
                <div className="font-medium text-slate-800">Café quotidien</div>
                <div className="text-sm text-gray-600">Impossible de coder sans !</div>
              </div>
              <div>
                <div className="text-3xl mb-2">🌙</div>
                <div className="font-medium text-slate-800">Codeur nocturne</div>
                <div className="text-sm text-gray-600">Mes meilleures idées viennent la nuit</div>
              </div>
              <div>
                <div className="text-3xl mb-2">🎮</div>
                <div className="font-medium text-slate-800">Gaming enthusiast</div>
                <div className="text-sm text-gray-600">Pour décompresser après le code</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;