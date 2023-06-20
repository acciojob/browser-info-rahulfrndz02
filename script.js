//your JS code here. If required.
// script.js

window.onload = function() {
  var browserInfoDiv = document.getElementById("browser-info");
  
  // Get browser name and version
  var browserName = getBrowserName();
  var browserVersion = getBrowserVersion();
  
  // Display browser information in the div
  browserInfoDiv.textContent = "You are using " + browserName + " version " + browserVersion;
}

function getBrowserName() {
  var userAgent = navigator.userAgent;
  var browsers = ["Chrome", "Firefox", "Safari", "Opera", "Edge", "Internet Explorer"];
  
  for (var i = 0; i < browsers.length; i++) {
    if (userAgent.indexOf(browsers[i]) > -1) {
      return browsers[i];
    }
  }
  
  return "Unknown";
}

function getBrowserVersion() {
  var userAgent = navigator.userAgent;
  var versionIndex = userAgent.indexOf("rv:") || userAgent.indexOf("Edge/") || userAgent.indexOf("Chrome/") || userAgent.indexOf("Firefox/") || userAgent.indexOf("Version/");
  
  if (versionIndex > -1) {
    return userAgent.substring(versionIndex + 3, userAgent.indexOf(" ", versionIndex));
  }
  
  return "Unknown";
}
