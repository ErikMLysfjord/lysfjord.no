<svelte:head>
	<title>Error</title>
</svelte:head>

<div class="error-container">
	<h1>Sorry, something went wrong</h1>
</div>

<style>
	.error-container {
		display: flex;
		align-items: center;
		justify-content: center;
		height: calc(100vh - 5.5rem);
	}

	.error-container h1 {
		font-size: 2rem;
	}

	@media (max-width: 600px) {
		.error-container h1 {
			font-size: 1rem;
		}
	}
</style>
