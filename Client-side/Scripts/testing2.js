document.getElementById('artisanSignup').addEventListener('click', function() {
    document.getElementById('formCont').classList.add('show');
  });
  
  document.addEventListener('click', function(event) {
    var formContainer = document.getElementById('formCont');
    if (!formContainer.contains(event.target) && event.target !== document.getElementById('artisanSignup')) {
      formContainer.classList.remove('show');
    }
  });
  