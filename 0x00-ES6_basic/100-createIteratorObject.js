export default function createIteratorObject(report) {
  const employees = [];
  for (const department of Object.keys(report)) {
    for (const employee of report[department]) {
      employees.push(employee);
    }
  }
  return employees;
}
