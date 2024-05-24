// Handles UI interactions in the popup window
document.addEventListener('DOMContentLoaded', () => {
  fetchJoke(displayJoke);
});

// Display the retrieved joke in the main-content element
function displayJoke(joke) {
  document.getElementById('main-content').textContent = joke + ' 😂';

  // var img = document.createElement('img');
  // img.src = 'images/logo_16.png'; // Set the source of the image
  // img.alt = 'Ha Ha 😂'; // Set the alt text of the image


  // // Append both the image and text to the parent element
  // document.getElementById('main-content').appendChild(img);
}
