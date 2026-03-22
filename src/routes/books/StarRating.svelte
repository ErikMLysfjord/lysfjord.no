<script>
	export let rating = 0; // 0–5, supports halves

	const uid = Math.random().toString(36).slice(2);
</script>

<span class="stars" aria-label="{rating} out of 5 stars">
	{#each { length: 5 } as _, i}
		{@const fill = Math.min(Math.max(rating - i, 0), 1)}
		<svg class="star" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<linearGradient id="half-{uid}-{i}">
					<stop offset="{fill * 100}%" stop-color="#ffcc48" />
					<stop offset="{fill * 100}%" stop-color="transparent" />
				</linearGradient>
			</defs>
			<polygon
				points="10,1 12.9,7 19.5,7.6 14.5,12 16.2,18.5 10,15 3.8,18.5 5.5,12 0.5,7.6 7.1,7"
				fill="url(#half-{uid}-{i})"
				stroke="#ffcc48"
				stroke-width="1"
				stroke-linejoin="round"
			/>
		</svg>
	{/each}
</span>

<style>
	.stars {
		display: inline-flex;
		gap: 2px;
		align-items: center;
	}

	.star {
		width: 13px;
		height: 13px;
	}
</style>
