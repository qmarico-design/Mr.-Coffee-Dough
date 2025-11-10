alert(`Thank you, ${name}! Your purchase is successful.\nChange: ₱${change}`);

localStorage.removeItem("cart");
window.location.href = "products.html";

const receiptData = {
  name: name,
  total: total,
  paid: payment,
  change: payment - total,
  time: new Date().toLocaleString()
};

localStorage.setItem("receiptData", JSON.stringify(receiptData));
localStorage.removeItem("cart");
window.location.href = "receipt.html";
