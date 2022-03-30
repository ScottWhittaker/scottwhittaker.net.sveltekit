<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav>
	<a href="/" class:selected={$page.url.pathname === '/'}>Home</a>
	<a href="/posts" class:selected={$page.url.pathname.startsWith('/posts')}>Posts</a>
</nav>

<style>
	nav {
		display: flex;
		gap: 16px;
		font-size: 1.125rem;
	}
	a {
		color: var(--white);
		text-decoration: none;
		border-bottom: 1px solid transparent;
	}
	a:hover {
		text-decoration: none;
	}
	a:hover,
	.selected {
		border-bottom-color: var(--white);
	}
</style>
