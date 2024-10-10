import { defineConfig } from 'vite'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        require('autoprefixer'),
      ],
    },
  },
})

