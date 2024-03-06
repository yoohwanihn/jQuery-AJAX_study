$(document).ready(function(){
    $("span").on('click',function(){
        $(this).hide(3000, function(){
            alert("span이 사라지면 나오는 콜백 함수");
        });
    })

    $("#btn_show").on('click', function(){
        $("span").show('fast');
    })
})