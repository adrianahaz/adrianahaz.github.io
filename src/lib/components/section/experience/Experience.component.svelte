<script>
	import Spark from '$lib/components/ui/icon/Spark.component.svelte';
	import Timeline from '$lib/components/ui/timeline/Timeline.component.svelte';

	let props = $props();
	let experiences = props.experiences || [];
</script>

<section
	class="px-[20px] py-[40px] md:px-[100px] md:py-[75px] flex flex-col gap-[25px] md:gap-[50px]"
>
	<div class="flex items-center gap-3">
		<h2 class="text-l md:text-3xl">My journey until now</h2>
		<Spark />
	</div>

	<Timeline {experiences} />
</section>
