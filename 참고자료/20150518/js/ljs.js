$ ( function () {
    $ (window) .scroll (function() {

        var  value = $ ( this ) .scrollTop ();   // 스크롤 값을 취득
        $("#scrollValue").text(value);

        if(value>=100) {
            $("#scrollValue").css("color","red");
        }
        else {
            $("#scrollValue").css("color","#000");
        }

        // body background color
        if(value >= 0 && value < 1000) {
            $("body").css("background","#fff");
        }
        else if (value >= 1000 && value < 2000){
            $("body").css("background","#efc1c1");
        }
        else if (value >= 2000 && value < 3000) {
            $("body").css("background","#c5efc1");
        }
        else if (value >= 3000 && value < 4000) {
            $("body").css("background","#c1efd8");
        }
        else if (value >= 4000 && value < 5000) {
            $("body").css("background","#c1e6ef");
        }


        //배경 이동
        $(".background").css("background-position", "0 " + (-150 -value ) +"px");


        
        // opacity
        if(value>=270) {
            $(".opacity").addClass("opacity-on");
        }
        else {
            $(".opacity").removeClass("opacity-on");
        }


        // transition
        if(value>=820) {
            $(".transition_l").addClass("transition_l-on");
            $(".transition_r").addClass("transition_r-on");
        }
        else {
            $(".transition_l").removeClass("transition_l-on");
            $(".transition_r").removeClass("transition_r-on");
        }

        // transition2
        if(value>=1500) {
            $(".transition_1").addClass("transition_1-on");
        }
        else {
            $(".transition_1").removeClass("transition_1-on");
        }
        if(value>=1650) {
            $(".transition_2").addClass("transition_2-on");
        }
        else {
            $(".transition_2").removeClass("transition_2-on");
        }
        if(value>=1800) {
            $(".transition_3").addClass("transition_3-on");
        }
        else {
            $(".transition_3").removeClass("transition_3-on");
        }

        // fixed
        if(value>=2600&&value<4200) {
            $(".fixed_2").addClass("fixed_2-on");

        }
        else {
            $(".fixed_2").removeClass("fixed_2-on");
        }
        if(value>=4200) {
            $(".fixed_2").addClass("fixed_2-on2");
        }
        else {
            $(".fixed_2").removeClass("fixed_2-on2");
        }

    });
});
