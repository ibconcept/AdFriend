document.addEventListener("DOMContentLoaded", () => {
  const saveBtn = document.getElementById("saveBtn");

  if (!saveBtn) {
    console.error("Error: 'saveBtn' not found in the DOM.");
    return;
  }

  saveBtn.addEventListener("click", () => {
    const selectedOption = document.querySelector('input[name="adContent"]:checked');

    if (!selectedOption) {
      alert("Please select a preference!");
      return;
    }

    const contentPreference = selectedOption.value;

    chrome.storage.local.set({ adContentPreference: contentPreference }, () => {
      console.log("Preference saved:", contentPreference);
      alert("Preference saved!");
    });
  });

  // Load saved preference
  chrome.storage.local.get("adContentPreference", (data) => {
    if (data?.adContentPreference) {
      const option = document.querySelector(`input[value="${data.adContentPreference}"]`);
      if (option) option.checked = true;
    }
  });
});
