import adapter from 'svelte-adapter-deno';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			'$lib': './src/lib',
			'$lib/*': './src/lib/*'
		}
	}
};

export default config;
