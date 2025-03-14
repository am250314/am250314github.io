document.addEventListener("DOMContentLoaded", function() {
    $(".slider").slick({
        autoplay: true,  // 自動再生
        autoplaySpeed: 3000, // スライドの切り替え速度（3秒）
        dots: true,  // ドットナビゲーションを表示
        arrows: true,  // 前後の矢印を表示
        centerMode: true,  // 中央を強調
        centerPadding: "0px", // 余白をなくす
        slidesToShow: 3,  // 3枚表示（中央 + 左右）
        variableWidth: false,  // 幅を均等にする
        infinite: true,  // 無限ループ
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,  // スマホでは1枚表示
                }
            }
        ]
    });

    // スムーススクロールの実装
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault(); // デフォルトのリンク動作を無効化

            const targetId = this.getAttribute("href"); // クリックされたリンクのhref属性を取得
            const targetElement = document.querySelector(targetId); // 対象のセクションを取得

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop, // 対象のセクションの位置
                    behavior: "smooth" // スムーススクロールを有効化
                });
            }
        });
    });

    /*=================================================
    ハンバーガーメニュー
    ===================================================*/
  // ハンバーガーメニューのクリックイベント
    $('.toggle_btn').on('click', function() {
    // #headerにopenクラスが存在する場合
    if ($('.header').hasClass('open')) {
      // openクラスを削除
      // openクラスを削除すると、openクラスのCSSがはずれるため、
      // メニューが非表示になる
    $('.header').removeClass('open');

    // #headerにopenクラスが存在しない場合
    } else {
      // openクラスを追加
      // openクラスを追加すると、openクラスのCSSが適応されるため、
      // メニューが表示される
    $('.header').addClass('open');
    }
    });

  // メニューが表示されている時に画面をクリックした場合
    $('#mask').on('click', function() {
    // openクラスを削除して、メニューを閉じる
    $('.header').removeClass('open');
    });
});

