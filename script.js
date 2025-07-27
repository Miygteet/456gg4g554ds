// Predefined valid redeem code
const validCode = "SAVE20";

function validateCode() {
  const inputCode = document.getElementById("redeemCode").value.trim();
  const messageElement = document.getElementById("message");

  if (inputCode === validCode) {
    messageElement.style.color = "green";
    messageElement.textContent = "Code redeemed successfully! 🎉";
  } else {
    messageElement.style.color = "red";
    messageElement.textContent = "Invalid code. Please try again.";
  }
}
