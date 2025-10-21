/**
 * Limits the tags to be displayed to n that match the limit entered.
 *
 * @param {string[]} taglines - Array contains a list of taglines to be displayed.
 * @param {number} limit - The maximum number of taglines you want to display.
 * @returns {string[]} - A limited array of taglines, plus markers if there are any left over.
 */
export function limitTagline(taglines, limit) {
	let visible = taglines.slice(0, limit);
	let remaining = taglines.length - limit;

	if (remaining > 0) {
		visible.push(`+${remaining}`);
	}

	return visible;
}
