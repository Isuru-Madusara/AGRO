let lastScrollTop = 0;
const navbar = document.getElementById("mainNavbar");

window.addEventListener("scroll", function () {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop && currentScroll > 50) {
    // Scrolling down
    navbar.classList.add("navbar-hidden");
  } else {
    // Scrolling up
    navbar.classList.remove("navbar-hidden");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
//******************************************************************************************************************************************************** */
function openModal(id) {
  document.getElementById(id).classList.add("show");
}

function closeModal(id) {
  document.getElementById(id).classList.remove("show");
}
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'flex';
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'none';
  }
}
/***********************************************************************************************************************************************************/
function openModal2(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'flex';
    modal.classList.add('show');
  }
}

function closeModal2(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 300); // wait for fade out
  }
}

function openModal2(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'flex';
    setTimeout(() => {
      modal.classList.add('show');
    }, 10);
  }
}

function closeModal2(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 300); // match transition
  }
}
/********************************************marketplace******************************************************************************************************************/
// ✅ Item Data with separate priceDisplay and price (numeric)
const items = [
  { id: 1, name: "Premium Basmati Rice", category: "Grade A+", price: 45, priceDisplay: "Rs.45/kg", quantity: "15000 kg", description: "Aromatic long-grain rice perfect for biryani." },
  { id: 2, name: "Organic Jasmine Rice",  category: "Organic", price: 52, priceDisplay: "Rs.52/kg", quantity: "75000kg", description: "Naturally grown, soft and fragrant rice." },
  { id: 3, name: "Brown Rice Harvest",  category: "Grade A", price: 48, priceDisplay: "Rs.48/kg", quantity: "60000 kg", description: "Nutrient-rich brown rice, ideal for healthy diets." },
  { id: 4, name: "Red Raw Rice", category: "Grade B", price: 40, priceDisplay: "Rs.40/kg", quantity: "80000 kg", description: "Rich in fiber, ideal for diabetic diets." },
  { id: 5, name: "Steamed Samba Rice", category: "Grade A", price: 50, priceDisplay: "Rs.50/kg", quantity: "45000 kg", description: "Processed with steam to retain nutrients." },
  { id: 6, name: "Ponni Boiled Rice",category: "Grade A+", price: 47, priceDisplay: "Rs.47/kg", quantity: "70000 kg", description: "Popular in South India, great for daily meals." },
  { id: 7, name: "Matta Rice",category: "Organic", price: 55, priceDisplay: "Rs.55/kg", quantity: "30000 kg", description: "Rich Kerala-style red rice with high nutritional value." },
  { id: 8, name: "Parboiled Nadu",category: "Grade B", price: 42, priceDisplay: "Rs.42/kg", quantity: "65000 kg", description: "Perfect for bulk cooking and storage." },
  { id: 9, name: "Sticky Glutinous Rice", category: "Specialty", price: 60, priceDisplay: "Rs.60/kg", quantity: "50000kg", description: "Soft sticky rice used in traditional sweets and dumplings." }
];

const container = document.getElementById("marketplaceContainer");
const searchInput = document.getElementById("searchInput");

function renderItems(data) {
  container.innerHTML = "";
  data.forEach(item => {
    const div = document.createElement("div");
    div.className = "market-item";
    div.innerHTML = `
      <div class="market-item-content">
        <div class="tag">${item.category}</div>
        <h3>${item.name}</h3>
        <div class="price-box">
          <span>${item.priceDisplay}</span><span>${item.quantity}</span>
        </div>
        <button onclick="viewDetail(${item.id})">Buy Now</button>
      </div>
    `;
    container.appendChild(div);
  });
}

function viewDetail(id) {
  const item = items.find(i => i.id === id);
  const modal = document.getElementById("detailModal");
  const content = document.getElementById("modalContent");

  content.innerHTML = `
    <h2>${item.name}</h2>
    <p><strong>Category:</strong> ${item.category}</p>
    <p><strong>Price:</strong> ${item.priceDisplay}</p>
    <p><strong>Available:</strong> ${item.quantity}</p>
    <p>${item.description}</p>
    <button onclick="proceedToPayment('${item.name}', '${item.priceDisplay}', ${item.price})">Proceed to Payment</button>
  `;

  modal.style.display = "block";
}

function closeModal3() {
  document.getElementById("detailModal").style.display = "none";
}

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = items.filter(i =>
    i.name.toLowerCase().includes(keyword) ||
    i.category.toLowerCase().includes(keyword) 
  );
  renderItems(filtered);
});

renderItems(items);

function openModal4(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}

function closeModal4(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
    clearPaymentForms();
  }
}

function clearPaymentForms() {
  document.querySelectorAll('.payment-method-form2').forEach(div => div.classList.remove('show'));
}

function showPaymentForm(method) {
  clearPaymentForms();
  const formMap = {
    card: 'creditCardForm',
    bank: 'bankTransferForm',
    wallet: 'mobileWalletForm'
  };
  const formId = formMap[method];
  if (formId) {
    document.getElementById(formId).classList.add('show');
  }
}

function updateTotal() {
  const price = parseFloat(document.getElementById("priceNumeric").value);
  const quantity = parseFloat(document.getElementById("orderQty").value);
  const totalInput = document.getElementById("orderTotal");

  if (!isNaN(price) && !isNaN(quantity)) {
    const total = price * quantity;
    totalInput.value = (total % 1 === 0) ? total.toFixed(0) : total.toFixed(1);
  } else {
    totalInput.value = '';
  }
}

function proceedToPayment(name, displayPrice, numericPrice) {
  document.getElementById('orderItem').value = name;
  document.getElementById('orderPrice').value = displayPrice;
  document.getElementById('priceNumeric').value = numericPrice;

  document.getElementById('orderQty').value = '';
  document.getElementById('orderTotal').value = '';

  clearPaymentForms();
  showPaymentForm('card');
  openModal4('paymentModal');
}

function handlePayment() {
  alert("Your payment is being processed. Please wait...");
}
/***********************************************************************************************/
