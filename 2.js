$(document).ready(function () {
  // $(".outer").click(function(){
  //     $(this).css("background-color", "red");
  // })
  $(".outer").on("click", function () {
    $(this).css("background-color", "red");
  });



  // deprecate 된 방식 (써도 되긴 함)
  // $("[type='text']").focus(function(){
  //     $(this).css("background-color", "red");
  // })

  // $("[type='text']").blur(function(){
  //     $(this).css("background-color", "");
  // })

  // $("[type='text']").on('focus',function(){
  //     $(this).css("background-color", "red");
  // })
  // $("[type='text']").on('blur',function(){
  //     $(this).css("background-color", "");
  // })


  $("[type=text]").on({
    focus: function () {
      $(this).css("background-color", "red");
    },
    blur: function () {
      $(this).css("background-color", "");
    },
    
  });
});
