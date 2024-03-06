$(document).ready(function(){
    
    $("#btn_fade").on('click',function(){
        $("#a").fadeIn()
        $("#b").fadeIn("slow", function(){ alert("다 끝났어요")})
        $("#c").fadeIn(4000)
    })

    $("#btn_fade_out").on('click',function(){
        $("#a").fadeOut(1000);
        $("#b").fadeOut(5000);
        $("#c").fadeOut(15000);
    })

    $("#btn_fade_toggle").on('click',function(){
        $("#a").fadeToggle(1000);
        $("#b").fadeToggle(5000);
        $("#c").fadeToggle(15000);
    })

    // opacity를 조정하는 방식이라 div는 남아있음. 위와는 다르다.
    $("#btn_fade_to").on('click',function(){
        $("#a").fadeTo(1000,0.5);
        $("#b").fadeTo(5000);
        $("#c").fadeTo(15000);
    })

})