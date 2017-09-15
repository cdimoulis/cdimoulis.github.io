// Utility object
this.util = {
  // Callback when DOM is ready
  _ready: function(cb) {
    if (document.readyState == 'complete' || document.readyState == 'interactive')
      cb();
    else {
      // If add event listener is available
      if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', function() {
          document.removeEventListener('DOMContentLoaded', arguments.callee);
          cb();
        });
      }
      // Otherwise attach the state change event
      else if (document.attachEvent) {
        document.attachEvent('onreadystatechange'), function() {
          if (document.readyState === 'interactive') {
            document.detachEvent('onreadystatechange',arguments.callee);
            cb();
          }
        }
      }
    }
  },
}

// When DOM is ready...
util._ready(function(){
  background();
  // Remove is-loading class from body
  var _body = document.getElementsByTagName('body')[0];
  if (_body) {
    var cls = _body.className;
    cls = cls.replace('is-loading', '');
    _body.className = cls;
  }
});

function background() {
  var _lin_grad = "linear-gradient(60deg,rgba(0,0,0,.25),rgba(0,0,0,.25)),";
  var _rand = Math.ceil(Math.random()*3);
  var _img = 'url("images/'+_rand+'_sm.jpeg")'
  var _back_img = _lin_grad + _img
  var _body = document.getElementsByTagName('body')[0];

  _body.style['background-image'] = _back_img;
  // Change background attributes if image 1
  if (_rand == 1){
    _body.style['background-position'] = 'center top';
    // If matchMedia exists
    if (matchMedia) {
      var _mq = matchMedia('(max-width: 950px)');
      _mq.addListener(widthChange);
      widthChange(_mq);
    }
  }
};

// Change for media query
function widthChange(mq) {
  if (mq.matches) {
    _body.style['background-position'] = 'top cetner';
  }
};
