  // Sample menu items with Indian dishes
  const menu = [
      { name: "Butter Chicken", price: 250 },
      { name: "Paneer Tikka", price: 200 },
      { name: "Dal Makhani", price: 180 },
      { name: "Chicken Biryani", price: 300 },
      { name: "Vegetable Biryani", price: 240 },
      { name: "Masala Dosa", price: 120 },
      { name: "Idli Sambar", price: 100 },
      { name: "Rogan Josh", price: 320 },
      { name: "Aloo Paratha", price: 80 },
      { name: "Chole Bhature", price: 150 },
      { name: "Pav Bhaji", price: 130 },
      { name: "Tandoori Chicken", price: 350 },
      { name: "Malai Kofta", price: 220 },
      { name: "Palak Paneer", price: 200 },
      { name: "Fish Curry", price: 280 },
      { name: "Pani Puri", price: 60 },
      { name: "Samosa", price: 30 },
      { name: "Gulab Jamun", price: 50 },
      { name: "Rasgulla", price: 50 },
      { name: "Jalebi", price: 40 },
      { name: "Chicken Korma", price: 280 },
      { name: "Mutton Curry", price: 350 },
      { name: "Bengali Fish Fry", price: 300 },
      { name: "Hyderabadi Haleem", price: 400 },
      { name: "Shahi Paneer", price: 220 },
      { name: "Kashmiri Dum Aloo", price: 200 },
      { name: "Veg Pulao", price: 160 },
      { name: "Prawn Curry", price: 350 },
      { name: "Chicken Tikka Masala", price: 270 },
      { name: "Keema Naan", price: 150 },
      { name: "Plain Dosa", price: 90 },
      { name: "Onion Uttapam", price: 130 },
      { name: "Egg Curry", price: 180 },
      { name: "Chicken 65", price: 220 },
      { name: "Bhindi Masala", price: 150 },
      { name: "Kadhi Pakora", price: 140 },
      { name: "Aloo Gobi", price: 130 },
      { name: "Mysore Pak", price: 100 },
      { name: "Veg Manchurian", price: 180 },
      { name: "Hakka Noodles", price: 160 },
      { name: "Sweet Corn Soup", price: 120 },
      { name: "Tomato Soup", price: 100 },
      { name: "Paneer Butter Masala", price: 240 },
      { name: "Tandoori Roti", price: 20 },
      { name: "Butter Naan", price: 30 },
      { name: "Lassi", price: 60 },
      { name: "Mango Shake", price: 70 },
      { name: "Kheer", price: 80 },
      { name: "Puran Poli", price: 140 },
      { name: "Shrikhand", price: 100 },
      { name: "Rava Kesari", price: 110 },
      { name: "Thalassery Biryani", price: 320 },
      { name: "Appam with Stew", price: 200 },
      { name: "Chettinad Chicken", price: 280 },
      { name: "Chicken Chettinad", price: 260 },
      { name: "Veg Thali", price: 300 },
      { name: "Non-Veg Thali", price: 400 },
      { name: "Lemon Rice", price: 140 },
      { name: "Curd Rice", price: 130 },
      { name: "Prawn Biryani", price: 400 },
      { name: "Goan Fish Curry", price: 320 },
      { name: "Bengali Rasgulla", price: 50 },
      { name: "Dal Tadka", price: 180 },
      { name: "Veg Kurma", price: 160 },
      { name: "Coconut Chutney", price: 40 },
      { name: "Pesarattu", price: 120 },
      { name: "Khichdi", price: 150 },
      { name: "Litti Chokha", price: 180 },
      { name: "Misal Pav", price: 140 },
      { name: "Kachori", price: 50 },
      { name: "Bhel Puri", price: 70 },
      { name: "Sev Puri", price: 80 },
      { name: "Aloo Tikki", price: 60 },
      { name: "Rajma Chawal", price: 200 },
      { name: "Bhature Chole", price: 150 },
      { name: "Banana Chips", price: 50 },
      { name: "Idiyappam", price: 120 },
      { name: "Kothimbir Vadi", price: 80 },
      { name: "Masala Papad", price: 30 },
      { name: "Kurkure Bhindi", price: 100 },
    ];
    
    // DOM Elements
    const menuList = document.getElementById("menu-list");
    const cartList = document.getElementById("cart-list");
    const totalPriceEl = document.getElementById("total-price");
    const billModal = document.getElementById("bill-modal");
    const billList = document.getElementById("bill-list");
    const billTotal = document.getElementById("bill-total");
    const billNumber = document.getElementById("bill-number");
    const searchBar = document.getElementById("search-bar");
    
    let cart = [];
    
    // Render menu items
    function renderMenu(menuToRender) {
      menuList.innerHTML = "";
      menuToRender.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
          ${item.name} - ₹${item.price}
          <button onclick="addToCart(${index})">Add</button>
        `;
        menuList.appendChild(li);
      });
    }
    
    // Add item to cart
    function addToCart(index) {
      const item = menu[index];
      cart.push(item);
      renderCart();
    }
    
    // Render cart items
    function renderCart() {
      cartList.innerHTML = "";
      let total = 0;
      cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement("li");
        li.innerHTML = `
          ${item.name} - ₹${item.price}
          <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartList.appendChild(li);
      });
      totalPriceEl.textContent = total;
    }
    
    // Remove item from cart
    function removeFromCart(index) {
      cart.splice(index, 1);
      renderCart();
    }
    
    // Show bill modal
    document.getElementById("checkout-btn").addEventListener("click", () => {
      billModal.classList.remove("hidden");
      billList.innerHTML = "";
      cart.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ₹${item.price}`;
        billList.appendChild(li);
      });
      billTotal.textContent = cart.reduce((sum, item) => sum + item.price, 0);
      billNumber.textContent = Math.floor(Math.random() * 1000000);
    });
    
    // Close bill modal
    document.getElementById("close-modal").addEventListener("click", () => {
      billModal.classList.add("hidden");
      cart = [];
      renderCart();
    });
    
    // Search functionality
    searchBar.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const filteredMenu = menu.filter((item) =>
        item.name.toLowerCase().includes(searchTerm)
      );
      renderMenu(filteredMenu);
    });
    
    // Initial rendering of menu
    renderMenu(menu);
    