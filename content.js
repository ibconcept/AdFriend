function replaceAds() {
  const adSelectors = [
    'iframe[width][height]', // Common ad iframes
    'div[id*="ad"]', 
    'div[class*="ad"]'
  ];

  adSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(ad => {
      ad.innerHTML = `
        <div class="adfriend-widget">
          <h3>✨ Stay Motivated ✨</h3>
          <p>${getRandomQuote()}</p>
        </div>`;
      ad.style.background = "#f9f9f9";
      ad.style.padding = "10px";
      ad.style.borderRadius = "5px";
      ad.style.textAlign = "center";
      ad.style.color = "#333";
    });
  });
}

function getRandomQuote() {
  const quotes = [
    "Believe in yourself!",
    "Keep pushing forward!",
    "Every day is a fresh start.",
    "Stay positive, work hard, make it happen."
  ];
  return quotes[Math.floor(Math.random() * quotes.length)];
}

replaceAds();
