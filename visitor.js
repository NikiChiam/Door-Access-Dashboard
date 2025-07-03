
const VISITOR_API_URL = 'https://your-backend-url.com/api/visitor-logs';

async function fetchVisitorLogs() {
    try {
        const response = await fetch(VISITOR_API_URL);
        const data = await response.json();
        renderVisitorTable(data);
    } catch (error) {
        console.error("Failed to fetch visitor logs", error);
    }
}

function renderVisitorTable(data) {
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

fetchVisitorLogs();
