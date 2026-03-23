import { client } from '$lib/client.server';

const RESUME_QUERY = `*[_type == "resumeEntry"] | order(publishedAt desc) {
	companyOrSchoolName,
	typeOfEntry,
	jobOrEducationTitle,
	location,
	duration,
	body,
	skills
}`;

export const load = async () => {
	const entries = await client.fetch(RESUME_QUERY);
	return { entries };
};
