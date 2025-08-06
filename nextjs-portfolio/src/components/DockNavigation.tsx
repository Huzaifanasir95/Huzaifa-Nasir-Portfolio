'use client'

import { motion } from 'framer-motion'
import { Home, User, Briefcase, Code, Award, Mail, Calendar, Folder } from 'lucide-react'

interface DockNavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function DockNavigation({ activeSection, setActiveSection }: DockNavigationProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'skills', label: 'Skills', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  return (
    <>
      {/* Desktop Dock - Bottom */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden md:block fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
      >
        <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl px-3 py-2 shadow-2xl">
          <div className="flex items-center space-x-1">
            {navItems.map((item, index) => {
              const Icon = item.icon
              const isActive = activeSection === item.id
              
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -8 }}
                  whileTap={{ scale: 0.9 }}
                  className={`relative p-3 rounded-xl transition-all duration-200 group ${
                    isActive 
                      ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm border border-white/20' 
                      : 'bg-transparent text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon size={22} />
                  
                  {/* Tooltip */}
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    whileHover={{ opacity: 1, y: 0, scale: 1 }}
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-1.5 bg-black/90 backdrop-blur-sm text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 border border-white/20"
                  >
                    {item.label}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-black/90"></div>
                  </motion.div>

                  {/* Active indicator dot */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-lg"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              )
            })}
          </div>
          
          {/* Dock reflection effect */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/5 to-transparent rounded-b-2xl pointer-events-none"></div>
        </div>
      </motion.div>

      {/* Mobile Navigation - Top */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="md:hidden fixed top-4 left-4 right-4 z-50"
      >
        <div className="bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl px-2 py-2 shadow-2xl">
          <div className="grid grid-cols-6 gap-1">
            {navItems.map((item, index) => {
              const Icon = item.icon
              const isActive = activeSection === item.id
              
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`relative p-3 rounded-xl transition-all duration-200 flex flex-col items-center ${
                    isActive 
                      ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm border border-white/20' 
                      : 'bg-transparent text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon size={18} />
                  <span className="text-xs mt-1 font-medium">{item.label}</span>
                  
                  {/* Active indicator dot */}
                  {isActive && (
                    <motion.div
                      layoutId="mobileActiveIndicator"
                      className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-lg"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              )
            })}
          </div>
        </div>
      </motion.div>
    </>
  )
}
