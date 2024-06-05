<script>
	import { page } from '$app/stores';
</script>

<nav class="navbar">
	<div class:active={$page.url.pathname == '/'}>
		<a class:active-link={$page.url.pathname == '/'} href="/">🏡 Home</a>
	</div>
	<div class="links-right">
		<div class:active={$page.url.pathname == '/books'}>
			<a class:active-link={$page.url.pathname == '/books'} href="/books">📕 Books</a>
		</div>
		<!-- <a href="/contact">Contact</a> -->
		<div class:active={$page.url.pathname == '/resume'}>
			<a href="/resume">✏️ Resume</a>
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
	}

	.navbar div {
		padding: 0.25rem 0.5rem;
		border-radius: 2.5px;
	}

	.active {
		background: rgb(255, 204, 72, 0.3);
	}

	.active-link {
		color: white;
	}

	.links-right {
		display: flex;
		gap: 1.5rem;
	}

	a:focus {
		outline: 2px solid #ffcc48;
		border-radius: 2px;
	}
</style>
