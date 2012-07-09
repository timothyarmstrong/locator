var handleNewPosition = function(e) {
  var longitudeElement = document.querySelector('#debug .debug-longitude');
  var latitudeElement = document.querySelector('#debug .debug-latitude');
  var accuracyElement =
      document.querySelector('#debug .debug-locationaccuracy');
  
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
  
  /*
  navigator.geolocation.watchPosition(handleNewPosition, null,
      { enableHighAccuracy: true, maximumAge: 5000, timeout: 27000});
  
  window.addEventListener('deviceorientation', handleNewOrientation, false);
  */
  
  // Setup button presses.
  var buttons = document.querySelectorAll('.button');
  Array.prototype.forEach.call(buttons, function(button) {
    button.addEventListener('touchstart', function() {
      this.classList.add('button-active');
    }, false);
    button.addEventListener('touchend', function() {
      this.classList.remove('button-active');
    }, false);
  });
  
}, false);


// MODELS

var Connection = Backbone.Model.extend({
  initialize: function() {
    // establish websocket connection, fire connected event
  }
});

var LocationData = Backbone.Model.extend({
  initialize: function() {
    
  }
});

// VIEWS

var AppView = Backbone.View.extend({
  el: $('body'),
  initialize: function() {
    alert('AppView init');
  },
  render: function() {
    alert('AppView render');
    
    return this;
  }
});

// Must be init'd with an el.
var ButtonView = Backbone.View.extend({
  initialize: function() {
    
  },
  // maybe replace with manual setting of events, after determining mouse or
  // touch events.
  events: {
    'touchstart': 'touchstart'
  },
  touchstart: function() {
    
  }
});

// Each of the pages.

/**
 * This is for the main pages that the app needs to have transitions between.
 * I could alternatively mixin the transition functionality.
 */
var PageView = Backbone.View.extend({
  transitionIn: function() {
    
  },
  transitionOut: function() {
    
  }
});

/**
 * The main page shown when the app is opened to to default page.
 */
SplashPageView = PageView.extend({
  initialize: function() {
    
  }
});

/**
 * This page shows the link to either send manually or automatically to the
 * user's friend.
 */
SendLinkView = PageView.extend({
  initialize: function() {
    
  }
});

/**
 * This page is for displaying the tracking data.
 */
TrackingPageView = PageView.extend({
  initialize: function() {
    
  }
});

/**
 * This shows debug information of the GPS position and the orientation and
 * compass data.
 */
DebugView = Backbone.View.extend({
  initialize: function() {
    // need to get ahold of the LocationData model.
  }
});

// ROUTER

var AppRouter = Backbone.Router.extend({
  initialize: function() {
    this.appView = new AppView
  },
  routes: {
    '': 'index'
  },
  index: function() {
    this.appView.render();
  }
});


document.addEventListener('DOMContentLoaded', function() {
  new AppRouter();
  // TODO: Re-enable pushstate history for when not loading off of client.
  //Backbone.history.start({pushState: true, root: "/Users/tarmst/code/locator/client/"});
  Backbone.history.start();
}, false);