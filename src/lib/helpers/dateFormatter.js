export function formatDate(dateString, locale = 'en-US') {
	if (!dateString) return 'Present';

	return new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long' }).format(
		new Date(dateString)
	);
}

export const calculateDuration = (startDate, endDate) => {
	const start = new Date(startDate);
	const end = endDate ? new Date(endDate) : new Date();

	let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());

	const years = Math.floor(months / 12);
	months = months % 12;

	return { years, months };
};

export function formatDuration(startDate, endDate) {
	const { years, months } = calculateDuration(startDate, endDate);

	let result = [];
	if (years > 0) result.push(`${years} yr${years > 1 ? 's' : ''}`);
	if (months > 0) result.push(`${months} mo${months > 1 ? 's' : ''}`);

	return result.join(', ');
}
