let selectedSearchType = "General";

function toggleDropdown() {
    const dropdown = document.getElementById("dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function setSearchType(type) {
    selectedSearchType = type;
    document.querySelector(".dropdown-btn").innerText = `🔍 ${type}`;
    document.getElementById("dropdown").style.display = "none";
}

function searchOSINT() {
    const query = document.getElementById('searchInput').value;
    const resultsDiv = document.getElementById('results');

    if (!query.trim()) {
        resultsDiv.innerHTML = '<p style="color: red;">[ ERROR ] Please enter a search query.</p>';
        return;
    }

    resultsDiv.innerHTML = `<p>⏳ Searching for <strong>${query}</strong> in <strong>${selectedSearchType}</strong>...</p>`;
    
    setTimeout(() => {
        resultsDiv.innerHTML = `
            <p>✅ Results for "<strong>${query}</strong>" (${selectedSearchType}):</p>
            <ul>
                <li>🔗 <a href="#">OSINT Report - ${query}</a></li>
                <li>🔗 <a href="#">Leaks & Data - ${query}</a></li>
                <li>🔗 <a href="#">User Intelligence - ${query}</a></li>
            </ul>
        `;
    }, 1500);
}
