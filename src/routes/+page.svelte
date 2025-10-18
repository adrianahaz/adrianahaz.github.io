<script>
	import { getAllExperience } from '$lib/data/experience.js';
	import { getAllProjects, getAllAssignments } from '$lib/data/projects.js';

	import Hero from '$lib/components/section/hero/Hero.component.svelte';
	import Experience from '$lib/components/section/experience/Experience.component.svelte';
	import Project from '$lib/components/section/project/Project.component.svelte';
	import Badge from '$lib/components/ui/badge/Badge.component.svelte';

	let experiences = getAllExperience();
	let projects = getAllProjects();
	let assignments = getAllAssignments();
</script>

<svelte:head>
	<title>Adrian's Portfolio</title>
	<meta
		name="description"
		content="Adrian's personal portfolio website. Created with SvelteKit and TailwindCSS."
	/>
	<meta name="author" content="Adrian Ahmad Al Zidan" />
</svelte:head>

<main class="md:pb-[100px]">
	<Hero />
	<Badge />
</main>

<Experience {experiences} />

<Project {projects} {assignments} />
