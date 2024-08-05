export default function createIteratorObject(report) {
  const employees = {
    ...report.allEmployees,
  };

  const res = [];
  for (const key in employees) {
    res.push(employees[key]);
  }

  return res;
}
