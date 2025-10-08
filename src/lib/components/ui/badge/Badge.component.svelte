<script>
	import { getAllIdentityItems } from '$lib/data/base.js';

	import SpecialIcon from '$lib/components/ui/icon/SpecialIcon.component.svelte';

	let identities = getAllIdentityItems();
</script>

<div
	class="flex justify-around items-center w-full border-t border-b border-white/10 py-[20px] text-[12px] md:text-[16px]"
>
	{#each identities as { label }}
		<span class="badge">{label}</span>
		<SpecialIcon />
	{/each}
</div>
