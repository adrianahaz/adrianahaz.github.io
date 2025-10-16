<script>
	import { formatDate, formatDuration } from '$lib/helpers/dateFormatter';

	let { company, role, startDate, endDate, description, index } = $props();
</script>

<div class="timeline-item grid">
	<div class="timeline-gutter">
		<div class="dot-layer" aria-hidden="true">
			<div class="dot"></div>
		</div>
	</div>
	<div class="mb-6 px-4 rounded-lg shadow md:w-[500px] flex flex-col gap-3">
		<div>
			<h2 class="text-sm md:text-xl font-semibold">{role} — {company}</h2>
		</div>
		<p class="text-xs md:text-sm text-white/80">
			{formatDate(startDate)} - {formatDate(endDate)} ·
			{formatDuration(startDate, endDate)}
		</p>
		<p class="text-xs md:text-sm text-white/80">{description}</p>
	</div>
</div>

<style>
	.timeline-item {
		display: grid;
		grid-template-columns: var(--gutter) 1fr;
		gap: 12px;
		align-items: start;
		padding: 12px 0;
	}

	.timeline-gutter {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.dot-layer {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 48px;
		height: 48px;
		border-radius: 50%;
		background: var(--background);
		position: relative;
	}

	.dot {
		width: 24px;
		height: 24px;
		border-radius: 50%;
		background: var(--background);
		border: 1px solid #ffffff;
		box-sizing: border-box;
	}

	@media (max-width: 600px) {
		.dot {
			width: 16px;
			height: 16px;
		}

		.dot-layer {
			width: 32px;
			height: 32px;
		}
	}
</style>
