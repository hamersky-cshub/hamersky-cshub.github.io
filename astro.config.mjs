import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  site: 'https://hamersky-cshub.github.io',
  base: 'https://github.com/hamersky-cshub/hamersky-cshub.github.io',
  integrations: [
    mdx(),
    icon(),
    tailwind({
      applyBaseStyles: false,
    }),
    compress(),
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          logger: {
            warn: () => {},
          },
        },
      },
    },
  },
})
