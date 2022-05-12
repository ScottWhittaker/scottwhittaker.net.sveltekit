<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error, status }) {
		return {
			props: {
				message: error.message,
				status
			}
		};
	}
</script>

<script>
	export let message;
	export let status;
</script>

<h2>{status}</h2>
<p>{message}</p>
