$(document).ready(function(){
    recent_program();
    carousel();

    $(".gscInfo_wrap .btn_close").on("click",function(){
        var $this = $(this);
        if($this.hasClass("is-close")){
            $this.removeClass("is-close");
            $(".gscInfo").slideDown(300);
        }else{
            $this.addClass("is-close");
            $(".gscInfo").slideUp(300);
        }
    })
})

// GSC프로그램
function recent_program(){
    $(".recently_program .recent button").on("click",function(){
        $(".recently_program>li").removeClass("active");
        $(this).parents("li").addClass("active");
    })
}

// 활동기록실
function carousel(){
    var $mainCarousel = $('#mainCarousel')
    $mainCarousel.owlCarousel({
        loop:true,
        mouseDrag:false,
        margin:10,
        stagePadding:40,
        responsive:{
            0:{
                items:1,
            },
            640:{
                items:3,
            },
            1025:{
                margin:30,
                stagePadding:0,
            }
        }
    });

    $(".leftBox .prev").on("click",function(){
        $mainCarousel.trigger('prev.owl.carousel', [300]);
    })
    $(".leftBox .next").on("click",function(){
        $mainCarousel.trigger('next.owl.carousel', [300]);
    })
}