import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		host: "::1",
		fs: {
			allow: [
				"static/"
			]
		}
	},
	plugins: [sveltekit()]
});
