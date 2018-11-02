//vh 안먹어서 JS로 지정해주기
var w = document.body.clientWidth;
var h = document.body.clientHeight;
$(".size").text(w + 'x' + h); // 브라우져 사이즈 보이게 더미용
$(".contact_1").css("height", h*0.75 );
$(".contact_2").css("height", h*0.25 );
$("div.item").css("height", h );
$(".location_text").css("font-size", h*0.025 );
//vh 안먹어서 JS로 지정해주기






// D데이 타이머 
$('#clock').countdown('2018/11/10 16:00:00')
  .on('update.countdown', function (event) {
    $(this).html(
      event.strftime(''
        + '<h3>하나가 되는날 까지</h3>'
        + '<span>%D</span> 일 '
        + '<span>%H</span> 시 '
        + '<span>%M</span> 분 '
        + '<span>%S</span> 초'));
  })
  .on('finish.countdown', function (event) {
    $(this).html('<h2>우리의 결혼을<br>축복해 주세요 ^^</h2>')
  });
// D데이 타이머 

// 신랑신부 토글
$(".box").click(function () {
  $(".box").removeClass("on");
  $(".box").css("width", "25%");
  $(".box .finger").css("display", "none");
  $(this).css("width", "75%");
  $(this).addClass("on");
});
// 신랑신부 토글
// 추가 안내 토글
$(".message").click(function () {
  $(".message_box").css("display", "block");
});
$(".close").click(function () {
  $(".message_box").css("display", "none");
});
// 추가 안내 토글

// 기본 자동 실행 코드 
$(document).ready(function () {
// 
// 
  //PC검출 적용
  var w = document.body.clientWidth;
  if (w < 1025) {
    // 원페이지 플러그인 실행
    $(".main").onepage_scroll({
      sectionContainer: "section",
      easing: "ease",
      // animationTime: 2000,
      animationTime: 2000,
      pagination: false,
      keyboard: true,
      loop: false
    });
    // 원페이지 플러그인 실행
  }
  //PC검출 적용

  //갤러리 인포 토글 
  var owl = $('.owl-carousel');
  owl.on('drag.owl.carousel dragged.owl.carousel ',
    function (e) {
      $(".gallery_info").css("display", "none");
    });
  //갤러리 인포 토글 

  // 갤러리 실행
  $(".owl-carousel").owlCarousel({
    items: 1,
    center: true,
    loop: true,
    nav: false,
    lazyLoad: true
    // autoplay: false,
    // autoplayTimeout: 10000,
    // autoplayHoverPause: true
  });

  // 갤러리 실행

// 
// 




});
// 기본 자동 실행 코드