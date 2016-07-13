/**
 * Created by liljay on 2016/7/9.
 */

/*页面框架最小宽度设置*/

$(function(){
    var $footer = $('.footer');
    var height = $(window).height();
   $('.right-content').css({
       'min-height': $(window).height() - ($footer.length > 0 ? $footer.height() : 0) + 'px'
   })
});