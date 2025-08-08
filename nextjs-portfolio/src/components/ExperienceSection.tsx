'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar, ExternalLink } from 'lucide-react'

interface ExperienceSectionProps {
  setActiveSection: (section: string) => void
}

export default function ExperienceSection({ setActiveSection }: ExperienceSectionProps) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  })

  useEffect(() => {
    if (inView) {
      setActiveSection('experience')
    }
  }, [inView, setActiveSection])

  const experiences = [
    {
      title: 'AI Web Development Intern',
      company: 'Nexium',
      period: '2025/07 – 2025/08',
      description: 'Specialized in AI-powered web application development and automation technologies.',
      achievements: [
        'Gained hands-on experience with AI-powered web development using Next.js and TypeScript',
        'Learned workflow automation with n8n for creating intelligent business processes',
        'Developed expertise in CI/CD pipelines using GitHub Actions for automated testing and deployment',
        'Mastered cloud deployment strategies with Vercel for scalable web applications',
        'Enhanced skills in AI integration using Google Gemini AI for intelligent features',
        'Strengthened database management capabilities with Supabase and MongoDB',
        'Improved proficiency in modern UI/UX design with Tailwind CSS and responsive design principles'
      ],
      technologies: ['Next.js', 'TypeScript', 'AI/ML', 'n8n', 'GitHub Actions', 'Vercel', 'CI/CD', 'Google Gemini AI', 'Supabase', 'MongoDB', 'Tailwind CSS'],
      link: 'https://www.nexium.ltd/'
    }
  ]

  return (
    <section id="experience" ref={ref} className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My{' '}
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional experience in AI web development and automation
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 mb-8"
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-white/20 to-white/10 rounded-xl">
                    <Briefcase className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{experience.title}</h3>
                    <h4 className="text-xl text-gray-300 mb-2">{experience.company}</h4>
                  </div>
                </div>
                
                <div className="mt-4 lg:mt-0 flex items-center space-x-4">
                  <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-white to-gray-200 text-black rounded-full text-sm font-medium">
                    <Calendar size={16} />
                    <span>{experience.period}</span>
                  </div>
                  {experience.link && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={experience.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-lg mb-6">{experience.description}</p>

              {/* Learning & Development */}
              <div className="mb-6">
                <h5 className="text-lg font-semibold text-white mb-4">Key Learning & Development:</h5>
                <div className="space-y-3">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <motion.div
                      key={achievementIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.4 + achievementIndex * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 leading-relaxed">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-6 border-t border-white/10">
                <h5 className="text-lg font-semibold text-white mb-4">Technologies & Tools:</h5>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Future Goals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Looking Forward</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;m passionate about leveraging AI and modern web technologies to create innovative solutions. 
              Currently seeking opportunities to contribute to cutting-edge projects in AI, web development, 
              and cloud infrastructure while continuing to expand my expertise in emerging technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
