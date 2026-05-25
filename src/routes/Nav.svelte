<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav class="navbar">
	<a class="wordmark" href="/">Erik Menkin Lysfjord</a>

	<div class="links">
		<a class="nav-link" class:active={$page.url.pathname === '/books'} href="/books">Books</a>
		<a class="nav-link" class:active={$page.url.pathname === '/resume'} href="/resume">Resume</a>
	</div>
</nav>

<style>
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.25rem 7.5%;
		border-bottom: 1px solid var(--border);
	}

	.wordmark {
		color: var(--nav-wordmark);
		text-decoration: none;
		transition: color 0.15s;
		font-family: 'Lora Variable', serif;
		font-style: italic;
		font-size: 1rem;
	}

	.wordmark:hover {
		color: var(--heading);
	}

	.links {
		display: flex;
		gap: 1.75rem;
	}

	.nav-link {
		font-size: 0.85rem;
		color: var(--muted);
		text-decoration: none;
		letter-spacing: 0.01em;
		transition: color 0.15s;
	}

	.nav-link:hover {
		color: var(--text);
	}

	.nav-link.active {
		color: var(--accent);
		border-bottom: 1.5px solid var(--accent);
		padding-bottom: 1px;
	}

	.wordmark:focus,
	.nav-link:focus {
		outline: 2px solid var(--accent);
		border-radius: 1px;
		outline-offset: 4px;
	}

	@media (max-width: 600px) {
		.navbar {
			padding: 1.1rem 5%;
		}
	}
</style>
