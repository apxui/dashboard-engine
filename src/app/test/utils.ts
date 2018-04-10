export function calcPixelsByRatio(length: number, total: number, occupy: number) {
	return Math.round(length * occupy / total);
}