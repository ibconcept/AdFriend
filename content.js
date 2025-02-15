// Function to get random content based on user preference
function getRandomContent(preference) {
  if (preference === "random") {
    // Random facts if "random" is selected
    const randomFacts = [
      "Honey never spoils. Archaeologists have found pots of honey in ancient tombs that are over 3,000 years old and still edible!",
      "A group of flamingos is called a 'flamboyance.'",
      "Bananas are berries, but strawberries are not!",
      "An octopus has three hearts and blue blood.",
      "A day on Venus is longer than a year on Venus.",
      "Humans share 60% of their DNA with bananas!"
    ];
    return randomFacts[Math.floor(Math.random() * randomFacts.length)];
  } else {
    // Default motivational quotes for other preferences
    const quotes = [
      "Believe in yourself!",
      "Keep pushing forward!",
      "Every day is a fresh start.",
      "Stay positive, work hard, make it happen."
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
}

// Function to replace ads with selected content
function replaceAds() {
  // Get the content preference from chrome storage
  chrome.storage.local.get("adContentPreference", (data) => {
    let content = "Stay positive!"; // Default content

    // Determine content based on the preference
    switch (data.adContentPreference) {
      case "reminder":
        content = "Don't forget to take breaks!";
        break;
      case "inspiration":
        content = "You are capable of amazing things!";
        break;
      case "continuous-learning":
        content = "Learn something new today!";
        break;
      case "random":
        content = getRandomContent("random"); // Fetch a random fact
        break;
      default:
        content = "Stay positive!"; // Default message
        break;
    }

    // Replace the ads with the selected content
    const adSelectors = [
      'iframe[width][height]', // Common ad iframes
      'div[id*="ad"]',
      'div[class*="ad"]'
    ];

    adSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(ad => {
        ad.innerHTML = `
          <div class="adfriend-widget" style="padding: 10px; font-size: 16px; color: #fff; background: #007bff; border-radius: 5px; text-align: center;">
            ${content}
          </div>`;
      });
    });
  });
}

// Call the function to replace ads
replaceAds();
