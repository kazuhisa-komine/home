
$(function () {

  if ($(".top").length > 0) {
    var top = $(".top").offset().top;
  }

  // ↓仮に他のエレメントも .offset().top を使っていたら、このように対応します
  // if ($("#move02").length > 0) {
  //   var move02Top = $("#move02").offset().top;
  // }

  // Waypoint 初期化などもここに書く形でOK（仮処理）
  if ($(".waypoint").length > 0 && typeof $.fn.waypoint === 'function') {
    $(".waypoint").waypoint(function () {
      $(this.element).addClass("active");
    }, {
      offset: "80%"
    });
  }

});
