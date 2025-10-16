<script>
	let props = $props();
</script>

{#if props.as === 'a'}
	<a
		href={props.href ? props.href : '#'}
		class="{props.class
			? props.class
			: ''} relative rounded-[40px] p-[1px] text-black text-center hover:bg-gradient-to-r from-[#fed39c] to-[#7a87fa]"
	>
		<span
			class="text-sm block rounded-[40px] bg-gradient-to-r from-[#7a87fa] to-[#fed39c] p-4 md:px-[20px] md:py-[14px] font-semibold"
		>
			{props.label}
		</span>
	</a>
{:else}
	<button
		class="{props.class
			? props.class
			: ''} relative rounded-[40px] p-[1px] bg-gradient-to-r from-[#fed39c] to-[#7a87fa] text-black"
	>
		<span
			class="block rounded-[40px] bg-gradient-to-r from-[#7a87fa] to-[#fed39c] px-[20px] py-[14px] font-semibold"
		>
			{props.label}
		</span>
	</button>
{/if}
