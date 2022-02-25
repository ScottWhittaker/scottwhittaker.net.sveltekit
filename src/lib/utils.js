export async function getSortedPosts() {
	const posts = import.meta.globEager('../routes/posts/*.md');
	const postsList = Object.values(posts);
	const postsMeta = postsList.map((post) => post.metadata);
	return postsMeta.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getRecentPosts(n) {
	const sortedPosts = await getSortedPosts();
	return sortedPosts.slice(0, n);
}
