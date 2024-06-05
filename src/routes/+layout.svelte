<script>
	import Nav from './Nav.svelte';
</script>

<Nav />

<main>
	<slot />
</main>

<style>
	:global(body) {
		font-family: 'Inter Variable', sans-serif;
		margin: 0;
		padding: 0;
		background-color: #232425;
		color: #a9a9b3;
		height: 100%;
	}
</style>
