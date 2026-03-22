<script>
	import { page } from '$app/stores';
</script>

<nav class="navbar">
	<div class="nav-item" class:active={$page.url.pathname === '/'}>
		<a class:active-link={$page.url.pathname === '/'} href="/">
			<span class="label">Home</span>
		</a>
	</div>
	<div class="links-right">
		<div class="nav-item" class:active={$page.url.pathname === '/books'}>
			<a class:active-link={$page.url.pathname === '/books'} href="/books">
				<span class="label">Books</span>
			</a>
		</div>
		<div class="nav-item" class:active={$page.url.pathname === '/resume'}>
			<a class:active-link={$page.url.pathname === '/resume'} href="/resume">
				<span class="label">Resume</span>
			</a>
		</div>
	</div>
</nav>

<style>
	a {
		color: #6b6b75;
		text-decoration: none;
		font-size: 0.9rem;
		letter-spacing: 0.01em;
		transition: color 0.15s;
	}

	a:hover {
		color: #a9a9b3;
	}

	.navbar {
		display: flex;
		margin: 0 7.5%;
		justify-content: space-between;
		align-items: center;
		padding: 1.5rem 1rem;
	}

	.nav-item {
		padding: 0.25rem 0.25rem 0.1rem;
		border-bottom: 2px solid transparent;
		transition: border-color 0.15s;
	}

	.active {
		border-bottom-color: #ffcc48;
	}

	.active-link {
		color: #d0d0d8;
	}

	.links-right {
		display: flex;
		gap: 1.75rem;
	}

	a:focus {
		outline: 2px solid #ffcc48;
		border-radius: 1px;
		outline-offset: 4px;
	}

	@media (max-width: 600px) {
		.navbar {
			margin: 0 4%;
			padding: 1.2rem 0.5rem;
		}
	}
</style>
