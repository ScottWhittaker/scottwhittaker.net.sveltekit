import { getRecentPosts } from '$lib/utils.js';

export async function get({ params }) {
	const recentPosts = await getRecentPosts(6);
	return {
		body: { recentPosts }
	};
}
