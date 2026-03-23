<script lang="ts">
	import '@fontsource-variable/inter';
	import '@fontsource-variable/lora';
	import Nav from './Nav.svelte';
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	injectAnalytics({ mode: dev ? 'development' : 'production' });

	export let params: Record<string, string> = {};
</script>

<Nav />

<main>
	<slot />
</main>

<style>
	:global(*, *::before, *::after) {
		box-sizing: border-box;
	}

	:global(body) {
		font-family: 'Inter Variable', sans-serif;
		margin: 0;
		padding: 0;
		background-color: #1e1f20;
		color: #a9a9b3;
		height: 100%;
		-webkit-font-smoothing: antialiased;
	}

	:global(h1, h2, h3) {
		font-weight: 500;
	}
</style>
