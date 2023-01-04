/* ハンバーガーボタンのクリックで、メニューを開閉する */
$(".bl_hamburgerBtn").click(function () {
  /* ハンバーガーボタンのオープンを設定 */
  $(this).toggleClass("is_close");
  /* ナビゲーションの表示を設定 */
  $(".bl_headerNav").toggleClass("is_fade");
  /* スクロールの無を設定 */
  $("body").toggleClass("is_noscroll");
});

$(".bl_headerNav, .bl_headerNav_link, .el_btn").click(function () {
  /* ハンバーガーボタンのクローズを設定 */
  $(".bl_hamburgerBtn").removeClass("is_close");
  /* ナビゲーションの非表示を設定 */
  $(".bl_headerNav").removeClass("is_fade");
  /* スクロールの有を設定 */
  $("body").removeClass("is_noscroll");
});
