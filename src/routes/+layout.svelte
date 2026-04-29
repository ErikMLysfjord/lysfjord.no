<script lang="ts">
	import '@fontsource-variable/inter';
	import '@fontsource-variable/lora';
	import Nav from './Nav.svelte';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	onMount(() => {
		if (browser) {
			import('aws-rum-web').then(({ AwsRum }) => {
				new AwsRum('a8c96268-0853-4e66-a55a-d2808e72342a', '1.0.0', 'eu-north-1', {
					sessionSampleRate: 1,
					endpoint: 'https://dataplane.rum.eu-north-1.amazonaws.com',
					telemetries: ['performance', 'errors', 'http'],
					allowCookies: false,
					enableXRay: false,
					signing: false
				});
			});
		}
	});

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
