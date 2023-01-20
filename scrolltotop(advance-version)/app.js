$(window).scroll(function () {
  if ($(window).scrollTop() >= 600) {
    $("a").css("display", "block");
  } else {
    $("a").css("display", "none");
  }
});

$("a").click(function (e) {
  $('html, body').animate({ scrollTop: 0 }, 'slow');
});