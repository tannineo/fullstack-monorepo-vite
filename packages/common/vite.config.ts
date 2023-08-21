import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: [resolve(__dirname, './src/index.ts'), resolve(__dirname, './src/schema.ts')],
      name: '@fan-club/common',
      formats: ['es'],
      fileName: (_format, entryName) => {
        console.log('fileName receiving: ', { _format, entryName })

        return `${entryName}.mjs`
      },
    },
  },
  plugins: [dts({ rollupTypes: true })],
  define: {
    self: 'this',
  },
})
