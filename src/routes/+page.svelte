<svelte:head>
	<title>Erik Menkin Lysfjord</title>
	<meta name="description" content="Home page of my webpage." />
</svelte:head>

<div class="outer-container">
	<h1>Erik Menkin Lysfjord</h1>
	<div class="link-container">
		<a href="https://github.com/ErikMLysfjord">Github</a>
		<a href="https://www.linkedin.com/in/erik-menkin-lysfjord/">LinkedIn</a>
		<a href="mailto:erik.menkin@lysfjord.no">Email</a>
	</div>
</div>

<style>
	.outer-container {
		display: flex;
		gap: 1rem;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: calc(100vh - 5.5rem);
	}

	.link-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}

	.outer-container a {
		color: #a9a9b3;
		padding: 0.25rem;
		text-decoration: none;
		text-decoration-line: underline;
		text-decoration-color: #ffcc48;
	}

	.outer-container a:hover {
		color: #ffcc48;
	}

	.outer-container a:focus {
		outline: 2px solid #ffcc48;
		border-radius: 2px;
	}

	.outer-container h1 {
		font-size: 2rem;
		margin: 0;
	}
</style>
