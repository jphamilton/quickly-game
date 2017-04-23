/**
 * Random integer between start and end
 * @param start 
 * @param end 
 */
export function random(start, end) {
     return Math.floor(Math.random() * (end - start + 1)) + start;
}

/**
 * Random float between start and end
 * @param start 
 * @param end 
 */
export function randomf(start, end) {
    return Math.random() * (end - start) + start;
}

/**
 * Random element from array
 * @param array 
 */
export function random_array<T>(array: T[]) {
    return array[random(0, array.length - 1)];
}