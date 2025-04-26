// @ts-check
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
    output: 'static',
    vite: {
        server: {
            watch: {
                usePolling: true,
                interval: 100
            }
        }
    }
})
