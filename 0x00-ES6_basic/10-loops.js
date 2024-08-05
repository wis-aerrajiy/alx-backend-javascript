export default function appendToEachArrayValue(array, appendString) {
  for (let index of array) {
    let value = array[index];
    array[index] = appendString + value;
  }

  return array;
}
