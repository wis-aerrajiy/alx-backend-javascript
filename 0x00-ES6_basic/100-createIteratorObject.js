export default function createIteratorObject(report) {
  const employees = {
    ...report.allEmployees,
  };

  return {
    [Symbol.iterator]: function* () {
      for (const department of Object.keys(employees)) {
        yield employees[department];
      }
    },
  };
}
