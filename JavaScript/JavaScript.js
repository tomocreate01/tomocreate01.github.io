<!-- スムーズスクロール部分の記述 -->


$(function(){
  // #で始まるリンクをクリックしたら実行されます
  $('a[href^="#"]').click(function() {
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

<!--メニューバー固定-->
$(function() {
  var headerMenu = $('.headerMenu');
  var headerMenuTop = headerMenu.offset().top;
  $(window).scroll(function () {
     var winTop = $(this).scrollTop();
     if (winTop >= headerMenuTop) {
        headerMenu.addClass('headerFixed')
     } else if (winTop <= headerMenuTop) {
        headerMenu.removeClass('headerFixed')
     }
  });
});

/*ブラウザ判定
jQuery(function($){
  //ユーザエージェント条件分岐便利スニペット
  var _ua = (function(){
    return {
      ltIE6:typeof window.addEventListener == "undefined" && typeof document.documentElement.style.maxHeight == "undefined",
      ltIE7:typeof window.addEventListener == "undefined" && typeof document.querySelectorAll == "undefined",
      ltIE8:typeof window.addEventListener == "undefined" && typeof document.getElementsByClassName == "undefined",
      ltIE9:document.uniqueID && typeof window.matchMedia == "undefined",
      gtIE10:document.uniqueID && window.matchMedia,
      Trident:document.uniqueID,
      Gecko:'MozAppearance' in document.documentElement.style,
      Presto:window.opera,
      Blink:window.chrome,
      Webkit:typeof window.chrome == "undefined" && 'WebkitAppearance' in document.documentElement.style,
      Touch:typeof document.ontouchstart != "undefined",
      Mobile:typeof window.orientation != "undefined",
      ltAd4_4:typeof window.orientation != "undefined" && typeof(EventSource) == "undefined",
      Pointer:window.navigator.pointerEnabled,
      MSPoniter:window.navigator.msPointerEnabled
    }
  })();


  if(_ua.ltIE6 || _ua.ltIE7 || _ua.ltIE8 || (_ua.Trident && !_ua.ltIE8) || ((_ua.Trident && !_ua.ltIE9 ) || _ua.gtIE10) || (_ua.Blink && !_ua.Mobile) || (_ua.Webkit && !_ua.Mobile) || (_ua.Gecko && !_ua.Mobile) || _ua.Presto){
    //document.write('IE6以下');
    //IE6以下での処理
  }else if(_ua.ltIE7){
    //document.write('IE7以下');
    //IE7以下での処理
  }else if(_ua.ltIE8){
    //document.write('IE8以下');
    //IE8以下での処理
  }else if(_ua.Trident && !_ua.ltIE8){
    //document.write('IE9');
    //IE9での処理
  }else if( (_ua.Trident && !_ua.ltIE9 ) || _ua.gtIE10){
    //document.write('IE10以上');
    //IE10以上での処理★ IE11 で試したところ「IE9」と表示される
  }else if(_ua.Blink && !_ua.Mobile){
    //document.write('デスクトップ版Chrome/Opera');
    //デスクトップ版Chrome/Operaでの処理
  }else if(_ua.Blink && _ua.Mobile){
    //document.write('Chrome for Android');
    //Chrome for Androidでの処理
    if(_ua.ltAd4_4){
      //document.write('：バージョンはAndroid4.4未満');
      //Chrome for Android（バージョン Android4.4未満）での処理
    }
  }else if(_ua.Webkit && !_ua.Mobile){
    //デスクトップ版Safariでの処理
    //document.write('デスクトップ版Safari');
  }else if(_ua.Webkit && _ua.Mobile){
    //document.write('モバイルでWebkitベース');
    //モバイルでWebkitベースでの処理
    if(_ua.ltAd4_4){
      //document.write('：バージョンはAndroid4.4未満');
      //モバイルでWebkitベース（バージョン Android4.4未満）での処理
    }
  }else if(_ua.Gecko && !_ua.Mobile){
    //document.write('デスクトップ版Firefox');
    //デスクトップ版Firefoxでの処理
  }else if(_ua.Gecko && _ua.Mobile){
    //document.write('モバイル版Firefox');
    //モバイル版Firefoxでの処理
  }else if(_ua.Presto){
    //document.write('旧Presto OperaまたはOpera Mini');
    //旧Presto OperaまたはOpera Miniでの処理
  }

});
*/
