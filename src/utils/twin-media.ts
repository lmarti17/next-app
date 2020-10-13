import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from 'root/tailwind.config'

type Screen = 'sm' | 'md' | 'lg' | 'xl'

const { theme } = resolveConfig(tailwindConfig)

export const up = (bp: Screen) => {
  return `@media only screen and (min-width: ${theme.screens[bp]})`
}

export const down = (bp: Screen) => {
  return `@media only screen and (max-width: ${theme.screens[bp]})`
}

export const between = (bpMin: Screen, bpMax: Screen) => {
  return `@media only screen and (min-width: ${theme.screens[bpMin]}) and (max-width: ${theme.screens[bpMax]})`
}
