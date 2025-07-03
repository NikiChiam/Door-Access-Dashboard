const API_URL = 'https://your-backend-url.com/api/logs'; // ← replace with real backend URL

async function fetchLogs() {
  const response = await fetch(API_URL);
  const logs = await response.json();
  renderTable(logs);
}

function renderTable(data) {
  const tableBody = document.querySelector('#logTable tbody');
  tableBody.innerHTML = '';

  data.forEach(log => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${log.employeeId || '-'}</td>
      <td>${new Date(log.timestamp).toLocaleString()}</td>
      <td>${log.doorId || '-'}</td>
      <td>${log.status}</td>
    `;
    tableBody.appendChild(row);
  });

  document.getElementById('search').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const rows = tableBody.querySelectorAll('tr');
    rows.forEach(row => {
      const match = row.textContent.toLowerCase().includes(searchTerm);
      row.style.display = match ? '' : 'none';
    });
  });
}

fetchLogs();
