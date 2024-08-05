export default function createReportObject(employeesList) {
  const report = {
    'allEmployees': employeesList,
    getEmployeeCount: () => employeesList.length,
  };

  return report;
}
