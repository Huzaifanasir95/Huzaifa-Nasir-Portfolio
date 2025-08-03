'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Github, Linkedin } from 'lucide-react'

interface ContactSectionProps {
  setActiveSection: (section: string) => void
}

export default function ContactSection({ setActiveSection }: ContactSectionProps) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  })

  useEffect(() => {
    if (inView) {
      setActiveSection('contact')
    }
  }, [inView, setActiveSection])

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'nasirhuzaifa95@gmail.com',
      link: 'mailto:nasirhuzaifa95@gmail.com'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Huzaifanasir95',
      link: 'https://github.com/Huzaifanasir95'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'huzaifa-nasir',
      link: 'https://www.linkedin.com/in/huzaifa-nasir-/'
    }
  ]

  return (
    <section id="contact" ref={ref} className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In{' '}
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let&apos;s discuss your next project or just say hello. I&apos;m always excited to connect with fellow developers and potential collaborators.
          </p>
        </motion.div>

        <div className="flex justify-center">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Let&apos;s Connect</h3>
              <p className="text-gray-300 mb-8 text-center">
                I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.a
                    key={info.label}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:border-white/50 transition-all duration-300"
                  >
                    <div className="p-3 bg-gradient-to-r from-white to-gray-200 rounded-lg">
                      <Icon size={20} className="text-black" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Fun fact or quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-r from-gray-900/20 to-gray-800/20 backdrop-blur-lg rounded-xl p-6 border border-white/10"
            >
              <h4 className="text-lg font-bold text-white mb-2 text-center">Quick Response</h4>
              <p className="text-gray-300 text-center">
                I typically respond to messages within 24 hours. Looking forward to hearing from you!
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-400">
            © 2024 Huzaifa Nasir. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
