

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
    // $('#scrollValue').text(value); // 스크롤값 체크용 더미

    // 전체 배경 색변경
    if (percent >= 10 && percent <= 30) {
      $("body").removeClass();
      $("body").addClass("bg_01");
    }
    else if (percent >= 30 && percent <= 45) {
      $("body").removeClass();
      $("body").addClass("bg_02");
    }
    else if (percent >= 45 && percent <= 60) {
      $("body").removeClass();
      $("body").addClass("bg_03");
    }
    else if (percent >= 60 && percent <= 75) {
      $("body").removeClass();
      $("body").addClass("bg_04");
    }
    else if (percent >= 75 && percent <= 100) {
      $("body").removeClass();
      $("body").addClass("bg_05");
    }
    else {
      $("body").removeClass();
    }

    // 인트로 배경 이동
    $(".intro").css("background-size", (140-(value/30)) + "%");

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
  // $(".tel").css("display", "none");
  $(".box").css("width", "25%");
  $(this).css("width", "75%");
  // $(this).children(".tel").css("left", "0");
  $(this).addClass("on");
});
// 신랑신부 토글



$(document).ready(function () {

  // 원페이지 플러그인 실행
  $(".main").onepage_scroll({
    sectionContainer: "section",
    // responsiveFallback: 600,
    loop: false
  });

// 갤러리 실행
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true
  });



});

// 갤러리 실행
