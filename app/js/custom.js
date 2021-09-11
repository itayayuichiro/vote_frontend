/**
 * footerの色をつけるための物
 */
$(function () {
  if (location.pathname === '/') {
    $("#home").addClass("select");
  } else if (location.pathname === '/movie') {
    $("#trend").addClass("select");
  } else if (location.pathname === '/comedian') {
    $("#ranking").addClass("select");
  } else {
    $("#" + location.pathname.split('/')[1]).addClass("select");
  }
});

/**
 * マイページのタブ切り替え
 */
$(function () {
  if (location.hash === "#favorite") {
    $("#tab_favorite").addClass('select');
    $("#favorite").show();
  } else if (location.hash === "#profile") {
    $("#tab_profile").addClass('select');
    $("#profile").show();
  } else if (location.hash === "#five") {
    $("#tab_five").addClass('select');
    $("#five").show();
  } else {
    $("#tab_favorite").addClass('select');
    $("#favorite").show();
  }
});
function show(id) {
  $("#favorite").hide();
  $("#five").hide();
  $("#"+id).show();
  $(".min_title").removeClass('select');
  $("#tab_"+id).addClass('select');
  history.pushState('','',"#"+id);
}

/** スクロール中は非表示 */
$(function () {
  $('.gacha').show();
  $(window).scroll(function(){
    $('.gacha').css('display', 'none').delay(500).fadeIn('slow');
  });
});
/** ガチャ */
$(function () {
  $('#action').click(function(){
    $('.modal').show("slow");
  });
  $('.close').click(function(){
    $('.modal').hide("slow");
  })
});

// URLからパラメータ取得
function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// トークン取得
function getToken(){
  var cookies = document.cookie; //全てのcookieを取り出して
  var cookiesArray = cookies.split(';'); // ;で分割し配列に
  var result;
  for(var c of cookiesArray){ //一つ一つ取り出して
      var cArray = c.split('='); //さらに=で分割して配列に
      if( cArray[0].trim() == "token"){ // 取り出したいkeyと合致したら
        result = cArray[1];  // [key,value] 
      }
  }
  return result;
}
