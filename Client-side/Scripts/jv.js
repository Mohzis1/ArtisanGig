var clientContainer = document.getElementById("clientContainer");
var clientSignup = document.getElementById("clientSignup");

clientSignup.addEventListener("onclick", function() {
  myForm.style.display = "flex";
});
var myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  // Handle form submission logic here

  // Close the form overlay after form submission
  clientSignup.style.display = "none";
});