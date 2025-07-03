const API_URL = 'https://your-backend-url.com/api/employee-logs'; // update with your backend

async function fetchLogs() {
    const response = await fetch(API_URL);
    const logs = await response.json();
    renderTable(logs);
}

function renderTable(data) {
    const tableBody = document.querySelector('#employeeTable tbody');
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
}

fetchLogs();
