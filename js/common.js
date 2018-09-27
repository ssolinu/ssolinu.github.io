
// D데이 타이머 
$('#clock').countdown('2018/11/10 16:00:00', function (event) {
  $(this).html(
    event.strftime(''
      + '<span>%D</span> 일 '
      + '<span>%H</span> 시 '
      + '<span>%M</span> 분 '
      + '<span>%S</span> 초'));
});
// D데이 타이머 

// 신랑신부 토글
$(".box").click(function () {
  $(".box").removeClass("on");
  $(".box").css("width", "25%");
  $(".box .finger").css("display","none");
  $(this).css("width", "75%");
  $(this).addClass("on");
});
// 신랑신부 토글


// 기본 자동 실행 코드 
$(document).ready(function () {

// 원페이지 플러그인 실행
$(".main").onepage_scroll({
  sectionContainer: "section",
  easing: "ease-out",
  animationTime: 1000,
  pagination: false,
  keyboard: true,
  loop: false
});
// 원페이지 플러그인 실행
// 갤러리 실행
$(".owl-carousel").owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true
});
// 갤러리 실행



});
// 기본 자동 실행 코드 
