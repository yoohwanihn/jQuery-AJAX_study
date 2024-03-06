$(document).ready(function(){
    // $("h1").click(function(){
    //     $(this).css("background-color", "yellow");
    // });

    // $('h1').mouseleave(function(){
    //     $(this).css("background-color", "blue");
    // });

    // $('h1').mouseenter(function(){
    //     $(this).css("background-color", "red");
    // });
    
    $('h1').on({
        click : function() {
            $(this).css("background-color", "yellow");
        },
        mouseleave : function() {
            $(this).css("background-color", "blue");
        },
        mouseenter : function() {
            $(this).css("background-color", "red");
        }
    })

    $("#btn").on( //<body>요소에 이벤트 들어갈거다.
          {
            click: function () { //click이벤트가 발생했을 때 동작은
              $("#text").html("버튼을 클릭했군요?"); //아이디가 text인 부분에 html 요소가 추가된다.
            }
          }
        );
})