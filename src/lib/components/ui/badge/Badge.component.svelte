<script>
	import { getAllIdentityItems } from '$lib/data/base.js';

	import SpecialIcon from '$lib/components/ui/icon/SpecialIcon.component.svelte';

	let identities = getAllIdentityItems();
</script>

<div
	class="flex justify-around items-center w-full border-t border-b border-white/10 py-[20px] text-[10px] md:text-[16px]"
>
	{#each identities as { label }, index}
		<span class="badge">{label}</span>
		{#if index < identities.length - 1}
			<SpecialIcon />
		{/if}
	{/each}
</div>
