import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Layout,
  Database,
  Briefcase,
  Cloud,
  ShieldCheck
} from 'lucide-react'
import { FaReact, FaNodeJs, FaDocker, FaDatabase, FaServer, FaProjectDiagram, FaHtml5, FaGithub, FaCheckDouble, FaShieldAlt, FaCodeBranch } from "react-icons/fa"
import { SiNextdotjs, SiStyledcomponents, SiMui, SiGreensock, SiSupabase, SiFirebase, SiTypescript } from "react-icons/si"
import { VscGitMerge } from "react-icons/vsc"
import { MdOutlineArchitecture, MdUpdate } from "react-icons/md"
import { IoSpeedometerOutline, IoAppsOutline } from "react-icons/io5"

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

  const experiences = [
    {
      company: "Priorit",
      role: "Full Stack Developer",
      location: "Jaraguá do Sul, Santa Catarina",
      type: "Full-time",
      description: [
        "Modernização de legados (Delphi → Node/React) e gestão de DBs (PostgreSQL, Firebird, NoSQL).",
        "Desenvolvimento de arquiteturas SaaS/ERPs multi-tenant de ponta a ponta (Next.js, Supabase, TypeScript).",
        "Deploy, conteinerização e gestão cloud de produção (Docker, Vercel, AWS, Azure, Railway)."
      ],
      link: "https://priorize.com.br/"
    },
    {
      company: "Freelance",
      role: "Full Stack Developer",
      location: "Autônomo",
      type: "Part-time",
      description: [
        "Concepção de ecossistemas logísticos, plataformas web e produtos digitais rastreáveis.",
        "Arquitetura de soluções SaaS sob medida para necessidades de alta complexidade do cliente.",
        "Experiência em converter lógicas e problemas de negócio em software robusto, otimizado e escalável."
      ]
    }
  ]

  const skills = [
    {
      category: "Frontend",
      icon: <Layout size={20} />,
      items: [
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "HTML5/CSS3", icon: <FaHtml5 /> },
        { name: "Styled-Components", icon: <SiStyledcomponents /> },
        { name: "Material-UI", icon: <SiMui /> },
        { name: "GSAP", icon: <SiGreensock /> }
      ]
    },
    {
      category: "Backend & DB",
      icon: <Database size={20} />,
      items: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Supabase", icon: <SiSupabase /> },
        { name: "CouchDB", icon: <FaDatabase /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "State Mngt", icon: <FaServer /> },
        { name: "TypeScript", icon: <SiTypescript /> }
      ]
    },
    {
      category: "DevOps & Deploy",
      icon: <Cloud size={20} />,
      items: [
        { name: "CI/CD Pipelines", icon: <VscGitMerge /> },
        { name: "Produção Ativada", icon: <FaServer /> },
        { name: "Conteinerização (Docker)", icon: <FaDocker /> },
        { name: "Estratégias de Rollout", icon: <VscGitMerge /> }
      ]
    },
    {
      category: "Arquitetura",
      icon: <Briefcase size={20} />,
      items: [
        { name: "SaaS Multi-tenancy", icon: <IoAppsOutline /> },
        { name: "Design de Microserviços", icon: <MdOutlineArchitecture /> },
        { name: "Modelagem Relacional/NoSQL", icon: <FaDatabase /> }
      ]
    },
    {
      category: "Engenharia",
      icon: <Briefcase size={20} />,
      items: [
        { name: "Sistemas Legados", icon: <MdUpdate /> },
        { name: "Automação de Workflows", icon: <FaProjectDiagram /> },
        { name: "Performance Optimization", icon: <IoSpeedometerOutline /> }
      ]
    },
    {
      category: "Qualidade & Práticas",
      icon: <ShieldCheck size={20} />,
      items: [
        { name: "Clean Architecture", icon: <FaCodeBranch /> },
        { name: "Princípios SOLID", icon: <FaShieldAlt /> },
        { name: "Testes Automatizados", icon: <FaCheckDouble /> },
        { name: "Git / Versionamento", icon: <FaGithub /> }
      ]
    }
  ]


  return (
    <div className="app" ref={appRef} style={{ background: '#050505', minHeight: '100vh', visibility: 'visible' }}>
      <header className={`navbar ${scrolled ? 'scrolled glass' : ''}`}>
        <div className="container nav-content">
          <a href="#home" className="logo gradient-text">JG</a>
          <nav>
            <ul className="nav-links">
              <li><a href="#about">Sobre</a></li>
              <li><a href="#experience">Experiência</a></li>
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
                <a href="#contact" className="btn btn-secondary">Entrar em Contato</a>
              </div>
            </div>
            <div className="hero-image-wrapper">
              <img src="/eu.png" alt="Jhuan Gabriel" className="hero-image" />
            </div>
          </div>
          <div className="bg-blobs">
            <div className="blob" style={{ background: 'var(--accent-primary)', top: '20%', right: '-10%' }}></div>
            <div className="blob" style={{ background: 'var(--accent-secondary)', bottom: '10%', left: '-10%', animationDelay: '-10s' }}></div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="container">
            <h2 className="section-title">Sobre Mim</h2>
            <div className="about-grid glass">
              <div className="about-text">
                <p>
                  Como <strong>Engenheiro de Software</strong>, meu foco é transformar ideias de negócio em aplicações digitais de alta performance, unindo um visual moderno a uma estrutura robusta e segura.
                </p>

                <p>
                  <strong>Experiência Visual (Frontend):</strong> Especialista no ecossistema <strong>React</strong>, construo interfaces inteligentes e totalmente responsivas. Utilizo metodologias como <strong>Atomic Design</strong> e ferramentas como <strong>Styled-Components e MUI</strong> para garantir que o site seja não apenas bonito, mas organizado, fácil de manter e extremamente rápido para o usuário final (Performance Optimization).
                </p>

                <p>
                  <strong>Inteligência e Dados (Backend):</strong> Desenvolvo o "cérebro" das aplicações utilizando <strong>Node.js e TypeScript</strong>. Minha prioridade é a criação de sistemas seguros e prontos para crescer, utilizando <strong>APIs modernas (REST/GraphQL)</strong> e bancos de dados otimizados. Isso garante que sua plataforma suporte muitos acessos simultâneos sem perder estabilidade ou segurança de dados.
                </p>

                <p>
                  <strong>Compromisso com Qualidade:</strong> Aplico as melhores práticas de mercado (<strong>SOLID e Clean Architecture</strong>) e realizo testes rigorosos para entregar um software livre de erros, com código limpo e foco total na experiência do cliente.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-blobs">
            <div className="blob" style={{ background: '#ff003c', top: '-10%', left: '10%', width: '450px', height: '450px', animationDelay: '-5s' }}></div>
            <div className="blob" style={{ background: 'var(--accent-primary)', bottom: '20%', right: '-10%', width: '300px', height: '300px', animationDelay: '-15s' }}></div>
          </div>
        </section>

        <section className="experience" id="experience">
          <div className="container">
            <h2 className="section-title">Experiência</h2>
            <div className="experience-list">
              {experiences.map((exp, index) => (
                <div key={index} className="experience-card glass">
                  <div className="exp-header">
                    <h3>{exp.role}</h3>
                    <div className="exp-meta">
                      <span className="exp-company">{exp.company}</span>
                      <span className="separator">•</span>
                      <span>{exp.location}</span>
                      <span className="separator">•</span>
                      <span className="exp-type">{exp.type}</span>
                    </div>
                  </div>
                  <ul className="exp-details">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  {exp.link && (
                    <a href={exp.link} target="_blank" rel="noopener noreferrer" className="exp-link">
                      Acessar Empresa →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-blobs">
            <div className="blob" style={{ background: 'var(--accent-secondary)', top: '10%', left: '-5%', width: '500px', height: '500px', animationDelay: '-2s' }}></div>
            <div className="blob" style={{ background: 'var(--accent-gradient)', bottom: '-5%', right: '15%', width: '350px', height: '350px', animationDelay: '-8s' }}></div>
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
                      <div key={i} className="skill-badge" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', color: 'var(--accent-primary)', fontSize: '1.2rem' }}>{item.icon}</span>
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-blobs">
            <div className="blob" style={{ background: 'var(--accent-gradient)', top: '5%', right: '20%', animationDelay: '-12s' }}></div>
            <div className="blob" style={{ background: '#ff003c', bottom: '5%', left: '0%', width: '350px', height: '350px', animationDelay: '-4s' }}></div>
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
          <div className="bg-blobs">
            <div className="blob" style={{ background: 'var(--accent-primary)', top: '15%', left: '-5%', animationDelay: '-7s' }}></div>
            <div className="blob" style={{ background: 'var(--accent-secondary)', bottom: '-10%', right: '10%', animationDelay: '-3s' }}></div>
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

