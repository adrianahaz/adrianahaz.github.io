<script>
	import Button from '$lib/components/ui/button/Button.component.svelte';
	import Icon from '$lib/components/ui/icon/Icon.component.svelte';
	import Menu from './Menu.component.svelte';
	import { getIcon } from '$lib/data/icons.js';
</script>

<nav>
	<div
		class="mx-[25px] relative lg:mx-[100px] my-[20px] lg:my-[45px] flex justify-between items-center"
	>
		<a href="/" class="flex items-center gap-[5px]">
			<Icon icon={getIcon('AtSign')} />
			<span class="text-lg lg:text-xl">adrianahaz</span>
		</a>

		<Menu />

		<Button label="Resume" class="hidden lg:inline-block" />
	</div>
</nav>
