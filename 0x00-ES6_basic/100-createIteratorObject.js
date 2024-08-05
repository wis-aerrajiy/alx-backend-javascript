export default function createIteratorObject(report) {
  let res = [];
  for (const idx of Object.values(report.allEmployees)) {
    res = [...res, ...idx];
  }
  return res;
}
