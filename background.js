chrome.storage.local.get("adContentPreference", (data) => {
  let content = "Stay positive!"; // Default content

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
      content = ["Keep going!", "Success is near!", "Stay curious!"][Math.floor(Math.random() * 3)];
      break;
  }

  // Replace ads with the selected content
  document.querySelectorAll("[class*='ad']").forEach(ad => {
    ad.innerHTML = `<div style="padding: 10px; font-size: 16px; color: #fff; background: #007bff; border-radius: 5px;">
        ${content}
    </div>`;
  });
});
