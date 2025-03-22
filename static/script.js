// Sample product data
const products = [
    {
        id: 1,
        name: "Fresh Apples",
        price: 299,
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        category: "fruits",
        description: "Sweet and juicy red apples, perfect for snacking or baking."
    },
    {
        id: 2,
        name: "Organic Bananas",
        price: 199,
        image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        category: "fruits",
        description: "Organic bananas, rich in potassium and naturally sweet."
    },
    {
        id: 3,
        name: "Fresh Spinach",
        price: 349,
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
        category: "vegetables",
        description: "Fresh and crisp spinach leaves, perfect for salads and cooking."
    },
    {
        id: 4,
        name: "Whole Milk",
        price: 249,
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
        category: "dairy",
        description: "Fresh whole milk from local farms, rich and creamy."
    },
    {
        id: 5,
        name: "Sourdough Bread",
        price: 499,
        image: "\\static\\photo\\SOURDOUGH.jpg",
        category: "bakery",
        description: "Artisanal sourdough bread, freshly baked with a perfect crust."
    },
    {
        id: 6,
        name: "Avocados",
        price: 599,
        image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80",
        category: "fruits",
        description: "Ripe and ready-to-eat avocados, perfect for guacamole or toast."
    },
    {
        id: 7,
        name: "Bell Peppers",
        price: 179,
        image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        category: "vegetables",
        description: "Colorful bell peppers, sweet and crunchy, great for salads and cooking."
    },
    {
        id: 8,
        name: "Greek Yogurt",
        price: 399,
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        category: "dairy",
        description: "Creamy Greek yogurt, high in protein and perfect for breakfast or snacks."
    },
    {
        id: 9,
        name: "Croissants",
        price: 699,
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1426&q=80",
        category: "bakery",
        description: "Buttery and flaky croissants, freshly baked every morning."
    },
    {
        id: 10,
        name: "Strawberries",
        price: 449,
        image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "fruits",
        description: "Sweet and juicy strawberries, perfect for desserts or eating fresh."
    },
    {
        id: 11,
        name: "Carrots",
        price: 149,
        image: "https://images.unsplash.com/photo-1447175008436-054170c2e979?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1412&q=80",
        category: "vegetables",
        description: "Fresh and crunchy carrots, great for snacking, salads, or cooking."
    },
    {
        id: 12,
        name: "Cheddar Cheese",
        price: 549,
        image: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "dairy",
        description: "Sharp cheddar cheese, aged to perfection for the best flavor."
    }
];
function populateCategory(category) {
    const categoryContainer = document.getElementById(`${category}-products`);
    if (!categoryContainer) return;
    categoryContainer.innerHTML = ""; // Clear existing content

    const categoryProducts = products.filter(product => product.category === category);

    categoryProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Rs ${product.price}.00</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        `;
        categoryContainer.appendChild(productCard);
    });
}

// Call the function for each category
populateCategory("fruits");
populateCategory("vegetables");
populateCategory("dairy");
populateCategory("bakery");

// Function to add items to the cart
window.addToCart = function (productName, productPrice) {
    alert(`${productName} added to cart for Rs ${productPrice}`);
}
;

// Initialize cart from localStorage or create empty cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
let isAdmin = localStorage.getItem('isAdmin') === 'true';

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Update auth link based on login status
    updateAuthLink();
    
    // Update cart count
    updateCartCount();
    
    // Load products on appropriate pages
    if (document.getElementById('featured-products')) {
        loadFeaturedProducts();
    }
    
    if (document.getElementById('all-products')) {
        loadAllProducts();
    }
    
  // Load category products on products page
    if (document.getElementById('fruits-products')) {
        loadCategoryProducts('fruits');
    }if (document.getElementById('vegetables-products')) {
        loadCategoryProducts('vegetables');
    } if (document.getElementById('dairy-products')) {
        loadCategoryProducts('dairy');
    } if (document.getElementById('bakery-products')) {
        loadCategoryProducts('bakery');
    }
    
    
    // Load cart items on cart page
    if (document.getElementById('cart-items')) {
        loadCartItems();
    }
    
    // Auth tabs functionality
    const authTabs = document.querySelectorAll('.auth-tab');
    if (authTabs.length > 0) {
        authTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                
                // Remove active class from all tabs and forms
                document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
                
                // Add active class to clicked tab and corresponding form
                this.classList.add('active');
                document.getElementById(`${tabId}-form`).classList.add('active');
            });
        });
        
        // Handle login form submission
        const loginForm = document.getElementById('login-form');
        if (!loginForm) {
            console.error("Login form not found.");
            return;
        }
        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const email = document.getElementById('login-email').value.trim();
            const password = document.getElementById('login-password').value.trim();
            const isAdmin = document.getElementById('admin-checkbox').checked;

            console.log("Sending Login Request: ", {email, password, isAdmin});

            try{
                const response = await fetch('http://127.0.0.1:5000/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password, isAdmin })
                });
                
                if (!response.ok) {
                    console.error("Failed to fetch:", response.status);
                    alert("Login failed.");
                    return;
                }

                const data = await response.json();
                console.log("Login Response:", data);

                if (response.ok) {
                    alert(data.message);
                    if(isAdmin){
                    window.location.href = "/admin";
                    }else{
                        window.location.href = "/account"
                    }
                } else {
                    alert(data.message || "Login failed.");
                }
            } catch(error){
                console.error('Error:', error);
                alert('Failed to login');
            }
        });
    
        
        // Handle register form submission
        const registerForm = document.getElementById('register-form');
        if (!registerForm) {
            console.error("Register form not found.");
            return;
        }
        registerForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('register-confirm-password').value;

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            try{
                const response = await fetch('http://127.0.0.1:5000/auth/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name, email, password, confirm_password: confirmPassword })
                });

                let result;
                try{
                    result = await response.json();
                } catch (error){
                    console.error('Invalid JSON response. The server might have returned an error page.', error);
                    return;
                }

                if (response.ok) {
                    localStorage.setItem('isLoggedIn', 'true');
                    localStorage.setItem('isAdmin', 'false');
                    window.location.href = '/';
                }else{
                    alert(result.message);
                }
            } catch(error){
                console.error('Error:', error);
                alert('Failed to register');
            }
        });
    }

    //Logout functionality
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn){
        logoutBtn.addEventListener('click', async function(){
            try{
                const response = await fetch('/logout', {
                    method: 'POST',
                });
                if (response.ok){
                    localStorage.setItem('isLoggedIn', 'false');
                    localStorage.setItem('isAdmin', 'false');
                    window.location.href = '/';
                }
            } catch(error){
                console.error('Error:', error);
            }
        });
    }
    
    
    // Account page tabs functionality
    const accountTabs = document.querySelectorAll('.account-sidebar li');
    if (accountTabs.length > 0) {
        accountTabs.forEach(tab => {
            if (tab.id === 'logout-btn') {
                tab.addEventListener('click', function() {
                    // Logout functionality
                    localStorage.setItem('isLoggedIn', 'false');
                    localStorage.setItem('isAdmin', 'false');
                    window.location.href = '/';
                });
            } else {
                tab.addEventListener('click', function() {
                    const tabId = this.getAttribute('data-tab');
                    
                    // Remove active class from all tabs and content
                    document.querySelectorAll('.account-sidebar li').forEach(t => {
                        if (t.id !== 'logout-btn') t.classList.remove('active');
                    });
                    document.querySelectorAll('.account-tab').forEach(c => c.classList.remove('active'));
                    
                    // Add active class to clicked tab and corresponding content
                    this.classList.add('active');
                    document.getElementById(tabId).classList.add('active');
                });
            }
        });
        
        // Handle add address button
        const addAddressBtn = document.getElementById('add-address-btn');
        if (addAddressBtn) {
            addAddressBtn.addEventListener('click', function() {
                document.getElementById('address-form').classList.toggle('hidden');
            });
        }
    }
    
    // Admin page tabs functionality
    const adminTabs = document.querySelectorAll('.admin-sidebar li');
    if (adminTabs.length > 0) {
        adminTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                
                // Remove active class from all tabs and content
                document.querySelectorAll('.admin-sidebar li').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.admin-tab').forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked tab and corresponding content
                this.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });
        
        // Load admin product list
        if (document.getElementById('admin-product-list')) {
            loadAdminProducts();
        }
        
        // Handle add product form submission
        const addProductForm = document.getElementById('add-product-form');
        if (addProductForm) {
            addProductForm.addEventListener('submit', async function(e) {
                e.preventDefault();
                const formData = new FormData(addProductForm);
                const productData = {
                    name: formData.get('name'),
                    category: formData.get('category'),
                    price: parseFloat(formData.get('price')),
                    image_url: formData.get('image_url'),
                    description: formData.get('description')
                };

                console.log("Submitting product data:", productData);

                try {
                    const response = await fetch('http://127.0.0.1:5000/add_product', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(productData)
                    });

                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }

                    let result;
                    try{
                        result = await response.json();
                    } catch (error){
                        console.error('Invalid JSON response. The server might have returned an error page.', error);
                        return;
                    }

                    alert(result.message);
                    addProductForm.reset();
                    loadAdminProducts(); // Reload products after adding
                } catch (error) {
                    console.error('Error:', error);
                    alert('Failed to add product');
                }
            });
        }

        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                addToCart(productId);
            });
        });
        
        // Handle certification form submission
        const certificationForm = document.getElementById('certification-form');
        if (certificationForm) {
            certificationForm.addEventListener('submit', function(e) {
                e.preventDefault();
                // In a real app, this would send data to a server
                alert('Certification uploaded successfully!');
                this.reset();
            });
        }
    }
    
    // Checkout button functionality
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            
            // Show checkout modal
            document.getElementById('checkout-modal').style.display = 'block';
        });
        
        // Close modal when clicking on X
        document.querySelector('.close')?.addEventListener('click', function() {
            document.getElementById('checkout-modal').style.display = 'none';
        });
        
        // Close modal when clicking outside of it
        window.addEventListener('click', function(e) {
            if (e.target === document.getElementById('checkout-modal')) {
                document.getElementById('checkout-modal').style.display = 'none';
            }
        });
        
        // Handle checkout form submission
        const checkoutForm = document.getElementById('checkout-form');
        if (checkoutForm) {
            checkoutForm.addEventListener('submit', function(e) {
                e.preventDefault();
                // In a real app, this would process payment and create an order
                alert('Order placed successfully!');
                cart = [];
                localStorage.setItem('cart', JSON.stringify(cart));
                window.location.href = '/';
            });
        }
    }

    // Example usage: Call this function when an image URL is submitted
    document.getElementById('upload-image-form')?.addEventListener('submit', function(e) {
        e.preventDefault();
        const imageUrl = document.getElementById('image-url').value;
        const description = document.getElementById('description-input').value;
        uploadImageForQA(imageUrl, description);
    });

    const uploadImageForm = document.getElementById('upload-image-form');
    const qaResults = document.getElementById('qa-results');

    if (uploadImageForm) {
        uploadImageForm.addEventListener('submit', async function (event) {
            event.preventDefault();
            const formData = new FormData(uploadImageForm);
            try {
                const response = await fetch('http://127.0.0.1:5000/upload', {
                    method: 'POST',
                    body: formData
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                let result;
                try{
                    result = await response.json();
                } catch (error){
                    console.error('Invalid JSON response. The server might have returned an error page.', error);
                    return;
                }

                qaResults.innerHTML = `
                    <h3>QA Results</h3>
                    <p><strong>Status:</strong> ${result.image.status}</p>
                    <p><strong>Blurry:</strong> ${result.image.blurry}</p>
                    <p><strong>Watermark:</strong> ${result.image.watermark}</p>
                    <p><strong>Certification:</strong> ${result.certification}</p>
                    <p><strong>Description:</strong> ${result.description}</p>
                `;
            } catch (error) {
                console.error('Error:', error);
                qaResults.innerHTML = `<p>Error: ${error.message}</p>`;
            }
        });
    }

    function addToCartEventListeners() {
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productId = this.getAttribute('data-id');
                addToCart(productId);
            });
        });
    }

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);

        if (!product) {
            console.error('Product not found');
            return;
        }

        // Retrieve the current cart from localStorage or initialize an empty cart
        let cartData = localStorage.getItem('cart');
        let cart = [];
        if (cartData) {
            try{
                cart = JSON.parse(cartData);
            } catch(error){
                console.error('Failed to parse cart data:', error);
                localStorage.removeItem('cart'); //reset if corrupted
            }
        }

        // Check if the product is already in the cart
        const existingProduct = cart.find(item => item.id === productId);

        if (existingProduct) {
            // If the product is already in the cart, increase its quantity
            existingProduct.quantity += 1;
        } else {
            // If the product is not in the cart, add it with a quantity of 1
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }

        // Save the updated cart back to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Update the cart count in the UI
        updateCartCount();

        // Optionally, show a confirmation message
        alert(`${product.name} added to cart!`);

        loadCartItems();
    }

    // Fetch products from backend
    async function fetchProducts() {
        try {
            const response = await fetch('http://127.0.0.1:5000/products');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                throw new TypeError("Oops, we haven't got JSON!");
            }
            const data = await response.json();
            console.log('Products:', data);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    fetchProducts();

    // Function to load featured products
    async function loadFeaturedProducts() {
        const featuredContainer = document.getElementById('featured-products');
        const products = await fetchProducts();
        const featuredProducts = products.sort(() => 0.5 - Math.random()).slice(0, 4);
        featuredContainer.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
        addToCartEventListeners();
    }

    // Function to load all products
    async function loadAllProducts() {
        const productsContainer = document.getElementById('all-products');
        const products = await fetchProducts();
        productsContainer.innerHTML = products.map(product => createProductCard(product)).join('');
        addToCartEventListeners();
    }

    // Function to load products by category
    async function loadCategoryProducts(category) {
        const categoryContainer = document.getElementById(`${category}-products`);
        const products = await fetchProducts();
        const categoryProducts = products.filter(product => product.category === category);
        categoryContainer.innerHTML = categoryProducts.map(product => createProductCard(product)).join('');
        addToCartEventListeners();
    }

    updateCartCount();
});

// Function to update auth link based on login status
function updateAuthLink() {
    const authLink = document.getElementById('auth-link');
    if (authLink) {
        if (localStorage.getItem('isLoggedIn') === 'true') {
            authLink.innerHTML = '<a href="/account">Account</a>';
            // Add admin link if user is admin
            if (localStorage.getItem('isAdmin') === 'true' && !document.querySelector('a[href="/admin"]')) {
                const adminLink = document.createElement('li');
                adminLink.innerHTML = '<a href="/admin">Admin</a>';
                authLink.parentNode.insertBefore(adminLink, authLink.nextSibling);
            }
        } else {
            authLink.innerHTML = '<a href="/login">Login/Register</a>';
        }
    }
}

// Function to update cart count
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    // Update the cart count in the UI
    const cartCountElements = document.querySelectorAll('#cart-count');
    cartCountElements.forEach(element => {
        element.textContent = totalItems;
    });
}

// Function to load featured products
function loadFeaturedProducts() {
    const featuredContainer = document.getElementById('featured-products');
    // Get 4 random products for featured section
    const featuredProducts = [...products].sort(() => 0.5 - Math.random()).slice(0, 4);
    
    featuredContainer.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
    
    // Add event listeners to add to cart buttons
    addToCartEventListeners();
}

// Function to load all products
function loadAllProducts() {
    const productsContainer = document.getElementById('all-products');
    productsContainer.innerHTML = products.map(product => createProductCard(product)).join('');
    
    // Add event listeners to add to cart buttons
    addToCartEventListeners();
}

// Function to load products by category
function loadCategoryProducts(category) {
    const categoryContainer = document.getElementById(`${category}-products`);
    const categoryProducts = products.filter(product => product.category === category);
    
    categoryContainer.innerHTML = categoryProducts.map(product => createProductCard(product)).join('');
    
    // Add event listeners to add to cart buttons
    addToCartEventListeners();
}
// Function to create product card HTML
function createProductCard(product) {
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">Rs ${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        </div>
    `;
}

// Function to load cart items
function loadCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    
    if (cart.length === 0) {
        emptyCartMessage.style.display = 'block';
        document.getElementById('subtotal').textContent = 'Rs 0.00';
        document.getElementById('shipping').textContent = 'Rs 0.00';
        document.getElementById('total').textContent = 'Rs 0.00';
        return;
    }
    
    emptyCartMessage.style.display = 'none';
    
    cartItemsContainer.innerHTML = cart.map(item => `  
        <div class="cart-item">  
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">  
            <div class="cart-item-details">  
                <h3 class="cart-item-name">${item.name}</h3>  
                <p class="cart-item-price">Rs ${item.price.toFixed(2)}</p>  
                <div class="cart-item-quantity">  
                    <button class="quantity-btn decrease" data-id="${item.id}">-</button>  
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">  
                    <button class="quantity-btn increase" data-id="${item.id}">+</button>  
                    <button class="cart-item-remove" data-id="${item.id}">Remove</button>  
                </div>  
            </div>  
        </div>`  
    ).join("");  
    
    // Calculate totals
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? 5.99 : 0;
    const total = subtotal + shipping;
    
    document.getElementById('subtotal').textContent = `Rs ${subtotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = `Rs ${shipping.toFixed(2)}`;
    document.getElementById('total').textContent = `Rs ${total.toFixed(2)}`;
    
    // Add event listeners to quantity buttons and remove buttons
    const decreaseButtons = document.querySelectorAll('.quantity-btn.decrease');
    const increaseButtons = document.querySelectorAll('.quantity-btn.increase');
    const removeButtons = document.querySelectorAll('.cart-item-remove');
    const quantityInputs = document.querySelectorAll('.quantity-input');
    
    decreaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            updateCartItemQuantity(productId, -1);
        });
    });
    
    increaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            updateCartItemQuantity(productId, 1);
        });
    });
    
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            removeFromCart(productId);
        });
    });
    
    quantityInputs.forEach(input => {
        input.addEventListener('change', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            const newQuantity = parseInt(this.value);
            
            if (newQuantity < 1) {
                this.value = 1;
                return;
            }
            
            setCartItemQuantity(productId, newQuantity);
        });
    });
}

// Function to update cart item quantity
function updateCartItemQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity < 1) {
            item.quantity = 1;
        }
        
        // Save cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Reload cart items
        loadCartItems();
        
        // Update cart count
        updateCartCount();
    }
}

// Function to set cart item quantity
function setCartItemQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity = quantity;
        
        // Save cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Reload cart items
        loadCartItems();
        
        // Update cart count
        updateCartCount();
    }
}

// Function to remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Reload cart items
    loadCartItems();
    
    // Update cart count
    updateCartCount();
}

// Function to load admin products
function loadAdminProducts() {
    const adminProductList = document.getElementById('admin-product-list');
    
    adminProductList.innerHTML = products.map(product => `
        <div class="product-list-item">
            <div class="product-list-info">
                <strong>${product.name}</strong> - $${product.price.toFixed(2)} (${product.category})
            </div>
            <div class="product-list-actions">
                <button class="edit-btn" data-id="${product.id}">Edit</button>
                <button class="delete-btn" data-id="${product.id}">Delete</button>
            </div>
        </div>
    `).join('');
    
    // Add event listeners to edit and delete buttons
    // In a real app, these would open edit forms and delete products
    const editButtons = document.querySelectorAll('.edit-btn');
    const deleteButtons = document.querySelectorAll('.delete-btn');
    
    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            alert(`Edit product with ID: ${productId}`);
        });
    });
    
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            alert(`Delete product with ID: ${productId}`);
        });
    });
}

// Function to upload image URL and get QA results
function uploadImageForQA(imageUrl, description) {
    const formData = new FormData();
    formData.append('image_url', imageUrl);
    formData.append('description', description);

    fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('QA Results:', data);
        // Handle the QA results here (e.g., display them on the page)
        displayQAResults(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Function to display QA results on the page
function displayQAResults(data) {
    const resultsContainer = document.getElementById('qa-results');
    resultsContainer.innerHTML = `
        <h3>Image Analysis Results</h3>
        <p><strong>Status:</strong> ${data.image.status}</p>
        <p><strong>Blurry:</strong> ${data.image.blurry}</p>
        <p><strong>Watermark:</strong> ${data.image.watermark}</p>
        <p><strong>Certification:</strong> ${data.certification}</p>
        <p><strong>Description:</strong> ${data.description}</p>
    `;
}

// Example usage: Call this function when an image URL is submitted
document.getElementById('upload-image-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const imageUrl = document.getElementById('image-url').value;
    const description = document.getElementById('description-input').value;
    
    uploadImageForQA(imageUrl, description);
});
