
<!-- スムーズスクロール部分の記述 -->


$(function(){
  // #で始まるリンクをクリックしたら実行されます
  $('a[href^=#]').click(function() {
  // スクロールの速度
    var speed = 400;
    // ミリ秒で記述
    var href= $(this).attr("href");
    //アンカーの値取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    //移動先
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
    });
});


$(function(){
  $('.single-item').slick({
    accessibility: false,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: null,
    nextArrow: null,
    dots: false,
    draggable:true,
    fade: true,
    speed: 2000,
  });
});
