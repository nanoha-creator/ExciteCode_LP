// ヘッダーの高さ分だけコンテンツを下げる
$(function () {
  const height = $(".js_header").height();
  $("main").css("margin-top", height);
});

// ページ内スクロール
$(function () {
  // ヘッダーの高さ取得
  const headerHeight = $(".js_header").height();
  $('a[href^="#"]').click(function () {
    const speed = 600;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    // ヘッダーの高さ分下げる
    let position = target.offset().top - headerHeight;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});
