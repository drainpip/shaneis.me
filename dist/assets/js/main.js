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
$(document).ready(function() {
  $('body').addClass('js');
});
function draw() {
  con.clearRect(0,0,WIDTH,HEIGHT);
  for(var i = 0; i < pxs.length; i++) {
    pxs[i].fade();
    pxs[i].move();
    pxs[i].draw();
  }
}

function Circle() {
  this.s = {ttl:8000, xmax:5, ymax:2, rmax:10, rt:1, xdef:960, ydef:540, xdrift:4, ydrift: 4, random:true, blink:true};

  this.reset = function() {
    this.x = (this.s.random ? WIDTH*Math.random() : this.s.xdef);
    this.y = (this.s.random ? HEIGHT*Math.random() : this.s.ydef);
    this.r = ((this.s.rmax-1)*Math.random()) + 1;
    this.dx = (Math.random()*this.s.xmax) * (Math.random() < 0.5 ? -1 : 1);
    this.dy = (Math.random()*this.s.ymax) * (Math.random() < 0.5 ? -1 : 1);
    this.hl = (this.s.ttl/rint)*(this.r/this.s.rmax);
    this.rt = Math.random()*this.hl;
    this.s.rt = Math.random()+1;
    this.stop = Math.random()*0.2+0.4;
    this.s.xdrift *= Math.random() * (Math.random() < 0.5 ? -1 : 1);
    this.s.ydrift *= Math.random() * (Math.random() < 0.5 ? -1 : 1);
  }

  this.fade = function() {
    this.rt += this.s.rt;
  }

  this.draw = function() {
    if(this.s.blink && (this.rt <= 0 || this.rt >= this.hl)) this.s.rt = this.s.rt*-1;
    else if(this.rt >= this.hl) this.reset();
    var newo = 1-(this.rt/this.hl);
    con.beginPath();
    con.arc(this.x,this.y,this.r,0,Math.PI*2,true);
    con.closePath();
    var cr = this.r*newo;
    g = con.createRadialGradient(this.x,this.y,0,this.x,this.y,(cr <= 0 ? 1 : cr));
    g.addColorStop(0.0, 'rgba(255,255,0,'+newo+')');
    g.addColorStop(this.stop, 'rgba(255,0,0,'+(newo*0.2)+')');
    g.addColorStop(1.0, 'rgba(17,17,17,0.5)');
    con.fillStyle = g;
    con.fill();
  }

  this.move = function() {
    this.x += (this.rt/this.hl)*this.dx;
    this.y += (this.rt/this.hl)*this.dy;
    if(this.x > WIDTH || this.x < 0) this.dx *= -1;
    if(this.y > HEIGHT || this.y < 0) this.dy *= -1;
  }

  this.getX = function() { return this.x; }
  this.getY = function() { return this.y; }
}

$(document).ready(function(){

  if(document.getElementById('pixie')){

    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight

    canvas = document.getElementById('pixie');
    
    $(canvas).attr('width', WIDTH).attr('height',HEIGHT);
    
    con = canvas.getContext('2d');
    pxs = new Array();
    rint = 60;
    for(var i = 0; i < 50; i++) {
      pxs[i] = new Circle();
      pxs[i].reset();
    }
    
    setInterval(draw,rint);
    
  }
  
});
