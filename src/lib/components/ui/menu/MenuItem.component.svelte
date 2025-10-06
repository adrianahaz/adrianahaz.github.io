<script>
	import { getIcon } from '$lib/data/icons.js';

	import Icon from '$lib/components/ui/icon/Icon.component.svelte';

	let props = $props();
</script>

<li>
	<a
		href={props.href}
		class="px-[16px] py-[8px] flex items-center gap-2 hover:bg-[#292929] active:bg-[#292929] rounded-full"
	>
		{#if props.icon}
			<Icon icon={getIcon(props.icon)} />
		{:else}
			<span>{props.label}</span>
		{/if}
	</a>
</li>
