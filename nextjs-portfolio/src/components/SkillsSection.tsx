'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Globe, Gamepad2, Bot, Server, Award, ExternalLink } from 'lucide-react'

interface SkillsSectionProps {
  setActiveSection: (section: string) => void
}

export default function SkillsSection({ setActiveSection }: SkillsSectionProps) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  })

  const [activeTab, setActiveTab] = useState('skills')

  useEffect(() => {
    if (inView) {
      setActiveSection('skills')
    }
  }, [inView, setActiveSection])

  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['C', 'C++', 'C#', 'Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'Assembly']
    },
    {
      icon: Globe,
      title: 'Web Development',
      skills: ['React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'HTML', 'CSS', 'Tailwind CSS']
    },
    {
      icon: Server,
      title: 'DevOps & Cloud',
      skills: ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions', 'CI/CD', 'Ansible', 'ArgoCD', 'Terraform', 'Prometheus', 'Grafana']
    },
    {
      icon: Bot,
      title: 'AI & Machine Learning',
      skills: ['TensorFlow', 'Keras', 'PyTorch', 'Scikit-learn', 'OpenCV', 'CUDA']
    },
    {
      icon: Gamepad2,
      title: 'Game Development',
      skills: ['SFML', 'Game Design', 'Physics Simulation', 'Collision Detection']
    }
  ]

  const certifications = [
    {
      title: 'Machine Learning',
      institution: 'Stanford University via Coursera',
      year: '2024',
      link: 'https://www.coursera.org/account/accomplishments/specialization/Y6XC27WTNGLC'
    },
    {
      title: 'Advanced Learning Algorithms',
      institution: 'Stanford University via Coursera',
      year: '2024',
      link: 'https://coursera.org/verify/SRMD5QHTVTGK'
    },
    {
      title: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
      institution: 'Stanford University via Coursera',
      year: '2024',
      link: 'https://www.coursera.org/account/accomplishments/verify/ZGLS8X7CZCK3'
    },
    {
      title: 'Supervised Machine Learning: Regression and Classification',
      institution: 'Stanford University via Coursera',
      year: '2024',
      link: 'https://www.coursera.org/account/accomplishments/verify/TWV3HSYH9PJV'
    },
    {
      title: 'Associate Python Developer',
      institution: 'Datacamp',
      year: '2024',
      link: 'https://www.datacamp.com/completed/statement-of-accomplishment/track/7bf73bf3c5698a30d88bb58bc4b5c7b15a0eb9cb'
    },
    {
      title: 'Data Literacy',
      institution: 'Datacamp',
      year: '2024',
      link: 'https://www.datacamp.com/skill-verification/DL0034829708348'
    },
    {
      title: 'AI Fundamentals',
      institution: 'Datacamp',
      year: '2024',
      link: 'https://www.datacamp.com/skill-verification/AIF0026426024995'
    },
    {
      title: 'Build Website with WordPress',
      institution: 'Coursera',
      year: '2024',
      link: 'https://www.coursera.org/account/accomplishments/verify/RSAFN22HB4VJ'
    },
    {
      title: 'Build Your Portfolio Website with HTML and CSS',
      institution: 'Coursera',
      year: '2022',
      link: 'https://www.coursera.org/account/accomplishments/verify/W574R2DNA7FA'
    }
  ]

  return (
    <section id="skills" ref={ref} className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills &{' '}
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My technical expertise and professional certifications that demonstrate my commitment to continuous learning
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-8 md:mb-12"
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-1 md:p-2 border border-white/10 w-full max-w-md">
            <button
              onClick={() => setActiveTab('skills')}
              className={`w-1/2 px-4 md:px-8 py-2 md:py-3 rounded-xl font-medium transition-all duration-300 text-sm md:text-base ${
                activeTab === 'skills'
                  ? 'bg-gradient-to-r from-white to-gray-200 text-black'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Technical Skills
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`w-1/2 px-4 md:px-8 py-2 md:py-3 rounded-xl font-medium transition-all duration-300 text-sm md:text-base ${
                activeTab === 'certifications'
                  ? 'bg-gradient-to-r from-white to-gray-200 text-black'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Certifications
            </button>
          </div>
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <motion.div
              key="skills-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {skillCategories.map((category, index) => {
                const Icon = category.icon
                return (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/50 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <Icon className="text-white mr-3" size={28} />
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                          className="px-3 py-1 bg-gradient-to-r from-white/20 to-gray-300/20 text-gray-300 rounded-full text-sm border border-white/30"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          )}

          {/* Certifications Tab */}
          {activeTab === 'certifications' && (
            <motion.div
              key="certifications-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={`cert-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-white/10 hover:border-white/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3 md:mb-4">
                    <Award className="text-white flex-shrink-0" size={20} />
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <ExternalLink size={14} />
                    </motion.a>
                  </div>
                  
                  <h3 className="text-base md:text-lg font-bold text-white mb-2 leading-tight">{cert.title}</h3>
                  <p className="text-gray-300 text-xs md:text-sm mb-2 leading-relaxed">{cert.institution}</p>
                  <p className="text-gray-400 text-xs md:text-sm">{cert.year}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Skills Timeline */}

      </div>
    </section>
  )
}
