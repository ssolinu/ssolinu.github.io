
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
      easing: "ease-out",
      animationTime: 1000,
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