document.getElementById('search-btn').addEventListener('click', function() {
    let query = document.getElementById('search-input').value.trim().toLowerCase();
    let resultsDiv = document.getElementById('results');

    // Predefined data for demonstration (you can add more as needed)
    const osintTools = [
        { name: 'Shodan', link: 'https://www.shodan.io/', description: 'Search for devices connected to the internet.' },
        { name: 'Spyse', link: 'https://www.spyse.com/', description: 'Search through global cybersecurity data.' },
        { name: 'OSINT Framework', link: 'https://osintframework.com/', description: 'A collection of OSINT tools categorized by type.' }
    ];

    // Clear previous results
    resultsDiv.innerHTML = '';

    // Search through predefined tools based on user input
    let filteredResults = osintTools.filter(tool => tool.name.toLowerCase().includes(query) || tool.description.toLowerCase().includes(query));

    // Display results or a no result message
    if (filteredResults.length > 0) {
        filteredResults.forEach(tool => {
            let resultItem = document.createElement('div');
            resultItem.innerHTML = `<a href="${tool.link}" target="_blank">${tool.name}</a><p>${tool.description}</p>`;
            resultsDiv.appendChild(resultItem);
        });
    } else {
        resultsDiv.innerHTML = 'No results found. Try a different keyword.';
    }
});
