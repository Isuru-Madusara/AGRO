
document.getElementById("appointmentForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const email = document.getElementById("email").value.trim();
  const riceType = document.getElementById("riceType").value;
  const quantity = parseInt(document.getElementById("quantity").value);
  const date = document.getElementById("date").value;
  const location = document.getElementById("location").value.trim();

  const phoneRegex = /^07\d{8}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const today = new Date().toISOString().split("T")[0];

  if (name.length < 3) {
    alert("Name must be at least 3 characters.");
    return;
  }

  if (!phoneRegex.test(contact)) {
    alert("Please enter a valid contact number (e.g., 07XXXXXXXX).");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!riceType) {
    alert("Please select a type of rice.");
    return;
  }

  if (isNaN(quantity) || quantity < 100) {
    alert("Quantity must be at least 100 kg.");
    return;
  }

  if (!date || date < today) {
    alert("Please select a valid appointment date (today or later).");
    return;
  }

  if (location.length < 3) {
    alert("Please enter a valid pickup location.");
    return;
  }

});

  document.getElementById("appointmentForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    alert("Appointment submitted successfully!");

    this.reset(); // Clear all form fields
  });