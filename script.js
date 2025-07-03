const API_URL = 'https://smart-door-7eed399e4075.herokuapp.com/access-request';

async function fetchLogs() {
  try {
    const response = await fetch(API_URL);
    const logs = await response.json();
    renderTable(logs);
  } catch (error) {
    console.error("Failed to fetch logs:", error);
    alert("Error: Could not load access logs.");
  }
}

function renderTable(data) {
  const tableBody = document.querySelector('#logTable tbody');
  tableBody.innerHTML = '';

  data.forEach(log => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${log.id || '-'}</td>
      <td>${new Date(log.timestamp || log.createdAt).toLocaleString()}</td>
      <td>${log.doorId || '-'}</td>
      <td>${log.status || '-'}</td>
      <td>${log.method || '-'}</td>
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
