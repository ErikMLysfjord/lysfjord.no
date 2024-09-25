<script>
	import { page } from '$app/stores';
</script>

<nav class="navbar">
	<div class:active={$page.url.pathname == '/'}>
		<a class:active-link={$page.url.pathname == '/'} href="/"
			><span class="removable-text">{'Home'}</span></a
		>
	</div>
	<div class="links-right">
		<div class:active={$page.url.pathname == '/books'}>
			<a class:active-link={$page.url.pathname == '/books'} href="/books"
				><span class="removable-text">{'Books'}</span></a
			>
		</div>
		<!-- <a href="/contact">Contact</a> -->
		<div class:active={$page.url.pathname == '/resume'}>
			<a class:active-link={$page.url.pathname == '/resume'} href="/resume"
				><span class="removable-text">{'Resume'}</span></a
			>
		</div>
	</div>
</nav>

<style>
	a {
		color: #a9a9b3;
		text-decoration: none;
	}

	.navbar {
		display: flex;
		margin: 0 7.5%;
		justify-content: space-between;
		align-items: center;
		padding: 1.5rem 2rem;
		opacity: 0.8;
		color: #a9a9b3;
		position: sticky;
		font-size: 18px;
	}

	.navbar div {
		padding: 0.25rem 0.5rem;
	}

	.active {
		border-bottom: 2px solid #ffcc48;
		padding-bottom: 3px;
	}

	.active-link {
		color: white;
		opacity: 0.8;
	}

	.links-right {
		display: flex;
		gap: 1.5rem;
	}

	a:focus {
		outline: 2px solid #ffcc48;
		border-radius: 1px;
		outline-offset: 6px;
	}

	@media (max-width: 600px) {
		.removable-text {
			display: none;
		}
	}
</style>
