<script>
	import { formatDate, formatDuration } from '$lib/helpers/dateFormatter';

	let { company, role, startDate, endDate, description, index } = $props();
</script>

<div class="relative mb-6 p-4 rounded-lg shadow bg-white w-100">
	<div>
		<h2 class="text-xl font-semibold">{role} — {company}</h2>
		<div
			class="absolute rounded-full w-10 h-10 bg-amber-300 left-[-100px] flex justify-center items-center top-0"
		>
			{index + 1}
		</div>
	</div>
	<p class="text-gray-600 text-sm">
		{formatDate(startDate)} - {formatDate(endDate)} ·
		{formatDuration(startDate, endDate)}
	</p>
	<p class="mt-2 text-gray-800">{description}</p>
</div>
