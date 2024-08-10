$(window).scroll(function(){
    // 1
    if ( $(this).scrollTop() > 55) {
        $('.circle').addClass('active');
    } else {
        $('.circle').removeClass('active');
    }
    // 2
    if ( $(this).scrollTop() > 110) {
        $('.circle').addClass('active1');
    } else {    
        $('.circle').removeClass('active1');
    }
    // 3
    if ( $(this).scrollTop() > 165) {
        $('.circle').addClass('active2');
    } else {
        $('.circle').removeClass('active2');
    }
    // 4
    if ( $(this).scrollTop() > 220) {
        $('.circle').addClass('active3');
    } else {
        $('.circle').removeClass('active3');
    }
    // // 5
    if ( $(this).scrollTop() > 275) {
        $('.circle').addClass('active4');
        $('.header').addClass('active');
    } else {
        $('.circle').removeClass('active4');
        $('.header').removeClass('active');
    }
    // 6
    if ( $(this).scrollTop() > 330) {
        $('.circle').addClass('active5');
    } else {
        $('.circle').removeClass('active5');
    }
    // // 7
    if ( $(this).scrollTop() > 385) {
        $('.circle').addClass('active6');
    } else {
        $('.circle').removeClass('active6');
    }
    // // 8
    if ( $(this).scrollTop() > 440) {
        $('.circle').addClass('active7');
    } else {
        $('.circle').removeClass('active7');
    }
    // 9
    if ( $(this).scrollTop() > 495) {
        $('.circle').addClass('active8');
        $('.services').addClass('active');
        services
    } else {
        $('.circle').removeClass('active8');
        $('.services').removeClass('active');
    }
});