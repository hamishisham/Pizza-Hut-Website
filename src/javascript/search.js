import menuData from '../../public/menuData.js';

const searchInput = document.getElementById('searchInput');
const resultsDropdown = document.getElementById('resultsDropdown');

// Function to search items by first letter
function searchItems(query) {
  console.log("Search Query:", query); // Debugging

  if (!query.trim()) {
    resultsDropdown.classList.add("hidden");
    console.log("Query is empty, hiding results.");
    return;
  }

  const searchQuery = query.trim().toLowerCase();
  console.log("Formatted Query:", searchQuery);

  const results = menuData.flatMap((section) =>
    section.items.filter((item) => {
      console.log("Checking Item:", item.name.toLowerCase());
      return item.name.toLowerCase().startsWith(searchQuery); // Ensuring search by first letter
    })
  );

  console.log("Filtered Results:", results); // Debugging

  displayResults(results);
}



function displayResults(results) {
  if (results.length === 0) {
    resultsDropdown.innerHTML = `<p class="p-2 text-gray-500">No results found</p>`;
    resultsDropdown.classList.remove('hidden');
    return;
  }

  resultsDropdown.innerHTML = results.map(item => `
    <div class="result-item p-3 hover:bg-gray-200 cursor-pointer flex items-center gap-2" data-name="${item.name}">
      <img src="${item.image}" class="w-8 h-8 rounded-full">
      <span>${item.name}</span>
    </div>
  `).join('');

  // Show the results dropdown
  resultsDropdown.classList.remove('hidden');

  // Add click event listener to each result item
  document.querySelectorAll('.result-item').forEach(itemElement => {
    itemElement.addEventListener('click', () => {
      const itemName = itemElement.getAttribute('data-name');
      redirectToPage(itemName);
    });
  });
}

// Redirect to item page
function redirectToPage(itemName) {
  window.location.href = `item.html?name=${encodeURIComponent(itemName)}`;
}

// Listen to search input
searchInput.addEventListener('input', (e) => searchItems(e.target.value));

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!resultsDropdown.contains(e.target) && e.target !== searchInput) {
    resultsDropdown.classList.add('hidden');
  }
});
