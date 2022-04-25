import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from '@honkhonk/vite-plugin-svgr';

export default defineConfig({
    base: "/RikThePixel/",
    plugins: [
        react(),
        svgr()
    ],
    resolve: {
        alias: {
            "react": "preact/compat",
            "react-dom/test-utils": "preact/test-utils",
            "react-dom": "preact/compat",
            "react/jsx-runtime": "preact/jsx-runtime"
        }
    }
});