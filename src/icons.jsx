import { techIcons } from './iconMap'

export function TechIcon({ name, className }) {
  const entry = techIcons[name]
  if (!entry) return null
  const [Icon, color] = entry
  return <Icon className={className} style={{ color }} aria-hidden="true" />
}
