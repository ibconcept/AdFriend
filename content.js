// Function to get random content based on user preference
function getRandomContent(preference) {
  if (preference === "amazing-fact") {
    // Amazing Facts with emojis
    const amazingFacts = [
      "Honey never spoils. Archaeologists have found pots of honey in ancient tombs that are over 3,000 years old and still edible! 🍯⏳",
      "A group of flamingos is called a 'flamboyance.' 🦩🔥",
      "Bananas are berries, but strawberries are not! 🍌🍓",
      "An octopus has three hearts and blue blood. 🐙💙",
      "A day on Venus is longer than a year on Venus. 🌍➡️🌑",
    ];
    return amazingFacts[Math.floor(Math.random() * amazingFacts.length)];
  } else {
    // Motivational quotes with emojis for other preferences
    const motivationalQuotes = {
      reminder: [
        "Don't forget to take breaks! 🛑💪",
        "Take time for yourself. You deserve it! 🧘‍♂️💖",
        "Breaks are essential for productivity! ⏸️⚡",
        "Pause and breathe! You got this! 🌬️✨",
        "Self-care is key to success. 🌱💫"
      ],
      inspiration: [
        "You are capable of amazing things! 💥🌟",
        "Believe in yourself and all that you are. ✨💪",
        "Success starts with believing in yourself. 🏆👑",
        "Dream big, work hard, make it happen. 🌠🚀",
        "The sky's the limit! Reach for it! 🌌💡"
      ],
      continuousLearning: [
        "Learn something new today! 📚🔍",
        "Knowledge is power! 🧠💡",
        "Never stop learning, because life never stops teaching. 🎓🔄",
        "Expand your mind every day. 🌱💭",
        "Every day is a chance to learn something new! 🌞🧑‍🏫"
      ],
    };

    // Get a random quote for the selected preference
    const quotes = motivationalQuotes[preference] || motivationalQuotes.inspiration; // Default to inspiration if no match
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
}

// Function to replace ads with selected content
function replaceAds() {
  // Get the content preference from chrome storage
  chrome.storage.local.get("adContentPreference", (data) => {
    let content = "Stay positive! 🌟"; // Default content (We’ll change this below)

    // Determine content based on the preference, default to "amazing-fact"
    switch (data.adContentPreference) {
      case "reminder":
        content = getRandomContent("reminder");
        break;
      case "inspiration":
        content = getRandomContent("inspiration");
        break;
      case "continuousLearning":
        content = getRandomContent("continuousLearning");
        break;
      case "amazing-fact":
        content = getRandomContent("amazing-fact"); // Fetch an amazing fact
        break;
      default:
        content = getRandomContent("amazing-fact"); // Default to amazing-fact
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
          <div class="adfriend-widget" style="padding: 10px; font-size: 16px; color: #fff; background: #007bff; border-radius: 5px; text-align: center; text-decoration: none;">
            ${content}
          </div>`;
      });
    });
  });
}

// Call the function to replace ads
replaceAds();
