/* 
  @param {Array} array The array to process
  @param {number} [size = 1] The length of each chunk
  @returns {Array} Returns new array of chunks
 */

//es5
export function chunk(array, size) {
	var length = array == null ? 0 : array.length;
	if (!length || size < 1) {
		return [];
	}
	
	var index = 0, 
			resIndex = 0,
			result = Array(Math.ceil(length/size));
			
	while (index < length) {
		result[resIndex++] = array.slice(index, index += size);
	}
	
	return result;
}

//es6+
export const newChunk = (array, size) {
  let result = [],
      length = array == null ? 0 : array.length,
      numOfArr = Math.ceil(length/size);

  for (let i = 0; i < numOfArr; i++) {
    result.push([...array].splice(0, size))
  }

  return result;
}
