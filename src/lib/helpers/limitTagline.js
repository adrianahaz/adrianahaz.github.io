export function limitTagline(taglines, limit) {
	let visible = taglines.slice(0, limit);
	let remaining = taglines.length - limit;

	if (remaining > 0) {
		visible.push(`+${remaining}`);
	}

	return visible;
}
