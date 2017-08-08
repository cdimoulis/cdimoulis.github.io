$(function(){
  background();
  // Remove is-loading class from body
  var $body = $('body');
  if ($body.length) {
    $body.removeClass('is-loading');
  }
});

function background() {
  var _lin_grad = "linear-gradient(60deg,rgba(0,0,0,.25),rgba(0,0,0,.25)),";
  var _rand = 3; //Math.ceil(Math.random()*3);
  var _img = 'url("images/'+_rand+'_sm.jpeg")'
  var _back_img = _lin_grad + _img
  var $body = $('body');
  $body.css('background-image', _back_img)
  // Change background attributes if image 1
  if (_rand == 1){
    $body.css('background-position', 'center top');
    if (matchMedia) {
      var _mq = matchMedia('(max-width: 950px)');
      _mq.addListener(widthChange);
      widthChange(_mq);
    }
  }
};

function widthChange(mq) {
  if (mq.matches) {
    $body.css('background-position', 'top center');
  }
};
