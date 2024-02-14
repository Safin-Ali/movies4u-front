
/**
 *
 * @param arr - tmdb responsed array of object value
 * @param inc - a boolean for include or exclude
 * @returns - only which genre includes 16 `animation`
 */
export const extract_anime = (arr:any[],inc:boolean = false):unknown[] => arr.filter((obj:any) => {
	if(!inc) return !obj.genre_ids.includes(16);
	return obj.genre_ids.includes(16);
});