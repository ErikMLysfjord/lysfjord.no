<svelte:head>
	<title>Books</title>
	<meta name="description" content="List of books I have recently read." />
</svelte:head>

<section class="book-section">
	<div class="content">
		<h1>What am I currently reading?</h1>
		<ul class="book-list">
			<li>📸 The Picture of Dorian Gray - Oscar Wilde</li>
		</ul>
		<h2>2024</h2>
		<ul class="book-list">
			<li>👶Child of God - Cormac McCarthy</li>
			<li>🐈‍⬛ Kafka on the shore - Haruki Murakami</li>
			<li>⚡️ Young Zaphod Plays it Safe - Douglas Adams</li>
			<li>🥱 Mostly Harmless - Douglas Adams</li>
			<li>🐬 So Long and Thanks for All the Fish - Douglas Adams</li>
			<li>🏏 Life, the Universe, and Everything - Douglas Adams</li>
			<li>👨‍🍳 The Restaurant at the End of the World - Douglas Adams</li>
			<li>🛸 A Hitchhikers Guide to the Galaxy - Douglas Adams</li>
			<li>🐖 Slaughterhouse 5 - Kurt Vonnegut</li>
			<li>🌳 Norwegian Wood - Haruki Murakami</li>
			<li>🐦 To Kill a Mockingbird - Harper Lee</li>
			<li>👨‍🚒 Fahrenheit 451 - Ray Bradbury</li>
			<li>🧊 Cats Cradle - Kurt Vonnegut</li>
			<li>
				⌛️ Stolen Focus: Why You Can't Pay Attention, and How to Think Deeply Again - Johann Hari
			</li>
			<li>🤖 Maskiner som tenker - Inga Strümke</li>
		</ul>
		<h2>2023</h2>
		<ul class="book-list">
			<li>🏢 Cities in Flight (#1 - #4) - James Blish</li>
			<li>🪰 Lord of the Flies - William Golding</li>
		</ul>
		<h2>Earlier</h2>
		<ul class="book-list">
			<li>👴🏼 På Gjengrodde Stier - Knut Hamsun</li>
			<li>👨‍🌾 Markens Grøde - Knut Hamsun</li>
			<li>🍞 Sult - Knut Hamsun</li>
		</ul>
	</div>
</section>

<style>
	.book-section {
		width: 60%;
		margin: 0 auto;
	}

	.content {
		padding-top: 4rem;
		padding-bottom: 2rem;
	}

	.book-list {
		margin: 1rem 0 1rem 1rem;
		list-style-type: disc;
	}
	.book-list li {
		margin: 0.5rem 0;
	}

	@media (max-width: 600px) {
		.book-section {
			width: 90%;
		}

		.content {
			padding-top: 1rem;
		}

		.book-list {
			margin: 0rem;
		}
	}
</style>
