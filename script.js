
const API_URL = 'https://your-backend-url.com/api/logs'; // Replace with actual backend

async function fetchLogs() {
  const response = await fetch(API_URL);
  const logs = await response.json();
  renderEmployeeLogs(logs.filter(log => log.type === 'employee'));
  renderVisitorLogs(logs.filter(log => log.type === 'visitor'));
}

function renderEmployeeLogs(data) {
  const tableBody = document.querySelector('#employeeLogTable tbody');
  tableBody.innerHTML = '';
  data.forEach(log => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${log.employeeId || '-'}</td>
      <td>${new Date(log.timestamp).toLocaleString()}</td>
      <td>${log.doorId || '-'}</td>
      <td>${log.status || '-'}</td>
    `;
    tableBody.appendChild(row);
  });
}

function renderVisitorLogs(data) {
  const tableBody = document.querySelector('#visitorLogTable tbody');
  tableBody.innerHTML = '';
  data.forEach(log => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${log.visitorId || '-'}</td>
      <td>${new Date(log.timestamp).toLocaleString()}</td>
      <td>${log.doorId || '-'}</td>
      <td>${log.status || '-'}</td>
    `;
    tableBody.appendChild(row);
  });
}

fetchLogs();
