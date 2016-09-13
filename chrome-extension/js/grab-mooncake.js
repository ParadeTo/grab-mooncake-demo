function grabMooncake(el) {
    // 轮询
    var timer = setInterval(function() {
        if (el.classList.contains('active')) {
            fireEvent(el,'click');
            clearInterval(timer);
            return;
        }
    }, 500)
}

var fireEvent = function(element,event){
 if (document.createEventObject){
  // IE浏览器支持fireEvent方法
  var evt = document.createEventObject();
  return element.fireEvent('on'+event,evt)
 }
 else{
  // 其他标准浏览器使用dispatchEvent方法
  var evt = document.createEvent( 'HTMLEvents' );
  // initEvent接受3个参数：
  // 事件类型，是否冒泡，是否阻止浏览器的默认行为
  evt.initEvent(event, true, true);
  return !element.dispatchEvent(evt);
 }
};

var $btn = document.querySelector('#btn');
grabMooncake($btn);
