
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
  // responsiveFallback: 600,
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

//리플 달기 부분
/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
/*
var disqus_config = function () {
this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};
*/
(function () { // DON'T EDIT BELOW THIS LINE
  var d = document, s = d.createElement('script');
  s.src = 'https://ssolinu.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
})();

//리플 달기 부분