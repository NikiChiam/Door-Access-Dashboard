
const EMPLOYEE_API_URL = 'https://your-backend-url.com/api/employee-logs';

async function fetchEmployeeLogs() {
    try {
        const response = await fetch(EMPLOYEE_API_URL);
        const data = await response.json();
        renderEmployeeTable(data);
    } catch (error) {
        console.error("Failed to fetch employee logs", error);
    }
}

function renderEmployeeTable(data) {
    const tableBody = document.getElementById("logTableBody");
    tableBody.innerHTML = "";

    data.forEach(log => {
        const row = document.createElement("tr");
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

document.getElementById("searchInput").addEventListener("input", function() {
    const searchValue = this.value.toLowerCase();
    const rows = document.querySelectorAll("#logTableBody tr");
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchValue) ? "" : "none";
    });
});

fetchEmployeeLogs();
