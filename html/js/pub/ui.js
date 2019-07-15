$(document).ready(function(){
    form_fn();
    tab_adj();
    path();
})

function form_fn(){
    if($(".form_select").length > 0){
        $(".form_select .selector").on("click",function(){
            var $this = $(this);
            if($this.hasClass("on")){
                $this.removeClass("on");
                $this.siblings(".opts").hide();
            }else{
                $this.addClass("on");
                $this.siblings(".opts").show();
            }
        })

        $(".form_select .opts button").on("click",function(){
            var $this = $(this);
            var $form = $this.parents(".form_select")
            var value = $this.attr("data-opt");
            var txt = $this.text();
            $form.find(".setVal").val(value);
            $form.find(".selector").text(txt).removeClass("on");
            $form.find(".opts").hide();
        })
    }
    
    if($(".uploadFile").length > 0){
        $(".uploadFile .form_file").on("change",function(){
            var $this = $(this);
            var filePath = $this.val().split("\\");
            $this.parent().siblings(".form_input").attr("value",filePath[filePath.length-1]);
        })
    }

    if($(".datepicker").length > 0){
        $(".datepicker").datepicker({
            monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'], //월표시
            monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'], //월표시
            dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'], //요일표시
            dateFormat: "yy-mm-dd", //선택된 값 표시 포멧
            showMonthAfterYear: true, //년월 위치 변경
            changeYear: true,
            changeMonth: true
        });
    }
}

// tab 넓이 조정
function tab_adj(){
    if($(".tabBox").length <= 0) return false;
    var total = $(".tabBox .tab").length;    
    $(".tabBox").addClass("group"+total);
}

// page path dropdown
function path(){
    if($(".path").length <= 0) return false;

    $(".path .selector").on("click",function(){
        if($(this).hasClass("on")){
            $(this).removeClass("on");
        }else{
            $(".path .selector").removeClass("on");
            $(this).addClass("on");
        }
    });
}

// 증빙서류 form show/hide
function showOption(state){
    if(state == "on"){
        $(".options").addClass("is-fold");
    }else if(state == "off"){
        $(".options").removeClass("is-fold");
    }
}

function addFrom(target){
    var html_ = '<table class="inner_board">';
    html_ += '<colgroup>';
    html_ += '    <col style="width: 15%">';
    html_ += '    <col>';
    html_ += '</colgroup>';			
    html_ += '<tr>';
    html_ += '    <th>기간</th>';
    html_ += '    <td>';
    html_ += '        <span class="calendar"><input type="text" class="form_input datepicker addCal" placeholder="시작일"></span> <i>~</i>';
    html_ += '        <span class="calendar"><input type="text" class="form_input datepicker addCal" placeholder="종료일"></span>';
    html_ += '    </td>';
    html_ += '</tr>';
    html_ += '<tr>';
    html_ += '    <th>국가 및 기관</th>';
    html_ += '    <td>';
    html_ += '        <input type="text" class="form_input w_full">';
    html_ += '    </td>';
    html_ += '</tr>';
    html_ += '<tr>';
    html_ += '    <th>내용</th>';
    html_ += '    <td>';
    html_ += '        <input type="text" class="form_input w_full">';
    html_ += '    </td>';
    html_ += '</tr>';
    html_ += '</table>';
    $(target).parent().siblings(".inTbl").append(html_);
    $(document).on("focus",".addCal",function(){
        $(this).datepicker({
            monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'], //월표시
            monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'], //월표시
            dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'], //요일표시
            dateFormat: "yy-mm-dd", //선택된 값 표시 포멧
            showMonthAfterYear: true, //년월 위치 변경
            changeYear: true,
            changeMonth: true
        });
    });
}