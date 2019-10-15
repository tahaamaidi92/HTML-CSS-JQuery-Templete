$(function(){
    $('div.awsemoe img').mousemove(function(){
        $('.overlay');
    });
    $('.first').click(function(){
        $('.one').show();
        $('.two').hide();
    });
    $('.second').click(function(){
        $('.one').hide();
        $('.two').show();
    });
    $(window).scroll(function(){
        var scroll=$(this).scrollTop();
        console.log(scroll)
        if(scroll>15){
            $('.header').slideDown();
        }
        else{
            $('.header').slideUp();
        }
        if(scroll>1600){
            $('.timer').countTo();
            $(window).off('scroll')
        }
    });
    $(".fancybox").fancybox();

    $('.one').css('display','block')
    $('div.acordion h3').click(function(){

        $(this).next().slideToggle();
        $('div.acordion p').not($(this).next()).slideUp();
    })
    $('.All_Images').mixItUp();
    $("body").niceScroll({
        cursorcolor: "#FDC15E",
        cursorwidth: "5px",
    });
})