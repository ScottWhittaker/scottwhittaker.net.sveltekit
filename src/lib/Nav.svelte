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
		text-decoration: none;
		border-bottom: 4px solid transparent;
	}
	a:hover {
		text-decoration: none;
		color: inherit;
		border-bottom-color: var(--grey-600);
	}
	.selected {
		border-bottom-color: var(--sky-600);
	}
</style>
