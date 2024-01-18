import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte(), cssInjectedByJsPlugin()],
    build: {
        rollupOptions: {
            output: {
                dir: 'dist',
                entryFileNames: 'InjectableVirtualKeyboard.js',
                assetFileNames: 'plugin.css',
                chunkFileNames: "chunk.js",
                manualChunks: undefined,
            }
        }
    }
});
