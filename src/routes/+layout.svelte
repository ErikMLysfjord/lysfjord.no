<script lang="ts">
	import '@fontsource-variable/inter';
	import '@fontsource-variable/lora';
	import Nav from './Nav.svelte';

	export let params: Record<string, string> = {};
</script>

<svelte:head>
	<script defer src="https://umami-analytics-mu-eight.vercel.app/script.js" data-website-id="95494686-2de3-4a1b-a034-75c4383c3bd8"></script>
</svelte:head>

<Nav />

<main>
	<slot />
</main>

<style>
	/* ── tokens ── */
	:global(:root[data-theme='warm-cream']) {
		--bg:           #f7f4ef;
		--text:         #4a4740;
		--heading:      #1c1a18;
		--muted:        #9a9088;
		--faint:        #6a6460;
		--accent:       #c8832a;
		--blob:         #f0c060;
		--border:       #e0dcd6;
		--nav-wordmark: #6a6460;
	}

	:global(:root[data-theme='dark-gold']) {
		--bg:           #1e1f20;
		--text:         #a9a9b3;
		--heading:      #e0e0e8;
		--muted:        #6b6b75;
		--faint:        #555;
		--accent:       #ffcc48;
		--blob:         #ffcc48;
		--border:       #2e2f30;
		--nav-wordmark: #c0c0c8;
	}

	:global(:root[data-theme='slate']) {
		--bg:           #f0f2f5;
		--text:         #3a4048;
		--heading:      #1a2028;
		--muted:        #7a8898;
		--faint:        #5a6878;
		--accent:       #4a90d9;
		--accent-star:  #3c81ce;
		--blob:         #4a90d9;
		--border:       #d8dde5;
		--nav-wordmark: #5a6878;
	}

:global(:root[data-theme='forest']) {
		--bg:           #f4f5f3;
		--text:         #2e3830;
		--heading:      #141e14;
		--muted:        #6a8070;
		--faint:        #4e6858;
		--accent:       #2a6040;
		--accent-star:  #3d7a55;
		--blob:         #5a9a70;
		--border:       #ccd8cc;
		--nav-wordmark: #4e6858;
	}

	/* ── base ── */
	:global(*, *::before, *::after) {
		box-sizing: border-box;
	}

	:global(html) {
		overflow-x: hidden;
	}

	:global(body) {
		font-family: 'Inter Variable', sans-serif;
		margin: 0;
		padding: 0;
		background-color: var(--bg);
		color: var(--text);
		height: 100%;
		overflow-x: hidden;
		-webkit-font-smoothing: antialiased;
	}

	:global(h1, h2, h3) {
		font-weight: 500;
	}
</style>
