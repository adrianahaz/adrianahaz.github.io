<script>
	import TimelineItem from './TimelineItem.component.svelte';

	let props = $props();
</script>

<div class="timeline">
	{#each props.experiences as experience}
		<TimelineItem {...experience} />
	{/each}
</div>

<style>
	.timeline {
		--gutter: 40px;
		position: relative;
		margin: 0;
	}

	.timeline::before {
		content: '';
		position: absolute;
		left: calc(var(--gutter) / 2);
		top: 15px;
		bottom: 0;
		width: 2px;
		height: calc(100% - 200px);
		background: rgba(255, 255, 255, 0.06);
	}
</style>
