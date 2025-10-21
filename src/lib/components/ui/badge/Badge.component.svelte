<script>
	import SpecialIcon from '$lib/components/ui/icon/SpecialIcon.component.svelte';

	let { badges } = $props();
</script>

<div
	class="flex justify-around items-center w-full border-t border-b border-white/10 py-[20px] text-[10px] md:text-[16px]"
>
	{#each badges as { label }, index}
		<span class="badge">{label}</span>
		{#if index < badges.length - 1}
			<SpecialIcon />
		{/if}
	{/each}
</div>
