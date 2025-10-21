<script>
	import CapsuleItem from '$lib/components/ui/capsule/CapsuleItem.component.svelte';

	let props = $props();
	const baseClass =
		'p-[1px] rounded-full bg-gradient-to-r from-[var(--gradient-2)] to-[var(--gradient-1)]';
</script>

<div class={`${props.mobile ? 'hidden lg:block' : ''} ${baseClass} ${props.customClass}`}>
	<ul class="flex p-[6px] justify-center items-center md:gap-[40px] bg-[#1C1C1C] rounded-full">
		{#each props.items as item}
			<CapsuleItem href={item.href} icon={item.icon} label={item.label} />
		{/each}
	</ul>
</div>
