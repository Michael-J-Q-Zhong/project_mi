$('.nav-right>aside:nth-of-type(1)').mouseenter(function(){
    $('.download').slideDown();
    stop();
}).mouseleave(function(){
    $('.download').slideUp();
    stop();
});