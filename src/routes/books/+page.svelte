<script lang="ts">
	import BookEntry from './BookEntry.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	export let params: Record<string, string> = {};

	type Book = {
		title: string;
		author: string;
		rating: number;
		notes: string;
		publishedAt: string;
		readAt: string;
	};

	$: grouped = groupByYear(data.books);

	function groupByYear(books: Book[]) {
		const map = new Map<string, Book[]>();
		for (const book of books) {
			const year = book.readAt ? new Date(book.readAt).getFullYear().toString() : 'current';
			if (!map.has(year)) map.set(year, []);
			map.get(year)!.push(book);
		}
		for (const group of map.values()) {
			group.sort((a, b) => new Date(b.readAt ?? b.publishedAt).getTime() - new Date(a.readAt ?? a.publishedAt).getTime());
		}
		return [...map.entries()].sort((a, b) => {
			if (a[0] === 'current') return -1;
			if (b[0] === 'current') return 1;
			return Number(b[0]) - Number(a[0]);
		});
	}
</script>

<svelte:head>
	<title>Books – Erik Menkin Lysfjord</title>
	<meta name="description" content="Books Erik Menkin Lysfjord has read, with ratings and notes." />
	<link rel="canonical" href="https://lysfjord.no/books" />
</svelte:head>

<div class="page">
	<section class="book-section">
		<h1>Reading list</h1>

		{#each grouped as [year, books]}
			<div class="group">
				<h2 class="group-label">{year === 'current' ? 'currently reading' : year}</h2>
				<div class="list">
					{#each books as book}
						<BookEntry
							title={book.title}
							author={book.author}
							rating={book.rating}
							notes={book.notes}
							current={year === 'current'}
						/>
					{/each}
				</div>
			</div>
		{/each}
	</section>
</div>

<style>
	.page {
		display: flex;
		justify-content: center;
	}

	.book-section {
		width: min(660px, 90%);
		padding: 3rem 0 4rem;
	}

	h1 {
		font-family: 'Lora Variable', serif;
		font-size: 1.6rem;
		color: #e0e0e8;
		margin: 0 0 2.5rem;
		font-weight: 600;
		letter-spacing: -0.02em;
	}

	.group {
		margin-bottom: 2.5rem;
	}

	.group-label {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: #555;
		margin: 0 0 0.75rem;
		font-weight: 500;
	}

	.list {
		border-top: 1px solid #2e2f30;
	}
</style>
