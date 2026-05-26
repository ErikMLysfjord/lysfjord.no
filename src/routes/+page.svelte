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
	<meta property="og:image" content="https://lysfjord.no/preview.png" />
	<meta name="twitter:image" content="https://lysfjord.no/preview.png" />
	<meta name="twitter:title" content="Erik Menkin Lysfjord" />
	<meta
		name="twitter:description"
		content="Personal website of Erik Menkin Lysfjord, a software developer based in Norway."
	/>
</svelte:head>

<div class="outer-container">
	<div class="text">
		<h1>Erik Menkin Lysfjord</h1>
		<p class="tagline">Software developer based in Norway</p>
		<div class="link-container">
			<a href="https://github.com/ErikMLysfjord">Github</a>
			<span class="sep">·</span>
			<a href="https://www.linkedin.com/in/erik-menkin-lysfjord/">LinkedIn</a>
			<span class="sep">·</span>
			<a href="mailto:erik.menkin@lysfjord.no">Email</a>
		</div>
	</div>

	<div class="avatar-wrapper">
		<div class="blob">
			<img
				src="/headshot.webp"
				alt="Erik Menkin Lysfjord"
				class="avatar"
				fetchpriority="high"
			/>
		</div>
	</div>
</div>

<style>
	.outer-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 5rem;
		height: calc(100vh - 5.5rem);
		padding: 0 2rem;
	}

	.text {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	h1 {
		font-family: 'Lora Variable', serif;
		font-size: 2.4rem;
		margin: 0;
		color: var(--heading);
		font-weight: 600;
		letter-spacing: -0.02em;
	}

	.tagline {
		margin: 0;
		font-size: 0.95rem;
		color: var(--muted);
	}

	.link-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.5rem;
		margin-top: 0.5rem;
	}

	/* ── photo area ── */

	.avatar-wrapper {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 360px;
		height: 390px;
		flex-shrink: 0;
	}

	.blob {
		position: relative;
		width: 330px;
		height: 330px;
		flex-shrink: 0;
		background: var(--blob);
		border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
		animation: morph 18s ease-in-out infinite;
		overflow: hidden;
	}

	.avatar {
		position: absolute;
		width: 390px;
		height: 430px;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		object-fit: contain;
		object-position: center center;
	}

	@keyframes morph {
		0%,
		100% {
			border-radius: 58% 42% 35% 65% / 58% 35% 65% 42%;
		}
		33% {
			border-radius: 35% 65% 62% 38% / 48% 62% 35% 58%;
		}
		66% {
			border-radius: 50% 50% 42% 58% / 38% 52% 58% 48%;
		}
	}

	/* ── links ── */

	a {
		color: var(--text);
		padding: 0.2rem 0.1rem;
		text-decoration: none;
		border-bottom: 1px solid var(--border);
		transition:
			color 0.15s,
			border-color 0.15s;
	}

	a:hover {
		color: var(--accent);
		border-color: var(--accent);
	}

	a:focus {
		outline: 2px solid var(--accent);
		border-radius: 2px;
		outline-offset: 3px;
	}

	.sep {
		color: var(--border);
		font-size: 1rem;
		user-select: none;
	}

	/* ── mobile ── */

	@media (max-width: 640px) {
		.outer-container {
			flex-direction: column-reverse;
			align-items: center;
			gap: 1.5rem;
			justify-content: center;
			text-align: center;
			height: auto;
			min-height: calc(100vh - 5.5rem);
			padding: 2.5rem 1.5rem;
		}

		.link-container {
			justify-content: center;
		}

		.avatar-wrapper {
			width: 260px;
			height: 280px;
		}

		.blob {
			width: 250px;
			height: 250px;
		}

		.avatar {
			width: 300px;
			height: 330px;
		}

		h1 {
			font-size: 1.8rem;
		}
	}
</style>
