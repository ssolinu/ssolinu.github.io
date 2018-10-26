$(".show_box1").click(function(){
    $(".show_box1").css("width","600")
    $(".show_box2").css("width","150");
    $(".show_box3").css("width","150");
    $("#owl1").css("display","block");
    $("#owl2").css("display","none");
    $("#owl3").css("display","none");
});

$(".show_box2").click(function(){
    $(".show_box1").css("width","150");
    $(".show_box2").css("width","600")
    $(".show_box3").css("width","150");
    $("#owl1").css("display","none");
    $("#owl2").css("display","block");
    $("#owl3").css("display","none");
});

$(".show_box3").click(function(){
    $(".show_box1").css("width","150");
    $(".show_box2").css("width","150");
    $(".show_box3").css("width","600")   
    $("#owl1").css("display","none");
    $("#owl2").css("display","none");
    $("#owl3").css("display","block");
});

