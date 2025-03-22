const urlParams = new URLSearchParams(window.location.search);
const itemName = urlParams.get('name');

import menuData from '../../public/menuData.js';

const item = menuData.flatMap(section => section.items).find(item => item.name === itemName);

if (item) {
  document.getElementById('itemDetails').innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Item Image -->
      <img src="../src/assets/images/${item.image.split('/').pop()}" 
           class="w-full h-auto max-h-[500px] rounded-lg object-cover" 
           alt="${item.name}">

      <!-- Item Details -->
      <div>
        <h1 class="text-4xl font-bold text-red-600 mb-4">${item.name}</h1>
        <p class="text-gray-600 mb-6">${item.description}</p>
        <p class="text-2xl font-semibold text-black mb-4">Price: 
          <span class="font-bold">${item.price} EGP</span>
        </p>
        <p class="text-sm text-red-500 mb-6">
          If you purchase this, you will earn 
          <span class="font-bold">166-456 Points!</span>
        </p>

        <!-- Buttons -->
        <button onclick="addToCart('${item.name}')" 
                class="bg-red-500 text-white py-2 px-6 rounded-md mr-4 hover:bg-red-700">
          🛒 Add to Cart
        </button>
        <button onclick="addToWishlist('${item.name}')" 
                class="bg-gray-600 text-white py-2 px-6 rounded-md hover:bg-gray-700">
          ❤️ Add to Wishlist
        </button>
      </div>
    </div>
  `;
} else {
  document.getElementById('itemDetails').innerHTML = '<p>Item not found.</p>';
}
