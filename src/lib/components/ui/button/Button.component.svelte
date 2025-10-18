<script>
	let { type, href, label, class: className } = $props();

	const baseClass =
		`${className ? className : ''} ` +
		'relative rounded-[40px] p-[1px] text-sm text-black text-center';
	const variantClass = {
		primary: 'hover:bg-gradient-to-r from-[#fed39c] to-[#7a87fa]',
		secondary: 'border border-[#7a87fa] text-[#7a87fa] hover:bg-[#7a87fa] hover:text-white'
	};
</script>

<a href={href || '#'} class={`${baseClass} ${variantClass[type]}`} target="_blank">
	<span
		class={`block rounded-[40px] px-4 py-3 md:px-[20px] md:py-[14px] font-semibold ${type === 'primary' ? 'bg-gradient-to-r from-[#7a87fa] to-[#fed39c]' : 'text-white'}`}
		>{label}</span
	>
</a>
