import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import {
  LuMail, LuPhone, LuMapPin, LuCopy, LuCheck, LuArrowUpRight, LuBuilding2, LuBriefcase,
  LuLayoutTemplate, LuServer, LuCloud, LuBlocks,
} from 'react-icons/lu'
import { TechIcon } from './icons'
import { pointIcons } from './iconMap'
import { profile, about, facts, experiences, stack, projects } from './data'

const sections = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'experiencia', label: 'Experiência' },
  ...(projects.length ? [{ id: 'projetos', label: 'Projetos' }] : []),
  { id: 'stack', label: 'Stack' },
  { id: 'contato', label: 'Contato' },
]

function useActiveSection(ids) {
  const [active, setActive] = useState('')
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])
  return active
}

function useReveal() {
  useEffect(() => {
    document.documentElement.classList.add('js')
    const els = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            observer.unobserve(e.target)
          }
        }),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

// transforma `texto` em <code>texto</code>
function Rich({ text }) {
  return text.split(/(`[^`]+`)/g).map((part, i) =>
    part.startsWith('`') ? <code key={i}>{part.slice(1, -1)}</code> : part,
  )
}

function SectionTitle({ title, hint }) {
  return (
    <div className="section-head">
      <h2>{title}</h2>
      <p className="hint" aria-hidden="true">{hint}</p>
    </div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sections.map((s) => s.id))

  return (
    <header className="header">
      <div className="wrap header-inner">
        <a href="#topo" className="brand" aria-label="Ir para o início">
          {profile.name}
        </a>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Fechar' : 'Menu'}
        </button>
        <nav id="menu" className={`nav ${open ? 'is-open' : ''}`} aria-label="Principal">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-current={active === s.id ? 'true' : undefined}
              onClick={() => setOpen(false)}
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="topo">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="hero-role">{profile.role} · {profile.city}</p>
          <h1>
            Sistemas web que sustentam a operação do seu negócio.
          </h1>
          <p className="lede">
            Eu sou {profile.name}. Projeto e desenvolvo SaaS, ERPs e plataformas com React,
            Node.js e TypeScript, do banco de dados até a produção.
          </p>
          <div className="actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              Enviar e-mail
            </a>
            <a className="btn btn-ghost" href="#experiencia">
              Ver experiência
            </a>
          </div>
        </div>
        <figure className="portrait">
          <img
            src="/eu.webp"
            width="720"
            height="900"
            alt={`Retrato de ${profile.name}`}
            fetchPriority="high"
          />
        </figure>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section" id="sobre">
      <div className="wrap split">
        <SectionTitle title="Sobre" hint="# README.md" />
        <div className="split-body">
          <div className="prose">
            {about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <dl className="facts">
            {facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section" id="experiencia">
      <div className="wrap split">
        <SectionTitle title="Experiência" hint="$ git log --career" />
        <ol className="timeline">
          {experiences.map((exp, i) => (
            <li key={exp.company} className="job" data-reveal style={{ '--i': i }}>
              <span className="job-badge" aria-hidden="true">
                {exp.href ? <LuBuilding2 /> : <LuBriefcase />}
              </span>
              <div className="job-card">
                <div className="job-head">
                  <h3>{exp.role}</h3>
                  <p className="job-company">
                    {exp.href ? (
                      <a href={exp.href} target="_blank" rel="noopener noreferrer">
                        {exp.company} <LuArrowUpRight aria-hidden="true" />
                      </a>
                    ) : (
                      exp.company
                    )}
                  </p>
                  <p className="job-meta">
                    <span><LuMapPin aria-hidden="true" /> {exp.location}</span>
                    <span className="tag">{exp.type}</span>
                  </p>
                </div>
                <ul className="job-points">
                  {exp.points.map((pt) => {
                    const Icon = pointIcons[pt.icon]
                    return (
                      <li key={pt.text}>
                        <span className="point-icon" aria-hidden="true"><Icon /></span>
                        <span><Rich text={pt.text} /></span>
                      </li>
                    )
                  })}
                </ul>
                {exp.tech && (
                  <ul className="chips" aria-label="Tecnologias usadas">
                    {exp.tech.map((t) => (
                      <li key={t}><TechIcon name={t} /> {t}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Projects() {
  if (!projects.length) return null
  return (
    <section className="section" id="projetos">
      <div className="wrap split">
        <SectionTitle title="Projetos" hint="~/projects" />
        <div className="projects">
          {projects.map((p) => (
            <article key={p.title} className="project">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <p className="project-stack">{p.stack.join(', ')}</p>
              <p className="project-links">
                {p.href && <a href={p.href} target="_blank" rel="noopener noreferrer">Ver online</a>}
                {p.repo && <a href={p.repo} target="_blank" rel="noopener noreferrer">Código</a>}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const groupIcons = { layout: LuLayoutTemplate, server: LuServer, cloud: LuCloud, blocks: LuBlocks }

function Stack() {
  return (
    <section className="section" id="stack">
      <div className="wrap split">
        <SectionTitle title="Stack" hint="// package.json" />
        <div className="stack">
          {stack.map((g, gi) => {
            const GroupIcon = groupIcons[g.icon]
            return (
              <div key={g.group} className="stack-group" data-reveal style={{ '--i': gi }}>
                <div className="stack-head">
                  <span className="stack-icon" aria-hidden="true"><GroupIcon /></span>
                  <h3>{g.group}</h3>
                  <span className="stack-hint" aria-hidden="true">{g.hint}</span>
                </div>
                <ul className="tiles">
                  {g.items.map((it) => (
                    <li key={it} className="tile">
                      <TechIcon name={it} />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* sem permissão de área de transferência: o link mailto continua funcionando */
    }
  }

  return (
    <section className="section contact" id="contato">
      <div className="wrap split">
        <SectionTitle title="Contato" hint="$ ./contact.sh" />
        <div className="contact-body">
          <p className="contact-lede">
            Tem um sistema para criar ou modernizar? Me conte o problema e eu respondo com os
            próximos passos.
          </p>

          <div className="terminal" data-reveal>
            <div className="terminal-bar" aria-hidden="true">
              <span /><span /><span />
              <em>jhuan@portfolio: ~</em>
            </div>
            <div className="terminal-body">
              <p className="cmd" aria-hidden="true">
                <span className="prompt">$</span> <span className="typed">contact --list</span>
                <span className="cursor" />
              </p>
              <ul className="contact-list">
                <li>
                  <LuMail aria-hidden="true" />
                  <span className="key">email</span>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  <button type="button" className="copy" onClick={copy} aria-label="Copiar e-mail">
                    {copied ? <LuCheck /> : <LuCopy />}
                    <span aria-live="polite">{copied ? 'copiado' : 'copiar'}</span>
                  </button>
                </li>
                <li>
                  <LuPhone aria-hidden="true" />
                  <span className="key">phone</span>
                  <a href={profile.phoneHref}>{profile.phone}</a>
                </li>
                <li>
                  <LuMapPin aria-hidden="true" />
                  <span className="key">local</span>
                  <span>{profile.city}</span>
                </li>
              </ul>
            </div>
          </div>

          <ul className="social">
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                <FaGithub aria-hidden="true" /> GitHub
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn aria-hidden="true" /> LinkedIn
              </a>
            </li>
            <li>
              <a href={profile.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram aria-hidden="true" /> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  useReveal()
  return (
    <>
      <a className="skip" href="#sobre">Pular para o conteúdo</a>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <footer className="footer">
        <div className="wrap">
          <p>© {new Date().getFullYear()} {profile.name}</p>
        </div>
      </footer>
    </>
  )
}
