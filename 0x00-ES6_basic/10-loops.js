export default function appendToEachArrayValue(array, appendString) {
  let newArray = [];
  for (const index of array) {
    newArray.push(array[index] + appendString);
  }

  return array;
}
