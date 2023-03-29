const body = document.querySelector('body');
function displayErrorMessage() {
  
  const errorDiv = document.createElement('div');
  errorDiv.textContent = 'Error: No internet connection';
  errorDiv.style.color = 'red';
  errorDiv.style.fontWeight = 'bold';
  errorDiv.style.textAlign = 'center';
  errorDiv.style.marginTop = '20px';

  body.appendChild(errorDiv);
}

if (!navigator.onLine) {
  displayErrorMessage();
}

window.addEventListener('online', function() {
  const errorDiv = document.querySelector('.error-message');
  if (errorDiv) {
    body.removeChild(errorDiv);
  }
});

window.addEventListener('offline', function() {
  displayErrorMessage();
});