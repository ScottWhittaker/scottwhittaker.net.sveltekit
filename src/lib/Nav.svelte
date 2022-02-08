<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav>
    <a href="/" class:selected={$page.url.pathname === '/'}>Home</a>
    <a href="/posts" class:selected={$page.url.pathname.startsWith('/posts')}>Posts</a>
    <a href="/about" class:selected={$page.url.pathname === '/about'}>About</a>
</nav>

<style>
    nav {
        display: flex;
        gap: 8px;
        padding-bottom: 1rem;
        border-bottom: 1px solid #eee;
        font-size: 1.125rem;
        line-height: 1.5;
    }
    a {
        text-decoration: none;
        padding: .5rem;
        border-radius: 4px;
    }
    a:hover {
        text-decoration: underline;
    }
    .selected {
        background-color: var(--grey-light);
    }
</style>
