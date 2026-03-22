<script>
	import BookEntry from './BookEntry.svelte';

	const current = [{ title: 'The Complete Robot', author: 'Isaac Asimov', rating: 0, notes: '' }];

	const books2026 = [
		{ title: 'Children of Dune', author: 'Frank Herbert', rating: 4, notes: '' },
		{
			title: "A Monk's Guide to A Clean House & Mind",
			author: 'Shoukei Matsumoto',
			rating: 2,
			notes: ''
		},
		{
			title: 'The Silent Patient',
			author: 'Alex Michaelides',
			rating: 3,
			notes:
				'The book started out really well. Very interesting plot, and it is written in a very digestible way. \
				However the book becomes quite predictable after a while, and even though it is very action packed it does not have much impact.'
		}
	];
	const books2025 = [
		{ title: 'Children of Time', author: 'Adrian Tchaikovsky', rating: 4, notes: '' },
		{
			title: 'Dune',
			author: 'Frank Herbert',
			rating: 5,
			notes:
				'An amazing book. I read it after watching the movies, but there is so much material in the book that is not \
				expanded upon from the book. The dialogue and the world building is fantastic.'
		},
		{ title: 'The Outsider', author: 'Albert Camus', rating: 4, notes: '' },
		{
			title: 'The Rise of Endymion',
			author: 'Dan Simmons',
			rating: 5,
			notes:
				'Such a good ending to an amazing book series. It answers a lot of the questions from the previous books.\
			'
		},
		{ title: 'Flowers for Algernon', author: 'Daniel Keyes', rating: 5, notes: '' },
		{ title: 'Endymion', author: 'Dan Simmons', rating: 4, notes: '' },
		{ title: 'The Fall of Hyperion', author: 'Dan Simmons', rating: 5, notes: '' },
		{ title: 'The Wind-Up Bird Chronicle', author: 'Haruki Murakami', rating: 3, notes: '' },
		{ title: 'The Road', author: 'Cormac Mccarthy', rating: 5, notes: '' },
		{
			title: 'Never Let Me Go',
			author: 'Kazuo Ishiguro',
			rating: 2,
			notes:
				'I did not really understand the hype behind this book. The backstory is quite bland, and the "reveal" was predictable \
				and did not leave much of an impact.'
		},
		{
			title: 'Hyperion',
			author: 'Dan Simmons',
			rating: 5,
			notes:
				'One of my favorite books so far. The world building is phenomenal, with each of the pilgrims telling a unique story of their background and why they were chosen. \
				There are so many unanswered questions, such as what the Shrike is, that makes the book so interesting.'
		},
		{ title: 'Misery', author: 'Stephen King', rating: 4.5, notes: '' }
	];
	const books2024 = [
		{ title: 'Stoner', author: 'John Williams', rating: 3.5, notes: '' },
		{ title: 'Dark Matter', author: 'Blake Crouch', rating: 3.5, notes: '' },
		{
			title: 'Project Hail Mary',
			author: 'Andy Weir',
			rating: 5,
			notes:
				'Such a fun book. I am very happy I knew nothing of what would happen when I started reading it.\
				I kind of wish the book was a bit more "serious" at times, however it works really well as a silly and fun book.'
		},
		{ title: 'The Plague', author: 'Albert Camus', rating: 3.5, notes: '' },
		{ title: 'Brave New World', author: 'Aldous Huxley', rating: 3.5, notes: '' },
		{ title: '11.22.63', author: 'Stephen King', rating: 4.5, notes: '' },
		{
			title: 'Dumhet, idioti, og dumme idioter',
			author: 'Lars Fr. Svendsen',
			rating: 3.5,
			notes: ''
		},
		{ title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', rating: 3.5, notes: '' },
		{
			title: 'Cabin Porn: Inspiration for Your Quiet Place Somewhere',
			author: 'Zach Klein',
			rating: 3,
			notes: 'Great book to have at the cabin.'
		},
		{ title: 'Child of God', author: 'Cormac McCarthy', rating: 4, notes: '' },
		{
			title: 'Kafka on the Shore',
			author: 'Haruki Murakami',
			rating: 5,
			notes:
				'My favorite Murakami book so far. Loved the magical feeling of the book and the environments where it took place.'
		},
		{ title: 'Young Zaphod Plays it Safe', author: 'Douglas Adams', rating: 3, notes: '' },
		{
			title: 'Mostly Harmless',
			author: 'Douglas Adams',
			rating: 3,
			notes: 'Unfortunately quite a boring end to a good book series.'
		},
		{
			title: 'So Long, and Thanks for All the Fish',
			author: 'Douglas Adams',
			rating: 3.5,
			notes: ''
		},
		{
			title: 'Life, the Universe, and Everything',
			author: 'Douglas Adams',
			rating: 4,
			notes: ''
		},
		{
			title: 'The Restaurant at the End of the Universe',
			author: 'Douglas Adams',
			rating: 4,
			notes: ''
		},
		{
			title: "The Hitchhiker's Guide to the Galaxy",
			author: 'Douglas Adams',
			rating: 5,
			notes:
				'Such a fun book. So many iconic sayings and jokes stem from this book, and it made me audibly laugh several times.'
		},
		{ title: 'Slaughterhouse-Five', author: 'Kurt Vonnegut', rating: 4.5, notes: '' },
		{ title: 'Norwegian Wood', author: 'Haruki Murakami', rating: 5, notes: '' },
		{ title: 'To Kill a Mockingbird', author: 'Harper Lee', rating: 3.5, notes: '' },
		{ title: 'Fahrenheit 451', author: 'Ray Bradbury', rating: 3, notes: '' },
		{ title: "Cat's Cradle", author: 'Kurt Vonnegut', rating: 4.5, notes: '' },
		{
			title: "Stolen Focus: Why You Can't Pay Attention, and How to Think Deeply Again",
			author: 'Johann Hari',
			rating: 4,
			notes: ''
		},
		{ title: 'Maskiner som tenker', author: 'Inga Strümke', rating: 5, notes: '' }
	];

	const books2023 = [
		{ title: 'Cities in Flight (#1–#4)', author: 'James Blish', rating: 3.5, notes: '' },
		{ title: 'Lord of the Flies', author: 'William Golding', rating: 3, notes: '' }
	];

	const booksEarlier = [
		{
			title: 'På Gjengrodde Stier',
			author: 'Knut Hamsun',
			rating: 2.5,
			notes: ''
		},
		{ title: 'Markens Grøde', author: 'Knut Hamsun', rating: 4.5, notes: '' },
		{
			title: 'Sult',
			author: 'Knut Hamsun',
			rating: 5,
			notes:
				"I read this for a Norwegian class in high school. I think the narrator's internal thought process is \
				incredibly well portrayed, I was completely absorbed in the story and the scenes that unfolded. Every time \
				I picked up the book I worried about what kind of self-destructive actions the person would do, and the way \
				the book is written made it difficult to put it down. I simply recommend reading the book, impressive for being written in 1890!"
		}
	];
</script>

<svelte:head>
	<title>Books – Erik Menkin Lysfjord</title>
	<meta name="description" content="Books Erik Menkin Lysfjord has read, with ratings and notes." />
	<link rel="canonical" href="https://lysfjord.no/books" />
</svelte:head>

<div class="page">
	<section class="book-section">
		<h1>Reading list</h1>

		<div class="group">
			<h2 class="group-label">Currently reading</h2>
			<div class="list">
				{#each current as book}
					<BookEntry {...book} current={true} />
				{/each}
			</div>
		</div>

		<div class="group">
			<h2 class="group-label">2026</h2>
			<div class="list">
				{#each books2026 as book}
					<BookEntry {...book} />
				{/each}
			</div>
		</div>
		<div class="group">
			<h2 class="group-label">2025</h2>
			<div class="list">
				{#each books2025 as book}
					<BookEntry {...book} />
				{/each}
			</div>
		</div>
		<div class="group">
			<h2 class="group-label">2024</h2>
			<div class="list">
				{#each books2024 as book}
					<BookEntry {...book} />
				{/each}
			</div>
		</div>

		<div class="group">
			<h2 class="group-label">2023</h2>
			<div class="list">
				{#each books2023 as book}
					<BookEntry {...book} />
				{/each}
			</div>
		</div>

		<div class="group">
			<h2 class="group-label">Earlier</h2>
			<div class="list">
				{#each booksEarlier as book}
					<BookEntry {...book} />
				{/each}
			</div>
		</div>
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
