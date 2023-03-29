

$(document).ready(function(){
    // navigation bar toggle
    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle(400);
    })
    //navbar bg change on scroll
    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        if(pos>=100){
            $('.navbar').addClass('cng-navbar');
        }else{
            $('.navbar').removwClass('cng-navbar');
            
        }
    })
})
