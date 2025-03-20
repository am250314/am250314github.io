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

// スムーススクロール
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



// ハンバーガーメニュー
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



// タイプライター表示
    let text = "Moritani Ai\nPortfolio Website"; // 表示したいテキスト
        let index = 0; // 何文字目まで表示したかを記録
        let speed = 100; // 文字が表示される速度（ミリ秒）

        function typeWriter() {
            if (index < text.length) {
                let siteName = document.querySelector(".site-name");
                let currentChar = text[index] === "\n" ? "<br>" : text[index]; // 改行は <br> に変換
                siteName.innerHTML += currentChar; // 1文字ずつ追加
                index++;
                setTimeout(typeWriter, speed); // 次の文字を表示するまでの待ち時間
            }
        }

        typeWriter(); // 関数を実行してアニメーションをスタート


// typedテキスト表示
    // ① .site-name を取得
    const siteName = document.querySelector(".site-name");
    const typed = document.querySelector(".typed");

    // ② 最初は .typed を非表示にする
    typed.style.opacity = "0";

    // ③ .site-name のアニメーションが終わったら、.typed を表示する
    setTimeout(() => {
        typed.style.opacity = "1";
        typed.style.animation = "slideUp 1.5s ease-out forwards";
    }, 1500); // 2秒（2000ミリ秒）後に表示





// service要素表示
    const services = document.querySelectorAll(".service"); // .service を全部取得

    function checkScroll() {
        services.forEach(service => {
            const serviceTop = service.getBoundingClientRect().top; // 要素の上端
            const windowHeight = window.innerHeight; // 画面の高さ

            // 要素が画面の75%の高さにきたら表示
            if (serviceTop < windowHeight * 0.80) {
                service.classList.add("show"); // .show クラスを追加
            }
        });
    }

    window.addEventListener("scroll", checkScroll); // スクロール時に発火
    checkScroll(); // ページ読み込み時にもチェック
});

