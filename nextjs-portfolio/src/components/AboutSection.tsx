'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Gamepad2, Globe, Bot } from 'lucide-react'

interface AboutSectionProps {
  setActiveSection: (section: string) => void
}

export default function AboutSection({ setActiveSection }: AboutSectionProps) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  })

  useEffect(() => {
    if (inView) {
      setActiveSection('about')
    }
  }, [inView, setActiveSection])

  const interests = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Building scalable applications with modern technologies',
    },
    {
      icon: Gamepad2,
      title: 'Game Development',
      description: 'Creating immersive gaming experiences with SFML and C++',
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Full-stack development using MERN stack',
    },
    {
      icon: Bot,
      title: 'AI & Machine Learning',
      description: 'Exploring AI algorithms and machine learning models',
    },
  ]

  return (
    <section id="about" ref={ref} className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold"
            >
              About{' '}
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Me
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto"
            >
              Hi, I&apos;m Huzaifa, a passionate Computer Science student at FAST-NUCES with a keen interest in creating innovative digital solutions. My expertise spans game development, web development, and exploring cutting-edge technologies like AI. I&apos;m constantly learning and pushing my skills to build impactful projects.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto"
            >
              With a strong foundation in multiple programming languages and frameworks, I enjoy tackling complex problems and turning ideas into reality. From developing scalable web applications to creating engaging games, I bring creativity and technical expertise to every project.
            </motion.p>

            {/* Interests Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
            >
              {interests.map((interest, index) => {
                const Icon = interest.icon
                return (
                  <motion.div
                    key={interest.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-white/50 transition-all duration-300"
                  >
                    <Icon className="text-white mb-4 mx-auto" size={32} />
                    <h3 className="font-semibold text-white mb-2 text-center">{interest.title}</h3>
                    <p className="text-sm text-gray-400 text-center">{interest.description}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
