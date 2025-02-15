chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get("adContentPreference", (data) => {
    if (!data?.adContentPreference) {
      chrome.storage.local.set({ adContentPreference: "inspiration" }, () => {
        console.log("Default ad content preference set: inspiration");
      });
    }
  });
});
