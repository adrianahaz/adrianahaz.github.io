<script>
	import Slider from '$lib/components/ui/slider/Slider.component.svelte';
	import Card from '$lib/components/ui/card/Card.component.svelte';
	import Spark from '$lib/components/ui/icon/Spark.component.svelte';

	let { projects, assignments } = $props();
	let currentSlide = $state(0);
	let sliderName = ['Assignments', 'Projects'];
</script>

<section class="px-[20px] md:px-[100px] md:py-[50px] flex flex-col gap-10">
	<div class="flex items-center justify-center gap-3">
		<h2 class="text-l md:text-3xl text-center">Some stuff I'm working on</h2>
		<Spark />
	</div>

	<div class="flex flex-col items-center gap-5">
		<Slider {sliderName} bind:value={currentSlide} />

		<div class="grid md:grid-cols-3 gap-3">
			{#if currentSlide === 0}
				{#each assignments as assignment}
					<Card {...assignment} />
				{/each}
			{:else}
				{#each projects as project}
					<Card {...project} />
				{/each}
			{/if}
		</div>
	</div>

	<!-- <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
		{#each projects as project (project.title)}
			<div
				class="border border-gray-300 dark:border-gray-700 rounded-lg p-5 hover:shadow-lg transition-shadow duration-300"
			>
				<h3 class="text-md md:text-xl font-semibold mb-2">{project.title}</h3>
				<p class="text-sm md:text-base mb-4">{project.description}</p>
				{#if project.link}
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						class="text-blue-500 hover:underline">View Project</a
					>
				{/if}
			</div>
		{/each}
	</div> -->
</section>
