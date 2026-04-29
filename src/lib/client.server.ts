import { createClient } from '@sanity/client';
import { SANITY_PROJECT_ID, SANITY_DATASET } from '$env/static/private';

export const client = createClient({
	projectId: SANITY_PROJECT_ID,
	dataset: SANITY_DATASET,
	apiVersion: '2024-01-01',
	useCdn: false
});
