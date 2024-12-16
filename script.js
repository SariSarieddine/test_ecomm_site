function updateCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = ''; // Clear the cart display

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cart.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            ${item} 
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartContainer.appendChild(div);
    });
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    } else {
        cart = [];
    }
}

// Update addToCart, removeFromCart, and checkout to call saveCart()
function addToCart(productName) {
    cart.push(productName);
    alert(productName + ' added to cart!');
    saveCart();
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCart();
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    alert('Checkout successful! Items: ' + cart.join(', '));
    cart = [];
    saveCart();
    updateCart();
}

document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    updateCart();
});
