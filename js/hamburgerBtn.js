var scrollTop = 0;

/* ハンバーガーボタンのクリックで、メニューを開閉する */
$(".bl_hamburgerBtn").click(function () {
  /* ハンバーガーボタンのオープンを設定 */
  $(this).toggleClass("is_close");
  /* ナビゲーションの表示を設定 */
  $(".bl_headerNav").toggleClass("is_fade");
  /* スクロール停止 */
  if ($(this).hasClass("is_close")) {
    scrollTop = $(window).scrollTop();
    $("body").css("top", scrollTop * -1 + "px");
    $("body").toggleClass("is_noscroll");
  } else {
    /* スクロール解除 */
    $("body").css("top", "");
    $("body").removeClass("is_noscroll");
    window.scrollTo(0, scrollTop);
  }
});

$(".bl_headerNav, .bl_headerNav_link, .el_btn").click(function () {
  /* ハンバーガーボタンのクローズを設定 */
  $(".bl_hamburgerBtn").removeClass("is_close");
  /* ナビゲーションの非表示を設定 */
  $(".bl_headerNav").removeClass("is_fade");
  /* スクロール解除 */
  $("body").css("top", "");
  $("body").removeClass("is_noscroll");
  window.scrollTo(0, scrollTop);
});
