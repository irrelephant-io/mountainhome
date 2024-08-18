import adapter from 'svelte-adapter-azure-swa';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter({
            customStaticWebAppConfig: {
                platform: {
                    apiRuntime: 'node:22'
                }
            }
        }),
        alias: {
            "$data": "static/data",
            "$data/*": "static/data/*"
        },
    }
};

export default config;
