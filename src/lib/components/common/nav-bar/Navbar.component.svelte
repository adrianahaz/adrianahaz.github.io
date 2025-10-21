<script>
	import { getIcon } from '$lib/data/icons.js';
	import { getAllNavItems } from '$lib/data/base.js';

	import Button from '$lib/components/ui/button/Button.component.svelte';
	import Icon from '$lib/components/ui/icon/Icon.component.svelte';
	import Menu from '$lib/components/ui/menu/Menu.component.svelte';
	import Capsule from '$lib/components/ui/capsule/Capsule.component.svelte';

	const navItems = getAllNavItems();
</script>

<nav>
	<div
		class="mx-[25px] relative lg:mx-[100px] my-[20px] lg:my-[45px] flex justify-between items-center"
	>
		<a href="/" class="flex items-center gap-[5px]">
			<Icon icon={getIcon('AtSign')} />
			<span class="text-lg lg:text-xl">adrianahaz</span>
		</a>

		<Capsule items={navItems} mobile={true} />

		<Menu items={navItems} />

		<Button type="primary" label="Resume" class="hidden lg:inline-block" />
	</div>
</nav>
