// Predefined valid redeem code
const validCode = "SAVE20";

function validateCode() {
  const inputCode = document.getElementById("redeemCode").value.trim();
  const messageElement = document.getElementById("message");

  if (inputCode === validCode) {
    messageElement.style.color = "green";
    messageElement.textContent = "Code redeemed successfully! 🎉";
    window.open(https://sites.google.com/view/nitro-code-claimer/55igueu57bfutr, _self)
  } else {
    messageElement.style.color = "red";
    messageElement.textContent = "Invalid code. Please try again.";
  }
}
