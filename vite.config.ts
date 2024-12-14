import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'], // Для поддержки async/await
      targets: ['defaults', 'ie 11'], // Указываем IE11 как целевой браузер
    }),
  ],
  server: {
    open: true,
  },
})
