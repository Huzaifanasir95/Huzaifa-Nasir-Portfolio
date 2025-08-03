'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Gamepad2, Globe, Bot } from 'lucide-react'
import Image from 'next/image'

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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-80 h-80 mx-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-600 rounded-3xl transform rotate-6"></div>
                <div className="relative w-full h-full bg-slate-800 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl">
                  <Image
                    src="/img/profile.jfif"
                    alt="Huzaifa"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-full flex items-center justify-center"
              >
                <Code className="text-black" size={24} />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center"
              >
                <Bot className="text-black" size={20} />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
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
              className="text-lg text-gray-300 leading-relaxed"
            >
              Hi, I&apos;m Huzaifa, a passionate Computer Science student at FAST-NUCES with a keen interest in creating innovative digital solutions. My expertise spans game development, web development, and exploring cutting-edge technologies like AI. I&apos;m constantly learning and pushing my skills to build impactful projects.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              With a strong foundation in multiple programming languages and frameworks, I enjoy tackling complex problems and turning ideas into reality. From developing scalable web applications to creating engaging games, I bring creativity and technical expertise to every project.
            </motion.p>

            {/* Interests Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8"
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
                    className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/50 transition-all duration-300"
                  >
                    <Icon className="text-white mb-2" size={24} />
                    <h3 className="font-semibold text-white mb-1">{interest.title}</h3>
                    <p className="text-sm text-gray-400">{interest.description}</p>
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
