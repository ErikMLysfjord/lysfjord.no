<script lang="ts">
	import ResumeEntry from './ResumeEntry.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	export let params: Record<string, string> = {};

	type Entry = {
		companyOrSchoolName: string;
		typeOfEntry: string;
		jobOrEducationTitle: string;
		location: string;
		duration: string;
		body: string[];
		skills: string[];
	};

	$: work = data.entries.filter((e: Entry) => e.typeOfEntry === 'work').map(toEntry);
	$: education = data.entries.filter((e: Entry) => e.typeOfEntry === 'education').map(toEntry);
	$: volunteering = data.entries
		.filter((e: Entry) => e.typeOfEntry === 'volunteering')
		.map(toEntry);

	function toEntry(e: Entry) {
		return {
			company: e.companyOrSchoolName,
			role: e.jobOrEducationTitle,
			period: e.duration,
			location: e.location,
			bullets: e.body ?? [],
			tags: e.skills ?? []
		};
	}
</script>

<svelte:head>
	<title>Resume – Erik Menkin Lysfjord</title>
	<meta
		name="description"
		content="Resume of Erik Menkin Lysfjord, software developer based in Norway."
	/>
	<link rel="canonical" href="https://lysfjord.no/resume" />
</svelte:head>

<div class="page">
	<section class="resume-section">
		<h1>Resume</h1>

		{#if work.length > 0}
			<div class="group">
				<h2 class="group-label">Experience</h2>
				<div class="list">
					{#each work as entry}
						<ResumeEntry {...entry} />
					{/each}
				</div>
			</div>
		{/if}

		{#if education.length > 0}
			<div class="group">
				<h2 class="group-label">Education</h2>
				<div class="list">
					{#each education as entry}
						<ResumeEntry {...entry} />
					{/each}
				</div>
			</div>
		{/if}

		{#if volunteering.length > 0}
			<div class="group">
				<h2 class="group-label">Volunteering</h2>
				<div class="list">
					{#each volunteering as entry}
						<ResumeEntry {...entry} />
					{/each}
				</div>
			</div>
		{/if}

		<div class="group">
			<h2 class="group-label">Additional</h2>
			<div class="additional">
				<div class="additional-row">
					<span class="additional-label">Languages</span>
					<span>Norwegian (native) · English (C2) · German (B1)</span>
				</div>
				<div class="additional-row">
					<span class="additional-label">Interests</span>
					<span>Tennis, padel, running, fishing</span>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	.page {
		display: flex;
		justify-content: center;
	}

	.resume-section {
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
		margin: 0 0 0.25rem;
		font-weight: 500;
	}

	.list {
		border-top: 1px solid #2e2f30;
	}

	.additional {
		border-top: 1px solid #2e2f30;
		padding-top: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.additional-row {
		display: flex;
		gap: 1.5rem;
		font-size: 0.85rem;
		color: #888;
	}

	.additional-label {
		color: #555;
		min-width: 80px;
	}
</style>
