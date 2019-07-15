// file path
var url = {
    cssUrl : '../css/',
    cssUrl_ex : '../../html/css/',
    jsUrl : '../js/',
    jsUrl_ex : '../../html/js/',
    htmlUrl : '../guide/',
    imagelUrl : '../images/',
    imagelUrl_ex : '../../html/images/'
}

// page templete
var page = {
    // meta태그 및 타이틀
    define : function(){
        document.write('<title>지구사회봉사단</title>');
        document.write('<meta name="viewport" content="minimum-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no, initial-scale=1">');
        document.write('<meta http-equiv="X-UA-Compatible" content="IE=edge">');
    },
    // 로드하는 파일
    loadFiles : function(){
        document.write('<link rel="stylesheet" href="'+url.cssUrl+'guide.css">');
        document.write('<link rel="stylesheet" href="'+url.cssUrl_ex+'common.css">');
        document.write('<link rel="stylesheet" href="'+url.cssUrl_ex+'lib/jquery-ui.min.css">');
        document.write('<link rel="stylesheet" href="'+url.cssUrl_ex+'layout.css">');
        document.write('<link rel="stylesheet" href="'+url.cssUrl_ex+'contents.css">');
        document.write('<link rel="stylesheet" href="'+url.cssUrl+'lib/shCoreDefaultWhite.css">');
        document.write('<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">');
        document.write('<script type="text/javascript" src="'+url.jsUrl+'lib/shCore.min.js"></script>');
        document.write('<script type="text/javascript" src="'+url.jsUrl+'lib/shBrushCss.min.js"></script>');
        document.write('<script type="text/javascript" src="'+url.jsUrl+'lib/shBrushJScript.min.js"></script>');
        document.write('<script type="text/javascript" src="'+url.jsUrl+'lib/shBrushXml.min.js"></script>');
        document.write('<script type="text/javascript" src="'+url.jsUrl_ex+'lib/jquery.min.js"></script>');
        document.write('<script type="text/javascript" src="'+url.jsUrl_ex+'lib/jquery-ui.min.js"></script>');
        document.write('<script type="text/javascript" src="'+url.jsUrl_ex+'pub/ui.js"></script>');
    },
    // 헤더영역
    layout_Header : function(){
        document.write('<header class="guide_header">');
        document.write('    <button type="button" class="btn_guide_gnb_open" onclick="open_guideMenu_open();"><i class="fas fa-bars"></i></button>');
        document.write('    <h1 class="guide_tit_logo">지구사회봉사단 퍼블리싱가이드</h1>');
        document.write('</header>');
        document.write('<!-- //header -->');
    },
    // 콘텐츠 상단 공통영역
    layout_ContentTop : function(){
        document.write('<section class="guide_container">');
        document.write('    <aside class="guide_aside">');
        document.write('        <button type="button" class="btn_guide_gnb_close" onclick="open_guideMenu_close();"><i class="fas fa-times"></i></button>');
        document.write('        <nav class="guide_gnb">');
        document.write('            <ul class="guide_dep_1">');
        document.write('                <li>');
        document.write('                    <p>HTML 리스트</p>');
        document.write('                    <ul class="guide_dep_2">');
        document.write('                        <li><a href="'+url.htmlUrl+'file_list.html">리스트</a></li>');
        document.write('                    </ul>');
        document.write('                </li>');
        document.write('                <li>');
        document.write('                    <p>기본 가이드</p>');
        document.write('                    <ul class="guide_dep_2">');
        document.write('                        <li><a href="'+url.htmlUrl+'rule_basic.html">환경정의</a></li>');
        document.write('                        <li><a href="'+url.htmlUrl+'rule_files.html">폴더·파일 구조</a></li>');
        document.write('                        <li><a href="'+url.htmlUrl+'rule_doc.html">문서선언</a></li>');
        document.write('                        <li><a href="'+url.htmlUrl+'rule_html.html">HTML 규칙</a></li>');
        document.write('                        <li><a href="'+url.htmlUrl+'rule_css.html">CSS 규칙</a></li>');
        document.write('                    </ul>');
        document.write('                </li>');
        document.write('                <li>');
        document.write('                    <p>구조</p>');
        document.write('                    <ul class="guide_dep_2">');
        document.write('                        <li><a href="'+url.htmlUrl+'layout.html">레이아웃</a></li>');
        document.write('                    </ul>');
        document.write('                </li>');
        document.write('                <li>');
        document.write('                    <p>마크업 가이드</p>');
        document.write('                    <ul class="guide_dep_2">');
        document.write('                        <li><a href="'+url.htmlUrl+'guide_title.html">타이틀</a></li>');
        document.write('                        <li><a href="'+url.htmlUrl+'guide_button.html">버튼</a></li>');
        document.write('                        <li><a href="'+url.htmlUrl+'guide_board.html">게시판</a></li>');
        document.write('                        <li><a href="'+url.htmlUrl+'guide_form.html">폼요소</a></li>');
        document.write('                        <li><a href="'+url.htmlUrl+'guide_etc.html">기타</a></li>');
        document.write('                    </ul>');
        document.write('                </li>');
        document.write('                <li>');
        document.write('                    <p>자바스크립트 가이드</p>');
        document.write('                    <ul class="guide_dep_2">');
        document.write('                        <li><a href="'+url.htmlUrl+'rule_js.html">자바스크립트 가이드</a></li>');
        document.write('                    </ul>');
        document.write('                </li>');
        document.write('            </ul>');
        document.write('            <!-- //dep_1 -->');
        document.write('        </nav>');
        document.write('        <!-- //nav -->');
        document.write('    </aside>');
        document.write('    <!-- //aside -->');
        document.write('    <section class="guide_content">');
    },
    // 콘텐츠 하단 공통영역
    layout_ContentBottom : function(){
        document.write('        </section>');
        document.write('        <!-- //content -->');
        document.write('    </section>');
        document.write('    <!-- //container -->');
        document.write('    <div class="dim"></div>');
        document.write('</body>');
        document.write('</html>');
    }
}

document.addEventListener("DOMContentLoaded",function(){
    //syntaxHighlighter
    SyntaxHighlighter.all();

    var guide_url = location.href.split("/");
    var guide_link = document.querySelectorAll(".guide_gnb a");

    for(var i=0; i<guide_link.length; i++){
        if(guide_link[i].getAttribute("href").match(guide_url[guide_url.length-1])){
            guide_link[i].className = "is-selected";
            break;
        }
    }

    var guide_changeViewPc = document.querySelectorAll(".guide_res_pc");
    var guide_changeViewM = document.querySelectorAll(".guide_res_m");

    for(var i=0; i<guide_changeViewPc.length; i++){
        guide_changeViewPc[i].addEventListener("click",function(e){
            e.target.parentNode.parentNode.style.width = "auto";
        })
    }

    for(var j=0; j<guide_changeViewM.length; j++){
        guide_changeViewM[j].addEventListener("click",function(e){
            e.target.parentNode.parentNode.style.width = "400px";
        })
    }
})

function guide_progress(){
    var guide_plan_total = 0,
        guide_design_total = 0,
        guide_pub_total = 0;
    var total = document.querySelectorAll(".guide_filelist>tbody>tr").length;
    var guide_plan = document.querySelectorAll(".guide_plan");
    var guide_design = document.querySelectorAll(".guide_design");
    var guide_pub = document.querySelectorAll(".guide_pub");

    for(var i=0; i<total; i++){
        if(guide_plan[i].innerText != ""){
            guide_plan_total++;
        }
        if(guide_design[i].innerText != ""){
            guide_design_total++;
        }
        if(guide_pub[i].innerText != ""){
            guide_pub_total++;
        }
    }

    document.querySelector(".guide_percent_plan .guide_percent").innerHTML = parseInt(guide_plan_total/total*100)+"% ("+guide_plan_total+"/"+total+")";
    document.querySelector(".guide_percent_design .guide_percent").innerHTML = parseInt(guide_design_total/total*100)+"% ("+guide_design_total+"/"+total+")";
    document.querySelector(".guide_percent_pub .guide_percent").innerHTML = parseInt(guide_pub_total/total*100)+"% ("+guide_pub_total+"/"+total+")";
    document.querySelector(".guide_percent_plan .guide_planBar").innerHTML = "<div style='width:"+(guide_plan_total/total*100)+"%;'></div>"
    document.querySelector(".guide_percent_design .guide_designBar").innerHTML = "<div style='width:"+(guide_design_total/total*100)+"%;'></div>"
    document.querySelector(".guide_percent_pub .guide_pubBar").innerHTML = "<div style='width:"+(guide_pub_total/total*100)+"%;'></div>"
}

function open_guideMenu_open(){
    document.querySelector(".dim").style.display = "block";
    document.querySelector(".guide_aside").style.display = "block";
}

function open_guideMenu_close(){
    document.querySelector(".dim").style.display = "none";
    document.querySelector(".guide_aside").style.display = "none";
}

var flag = "pc";

window.addEventListener("resize",function(){
    if(window.innerWidth>1024 && flag == "m"){
        flag = "pc";
        document.querySelector(".dim").style.display = "none";
        document.querySelector(".guide_aside").style.display = "block";
    }else if(window.innerWidth<=1024 && flag == "pc"){
        flag = "m";
        document.querySelector(".dim").style.display = "none";
        document.querySelector(".guide_aside").style.display = "none";
    }
})