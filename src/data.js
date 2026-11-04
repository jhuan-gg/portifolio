export const profile = {
  name: 'Jhuan Gabriel',
  role: 'Desenvolvedor Full Stack',
  city: 'Jaraguá do Sul, SC',
  email: 'gjhuan672@gmail.com',
  phone: '+55 95 98129-4351',
  phoneHref: 'tel:+5595981294351',
  github: 'https://github.com/jhuan-gg',
  linkedin: 'https://www.linkedin.com/in/jhuan-gabriel-nascimento-rocha',
  instagram: 'https://www.instagram.com/jhuan.zin',
}

export const about = [
  'Sou engenheiro de software e transformo regras de negócio em sistemas web estáveis, seguros e fáceis de evoluir. Trabalho de ponta a ponta: do modelo de dados e da API até a interface que o usuário final usa.',
  'No front-end, trabalho com React e Next.js, organizando componentes com Atomic Design e cuidando da performance. No back-end, uso Node.js e TypeScript para construir APIs REST e GraphQL sobre bancos relacionais e NoSQL.',
  'Aplico SOLID e Clean Architecture para manter o código legível e testável, e levo o que construo até a produção, com Docker, pipelines de CI/CD e deploy em nuvem.',
]

export const facts = [
  { label: 'Atuação', value: 'Full Stack, com foco em SaaS e ERPs' },
  { label: 'Base', value: 'Jaraguá do Sul, Santa Catarina' },
  { label: 'Stack principal', value: 'React, Next.js, Node.js, TypeScript' },
  { label: 'Bancos de dados', value: 'PostgreSQL, Firebird, Supabase, CouchDB' },
]

export const experiences = [
  {
    company: 'Priorit',
    href: 'https://priorize.com.br/',
    role: 'Desenvolvedor Full Stack',
    location: 'Jaraguá do Sul, SC',
    type: 'Tempo integral',
    points: [
      { icon: 'refresh', text: 'Modernização de sistemas legados: migração de `Delphi` para `Node.js` + `React`.' },
      { icon: 'layers', text: 'SaaS e ERPs `multi-tenant` de ponta a ponta com `Next.js`, `Supabase` e `TypeScript`.' },
      { icon: 'database', text: 'Administração de bancos `PostgreSQL`, `Firebird` e NoSQL.' },
      { icon: 'container', text: 'Conteinerização com `Docker` e deploy em produção na `Vercel`, `AWS`, `Azure` e `Railway`.' },
    ],
    tech: ['Delphi', 'Node.js', 'React', 'Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Docker'],
  },
  {
    company: 'Freelance',
    role: 'Desenvolvedor Full Stack',
    location: 'Autônomo',
    type: 'Meio período',
    points: [
      { icon: 'truck', text: 'Ecossistemas logísticos, plataformas web e produtos digitais rastreáveis.' },
      { icon: 'boxes', text: 'Arquitetura de soluções `SaaS` sob medida para regras de negócio complexas.' },
      { icon: 'workflow', text: 'Tradução de problemas do cliente em software escalável e de fácil manutenção.' },
    ],
  },
]

export const stack = [
  { group: 'Front-end', hint: 'interface', icon: 'layout', items: ['React', 'Next.js', 'TypeScript', 'HTML5', 'CSS3', 'Styled-Components', 'Material UI', 'GSAP'] },
  { group: 'Back-end e dados', hint: 'api + db', icon: 'server', items: ['Node.js', 'REST', 'GraphQL', 'PostgreSQL', 'Firebird', 'Supabase', 'Firebase', 'CouchDB'] },
  { group: 'Infraestrutura', hint: 'deploy', icon: 'cloud', items: ['Docker', 'CI/CD', 'Vercel', 'AWS', 'Azure', 'Railway', 'Git'] },
  { group: 'Arquitetura e práticas', hint: 'design', icon: 'blocks', items: ['SaaS multi-tenant', 'Clean Architecture', 'SOLID', 'Modelagem relacional e NoSQL', 'Testes automatizados'] },
]

// Adicione seus projetos aqui. A seção só aparece quando houver pelo menos um.
// Exemplo: { title: 'Nome', description: 'O que faz e qual problema resolve.', stack: ['React', 'Node.js'], href: 'https://...', repo: 'https://github.com/...' }
export const projects = []
