<script>
	import { getAllExperience } from '$lib/data/experience.js';

	import Hero from '$lib/components/section/hero/Hero.component.svelte';
	import Badge from '$lib/components/ui/badge/Badge.component.svelte';
	import Timeline from '$lib/components/ui/timeline/Timeline.component.svelte';
	import Spark from '$lib/components/ui/icon/Spark.component.svelte';

	let experiences = getAllExperience();
</script>

<svelte:head>
	<title>Adrianahaz Portfolio</title>
	<meta name="description" content="Adrian's personal portfolio website." />
	<meta name="author" content="Adrian Ahmad Al Zidan" />
</svelte:head>

<main>
	<Hero />
	<Badge />
</main>

<section class="p-[20px] md:p-[100px] flex flex-col gap-[25px] md:gap-[50px]">
	<div class="flex items-center gap-3">
		<h2 class="text-l md:text-3xl">My journey until now</h2>
		<Spark />
	</div>

	<Timeline {experiences} />
</section>
