<svelte:head>
	<title>WIP</title>
</svelte:head>

<div class="message-container">
	<h1>Nothing to show here yet</h1>
</div>

<style>
	.message-container {
		display: flex;
		align-items: center;
		justify-content: center;
		height: calc(100vh - 5.5rem);
	}

	.message-container h1 {
		font-size: 2rem;
	}

	@media (max-width: 600px) {
		.message-container h1 {
			font-size: 1.5rem;
		}
	}
</style>
