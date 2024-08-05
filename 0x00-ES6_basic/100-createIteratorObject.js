export default function createIteratorObject(report) {
  const employees = [];
  const departments = Object.keys(report);
  for (const department of departments) {
    employees.push(...report[department]);
  }
  return employees;
}
