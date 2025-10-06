<script>
	import { getAllMarqueeItems } from '$lib/data/base';

	import SpecialIcon from '$lib/components/ui/icon/SpecialIcon.component.svelte';

	let marqueeItems = getAllMarqueeItems();
</script>

<div class="marquee w-full border-t border-b border-white/10 py-[20px]">
	<div
		class="track flex justify-around gap-[5px] md:gap-[10px] text-[16px] md:text-[20px] items-center"
	>
		{#each marqueeItems as item}
			<div>{item.label}</div>
			<SpecialIcon />
		{/each}
	</div>
</div>

<style>
	.marquee {
		--duration: 15s;
		--direction: normal;
		overflow: hidden;
		white-space: nowrap;
		position: relative;
	}

	.track {
		animation: scroll var(--duration) linear infinite var(--direction);
	}

	@keyframes scroll {
		from {
			transform: translateX(100%);
		}
		to {
			transform: translateX(-100%);
		}
	}
</style>
