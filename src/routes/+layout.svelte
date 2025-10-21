<script>
	import { page } from '$app/state';

	import Navbar from '$lib/components/common/nav-bar/Navbar.component.svelte';
	import favicon from '$lib/assets/favicon.ico';
	import '../app.css';

	let { children } = $props();

	let hideNavbar = page.url.pathname.startsWith('/blog') || page.error;
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if !hideNavbar}
	<Navbar />
{/if}

{@render children?.()}
