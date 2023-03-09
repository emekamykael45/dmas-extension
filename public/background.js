/*global chrome*/

console.log("This is a popup!");

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  var activeTab = tabs[0];
  console.log("Here: " + activeTab.url);
});

// let user = "zzzzzzzzz";
// chrome.storage.local.set({ name: user }, function () {
//   console.log("User is set to" + user);
// });

// User Authentication

let user_signed_in = false;
let loggedInUser = null;

chrome.storage.local.get(["dmas_ext_user"]).then((result) => {
  console.log("Value currently is " + JSON.stringify(result));
  loggedInUser = result;
});

chrome.runtime.onMessage.addListener(function (request, sendResponse) {
  if (request.message === "is_user_signed_in") {
    sendResponse({
      message: "success",
      payload: user_signed_in,
    });
  } else if (request.message === "sign_out") {
    user_signed_in = false;
    sendResponse({ message: "success" });
  } else if (request.message === "sign_in") {
    user_signed_in = true;
    sendResponse({ message: "success" });
  }

  return true;
});
