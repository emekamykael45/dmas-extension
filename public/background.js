/*global chrome*/

console.log("This is a popup!");

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  var activeTab = tabs[0];
  console.log("Here: " + activeTab.url);
});
