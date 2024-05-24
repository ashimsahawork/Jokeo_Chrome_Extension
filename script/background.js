// Handles background tasks and browser action click
chrome.action.onClicked.addListener(() => {
  fetchJoke(alertJoke);
});

// Fetch a dad joke from the API and invoke the provided callback
async function fetchJoke(callback) {
  try {
      const response = await fetch('https://icanhazdadjoke.com/slack', {
          headers: {
              Accept: 'application/json',
          },
      });
      const data = await response.json();
      const joke = data.attachments[0].text;
      callback(joke);
  } catch (error) {
      console.error('Error fetching joke:', error);
  }
}
