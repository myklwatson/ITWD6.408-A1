/* ----------------------------------------
   DEMO 2: Product Catalog
   Search, Filter by Category, Sort by Price, Add to Cart.
   ---------------------------------------- */
   

// --- Product Array ---

const products = [
  // SMARTPHONES
  {
    id: 1,
    category: "Smartphone",
    name: "Apple iPhone 17 Pro",
    price: 2349,
    description: "iPhone 17 Pro. The most powerful iPhone ever. Brilliant 6.3-inch display, aluminium unibody design, A19 Pro chip, all 48MP rear cameras and breakthrough battery life",
    inStock: true,
    stockQuantity: 25,
    image: "https://cdn.shopify.com/s/files/1/0566/7120/7498/files/462351-Product-0-I-638930523019458658_600x600.jpg?v=1757456526",
  },
  {
    id: 2,
    category: "Smartphone",
    name: "Samsung Galaxy S26",
    price: 1499,
    description: "The Galaxy S26 pushes you further with the most advanced AI and cutting-edge technology.",
    inStock: true,
    stockQuantity: 18,
    image: "https://cdn.shopify.com/s/files/1/0566/7120/7498/files/471553-Product-0-I-639063617401811164_600x600.jpg?v=1770765019",
  },
  {
    id: 3,
    category: "Smartphone",
    name: "OPPO Find N6",
    price: 2998,
    description: "OPPO Find N6, your work-play hub. Enjoy the seamless viewing experience on the 8.1-inch inner display. The Find N6’s display remains exceptionally flat, even after 600,000 folds.",
    inStock: true,
    stockQuantity: 15,
    image: "https://cdn.shopify.com/s/files/1/0566/7120/7498/files/474057-Product-0-I-639094339205665826_600x600.jpg?v=1773837196",
  },

  // TABLETS
  {
    id: 4,
    category: "Tablet",
    name: "Apple iPad Pro 11-inch 256GB",
    price: 2399,
    description: "11-Inch Ultra Retina XDR Display, The world’s most advanced display, featuring extreme brightness, precise contrast, ProMotion, P3 wide colour and True Tone",
    inStock: true,
    stockQuantity: 14,
    image: "https://www.jbhifi.co.nz/cdn/shop/files/465735-Product-0-I-638961726002796640.jpg?v=1760576109",
  },
  {
    id: 5,
    category: "Tablet",
    name: "Samsung Galaxy Tab S10+",
    price: 1698,
    description: "Screen - 12.4 inch (2800 x 1752) Dynamic AMOLED 2x display, Storage & RAM - 512GB Storage with 12GB RAM,Enhanced feature - Take your productivity to the next level with Galaxy AI",
    inStock: true,
    stockQuantity: 10,
    image: "https://cdn.shopify.com/s/files/1/0566/7120/7498/files/444941-Product-0-I-638917032038840942_600x600.jpg?v=1756111517",
  },
  {
    id: 6,
    category: "Tablet",
    name: "Microsoft Surface Pro 11",
    price: 2199,
    description: "2-in-1 tablet with full Windows OS, detachable keyboard, and laptop-level performance.",
    inStock: false,
    stockQuantity: 0,
    image: "https://cdn.shopify.com/s/files/1/0566/7120/7498/files/454928-Product-0-I-638917034776110642_600x600.jpg?v=1756111753",
  },

  // LAPTOPS
  {
    id: 7,
    category: "Laptop",
    name: "Apple MacBook Pro 14-inch M5 1TB/16GB",
    price: 3899,
    description: "The 14.2-inch Liquid Retina XDR display, Along with a next-generation CPU, faster unified memory and up to 2x faster SSD storage, M5 Pro features a more powerful GPU with a Neural Accelerator built into each core, delivering faster AI performance, 1TB SSD with 24GB RAM",
    inStock: true,
    stockQuantity: 8,
    image: "https://cdn.shopify.com/s/files/1/0566/7120/7498/files/465731-Product-0-I-638961663610988370_600x600.jpg?v=1760569576",
  },
  {
    id: 8,
    category: "Laptop",
    name: "DDell 15 DC15255 15.6-inch FHD 120Hz Laptop (Ryzen 5)[512GB]",
    price: 988,
    description: "Screen - 15.6-inch FHD (1920 x 1080) 120Hz WVA display, Speed - AMD Ryzen 5 7520U Quad Core Processor (up to 4.3GHz), Storage & RAM - 512GB M.2 SSD storage with 8GB RAM",
    inStock: true,
    stockQuantity: 10,
    image: "https://cdn.shopify.com/s/files/1/0566/7120/7498/files/461011-Product-0-I-638917037727806168_600x600.jpg?v=1756111872",
  },
  {
    id: 9,
    category: "Laptop",
    name: "Lenovo IdeaPad Slim 3 14-inch FHD Laptop (AMD Ryzen 3 - 7320U)[512GB]",
    price: 888,
    description: "Screen - 14-inch Full HD (1920 x 1080) TN display, Speed - AMD Ryzen 3 – 7320U 4 core processor (up to 4.1GHz), Storage & RAM - 512GB SSD with 8GB RAM",
    inStock: true,
    stockQuantity: 9,
    image: "https://cdn.shopify.com/s/files/1/0566/7120/7498/files/477567-Product-0-I-639174385203725600_600x600.jpg?v=1781841784",
  }
];


// --- Track State of Controls ---
let currentSearchTerm = "";
let currentCategory = "All";
let currentSort = "default";

// --- Track Items in Cart ---
let cart = JSON.parse(localStorage.getItem("cart")) || [];


/* -------------------- PRODUCT CARD RENDERING -------------------- */

// Product Card
function renderProductCard(item) {
    const status = item.inStock
        ? '<span class="badge bg-success">In Stock</span>'
        : '<span class="badge bg-danger">Out of Stock</span>';

    return `
        <div class="col-12 col-md-6 col-lg-4 mb-4">
            <div class="card demo-card h-100">
                <div class="product-image-wrapper">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="card-body">
                    <span class="badge bg-primary mb-2">${item.category}</span>
                    <h5>${item.name}</h5>
                    <h6 class="text-success mb-2">$${item.price.toLocaleString()}</h6>
                    <p>${item.description}</p>
                    <div class="mb-2"><strong>Status:</strong> ${status}</div>
                    <div class="mb-2"><strong>Stock Quantity:</strong> ${item.stockQuantity}</div>
                    <button
                        type="button"
                        class="btn btn-sm btn-primary add-to-cart-btn"
                        data-id="${item.id}"
                        ${item.inStock ? "" : "disabled"}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
}

/* -------------------- GRID RENDERING -------------------- */

// Render Products Grid
function renderProductGrid(list) {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = list.map(renderProductCard).join("");
}

/* -------------------- COMBINED SEARCH + FILTER + SORT -------------------- */

// Search, Filter, Sort - Product Array
function applyControls() {
    let result = products.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(currentSearchTerm);
        const matchesCategory = currentCategory === "All" || item.category === currentCategory;
        return matchesSearch && matchesCategory;
    });

    if (currentSort === "asc") {
        result.sort((a, b) => a.price - b.price);
    } else if (currentSort === "desc") {
        result.sort((a, b) => b.price - a.price);
    }

    // if currentSort === "default", skip sorting entirely — keeps array order
    if (result.length === 0) {
        document.getElementById("productGrid").innerHTML =
            `<div class="col-12 text-center text-muted py-5">No products match your search.</div>`;
    } else {
        renderProductGrid(result);
    }
}

/* -------------------- SEARCH -------------------- */

function handleSearchInput() {
    currentSearchTerm = document.getElementById("searchInput").value.toLowerCase();
    applyControls();
}

/* -------------------- FILTER (CATEGORY) -------------------- */

// Populate Dropdowns
function populateCategoryOptions() {
    const categoryFilter = document.getElementById("categoryFilter");
    categoryFilter.innerHTML = "";
    categoryFilter.add(new Option("All Categories", "All"));

    const categories = [...new Set(products.map(item => item.category))];
    categories.forEach(category => {
        categoryFilter.add(new Option(category, category));
    });
}

function handleCategoryChange() {
    currentCategory = document.getElementById("categoryFilter").value;
    applyControls();
}

/* -------------------- SORT -------------------- */

function handleSortChange() {
    currentSort = document.getElementById("sortPrice").value;
    applyControls();
}

/* -------------------- ADD TO CART -------------------- */

// Add to Cart 
function initCartEvents() {
    document.getElementById("productGrid").addEventListener("click", (e) => {
    if (!e.target.classList.contains("add-to-cart-btn")) return;

    const productId = Number(e.target.dataset.id);
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);
    const currentQtyInCart = existing ? existing.qty : 0;

    // Prevent Adding More Than Available Stock
    if (currentQtyInCart >= product.stockQuantity) {
        alert(`Sorry, only ${product.stockQuantity} of "${product.name}" are in stock.`);
        return;
    }

    if (existing) {
        existing.qty++;
    } else {
        cart.push({ id: product.id, name: product.name, price: product.price, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
});

    // Remove from Cart
document.getElementById("cartSummary").addEventListener("click", (e) => {
    if (!e.target.classList.contains("remove-from-cart-btn")) return;

    const productId = Number(e.target.dataset.id);
    const cartItem = cart.find(item => item.id === productId);
    if (!cartItem) return;

    let removeQty = 1;

    if (cartItem.qty > 1) {
        const input = prompt(
            `You have ${cartItem.qty} of "${cartItem.name}" in your cart. How many would you like to remove?`,
            cartItem.qty
        );

        // User cancelled the prompt — do nothing
        if (input === null) return;

        const parsed = parseInt(input, 10);

        // Guard against invalid input (blank, letters, negative, zero)
        if (isNaN(parsed) || parsed <= 0) {
            alert("Please enter a valid number greater than 0.");
            return;
        }

        removeQty = parsed;
    }

    if (removeQty >= cartItem.qty) {
        // Removing all (or more than available) — remove the line entirely
        cart = cart.filter(item => item.id !== productId);
    } else {
        // Partial removal — just decrement
        cartItem.qty -= removeQty;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
});
}

// Render Cart Summary
function renderCart() {
    const cartContainer = document.getElementById("cartSummary");
    const badge = document.getElementById("cartCountBadge");

    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

    if (cart.length === 0) {
        cartContainer.innerHTML = "";
        cartContainer.classList.add("d-none");
        badge.classList.add("d-none");
        return;
    }

    cartContainer.classList.remove("d-none");
    badge.classList.remove("d-none");
    badge.innerHTML = `<i class="bi bi-cart-fill"></i> ${totalItems} item${totalItems !== 1 ? "s" : ""}`;

    const itemsHTML = cart.map(item => `
        <div class="row align-items-center py-2 border-bottom">
            <div class="col-5">${item.name}</div>
            <div class="col-2 text-center">${item.qty}</div>
            <div class="col-2 text-end text-nowrap">$${(item.price * item.qty).toLocaleString()}</div>
            <div class="col-3 text-end">
                <button type="button" class="btn btn-sm btn-outline-danger remove-from-cart-btn" data-id="${item.id}">
                    Remove
                </button>
            </div>
        </div>
    `).join("");

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

   cartContainer.innerHTML = `
      <div class="card shadow-sm p-3">
         <h5 class="fw-bold mb-3">Your Cart</h5>

         <div class="row fw-bold border-bottom pb-2">
               <div class="col-5">Product</div>
               <div class="col-2 text-center">Qty</div>
               <div class="col-2 text-end text-nowrap">Cost</div>
               <div class="col-3 text-end"></div>
         </div>

         ${itemsHTML}

         <div class="row pt-3">
               <div class="col-9 text-end fw-bold">Total:</div>
               <div class="col-3 text-end fw-bold text-nowrap">$${total.toLocaleString()}</div>
         </div>
      </div>
   `;
}

/* -------------------- INIT -------------------- */

document.addEventListener("DOMContentLoaded", () => {
    populateCategoryOptions();
    document.getElementById("searchInput").addEventListener("input", handleSearchInput);
    document.getElementById("categoryFilter").addEventListener("change", handleCategoryChange);
    document.getElementById("sortPrice").addEventListener("change", handleSortChange);

    applyControls(); 

    initCartEvents();
    renderCart();
});