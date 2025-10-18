<script>
	import Button from '$lib/components/ui/button/Button.component.svelte';
	import { limitTagline } from '$lib/helpers/limitTagline.js';

	let { name, img, description, taglines, repository, demo } = $props();
	let newTaglines = limitTagline(taglines, 2);
</script>

<div class="bg-[var(--background-secondary)] p-5 rounded-l flex flex-col gap-3">
	<img src={img} alt={name} class="rounded-l" />

	<div class="flex flex-col gap-4">
		<h3>{name}</h3>

		<div class="grid grid-cols-3 gap-1">
			{#each newTaglines as tagline}
				<span
					class="text-center text-xs rounded-full bg-[var(--background)] px-3 py-1 flex justify-center items-center"
					>{tagline}</span
				>
			{/each}
		</div>

		<p class="text-sm">{description}</p>

		<div class="flex justify-center gap-5">
			<Button type="secondary" label="Repository" class="md:w-[40%]" href={repository} />
			<Button type="primary" label="Demo" class="md:w-[40%]" href={demo} />
		</div>
	</div>
</div>
