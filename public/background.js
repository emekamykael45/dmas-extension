/*global chrome*/

console.log("This is a popup!");

chrome.tabs.onActivated.addListener((tab) => {
  chrome.tabs.get(tab.tabId, (tabInfo) => {
    if (tabInfo.url?.includes("/cart")) {
      console.log("We have hit a CART Page");

      chrome.scripting
        .executeScript({
          target: { tabId: tabInfo.id, allFrames: true },
          files: [
            "/static/js/787.e074c671.chunk.js",
            "/static/js/main.e6dae353.js",
          ],
        })
        .then(() => console.log("I Injected"));
    }
  });
});
