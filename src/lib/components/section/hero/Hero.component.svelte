<script>
	import Button from '$lib/components/ui/button/Button.component.svelte';
</script>

<div
	class="relative w-full min-h-[75vh] md:min-h-[80vh] flex flex-col items-center justify-center md:justify-start text-center overflow-hidden"
>
	<div
		class="md:mx-[100px] absolute inset-0 -z-10 border-r border-[transparent]
		bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)]
		bg-[length:calc(100%/6)_calc(100%/7)]"
	></div>

	<div
		class="md:w-[55%] md:mt-[80px] flex flex-col items-center bg-[#101111] p-[30px] md:p-[40px] gap-5"
	>
		<h1 class="text-2xl md:text-4xl max-w-3xl leading-tight text-center">
			Hello, I'm Adrian &#128075;
		</h1>

		<p class=" text-gray-300 max-w-lg text-center">
			A passionate front-end developer crafting engaging and user-friendly web experiences.
		</p>

		<Button label="Hire me" />
	</div>
</div>

<style>
	@media (max-width: 768px) {
		:global(div > .-z-10) {
			background-size: calc(100% / 4) calc(100% / 6);
		}
	}
	@media (min-width: 1024px) {
		:global(div > .-z-10) {
			background-size: calc(100% / 6) calc(100% / 7);
		}
	}
</style>
