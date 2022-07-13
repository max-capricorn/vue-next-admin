import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        ElementPlusResolver({
          importStyle: 'css',
        }),
      ],
      dts: 'src/components.d.ts',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.vue', '.json'],
    alias: {
      '@': join(__dirname, 'src'),
      '@/apis': join(__dirname, 'src/apis'),
      '@/types': join(__dirname, 'src/types'),
      '@/utils': join(__dirname, 'src/utils'),
      '@/styles': join(__dirname, 'src/styles'),
      '@/constants': join(__dirname, 'src/constants'),
      '@/router': join(__dirname, 'src/router'),
      '@/components': join(__dirname, 'src/components'),
      '@/layouts': join(__dirname, 'src/layouts'),
      '@/plugins': join(__dirname, 'src/plugins'),
      '@/views': join(__dirname, 'src/views'),
      '@/assets': join(__dirname, 'src/assets'),
    },
  },
})
