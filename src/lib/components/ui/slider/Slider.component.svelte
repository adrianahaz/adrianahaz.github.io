<script>
	let { sliderName, value = $bindable() } = $props();

	let currentSlider = $state(0);

	function changeSlider(index) {
		value = index;
		currentSlider = index;
	}
</script>

<div class="border p-1 rounded-full inline-flex gap-2 justify-center items-center">
	{#each sliderName as label, index}
		<button
			onclick={() => changeSlider(index)}
			class={`${currentSlider === index ? 'bg-[#292929]' : ''} p-2 flex items-center gap-2 hover:bg-[#292929] active:bg-[#292929] rounded-full`}
		>
			{label}
		</button>
	{/each}
</div>
