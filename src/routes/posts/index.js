import { getSortedPosts } from '$lib/utils.js';

export async function get({ params }) {
	const sortedPosts = await getSortedPosts();
	return {
		body: { sortedPosts }
	};
}
