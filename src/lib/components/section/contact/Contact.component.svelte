<script>
	import Spark from '$lib/components/ui/icon/Spark.component.svelte';
	import Button from '$lib/components/ui/button/Button.component.svelte';
</script>

<section
	id="contact"
	class="px-[20px] py-[40px] md:px-[100px] md:pt-[75px] flex items-center justify-between"
>
	<div class="flex flex-col gap-5 md:gap-[40px] w-[80vh]">
		<div class="flex items-center gap-3">
			<h2 class="text-l md:text-3xl">Want to reach me?</h2>
			<Spark />
		</div>

		<p class="text-sm md:text-xl">
			I’m always open to chat about tech, ideas, or anything creative. Just hit the button or click
			the icon bellow — I’d love to hear from you and maybe build something cool together!
		</p>

		<Button
			type="primary"
			label="Send me a message"
			class="w-[40vh]"
			href="mailto:adrianalzidan35@gmail.com"
		/>
	</div>

	<svg
		width="393"
		height="393"
		viewBox="0 0 393 393"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class="hidden md:block"
	>
		<line x1="354.5" y1="392.021" x2="354.5" y2="9.15527e-05" stroke="#404040" />
		<line x1="274.5" y1="392.021" x2="274.5" y2="9.15527e-05" stroke="#404040" />
		<line x1="195.5" y1="392.021" x2="195.5" y2="9.15527e-05" stroke="#404040" />
		<line y1="290.5" x2="392.02" y2="290.5" stroke="#404040" />
		<line y1="203.5" x2="392.02" y2="203.5" stroke="#404040" />
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M195.5 219C195.469 210.45 188.541 203.529 180 203.529C188.56 203.529 195.5 196.576 195.5 188C195.531 196.55 202.459 203.471 211 203.471C202.439 203.471 195.5 210.424 195.5 219Z"
			fill="white"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M275.5 306C275.469 297.45 268.541 290.529 260 290.529C268.56 290.529 275.5 283.576 275.5 275C275.531 283.55 282.459 290.471 291 290.471C282.439 290.471 275.5 297.424 275.5 306Z"
			fill="white"
		/>
	</svg>
</section>
