var handleNewPosition = function(e) {
  var longitudeElement = document.querySelector('#debug .debug-longitude');
  var latitudeElement = document.querySelector('#debug .debug-latitude');
  var accuracyElement = document.querySelector('#debug .debug-locationaccuracy');
  
  longitudeElement.innerText = e.coords.longitude;
  latitudeElement.innerText = e.coords.latitude;
  accuracyElement.innerText = e.coords.accuracy;
};

var handleNewOrientation = function(e) {
  var alphaElement = document.querySelector('#debug .debug-alpha');
  var betaElement = document.querySelector('#debug .debug-beta');
  var gammaElement = document.querySelector('#debug .debug-gamma');
  
  var compassHeadingElement =
      document.querySelector('#debug .debug-compassheading');
  var compassAccuracyElement =
      document.querySelector('#debug .debug-compassaccuracy');
  
  alphaElement.innerText = e.alpha;
  betaElement.innerText = e.beta;
  gammaElement.innerText = e.gamma;
  
  compassHeadingElement.innerText = e.webkitCompassHeading;
  compassAccuracyElement.innerText = e.webkitCompassAccuracy;
};

document.addEventListener('DOMContentLoaded', function() {
  
  // Feature detection.
  if (!navigator.geolocation) {
    alert('No geolocation available');
    return;
  }
  
  navigator.geolocation.watchPosition(handleNewPosition, null,
      { enableHighAccuracy: true, maximumAge: 5000, timeout: 27000});
  
  window.addEventListener('deviceorientation', handleNewOrientation, false);
  
}, false);