var openFormButton = document.getElementById("openFormButton");
var formOverlay = document.getElementById("formOverlay");

openFormButton.addEventListener("click", function() {
  formOverlay.style.display = "flex";
});

var myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  // Handle form submission logic here

  // Close the form overlay after form submission
  formOverlay.style.display = "none";
});