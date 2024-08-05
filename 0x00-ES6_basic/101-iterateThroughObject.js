export default function iterateThroughObject(reportWithIterator) {
  let resString = '';
  for (let index = 0; index < reportWithIterator.length; index += 1) {
    resString += reportWithIterator[index];
    if (index !== reportWithIterator.length - 1) {
      resString += ' | ';
    }
  }

  return resString;
}
