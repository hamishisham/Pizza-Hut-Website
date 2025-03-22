import menuData from './menuData.js';

document.addEventListener("DOMContentLoaded", () => {
  const menuContainer = document.getElementById("menuContainer");
  const buttons = document.querySelectorAll('.category-btn');

  if (!menuContainer) {
    console.error("menuContainer not found!");
    return;
  }

  console.log(menuData); // Debugging data load

  // Function to create menu item HTML
  const createMenuItem = (item) => {
    console.log(`Loading image for: ${item.name}`, item.image);
    return `
      <div class="w-[250px] h-[350px] bg-white rounded-lg shadow-md flex flex-col items-center p-4">
        <img src="${item.image}" alt="${item.name}" class="w-[180px] h-[180px] rounded-full object-cover mb-4" 
             onerror="this.onerror=null; this.src='./images/placeholder.png';">
        <h3 class="text-lg font-semibold">${item.name}</h3>
        <p class="text-sm text-gray-600 mb-2">${item.description}</p>
        <p class="font-bold text-black text-md mb-3">${item.price} EGP</p>
        <a href="item.html?name=${encodeURIComponent(item.name)}" class="bg-red-500 text-white text-sm py-2 px-6 rounded-md">Select Options</a>
      </div>
    `;
  };

  // Function to render menu items
  function renderMenu(filter) {
    if (!menuData || menuData.length === 0) {
      console.error("menuData is empty or not loaded");
      menuContainer.innerHTML = "<p class='text-red-500'>Menu data not available.</p>";
      return;
    }

    const filteredItems = menuData
      .filter(section => filter === "All" || section.category === filter)
      .flatMap(section => section.items)
      .map(createMenuItem)
      .join('');

    menuContainer.innerHTML = filteredItems;

    // Highlight the active button
    buttons.forEach(btn => btn.classList.remove('bg-darkGray', 'hover:bg-gray-800'));
    const activeButton = [...buttons].find(btn => btn.dataset.category === filter);
    if (activeButton) {
      activeButton.classList.add('bg-darkGray', 'hover:bg-gray-800');
    }
  }

  // Fix: Add event listeners to buttons
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.dataset.category;
      renderMenu(category);
    });
  });

  // Initialize menu
  renderMenu("All");
});
