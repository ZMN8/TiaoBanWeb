define(['z','zeptoTouch','swiper','exports'],function($,zT,swiper,exports) {//请求一个模块
    return function(){
        var mySwiper = new Swiper('#index_slide', {
            loop: true,
            autoplay : 3000
        });
    }

});