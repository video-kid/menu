$(document).ready(function () {


    var nav = $("nav");
    var logo = $(".logo");
    var navSticky = $("nav.sticky");
    var navHeight = nav.outerHeight();
    var logoHeight = logo.outerHeight();

    var h1 = $("header h1");


    $(window).scroll(function (event) {
        var scrollPos = $(window).scrollTop();
        var h1Pos = h1.position();
        console.log(h1Pos.top);

        if (scrollPos > navHeight) {
            nav.css({
                "top": logoHeight * (-1) + "px"
            })
            nav.addClass("sticky");
        } else {
            nav.removeClass("sticky");
            nav.css({
                "top": "0"
            })
        }


        if (scrollPos > navHeight * 2) {
            h1.css({

                "opacity": "0"
            })
        } else {
            h1.css({
                "opacity": "1"
            })
        }

    });



});