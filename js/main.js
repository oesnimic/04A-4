$(function(){
    //메뉴
    $(".main > li, .sub_bg").mouseover(function(){
        $(".sub, .sub_bg").stop().slideDown();
    })
    $(".main > li, .sub_bg").mouseout(function(){
        $(".sub, .sub_bg").stop().slideUp();
    })
    //이미지 슬라이드
    $(".move li").eq(0).siblings().hide();
    
    var n = 0;
    setInterval(move , 2500);
    function move(){

        $(".move li").eq(n).fadeOut();
                
            if(n<2){
                n++;
            }else{
                n=0;
            }
            console.log("N:" , n)
            $(".move li").eq(n).fadeIn();
    }

    $(".p_click").click(function(){
        $(".pop").fadeIn();
    })//
    $(".close").click(function(){
        $(".pop").fadeOut();
    })//
})