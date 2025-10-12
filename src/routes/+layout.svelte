<script>
	import { page } from '$app/state';

	import Navbar from '$lib/components/common/nav-bar/Navbar.component.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';

	let { children } = $props();

	console.log(page);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if !page.error}
	<Navbar />
{/if}

{@render children?.()}
