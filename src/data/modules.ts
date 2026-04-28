export type ModuleId = 'dc' | 'ap' | 'at' | 'dp' | 'se' | 'mw' | 'da'

export interface ModuleData {
  id: ModuleId
  slug: string
  color: string
  materials: number
  videos: number
  challenges: number
  games: number
}

export const modules: ModuleData[] = [
  {
    id: 'dc',
    slug: 'digital-citizenship',
    color: '#22C55E',
    materials: 11,
    videos: 3,
    challenges: 1,
    games: 0,
  },
  {
    id: 'ap',
    slug: 'attacker-perspective',
    color: '#8850DF',
    materials: 7,
    videos: 1,
    challenges: 1,
    games: 0,
  },
  {
    id: 'at',
    slug: 'authentication',
    color: '#F59E0B',
    materials: 21,
    videos: 5,
    challenges: 1,
    games: 1,
  },
  {
    id: 'dp',
    slug: 'data-privacy',
    color: '#14B8A6',
    materials: 9,
    videos: 2,
    challenges: 1,
    games: 1,
  },
  {
    id: 'se',
    slug: 'social-engineering',
    color: '#D946EF',
    materials: 16,
    videos: 2,
    challenges: 1,
    games: 1,
  },
  {
    id: 'mw',
    slug: 'malware',
    color: '#93CC16',
    materials: 13,
    videos: 2,
    challenges: 1,
    games: 1,
  },
  {
    id: 'da',
    slug: 'digital-abuse',
    color: '#EF4444',
    materials: 5,
    videos: 4,
    challenges: 1,
    games: 1,
  },
]

export interface PartMeta {
  steps: number
  materials: number
  videos: number
}

export const modulePartsMeta: Record<string, PartMeta> = {
  // Digital Citizenship
  'digital-environments':                   { steps: 3, materials: 1, videos: 1 },
  'digital-citizen':                        { steps: 4, materials: 3, videos: 0 },
  'privacy-settings':                       { steps: 4, materials: 4, videos: 1 },
  'wise-and-resilient':                     { steps: 4, materials: 0, videos: 1 },
  'act-responsibly':                        { steps: 4, materials: 4, videos: 0 },
  // Attacker Perspective
  'circle-of-trustees':                     { steps: 2, materials: 2, videos: 0 },
  'what-is-an-adversary':                   { steps: 4, materials: 3, videos: 1 },
  'attacker-techniques':                    { steps: 4, materials: 2, videos: 0 },
  // Authentication
  'identity-and-digital-assets':            { steps: 1, materials: 1, videos: 1 },
  'what-is-authentication':                 { steps: 5, materials: 3, videos: 1 },
  'strong-usernames-and-passwords':         { steps: 5, materials: 7, videos: 1 },
  'how-to-manage-passwords-securely':       { steps: 5, materials: 8, videos: 1 },
  'how-to-protect-your-digital-identity':   { steps: 4, materials: 3, videos: 1 },
  // Data Privacy
  'what-is-private-data':                   { steps: 3, materials: 2, videos: 1 },
  'data-sharing':                           { steps: 4, materials: 2, videos: 0 },
  'digital-footprints':                     { steps: 4, materials: 3, videos: 1 },
  'clean-up-digital-footprint':             { steps: 4, materials: 2, videos: 0 },
  // Social Engineering
  'what-is-social-engineering':             { steps: 5, materials: 4, videos: 1 },
  'why-is-social-engineering-used':         { steps: 5, materials: 4, videos: 0 },
  'recognising-social-engineering':         { steps: 5, materials: 3, videos: 1 },
  'protecting-from-social-engineering':     { steps: 5, materials: 5, videos: 0 },
  // Malware
  'what-is-malware':                        { steps: 3, materials: 3, videos: 1 },
  'malware-types':                          { steps: 3, materials: 3, videos: 1 },
  'recognising-malware':                    { steps: 3, materials: 4, videos: 0 },
  'protection-measures':                    { steps: 4, materials: 3, videos: 0 },
  // Digital Abuse
  'misinformation':                         { steps: 3, materials: 1, videos: 1 },
  'disinformation':                         { steps: 4, materials: 0, videos: 1 },
  'cyber-bullying':                         { steps: 3, materials: 1, videos: 1 },
  'stranger-danger':                        { steps: 2, materials: 1, videos: 0 },
  'influencers':                            { steps: 3, materials: 1, videos: 1 },
  'deal-with-digital-abusers':              { steps: 2, materials: 1, videos: 0 },
}

export const moduleCount = modules.length
export const challengeCount = modules.filter(m => m.challenges > 0).length
export const gameCount = modules.filter(m => m.games > 0).length

export function getModule(id: ModuleId): ModuleData | undefined {
  return modules.find(m => m.id === id)
}
