$(window).on('load', function () {
  const $top = $('#top');
  if ($top.length > 0) {
    const topOffset = $top.offset().top;
    console.log(topOffset); // ← 位置を確認したい時だけ表示
  }

  // 他の処理があればここに書いてね
});
