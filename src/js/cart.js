// Add to Cart
function addToCart(itemName) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = menuData.flatMap(section => section.items).find(item => item.name === itemName);
  
    if (item) {
      cart.push(item);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Item added to cart!');
    }
  }
  
  // Add to Wishlist
  function addToWishlist(itemName) {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const item = menuData.flatMap(section => section.items).find(item => item.name === itemName);
  
    if (item) {
      wishlist.push(item);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      alert('Item added to wishlist!');
    }
  }
  

  function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cartItems.length;
    document.getElementById('cartCount').textContent = cartCount;
  }
  
  function updateWishlistCount() {
    const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
    const wishlistCount = wishlistItems.length;
    document.getElementById('wishlistCount').textContent = wishlistCount;
  }
  
  function updateCounts() {
    updateCartCount();
    updateWishlistCount();
  }
  
  // Run the function when the page loads
  document.addEventListener('DOMContentLoaded', updateCounts);
  