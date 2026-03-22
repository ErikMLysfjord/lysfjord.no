<script>
	import { slide } from 'svelte/transition';
	import StarRating from './StarRating.svelte';

	export let title;
	export let author;
	export let rating = 0;
	export let notes = '';
	export let current = false;

	let expanded = false;
</script>

<div class="book-entry" class:current>
	<button
		class="entry-header"
		on:click={() => {
			if (notes) expanded = !expanded;
		}}
		aria-expanded={notes ? expanded : undefined}
	>
		<span class="title-author">
			<span class="title">{title}</span>
			<span class="author">{author}</span>
		</span>
		{#if !current}
			<StarRating {rating} />
		{/if}
		<span class="chevron" class:open={expanded} class:hidden={!notes}>›</span>
	</button>

	{#if expanded && notes}
		<div class="notes" transition:slide={{ duration: 200 }}>
			<p>{notes}</p>
		</div>
	{/if}
</div>

<style>
	.book-entry {
		border-bottom: 1px solid #2e2f30;
	}

	.book-entry:has(:focus-visible) {
		outline: 2px solid #ffcc48;
		border-radius: 2px;
		outline-offset: 2px;
	}

	.book-entry:last-child {
		border-bottom: none;
	}

	.entry-header {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		width: 100%;
		background: none;
		border: none;
		color: #a9a9b3;
		padding: 0.6rem 0;
		cursor: default;
		text-align: left;
		outline: none;
	}

	.entry-header[aria-expanded] {
		cursor: pointer;
	}

	.entry-header[aria-expanded]:hover .title {
		color: #c8c8d0;
	}

	.title-author {
		display: flex;
		flex-direction: column;
		flex: 1;
		gap: 0.1rem;
	}

	.title {
		font-size: 0.95rem;
		color: #c8c8d0;
		transition: color 0.15s;
	}

	.author {
		font-size: 0.8rem;
		color: #6b6b75;
	}

	.current .title {
		color: #ffcc48;
	}

	.chevron {
		font-size: 1.2rem;
		color: #555;
		transition: transform 0.2s;
		line-height: 1;
	}

	.chevron.open {
		transform: rotate(90deg);
	}

	.chevron.hidden {
		visibility: hidden;
	}

	.notes {
		padding: 0.4rem 0 0.75rem 0.5rem;
		font-size: 0.85rem;
		color: #888;
		line-height: 1.6;
		border-left: 2px solid #2e2f30;
	}

	.notes p {
		margin: 0;
	}
</style>
