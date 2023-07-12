import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import svgLoader from 'vite-svg-loader'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        svgLoader()
    ],
    server: {
        port: 3000,
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    }
})
