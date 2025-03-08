function searchOSINT() {
    const query = document.getElementById('searchInput').value;
    const resultsDiv = document.getElementById('results');

    if (!query.trim()) {
        resultsDiv.innerHTML = '<p style="color: red;">[ ERROR ] Invalid query. Please enter a valid search term.</p>';
        return;
    }

    resultsDiv.innerHTML = `<p>⏳ Processing query: "<strong>${query}</strong>"...</p>`;
    
    // Simulating an OSINT API request (Replace with real API calls)
    setTimeout(() => {
        resultsDiv.innerHTML = `
            <p>✅ Results for "<strong>${query}</strong>":</p>
            <ul>
                <li>🔗 <a href="#">Dark Web Intel - ${query}</a></li>
                <li>🔗 <a href="#">Data Leak Reports - ${query}</a></li>
                <li>🔗 <a href="#">OSINT Analysis - ${query}</a></li>
            </ul>
        `;
    }, 1500);
}
