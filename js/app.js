$(document).ready(function(){
    $(".fa-bars").click(function(){
        $(this).toggleClass("fa-times");
        $(".navbar").toggleClass("nav-toggle");
    });

    $(window).on("load scroll", function(){
        if($(window).scrollTop() < 25){
            $(".header").hide();
        }
        else{
            $(".header").show();
        }
    });

    $(".buttons").click(function(){
        var filter = $(this).attr("data-filter");
        if(filter == "all"){
            $(".filter-image").show();
        }
        else{
            $(".filter-image").not("." + filter).hide();
            $(".filter-image").filter("." + filter).show();
        }

        $(this).addClass("active").siblings().removeClass("active");
    });
});