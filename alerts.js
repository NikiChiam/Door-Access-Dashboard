const alerts = [
  {
    id: "A-001",
    location: "D-102",
    status: "Locked",
    attempts: 3,
    triggeredBy: "AccessRequest 2002, 2003, 2004"
  }
];

const tbody = document.querySelector('#alerts-table tbody');
alerts.forEach(alert => {
  const row = document.createElement('tr');
  row.innerHTML = `<td>${alert.id}</td><td>${alert.location}</td><td>${alert.status}</td><td>${alert.attempts}</td><td>${alert.triggeredBy}</td>`;
  tbody.appendChild(row);
});
