import menuData from '../assets/data/menuData.js';

const menuContainer = document.getElementById("menuContainer");
const buttons = document.querySelectorAll('.category-btn');

// Function to create menu item HTML
const createMenuItem = (item) => `
  <div class="w-[250px] h-[350px] bg-white rounded-lg shadow-md flex flex-col items-center p-4">
    <img src="${item.image}" alt="${item.name}" class="w-[180px] h-[180px] rounded-full object-cover mb-4">
    <h3 class="text-lg font-semibold">${item.name}</h3>
    <p class="text-sm text-gray-600 mb-2">${item.description}</p>
    <p class="font-bold text-black text-md mb-3">${item.price} EGP</p>
    <a href="item.html?name=${encodeURIComponent(item.name)}" class="bg-red-500 text-white text-sm py-2 px-6 rounded-md">Select Options</a>
  </div>
`;



// Function to render menu items based on category filter
function renderMenu(filter) {
  const filteredItems = menuData
    .filter(section => filter === "All" || section.category === filter)
    .flatMap(section => section.items)
    .map(createMenuItem)
    .join('');

  menuContainer.innerHTML = filteredItems;

  // Highlight the active button
  buttons.forEach(btn => btn.classList.remove('bg-darkGray', 'hover:bg-gray-800'));
  const activeButton = document.querySelector(`button[onclick="filterMenu('${filter}', this)"]`);
  if (activeButton) {
    activeButton.classList.add('bg-darkGray', 'hover:bg-gray-800');
  }
}
localStorage.setItem('menuData', JSON.stringify(menuData));

// Expose filter function to be callable from HTML buttons
window.filterMenu = renderMenu;

// Render all items by default on page load and set 'All' button as active
document.addEventListener("DOMContentLoaded", () => {
  renderMenu("All");
});
