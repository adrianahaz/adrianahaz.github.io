<script>
	import { page } from '$app/state';

	import Navbar from '$lib/components/common/nav-bar/Navbar.component.svelte';
	import favicon from '$lib/assets/favicon.ico';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if !page.error}
	<Navbar />
{/if}

{@render children?.()}
