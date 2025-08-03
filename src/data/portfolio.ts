import { Project, Experience, Skill, Education } from '../types';

export const projects: Project[] = [
  {
    id: 'prodf',
    title: 'Prodf',
    description: 'Application mobile pour la gestion des ressources pédagogiques développée avec React Native et Firebase.',
    period: 'Février - Avril 2024',
    technologies: ['React Native', 'Firebase', 'TypeScript', 'FCM'],
    features: [
      'Gestion des ressources pédagogiques',
      'Authentification Firebase',
      'Notifications push',
      'Interface utilisateur intuitive'
    ]
  },
  {
    id: 'miazite',
    title: 'Miazite',
    description: 'Plateforme mobile qui connecte les prestataires de services aux employeurs selon leurs compétences.',
    period: 'Juillet - Septembre 2024',
    technologies: ['React Native', 'Firebase', 'JavaScript', 'Cloud Functions'],
    features: [
      'Système de matching intelligent',
      'Profils prestataires et employeurs',
      'Chat en temps réel',
      'Système de notation et avis'
    ]
  }
];

export const experiences: Experience[] = [
  {
    id: 'sahel-btp',
    title: 'React Native Developer',
    company: 'Sahel BTP',
    period: 'Mai 2024',
    description: 'Développement d\'applications mobiles avec React Native et Firebase, implémentation des notifications (FCM), cloud functions.',
    responsibilities: [
      'Développement d\'applications mobiles React Native',
      'Implémentation des notifications push avec FCM',
      'Création de cloud functions Firebase',
      'Optimisation des performances des applications'
    ]
  },
  {
    id: 'adaa-group',
    title: 'Frontend Developer',
    company: 'Adaa Group',
    period: 'Août - Novembre 2023',
    description: 'Intégration web (HTML, CSS, JavaScript), développement avec React, NextJS, TypeScript.',
    responsibilities: [
      'Intégration de maquettes en HTML/CSS/JavaScript',
      'Développement d\'interfaces React et NextJS',
      'Utilisation de TypeScript pour un code robuste',
      'Collaboration avec l\'équipe design'
    ]
  },
  {
    id: 'ova-consulting',
    title: 'Frontend Intern',
    company: 'Ova Consulting',
    period: 'Juin - Septembre 2023',
    description: 'Stage académique : projets ReactJS/TypeScript, intégration de pages, travail en équipe via Slack et Trello.',
    responsibilities: [
      'Développement de projets ReactJS avec TypeScript',
      'Intégration de pages web responsive',
      'Utilisation d\'outils de gestion de projet (Slack, Trello)',
      'Apprentissage des bonnes pratiques de développement'
    ]
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML/CSS', level: 5, category: 'frontend' },
  { name: 'JavaScript', level: 4, category: 'frontend' },
  { name: 'TypeScript', level: 4, category: 'frontend' },
  { name: 'React', level: 5, category: 'frontend' },
  { name: 'Next.js', level: 4, category: 'frontend' },
  { name: 'Tailwind CSS', level: 5, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 4, category: 'backend' },
  { name: 'Express', level: 4, category: 'backend' },
  { name: 'NestJS', level: 3, category: 'backend' },
  { name: 'Laravel', level: 3, category: 'backend' },
  { name: 'Firebase Admin', level: 4, category: 'backend' },
  
  // Mobile
  { name: 'React Native', level: 4, category: 'mobile' },
  
  // DevOps
  { name: 'Git', level: 4, category: 'devops' },
  { name: 'Docker', level: 3, category: 'devops' },
  { name: 'Firebase', level: 4, category: 'devops' },
  { name: 'MongoDB', level: 3, category: 'devops' },
  { name: 'MySQL', level: 4, category: 'devops' },
  
  // Tools
  { name: 'Trello', level: 4, category: 'tools' },
  { name: 'Slack', level: 4, category: 'tools' }
];

export const education: Education[] = [
  {
    id: 'university-douala',
    degree: 'Bachelor\'s in Computer Science',
    institution: 'University of Douala',
    period: '2021 - 2024',
    description: 'Formation complète en informatique avec spécialisation en développement web et mobile.'
  },
  {
    id: 'makepe-high-school',
    degree: 'Baccalauréat',
    institution: 'Makepe High School',
    period: '2018 - 2019',
    description: 'Baccalauréat scientifique avec mention.'
  }
];