"use client"

import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, Code, Palette, Smartphone, ChevronDown } from 'lucide-react';

export default function Home() {
  // removed activeSection & setActiveSection (unused state)
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/api/placeholder/400/250",
      demo: "#",
      code: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      image: "/api/placeholder/400/250",
      demo: "#",
      code: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with location-based forecasts, interactive maps, and customizable widgets.",
      tech: ["React", "API Integration", "CSS3", "Chart.js"],
      image: "/api/placeholder/400/250",
      demo: "#",
      code: "#"
    }
  ];

  const skills = [
    { name: "Frontend Development", icon: Code, level: 90 },
    { name: "UI/UX Design", icon: Palette, level: 85 },
    { name: "Mobile Development", icon: Smartphone, level: 80 }
  ];

  // fixed any -> string
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/20 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-purple-400 transition-colors duration-200 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-200"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in-up">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8 flex items-center justify-center text-4xl font-bold">
              JD
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              John Doe
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Full-Stack Developer &amp; UI/UX Designer crafting beautiful digital experiences
            </p>
            <div className="flex justify-center space-x-6 mb-12">
              <a href="#" className="text-gray-300 hover:text-purple-400 transform hover:scale-110 transition-all duration-200">
                <Github className="w-8 h-8" />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transform hover:scale-110 transition-all duration-200">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transform hover:scale-110 transition-all duration-200">
                <Mail className="w-8 h-8" />
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
              >
                View My Work
              </button>
              <button className="px-8 py-4 border border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-white transform hover:scale-105 transition-all duration-200 flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download CV
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I&apos;m a passionate full-stack developer with over 5 years of experience creating digital solutions that make a difference. I specialize in React, Next.js, and modern web technologies.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new design trends, contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
              
              {/* Skills */}
              <div className="space-y-6 mt-8">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center gap-3">
                      <skill.icon className="w-6 h-6 text-purple-400" />
                      <span className="text-lg font-semibold">{skill.name}</span>
                      <span className="text-purple-400 ml-auto">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-purple-400 to-pink-400 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-purple-400/20 to-pink-400/20 mx-auto flex items-center justify-center text-6xl font-bold text-gray-400 border border-purple-400/30">
                Photo
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 transform rotate-6 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="aspect-video bg-gradient-to-br from-purple-400/20 to-pink-400/20 flex items-center justify-center text-gray-400 text-lg font-semibold">
                  Project Image
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <a href={project.demo} className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                    <a href={project.code} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-300">john.doe@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">LinkedIn</h3>
                  <p className="text-gray-300">linkedin.com/in/johndoe</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">GitHub</h3>
                  <p className="text-gray-300">github.com/johndoe</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-400 transition-colors text-white placeholder-gray-400"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-400 transition-colors text-white placeholder-gray-400"
                />
              </div>
              <div>
                <textarea 
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-400 transition-colors text-white placeholder-gray-400 resize-none"
                ></textarea>
              </div>
              <button 
                onClick={() => alert('Message sent! (This is a demo)')}
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 John Doe. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
