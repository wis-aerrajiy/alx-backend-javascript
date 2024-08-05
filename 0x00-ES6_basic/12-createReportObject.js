export default function createReportObject(employeesList) {
  const report = {
    allEmployees: employeesList,
    getEmployeeCount: () => Object.keys(employeesList).length,
  };

  return report;
}
