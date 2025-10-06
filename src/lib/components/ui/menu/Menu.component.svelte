<script>
	import { getIcon } from '$lib/data/icons.js';
	import { getAllNavItems } from '$lib/data/base.js';

	import Icon from '$lib/components/ui/icon/Icon.component.svelte';
	import Button from '$lib/components/ui/button/Button.component.svelte';
	import MenuItem from '$lib/components/ui/menu/MenuItem.component.svelte';

	const navItems = getAllNavItems();

	function toggleMenu() {
		const menu = document.getElementById('mobile-menu');
		if (menu) {
			menu.classList.toggle('hidden');
			menu.classList.toggle('flex');
		}
	}
</script>

<ul class="p-[1px] rounded-full bg-gradient-to-r from-[var(--gradient-2)] to-[var(--gradient-1)]">
	<div
		class="hidden lg:flex p-[6px] justify-center items-center gap-[40px] bg-[#1C1C1C] rounded-full"
	>
		{#each navItems as item}
			<MenuItem href={item.href} icon={item.icon} label={item.label} />
		{/each}
	</div>

	<div class="lg:hidden p-[6px] justify-center items-center gap-[40px] bg-[#1C1C1C] rounded-full">
		<button
			class="flex items-center py-[6px] px-[12px] bg-[#292929] rounded-full"
			onclick={toggleMenu}
		>
			<Icon icon={getIcon('Menu')} />
		</button>

		<div
			class="hidden absolute top-[50px] left-1/2 w-[90vw] -translate-x-1/2 mt-2 bg-[#1C1C1C] rounded-lg shadow-lg p-[20px] z-10 flex-col gap-5"
			id="mobile-menu"
		>
			{#each navItems as item}
				<li><a href={item.href}>{item.label}</a></li>
			{/each}
			<hr />
			<li>
				<Button as="a" label="Resume" href="/resume.pdf" />
			</li>
		</div>
	</div>
</ul>
