const alerts = [
  { id: "A-001", location: "Lab 1", status: "Locked", attempts: 3, triggeredBy: "AR-1001" }
];

const tbody = document.querySelector('#alerts-table tbody');
alerts.forEach(alert => {
  const row = document.createElement('tr');
  row.innerHTML = `<td>${alert.id}</td><td>${alert.location}</td><td>${alert.status}</td><td>${alert.attempts}</td><td>${alert.triggeredBy}</td>`;
  tbody.appendChild(row);
});