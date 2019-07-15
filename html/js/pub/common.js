var flag;
var resolution = 1240;

//해상도 세팅
if(window.innerWidth>resolution){
    flag = "pc";
}else{
    flag = "m";
}

$(document).ready(function(){
    headerSearchArea(); //헤더 검색 영역 모션
    footerFamilySite(); //푸터 패밀리사이트
    gnb();
    
    $(window).on("resize",function(){
        if(window.innerWidth>resolution && flag == "m"){
            flag = "pc";
            gnb();
        }else if(window.innerWidth<=resolution && flag == "pc"){
            flag = "m";
            gnb();
        }
        
    })
})

//헤더 검색 영역 모션
function headerSearchArea(){
    if($(".search").length <= 0) return false;

    var $search = $(".search");
    var $btn = $search.find(".searchOpen");
    var $util02 = $(".util02");

    $btn.on("click",function(){
        if($search.hasClass("is-opened")){
            $search.removeClass("is-opened");
            $util02.removeClass("is-moved");
        }else{
            $search.addClass("is-opened");
            $util02.addClass("is-moved");
        }

        if(flag == "m" && $(".openGnb").hasClass("is-opened")){
            $("body").removeClass("overflow_fixed");
            $(".openGnb").removeClass("is-opened");
            $(".navGroup").removeClass("is-opened");
            $(".gnb>li>a").removeClass("on");
        }
    })
}

//푸터 패밀리사이트
function footerFamilySite(){
    if($(".footer .form_select").length <= 0) return false;

    var $dropdown = $(".footer .form_select");
    var $dropdown_btn = $dropdown.find(".btn");

    $dropdown_btn.on("click",function(){
        var $this = $(this);
        if($this.parent().hasClass("is-opened")){
            $dropdown.removeClass("is-opened");
        }else{
            $dropdown.removeClass("is-opened");
            $this.parent().addClass("is-opened");
        }
    })
};

//gnb 
function gnb(){
    if($(".gnb").length <= 0) return false;

    if(flag == "pc"){
        //reset
        $("body").removeClass("overflow_fixed");
        $(".openGnb").off("click").removeClass("is-opened");
        $(".navGroup").removeClass("is-opened");
        $(".gnb>li>a").off("click").removeClass("on");

        var menuHeight = 0;
        $(".gnb ul").each(function(){
            var thisHeight = $(this).outerHeight();
            if(thisHeight>menuHeight){
                menuHeight = thisHeight;
            }
        })

        $(".gnb li").on("mouseover",function(){
            $(".gnb ul").stop().slideDown(300);
            $(".gnbBg").css({"height":menuHeight});
        })

        $("nav").on("mouseleave",function(){
            $(".gnb ul").stop().slideUp(0);
            $(".gnbBg").css({"height":0});
        })

    }

    if(flag == "m"){
        //reset
        $(".gnb li").off("mouseover");
        $("nav").off("mouseleave");
        $(".header .gnb li ul").attr("style","");

        $(".openGnb").on("click",function(){
            $("body").toggleClass("overflow_fixed");
            $(this).toggleClass("is-opened");
            $(".navGroup").toggleClass("is-opened");

            if($(".search").hasClass("is-opened")){
                $(".search").removeClass("is-opened");
            }
        })

        $(".gnb>li>a").on("click",function(e){
            e.preventDefault();
            var $this = $(this);
            if($this.hasClass("on")){
                $this.removeClass("on");
                $this.next().slideUp(300);
            }else{
                $(".gnb>li>a").removeClass("on");
                $(".gnb ul").slideUp(300)
                $(this).addClass("on");
                $("+ul",this).slideDown(300);
            }
            
        })
    }
}