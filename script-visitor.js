const API_URL = 'https://your-backend-url.com/api/visitor-logs'; // update with your backend

async function fetchLogs() {
    const response = await fetch(API_URL);
    const logs = await response.json();
    renderTable(logs);
}

function renderTable(data) {
    const tableBody = document.querySelector('#visitorTable tbody');
    tableBody.innerHTML = '';

    data.forEach(log => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${log.visitorId || '-'}</td>
            <td>${new Date(log.timestamp).toLocaleString()}</td>
            <td>${log.doorId || '-'}</td>
            <td>${log.status}</td>
        `;
        tableBody.appendChild(row);
    });
}

fetchLogs();
