<script>
	import { getIcon } from '$lib/data/icons.js';
	import { getAllSocialMedia } from '$lib/data/base.js';

	import Button from '$lib/components/ui/button/Button.component.svelte';
	import Icon from '$lib/components/ui/icon/Icon.component.svelte';
	import Menu from '$lib/components/ui/menu/Menu.component.svelte';
	import Capsule from '$lib/components/ui/capsule/Capsule.component.svelte';

	const socialMedia = getAllSocialMedia();
</script>

<nav>
	<div
		class="mx-[25px] relative lg:mx-[100px] my-[20px] gap-5 md:gap-0 lg:my-[45px] flex flex-col md:flex-row justify-between md:items-center"
	>
		<a href="/" class="order-2 md:order-1 flex items-center gap-[5px]">
			<Icon icon={getIcon('AtSign')} />
			<span class="text-lg lg:text-xl">adrianahaz</span>
		</a>

		<Capsule items={socialMedia} customClass="order-1 md:order-2" />

		<Button
			type="primary"
			label="Resume"
			class="order-3 hidden lg:inline-block"
			href="https://drive.google.com/file/d/1wl9i6r4i7JP-uLSBUCb8Es81xO0XtTFi/view?usp=sharing"
			target="_blank"
		/>
	</div>
</nav>
