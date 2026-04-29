import { getModuleMaterialCount, getModuleVideoCount } from './moduleParts'

const challengePages = import.meta.glob('../pages/learning-hub/*/challenge.astro')
const gamePages = import.meta.glob('../pages/learning-hub/*/game.astro')

function hasChallengeFile(slug: string): boolean {
  return Object.keys(challengePages).some(k => k.includes(`/${slug}/`))
}

function hasGameFile(slug: string): boolean {
  return Object.keys(gamePages).some(k => k.includes(`/${slug}/`))
}

export type ModuleId = 'dc' | 'ap' | 'at' | 'dp' | 'se' | 'mw' | 'da'

export interface TeachersGuideAsset {
  href: string
}

export interface ModuleData {
  id: ModuleId
  slug: string
  color: string
  materials: number
  videos: number
  challenges: number
  games: number
  teachersGuide: TeachersGuideAsset
}

export const modules: ModuleData[] = [
  {
    id: 'dc',
    slug: 'digital-citizenship',
    color: '#22C55E',
    materials: getModuleMaterialCount('dc'),
    videos: getModuleVideoCount('dc'),
    challenges: hasChallengeFile('digital-citizenship') ? 1 : 0,
    games: hasGameFile('digital-citizenship') ? 1 : 0,
    teachersGuide: {
      href: '/materials/digital-citizenship/teaching-guide/teaching-guide.zip',
    },
  },
  {
    id: 'ap',
    slug: 'attacker-perspective',
    color: '#8850DF',
    materials: getModuleMaterialCount('ap'),
    videos: getModuleVideoCount('ap'),
    challenges: hasChallengeFile('attacker-perspective') ? 1 : 0,
    games: hasGameFile('attacker-perspective') ? 1 : 0,
    teachersGuide: {
      href: '/materials/attacker-perspective/teaching-guide/teaching-guide.zip',
    },
  },
  {
    id: 'at',
    slug: 'authentication',
    color: '#F59E0B',
    materials: getModuleMaterialCount('at'),
    videos: getModuleVideoCount('at'),
    challenges: hasChallengeFile('authentication') ? 1 : 0,
    games: hasGameFile('authentication') ? 1 : 0,
    teachersGuide: {
      href: '/materials/authentication/teaching-guide/teaching-guide.zip',
    },
  },
  {
    id: 'dp',
    slug: 'data-privacy',
    color: '#14B8A6',
    materials: getModuleMaterialCount('dp'),
    videos: getModuleVideoCount('dp'),
    challenges: hasChallengeFile('data-privacy') ? 1 : 0,
    games: hasGameFile('data-privacy') ? 1 : 0,
    teachersGuide: {
      href: '/materials/data-privacy/teaching-guide/teaching-guide.zip',
    },
  },
  {
    id: 'se',
    slug: 'social-engineering',
    color: '#D946EF',
    materials: getModuleMaterialCount('se'),
    videos: getModuleVideoCount('se'),
    challenges: hasChallengeFile('social-engineering') ? 1 : 0,
    games: hasGameFile('social-engineering') ? 1 : 0,
    teachersGuide: {
      href: '/materials/social-engineering/teaching-guide/teaching-guide.zip',
    },
  },
  {
    id: 'mw',
    slug: 'malware',
    color: '#93CC16',
    materials: getModuleMaterialCount('mw'),
    videos: getModuleVideoCount('mw'),
    challenges: hasChallengeFile('malware') ? 1 : 0,
    games: hasGameFile('malware') ? 1 : 0,
    teachersGuide: {
      href: '/materials/malware/teaching-guide/teaching-guide.zip',
    },
  },
  {
    id: 'da',
    slug: 'digital-abuse',
    color: '#EF4444',
    materials: getModuleMaterialCount('da'),
    videos: getModuleVideoCount('da'),
    challenges: hasChallengeFile('digital-abuse') ? 1 : 0,
    games: hasGameFile('digital-abuse') ? 1 : 0,
    teachersGuide: {
      href: '/materials/digital-abuse/teaching-guide/teaching-guide.zip',
    },
  },
]

export const moduleCount = modules.length
export const challengeCount = modules.filter(m => m.challenges > 0).length
export const gameCount = modules.filter(m => m.games > 0).length

export function getModule(id: ModuleId): ModuleData | undefined {
  return modules.find(m => m.id === id)
}
