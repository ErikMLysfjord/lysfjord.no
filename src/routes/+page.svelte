<svelte:head>
	<title>Erik Menkin Lysfjord</title>
	<meta
		name="description"
		content="Personal website of Erik Menkin Lysfjord, a software developer based in Norway."
	/>
	<link rel="canonical" href="https://lysfjord.no" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://lysfjord.no" />
	<meta property="og:title" content="Erik Menkin Lysfjord" />
	<meta
		property="og:description"
		content="Personal website of Erik Menkin Lysfjord, a software developer based in Norway."
	/>
	<meta name="twitter:title" content="Erik Menkin Lysfjord" />
	<meta
		name="twitter:description"
		content="Personal website of Erik Menkin Lysfjord, a software developer based in Norway."
	/>
</svelte:head>

<div class="outer-container">
	<div class="intro">
		<h1>Erik Menkin Lysfjord</h1>
		<p class="tagline">Software developer based in Norway</p>
	</div>
	<div class="link-container">
		<a href="https://github.com/ErikMLysfjord">Github</a>
		<span class="sep">·</span>
		<a href="https://www.linkedin.com/in/erik-menkin-lysfjord/">LinkedIn</a>
		<span class="sep">·</span>
		<a href="mailto:erik.menkin@lysfjord.no">Email</a>
	</div>
</div>

<style>
	h1 {
		font-family: 'Lora Variable', serif;
	}
	.outer-container {
		display: flex;
		gap: 1.5rem;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: calc(100vh - 5.5rem);
	}

	.intro {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.4rem;
	}

	h1 {
		font-size: 2rem;
		margin: 0;
		color: #e0e0e8;
		font-weight: 600;
		letter-spacing: -0.02em;
	}

	.tagline {
		margin: 0;
		font-size: 0.9rem;
		color: #5a5a64;
	}

	.link-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.5rem;
	}

	a {
		color: #a9a9b3;
		padding: 0.2rem 0.1rem;
		text-decoration: none;
		border-bottom: 1px solid #ffcc4855;
		transition:
			color 0.15s,
			border-color 0.15s;
	}

	a:hover {
		color: #ffcc48;
		border-color: #ffcc48;
	}

	a:focus {
		outline: 2px solid #ffcc48;
		border-radius: 2px;
		outline-offset: 3px;
	}

	.sep {
		color: #3a3a40;
		font-size: 1rem;
		user-select: none;
	}

	@media (max-width: 600px) {
		h1 {
			font-size: 1.5rem;
		}
	}
</style>
