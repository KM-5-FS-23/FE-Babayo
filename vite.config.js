import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import VitePluginTailwind from 'vite-plugin-tailwind';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), VitePluginTailwind()],
	css: {
		postcss: {
			plugins: [autoprefixer()],
		},
	},
});
