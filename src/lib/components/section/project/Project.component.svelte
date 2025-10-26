<script>
	import Slider from '$lib/components/ui/slider/Slider.component.svelte';
	import Card from '$lib/components/ui/card/Card.component.svelte';
	import Spark from '$lib/components/ui/icon/Spark.component.svelte';

	let { projects, assignments } = $props();
	let currentSlide = $state(0);
	let sliderName = ['Projects', 'Assignments'];
</script>

<section class="px-[20px] py-[40px] md:px-[100px] md:py-[75px] flex flex-col gap-10">
	<div class="flex items-center justify-center gap-3">
		<h2 class="text-l md:text-3xl text-center">Some stuff I'm working on</h2>
		<Spark />
	</div>

	<div class="flex flex-col items-center gap-5">
		<Slider {sliderName} bind:value={currentSlide} />

		<div class="grid md:grid-cols-3 gap-3">
			{#if currentSlide === 0}
				{#each projects as project}
					<Card {...project} />
				{/each}
			{:else}
				{#each assignments as assignment}
					<Card {...assignment} />
				{/each}
			{/if}
		</div>
	</div>
</section>
