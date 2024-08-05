export default function appendToEachArrayValue(array, appendString) {
  for (const index of array) {
    const value = array[index];
    array[index] = appendString + value;
  }

  return array;
}
