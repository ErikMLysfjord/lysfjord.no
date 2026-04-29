/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
	app(input) {
		return {
			name: 'lysfjord',
			removal: input?.stage === 'production' ? 'retain' : 'remove',
			protect: ['production'].includes(input?.stage),
			home: 'aws'
		};
	},
	async run() {
		const sanityProjectId = new sst.Secret('SANITY_PROJECT_ID');
		const certARN = new sst.Secret('CERT_ARN');

		new sst.aws.SvelteKit('lysfjord', {
			domain: {
				name: 'lysfjord.no',
				dns: false,
				cert: certARN.value
			},
			environment: {
				SANITY_PROJECT_ID: sanityProjectId.value,
				SANITY_DATASET: 'production'
			}
		});
	}
});
