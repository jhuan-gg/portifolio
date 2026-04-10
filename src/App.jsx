import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Layout,
  Database,
  Briefcase,
  Cloud
} from 'lucide-react'

import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [scrolled, setScrolled] = useState(false)
  const appRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    const handleNavigation = () => {
      setTimeout(() => ScrollTrigger.refresh(), 100)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('hashchange', handleNavigation)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('hashchange', handleNavigation)
    }
  }, [])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('section')

      sections.forEach((section) => {
        const title = section.querySelector('.section-title')
        const content = section.querySelector('.container > div:not(.section-title)')

        if (title) {
          gsap.fromTo(title,
            { y: 30, opacity: 0 },
            {
              scrollTrigger: {
                trigger: section,
                start: "top 95%",
                toggleActions: "play none none none"
              },
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out"
            }
          )
        }

        if (content) {
          gsap.fromTo(content,
            { y: 40, opacity: 0 },
            {
              scrollTrigger: {
                trigger: section,
                start: "top 90%",
                toggleActions: "play none none none"
              },
              y: 0,
              opacity: 1,
              duration: 1,
              delay: 0.1,
              ease: "power3.out"
            }
          )
        }
      })

      gsap.fromTo(".hero-content > *",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.2
        }
      )

      gsap.fromTo(".hero-image",
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.8
        }
      )

    }, appRef)

    return () => ctx.revert()
  }, [])

  const skills = [
    {
      category: "Frontend",
      icon: <Layout size={20} />,
      items: ["React", "Next.js", "HTML5/CSS3", "Styled-Components", "Material-UI", "GSAP", "SPA Performance"]
    },
    {
      category: "Backend & DB",
      icon: <Database size={20} />,
      items: ["Node.js", "Supabase", "CouchDB", "Firebase", "State Management"]
    },
    {
      category: "DevOps & Cloud",
      icon: <Cloud size={20} />,
      items: ["Docker", "Docker Compose", "AWS", "VPS", "Deploy CI/CD", "Git/GitHub"]
    },
    {
      category: "Business",
      icon: <Briefcase size={20} />,
      items: ["ERP Systems", "SaaS Architecture", "UI Componentization", "Agile Workflow"]
    }
  ]

  const projects = [
    {
      title: "FIBROS",
      description: "Sistema web-mobile para gestão de Caixas de Terminação Óptica e mapas de fibra, focado em provedores de internet.",
      github: "https://github.com/jhuan-gg/Fibros.git",
      tags: ["React", "Web-Mobile", "Management"]
    },
    {
      title: "ROTA 3.0",
      description: "Aplicação web em Node.js para envio e agendamento de rotas via CSV, com automação via WhatsApp.",
      github: "https://github.com/jhuan-gg/ROTA-3.0",
      tags: ["Node.js", "Automation", "WhatsApp API"]
    },
    {
      title: "CHECK!",
      description: "App web para gestão e análise de checklists profissionais, com React, Firebase e dashboards interativos.",
      github: "https://github.com/jhuan-gg/chk-lst.git",
      tags: ["React", "Firebase", "Dashboards"]
    },
    {
      title: "ULTIS MANAGER",
      description: "Aplicativo móvel multiplataforma para gestão empresarial de Caixas de terminação óptica.",
      github: "https://github.com/jhuan-gg/UtilsManager.git",
      tags: ["Mobile", "Cross-platform", "Enterprise"]
    }
  ]

  return (
    <div className="app" ref={appRef} style={{ background: '#050505', minHeight: '100vh', visibility: 'visible' }}>
      <header className={`navbar ${scrolled ? 'scrolled glass' : ''}`}>
        <div className="container nav-content">
          <div className="logo gradient-text">JG</div>
          <nav>
            <ul className="nav-links">
              <li><a href="#about">Sobre</a></li>
              <li><a href="#projects">Projetos</a></li>
              <li><a href="#skills">Habilidades</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-container">
            <div className="hero-content">
              <h4 className="hero-greeting">Olá, eu sou</h4>
              <h1 className="hero-name">Jhuan <span className="gradient-text">Gabriel</span></h1>
              <h2 className="hero-title">Desenvolvedor Full Stack</h2>
              <p className="hero-tagline">"Vamos codar suas ideias?"</p>
              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">Ver Projetos</a>
                <a href="#contact" className="btn btn-secondary">Entrar em Contato</a>
              </div>
            </div>
            <div className="hero-image-wrapper">
              <img src="/eu.png" alt="Jhuan Gabriel" className="hero-image" />
            </div>
          </div>
          <div className="hero-background">
            <div className="blob"></div>
            <div className="blob second"></div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="container">
            <h2 className="section-title">Sobre Mim</h2>
            <div className="about-grid glass">
              <div className="about-text">
                <p>
                  Desenvolvedor Full Stack especializado em <strong>React</strong> e ecossistema moderno, com forte experiência em
                  componentização de UI, estilização com Styled-Components e integração de
                  bibliotecas de design como Material-UI (MUI).
                </p>
                <p>
                  Hábil na construção de interfaces responsivas, componentes reutilizáveis,
                  gerenciamento de estado e otimização de performance em aplicações SPA,
                  aplicando boas práticas de desenvolvimento moderno e design modular.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="projects" id="projects">
          <div className="container">
            <h2 className="section-title">Projetos em Destaque</h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="project-card glass">
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="tag">{tag}</span>
                      ))}
                    </div>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      GitHub →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="skills" id="skills">
          <div className="container">
            <h2 className="section-title">Habilidades & Tecnologias</h2>
            <div className="skills-grid">
              {skills.map((category, index) => (
                <div key={index} className="skill-category glass">
                  <div className="category-header">
                    <span className="category-icon">{category.icon}</span>
                    <h3>{category.category}</h3>
                  </div>
                  <div className="skill-list">
                    {category.items.map((item, i) => (
                      <div key={i} className="skill-badge">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="container">
            <h2 className="section-title">Vamos Conversar?</h2>
            <div className="contact-content glass">
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-label">Email</span>
                  <a href="mailto:gjhuan672@gmail.com">gjhuan672@gmail.com</a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Telefone</span>
                  <a href="tel:+5595981294351">+55 95 98129-4351</a>
                </div>
              </div>
              <div className="social-links">
                <a href="https://github.com/jhuan-gg" target="_blank" rel="noopener noreferrer" className="social-icon">GitHub</a>
                <a href="https://www.linkedin.com/in/jhuan-gabriel-nascimento-rocha" target="_blank" rel="noopener noreferrer" className="social-icon">LinkedIn</a>
                <a href="https://www.instagram.com/jhuan.zin" target="_blank" rel="noopener noreferrer" className="social-icon">Instagram</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© 2026 Jhuan Gabriel. Desenvolvido com React.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

