'use client'

import { useState } from 'react'
import { useScroll, useSpring } from 'framer-motion'
import Navigation from './Navigation'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import ExperienceSection from './ExperienceSection'
import ProjectsSection from './ProjectsSection'
import SkillsSection from './SkillsSection'
import ContactSection from './ContactSection'
import ScrollProgress from './ScrollProgress'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Fixed Navigation */}
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Scroll Progress */}
      <ScrollProgress scaleX={scaleX} />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection setActiveSection={setActiveSection} />
        
        {/* About Section */}
        <AboutSection setActiveSection={setActiveSection} />
        
        {/* Experience Section */}
        <ExperienceSection setActiveSection={setActiveSection} />
        
        {/* Projects Section */}
        <ProjectsSection setActiveSection={setActiveSection} />
        
        {/* Skills Section */}
        <SkillsSection setActiveSection={setActiveSection} />
        
        {/* Contact Section */}
        <ContactSection setActiveSection={setActiveSection} />
      </main>
    </div>
  )
}
