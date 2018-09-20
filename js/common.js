

// 상단 탑 세로 길이 지침 영역

$(function () {
  $(window).scroll(function () {
    // 스크롤 값을 취득
    var value = $(this).scrollTop();
    var docHeight = $(document).height();
    var winHeight = $(window).height();
    var percent = parseInt((value / (docHeight - winHeight)) * 100);
    $(".percent_bar").css("left", percent + "%");

    $('#scrollValue').text(percent); // 스크롤값 체크용 더미
    $('#scrollValue').text(value); // 스크롤값 체크용 더미

    // 전체 배경 색변경
    if (percent >= 20 && percent <= 40) {
      $("body").removeClass();
      $("body").addClass("bg_01");
    }
    else if (percent >= 40 && percent <= 60) {
      $("body").removeClass();
      $("body").addClass("bg_02");
    }
    else if (percent >= 60 && percent <= 80) {
      $("body").removeClass();
      $("body").addClass("bg_03");
    }
    else if (percent >= 80 && percent <= 100) {
      $("body").removeClass();
      $("body").addClass("bg_04");
    }
    else {
      $("body").removeClass();
    }


    $(".intro").css("background-size", (140-(value/15)) + "%");

    // 인트로 배경 이미지
    if (value >= 100) {
      // alert((- value) + "px");
      // $(".intro").css("display", "none");
      // $(".intro").css("background-position-y", (- value) + "px");
    }


  });
});

// 상단 탑 세로 길이 지침 영역

// D데이 타이머 
$('#clock').countdown('2018/11/10 16:00:00', function (event) {
  $(this).html(
    event.strftime(''
      + '<span>%D</span> 일 '
      + '<span>%H</span> 시'
      + '<span>%M</span> 분 '
      + '<span>%S</span> 초'));
});
// D데이 타이머 

// 신랑신부 토글
$(".box").click(function () {
  $(".box").removeClass("on");
  $(".box").css("width", "25%");
  $(this).css("width", "75%");
  $(this).addClass("on");
});
// 신랑신부 토글

// 갤러리 실행
$(document).ready(function () {
  $("#owl1").owlCarousel({
    autoPlay: 5000, //Set AutoPlay to 5 seconds 
    items: 1,
  });
});


// 갤러리 실행
