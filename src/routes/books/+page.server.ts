import { client } from '$lib/client.server';

const BOOKS_QUERY = `*[_type == "bookEntry"] | order(publishedAt desc) {
	title,
	author,
	rating,
	notes,
	publishedAt,
	readAt
}`;

export const load = async () => {
	const books = await client.fetch(BOOKS_QUERY);
	return { books };
};
