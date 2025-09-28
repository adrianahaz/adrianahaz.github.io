<script>
	let props = $props();
</script>

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
