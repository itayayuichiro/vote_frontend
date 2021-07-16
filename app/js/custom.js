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