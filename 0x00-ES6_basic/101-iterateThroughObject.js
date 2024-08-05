export default function iterateThroughObject(reportWithIterator) {
  let resString = "";
  for (let index = 0; index < reportWithIterator.length; index++) {
    resString += reportWithIterator[index].join(" ");
    if (index !== reportWithIterator.length - 1) {
      resString += " | ";
    }
  }

  return resString;
}
