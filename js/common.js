

// 상단 탑 세로 길이 지침 영역

$(function () {
  $(window).scroll(function () {
    // 스크롤 값을 취득
    var value = $(this).scrollTop();
    var docHeight = $(document).height();
    var winHeight = $(window).height();
    var percent = parseInt((value / (docHeight - winHeight)) * 100);
    $(".percent_bar").css("left", percent + "%");
  });
});

// 상단 탑 세로 길이 지침 영역
