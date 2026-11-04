import {
  SiReact, SiNextdotjs, SiTypescript, SiHtml5, SiCss, SiStyledcomponents, SiMui, SiGreensock,
  SiNodedotjs, SiGraphql, SiPostgresql, SiSupabase, SiFirebase, SiApachecouchdb, SiDocker,
  SiVercel, SiRailway, SiGit, SiGithubactions, SiDelphi,
} from 'react-icons/si'
import {
  LuCloud, LuDatabase, LuServer, LuLayers, LuBlocks, LuShieldCheck, LuTestTube, LuWorkflow,
  LuRefreshCw, LuContainer, LuTruck, LuBoxes,
} from 'react-icons/lu'

// nome da tecnologia -> [ícone, cor da marca]
export const techIcons = {
  'React': [SiReact, '#0b9ec4'],
  'Next.js': [SiNextdotjs, '#14213a'],
  'TypeScript': [SiTypescript, '#3178c6'],
  'HTML5': [SiHtml5, '#e34f26'],
  'CSS3': [SiCss, '#1572b6'],
  'Styled-Components': [SiStyledcomponents, '#c2477a'],
  'Material UI': [SiMui, '#007fff'],
  'GSAP': [SiGreensock, '#2e9e5b'],
  'Node.js': [SiNodedotjs, '#4c8c3d'],
  'REST': [LuServer, '#4a5570'],
  'GraphQL': [SiGraphql, '#e10098'],
  'PostgreSQL': [SiPostgresql, '#336791'],
  'Firebird': [LuDatabase, '#c2410c'],
  'Supabase': [SiSupabase, '#1f9d6b'],
  'Firebase': [SiFirebase, '#e8920b'],
  'CouchDB': [SiApachecouchdb, '#e42528'],
  'Docker': [SiDocker, '#2496ed'],
  'CI/CD': [LuWorkflow, '#2447d6'],
  'GitHub Actions': [SiGithubactions, '#2088ff'],
  'Vercel': [SiVercel, '#14213a'],
  'AWS': [LuCloud, '#e07b00'],
  'Azure': [LuCloud, '#0078d4'],
  'Railway': [SiRailway, '#14213a'],
  'Delphi': [SiDelphi, '#e62e2e'],
  'Git': [SiGit, '#f05032'],
  'SaaS multi-tenant': [LuLayers, '#2447d6'],
  'Clean Architecture': [LuBlocks, '#2447d6'],
  'SOLID': [LuShieldCheck, '#2447d6'],
  'Modelagem relacional e NoSQL': [LuDatabase, '#2447d6'],
  'Testes automatizados': [LuTestTube, '#2447d6'],
}

export const pointIcons = {
  refresh: LuRefreshCw,
  layers: LuLayers,
  database: LuDatabase,
  container: LuContainer,
  truck: LuTruck,
  boxes: LuBoxes,
  workflow: LuWorkflow,
}
