// JavaScript for Green Bridge E-commerce Site

// Product Data
const products = [
    { name: "Potato", type: "Vegetable", price: 20, image: "images/potato.jpg" },
    { name: "Onion", type: "Vegetable", price: 30, image: "images/onion.jpeg" },
    { name: "Cabbage", type: "Vegetable", price: 25, image: "images/cabbage.jpg" },
    { name: "Carrot", type: "Vegetable", price: 40, image: "images/carrot.webp" },
    { name: "Spinach", type: "Vegetable", price: 15, image: "images/spinach.webp" },
    { name: "Guava", type: "Fruit", price: 50, image: "images/guava.jpg" },
    { name: "Orange", type: "Fruit", price: 60, image: "images/orange.jpg" },
    { name: "Pomegranate", type: "Fruit", price: 100, image: "images/pomegranate.avif" },
    { name: "Coriander", type: "Spice", price: 10, image: "images/coriander.jpg" },
    { name: "Cumin", type: "Spice", price: 15, image: "images/cumin.webp" },
  ];
  
  // Load Featured Products
  const featuredRow = document.querySelector(".featured-row");
  const featuredProducts = products.slice(0, 5); // First 5 products for featured row
  
  featuredProducts.forEach((product) => {
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;
    featuredRow.appendChild(img);
  });
  
  // Scrolling Functionality for Featured Row
  const scrollLeftButton = document.querySelector(".scroll-left");
  const scrollRightButton = document.querySelector(".scroll-right");
  
  scrollLeftButton.addEventListener("click", () => {
    featuredRow.scrollBy({ left: -200, behavior: "smooth" });
  });
  
  scrollRightButton.addEventListener("click", () => {
    featuredRow.scrollBy({ left: 200, behavior: "smooth" });
  });
  
  // Load All Available Products
  const productGrid = document.querySelector(".product-grid");
  
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
  
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Type: ${product.type}</p>
      <p class="price">&#8377;${product.price}</p>
    `;
  
    productGrid.appendChild(productCard);
  });
  