<script>
	import ResumeEntry from './ResumeEntry.svelte';

	const experience = [
		{
			company: 'Computas AS',
			role: 'IT Developer — Fullstack (part-time)',
			period: 'Jun 2025 – Aug 2025',
			location: 'Oslo, Norway',
			bullets: [
				'The Norwegian Directorate of Immigration (UDI) wanted to improve and streamline searches in its internal regulations. \
				We developed a solution with vectorization and semantic search that makes it possible to find information faster, \
				even when there are typos, missing codes, or using words other than what is written in the documents.',
				'We also developed a new user interface after interviews with users that addressed the shortcomings of the already existing solution.'
			],
			tags: ['Azure', '.NET', 'React']
		},
		{
			company: 'Propely AS',
			role: 'IT Developer — Fullstack (part-time)',
			period: 'Sep 2024 – June 2025',
			location: 'Remote',
			bullets: [
				'After the internship, I kept working part time for the client to help finalize the product for release. \
				We were a team of two developers, and we had responsibility for the project. We had regular contact with the CEO to \
				update on our progress and to discuss decisions that had to be made.'
			],
			tags: ['React', 'TypeScript', 'Firebase', 'Figma']
		},
		{
			company: 'Capra Consulting AS',
			role: 'Summer Intern — Fullstack Developer',
			period: 'Jun 2024 – Aug 2024',
			location: 'Oslo, Norway',
			bullets: [
				'Propely AS, a proptech scale-up, wanted to create a new feature for their customers. We rotated roles throughout the internship \
				ensuring that everyone had direct contact with the product owner.',
				'The product is a tool for paying customers to get insight into crucial environmental data of the buildings in their portfolio, \
				which helps them ensure their buildings are sustainable.'
			],
			tags: ['React', 'TypeScript', 'Firebase', 'Jira', 'Storybook', 'Postman', 'Figma']
		},
		{
			company: 'Sikt – Kunnskapssektorens tjenesteleverandør',
			role: 'IT Consultant — Fullstack Developer',
			period: 'Aug 2023 – May 2024',
			location: 'Trondheim, Norway',
			bullets: [
				"I was a part of the team that developed the portal for Norway's Cybersecurity Centre for Research and Education (eduCSC), \
				a platform aggregating threat intelligence for its customers."
			],
			tags: ['React', 'Django', 'TypeScript', 'Docker', 'Postman', 'Figma']
		},
		{
			company: 'Sikt – Kunnskapssektorens tjenesteleverandør',
			role: 'Summer Intern — Frontend Developer',
			period: 'Jun 2023 – Aug 2023',
			location: 'Trondheim, Norway',
			bullets: [
				'Worked as the sole student on an established team, building a new solution for Samordna Opptak (the Norwegian Universities Admissions Service). \
				During the internship I also contributed to developing a new internal design system.'
			],
			tags: ['Next.js', 'TypeScript', 'Jira', 'Postman', 'Storybook', 'Figma']
		}
	];

	const education = [
		{
			company: 'Instituto Superior Técnico',
			role: 'Computer Science and Engineering — Exchange year',
			period: 'Sep 2024 – Jun 2025',
			location: 'Lisbon, Portugal',
			bullets: [],
			tags: []
		},
		{
			company: 'Norwegian University of Science and Technology (NTNU)',
			role: 'MSc Computer Science — Artificial Intelligence',
			period: 'Aug 2024 – Jun 2026',
			location: 'Trondheim, Norway',
			bullets: [],
			tags: []
		},
		{
			company: 'Norwegian University of Science and Technology (NTNU)',
			role: 'BSc Computer Science',
			period: 'Aug 2021 – Jun 2024',
			location: 'Trondheim, Norway',
			bullets: ['Thesis grade: A'],
			tags: []
		},
		{
			company: 'Corinda State High School',
			role: 'Upper Secondary — Exchange year',
			period: 'Jul 2019 – Jun 2020',
			location: 'Brisbane, Australia',
			bullets: [],
			tags: []
		},
		{
			company: 'Kirkeparken videregående skole',
			role: 'Upper Secondary',
			period: 'Aug 2018 – Jun 2021',
			location: 'Moss, Norway',
			bullets: ['GPA: 5.9'],
			tags: []
		}
	];

	const volunteering = [
		{
			company: 'Studentmediene i Trondheim',
			role: 'IT Developer',
			period: 'Feb 2022 – Present',
			location: 'Trondheim, Norway',
			bullets: [
				'Contributed to the development and ongoing operation of services including iBok and EMNR.',
				'Helped onboard and train new members in our technologies and projects.'
			],
			tags: []
		},
		{
			company: 'Online Idrettslag',
			role: 'Leader',
			period: 'Mar 2023 – Mar 2024',
			location: 'Trondheim, Norway',
			bullets: [
				'Planned, facilitated, and ran weekly meetings. Managed communication with the main board of the student association and conducted recruitment of new members.'
			],
			tags: []
		},
		{
			company: 'Online Idrettslag',
			role: 'Committee Member',
			period: 'Aug 2022 – Present',
			location: 'Trondheim, Norway',
			bullets: [
				'Organises activities for all students in the Online student association, with a focus on inclusion and participation.'
			],
			tags: []
		}
	];
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

		<div class="group">
			<h2 class="group-label">Experience</h2>
			<div class="list">
				{#each experience as entry}
					<ResumeEntry {...entry} />
				{/each}
			</div>
		</div>

		<div class="group">
			<h2 class="group-label">Education</h2>
			<div class="list">
				{#each education as entry}
					<ResumeEntry {...entry} />
				{/each}
			</div>
		</div>

		<div class="group">
			<h2 class="group-label">Volunteering</h2>
			<div class="list">
				{#each volunteering as entry}
					<ResumeEntry {...entry} />
				{/each}
			</div>
		</div>

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
