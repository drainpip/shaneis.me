var GAHelper = {};

(function() {

  GAHelper.defaults = function() {

    var _website = 'asus.com',
        _skipHREF = [
          'bit.ly',
          'goo.gl',
          'amzn.to',
          'javascript:void'
        ],
        _tag = 'a',
        _tosDefault = '00';

    return {

      website: function() {
        return _website;
      },
      skipHREF: function() {
        return _skipHREF;
      },
      elementByTagName: function() {
        return document.getElementsByTagName(_tag);
      },
      tosDefault: function() {
        return _tosDefault;
      }

    };

  };

  GAHelper.setListener = function(defaults) {

    var elementByTagName = defaults.elementByTagName();

    for (var i=elementByTagName.length; i--;) {
      elementByTagName[i].addEventListener('click', function() {
        GAHelper.sendClick(event, defaults);
      }, false);
    }

  };

  GAHelper.tos = function(tos) {

    var startTime = new Date().getTime();

    // add an interval to send a time event every 30 seconds for tracking no activity users
    var interval = setInterval(function () {
      tos = (function (t) {
        return t[0] == 30 ? (parseInt(t[1]) + 1) + ':00' : (t[1] || '0') + ':' + (parseInt(t[0]) + 30);
      })(tos.split(':').reverse());

      GAHelper.sendGAEvent('Time', 'Log', tos);

      // Stop sending events after an hour
      if (new Date().getTime() - startTime > 3600000) {
        clearInterval(interval);
        return;
      }

    }, 30000);

  };

  GAHelper.trackOutboundLink = function(label, href) {

    // to be used when class = external (https://support.google.com/analytics/answer/1136920?hl=en)
    ga('send','event','outbound','click',label,{'hitCallBack':
      function() {
        document.location = href;
      }
    });

  };

  GAHelper.sendGAEvent = function(type, action, label) {

    /* 
    Simple send event to GA
      type = the name of what is clicked
      action = what happened
      label = href / ID / title / innerText of what is clicked
    */
    ga('send', 'event', type, action, label);

  };

  GAHelper.isInArray = function(array, value) {

    for (var i = array.length; i--;) {
      if (value.indexOf(array[i]) > -1) return true;
    }
    return false;

  };

  GAHelper.getLabel = function(target, defaults) {

    var skipHREF = defaults.skipHREF();

    return this.isInArray(skipHREF, target.href.toLowerCase()) ?
              target.id ||
              target.title ||
              target.innerText :
              target.href.toLowerCase();

  };

  GAHelper.sendClick = function(event, defaults) {

    // We use currentTarget to capture the correct element after bubbling
    var element = event.currentTarget,
        label = this.getLabel(element, defaults);

    if (element.classList.contains('external') && label) {
      this.trackOutboundLink(label, element.href);
    } else {
      this.sendGAEvent('button', 'click', label);
    }

  };

  GAHelper.create = function(UA) {

    var defaults = new this.defaults();

    // start the listener on default tag
    this.setListener(defaults);
    // start the 30 second event timer
    this.tos(defaults.tosDefault());

    // Start session + send pageview + displayfeatures
    ga('create', UA, defaults.website());
    ga('require', 'displayfeatures');
    ga('send', 'pageview');

  };

})();

// GA Code in global scope
/*jshint sub: true */
(function(i,s,o,g,r,a,m) {
  i['GoogleAnalyticsObject']=r;
  i[r]=i[r] || function()  {
    (i[r].q=i[r].q||[]).push(arguments);
  },i[r].l=1*new Date();
  a=s.createElement(o),m=s.getElementsByTagName(o)[0];
  a.async=1;
  a.src=g;
  m.parentNode.insertBefore(a,m);
})
(window,document,'script','//www.google-analytics.com/analytics.js','ga');

GAHelper.create('UA-40073133-1');