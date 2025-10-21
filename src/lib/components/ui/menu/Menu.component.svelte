<script>
	import { getIcon } from '$lib/data/icons.js';

	import Icon from '$lib/components/ui/icon/Icon.component.svelte';
	import Button from '$lib/components/ui/button/Button.component.svelte';

	let { items } = $props();

	function toggleMenu() {
		const menu = document.getElementById('mobile-menu');
		if (menu) {
			menu.classList.toggle('hidden');
			menu.classList.toggle('flex');
		}
	}
</script>

<div
	class="lg:hidden p-[1px] rounded-full bg-gradient-to-r from-[var(--gradient-2)] to-[var(--gradient-1)]"
>
	<div class="p-[6px] justify-center items-center gap-[40px] bg-[#1C1C1C] rounded-full">
		<button
			class="flex items-center py-[6px] px-[12px] bg-[#292929] rounded-full"
			onclick={toggleMenu}
		>
			<Icon icon={getIcon('Menu')} />
		</button>

		<ul
			class="hidden absolute top-[50px] left-1/2 w-[90vw] -translate-x-1/2 mt-2 bg-[#1C1C1C] rounded-lg shadow-lg p-[20px] z-10 flex-col gap-5"
			id="mobile-menu"
		>
			{#each items as item}
				<li><a href={item.href}>{item.label}</a></li>
			{/each}
			<hr />
			<li>
				<Button type="primary" label="Resume" target="_blank" />
			</li>
		</ul>
	</div>
</div>
