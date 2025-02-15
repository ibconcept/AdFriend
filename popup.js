document.getElementById('saveBtn').addEventListener('click', () => {
  const selectedOption = document.querySelector('input[name="adContent"]:checked');
  
  if (selectedOption) {
    const contentPreference = selectedOption.value;
    
    // Save the preference to chrome storage
    chrome.storage.local.set({ adContentPreference: contentPreference }, () => {
      alert('Preference saved!');
    });
  } else {
    alert('Please select a preference!');
  }
});

// Load the saved preference when the popup opens
window.onload = () => {
  chrome.storage.local.get("adContentPreference", (data) => {
    if (data.adContentPreference) {
      document.querySelector(`input[value="${data.adContentPreference}"]`).checked = true;
    }
  });
};
