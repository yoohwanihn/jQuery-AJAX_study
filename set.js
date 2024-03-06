$(document).ready(()=>{
    $("#btn_set").on('click', ()=>{
        // $("#set1").text("텍스트 변경값");
        //$("#set1").html("<b>텍스트 변경값</b>");
        //$("#set1").text($("#set1").text() +" 홍길동 입니다")
        $("#set1").text(function(i, origText){
            return origText + " 홍길동 입니다 (" + i +")";
        });
        $("#email").val("aaa@aaa.aaa");

        $("a").attr("href", "https://daum.net")
    })
    $("#btn_get").on('click', ()=>{
        alert($("#email").val());
    })
})