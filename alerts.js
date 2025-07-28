const alerts = [
  {
    id: "V-201",
    location: "D-101",
    status: "Locked",
    attempts: 3,
    triggeredBy: "AccessRequest 2003, 2004, 2005"
  },
  {
    id: "S-103",
    location: "D-103",
    status: "Locked",
    attempts: 3,
    triggeredBy: "AccessRequest 2009, 2010, 2011"
  }
];

const tbody = document.querySelector('#alerts-table tbody');
alerts.forEach(alert => {
  const row = document.createElement('tr');
  row.innerHTML = `<td>${alert.id}</td><td>${alert.location}</td><td>${alert.status}</td><td>${alert.attempts}</td><td>${alert.triggeredBy}</td>`;
  tbody.appendChild(row);
});