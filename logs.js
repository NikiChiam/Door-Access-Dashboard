const logs = [
  { timestamp: "2025-07-28T14:00", doorId: "D-101", userId: 101, requestId: 2001, policyDoorAccessId: 501, result: "success" },
  { timestamp: "2025-07-28T14:05", doorId: "D-102", userId: 102, requestId: 2002, policyDoorAccessId: 502, result: "fail" },
  { timestamp: "2025-07-28T14:10", doorId: "D-102", userId: 102, requestId: 2003, policyDoorAccessId: 502, result: "fail" },
  { timestamp: "2025-07-28T14:15", doorId: "D-102", userId: 102, requestId: 2004, policyDoorAccessId: 502, result: "fail" },
  { timestamp: "2025-07-28T14:20", doorId: "D-103", userId: 103, requestId: 2005, policyDoorAccessId: 503, result: "expired" }
];

const tbody = document.querySelector('#logs-table tbody');

// Count failed attempts per door
const failedCounts = {};
logs.forEach(log => {
  if (log.result === "fail") {
    failedCounts[log.doorId] = (failedCounts[log.doorId] || 0) + 1;
  }
});

// Render table
logs.forEach(log => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${log.timestamp}</td>
    <td>${log.doorId}</td>
    <td>${log.userId}</td>
    <td>${log.requestId}</td>
    <td>${log.policyDoorAccessId}</td>
    <td>${log.result}</td>
  `;
  if (log.result === "fail" && failedCounts[log.doorId] >= 3) {
    row.style.color = "red";
    row.title = "Security Alert Triggered!";
  }
  tbody.appendChild(row);
});
