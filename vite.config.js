import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: '_redirects',   // the _redirects file from your project root
          dest: '.'            // the destination is the root of the dist folder
        }
      ]
    })
  ],
  base: '/MyPortfolioCentCProject/',
})