<script>
	import Icon from '$lib/components/ui/icon/Icon.component.svelte';
	import { getIcon } from '$lib/data/icons.js';
	import { getAllNavItems } from '$lib/data/base.js';

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
			<li>
				<a
					href={item.href}
					class="px-[16px] py-[8px] flex items-center gap-2 hover:bg-[#292929] active:bg-[#292929] rounded-full"
				>
					{#if item.icon}
						<Icon icon={getIcon(item.icon)} />
					{:else}
						<span>{item.label}</span>
					{/if}
				</a>
			</li>
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
			<li><a href="/">Home</a></li>
			<li><a href="#about">About</a></li>
			<li><a href="#services">Services</a></li>
			<li><a href="#contact">Contact</a></li>
			<hr />
			<li>
				<a
					href="https://drive.google.com/file/d/1gk1bX4YHk1F2JH3K5J6K7L8M9N0O1P2Q/view?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
					class="block w-full text-center bg-gradient-to-r from-[#fed39c] to-[#7a87fa] text-black rounded-[40px] px-[20px] py-[14px] font-semibold"
					>Resume</a
				>
			</li>
		</div>
	</div>
</ul>
