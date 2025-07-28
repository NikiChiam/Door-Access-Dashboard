const logs = [
  { timestamp: "2025-07-28T14:00", doorId: "D-101", userId: "U-001", policyId: "P-001", result: "success" },
  { timestamp: "2025-07-28T14:10", doorId: "D-102", userId: "U-002", policyId: "P-002", result: "fail" }
];

const tbody = document.querySelector('#logs-table tbody');
logs.forEach(log => {
  const row = document.createElement('tr');
  row.innerHTML = `<td>${log.timestamp}</td><td>${log.doorId}</td><td>${log.userId}</td><td>${log.policyId}</td><td>${log.result}</td>`;
  tbody.appendChild(row);
});