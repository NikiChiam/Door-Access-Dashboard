
const API_URL = 'https://your-backend.com/api/employee-logs';

async function fetchLogs() {
  try {
    const response = await fetch(API_URL);
    const logs = await response.json();
    renderTable(logs);
  } catch (error) {
    console.error('Error fetching logs:', error);
  }
}

function renderTable(data) {
  const tableBody = document.querySelector('#logTable tbody');
  tableBody.innerHTML = '';
  data.forEach(log => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${log.id}</td>
      <td>${log.reason || '-'}</td>
      <td>${log.attempts}</td>
      <td>${new Date(log.timestamp).toLocaleString()}</td>
      <td>${log.doorId}</td>
      <td>${log.accessRequestId}</td>
    `;
    tableBody.appendChild(row);
  });
}

document.getElementById('searchInput').addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase();
  document.querySelectorAll('#logTable tbody tr').forEach(row => {
    row.style.display = [...row.children].some(
      td => td.textContent.toLowerCase().includes(searchTerm)
    ) ? '' : 'none';
  });
});

fetchLogs();
