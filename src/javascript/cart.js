import menuData from './menuData.js';

// Add to Cart
window.addToCart = function(itemName) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const item = menuData.flatMap(section => section.items).find(item => item.name === itemName);

  if (item) {
      const existingItem = cart.find(cartItem => cartItem.name === itemName);

      if (existingItem) {
          existingItem.quantity = (existingItem.quantity || 1) + 1;
      } else {
          item.quantity = 1;
          cart.push(item);
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
      alert('Item added to cart!');
  }
};

// Add to Wishlist
window.addToWishlist = function(itemName) {
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  const item = menuData.flatMap(section => section.items).find(item => item.name === itemName);

  if (item) {
      const existingItem = wishlist.find(wishlistItem => wishlistItem.name === itemName);

      if (!existingItem) {
          wishlist.push(item);
          localStorage.setItem('wishlist', JSON.stringify(wishlist));
          updateWishlistCount();
          alert('Item added to wishlist!');
      } else {
          alert('Item is already in your wishlist!');
      }
  }
};


// Update Cart Count (Unique Items)
function updateCartCount() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const cartCount = cartItems.length; // Count unique items only
  document.getElementById('cartCount').textContent = cartCount;
  localStorage.setItem('cartCount', cartCount); // Store cart count in localStorage
}

// Update Wishlist Count
function updateWishlistCount() {
  const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
  const wishlistCount = wishlistItems.length;
  document.getElementById('wishlistCount').textContent = wishlistCount;
  localStorage.setItem('wishlistCount', wishlistCount); // Store wishlist count in localStorage
}

// Load Counts from Storage on Page Load
function loadCountsFromStorage() {
  const storedCartCount = localStorage.getItem('cartCount') || 0;
  const storedWishlistCount = localStorage.getItem('wishlistCount') || 0;
  
  document.getElementById('cartCount').textContent = storedCartCount;
  document.getElementById('wishlistCount').textContent = storedWishlistCount;
}

// Initialize Counts on Page Load
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  updateWishlistCount();
  loadCountsFromStorage();
});
