<script lang="ts">
	export let company: string;
	export let role: string;
	export let period: string;
	export let location: string = '';
	export let bullets: string[] = [];
	export let tags: string[] = [];
</script>

<div class="entry">
	<div class="header">
		<div class="left">
			<span class="company">{company}</span>
			<span class="role">{role}</span>
		</div>
		<div class="right">
			<span class="period">{period}</span>
			{#if location}
				<span class="location">{location}</span>
			{/if}
		</div>
	</div>

	{#if bullets.length > 0}
		<ul class="bullets">
			{#each bullets as bullet}
				<li>{bullet}</li>
			{/each}
		</ul>
	{/if}

	{#if tags.length > 0}
		<div class="tags">
			{#each tags as tag}
				<span class="tag">{tag}</span>
			{/each}
		</div>
	{/if}
</div>

<style>
	.entry {
		padding: 1.1rem 0;
		border-bottom: 1px solid var(--border);
	}

	.entry:last-child {
		border-bottom: none;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1rem;
	}

	.left {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
	}

	.right {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 0.2rem;
		flex-shrink: 0;
	}

	.company {
		font-size: 0.95rem;
		color: var(--heading);
	}

	.role {
		font-size: 0.82rem;
		color: var(--muted);
	}

	.period {
		font-size: 0.82rem;
		color: var(--muted);
		white-space: nowrap;
	}

	.location {
		font-size: 0.78rem;
		color: var(--faint);
		white-space: nowrap;
	}

	.bullets {
		list-style-type: none;
		margin: 0.6rem 0 0;
		padding-left: 0rem;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.bullets li {
		font-size: 0.85rem;
		color: var(--faint);
		line-height: 1.5;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem;
		margin-top: 0.65rem;
	}

	.tag {
		font-size: 0.72rem;
		color: var(--muted);
		border: 1px solid var(--border);
		border-radius: 3px;
		padding: 0.15rem 0.45rem;
	}

	@media (max-width: 600px) {
		.header {
			flex-direction: column;
			gap: 0.2rem;
		}

		.right {
			align-items: flex-start;
		}
	}
</style>
