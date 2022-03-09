/** @format */

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src')
        }
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'index.js'),
            name: 'vue-layout',
            fileName: (format) => `vue-layout.${format}.js`
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['vue', 'vue-router'],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
})
