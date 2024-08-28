$(document).ready(function () {
  //---漢堡按鈕---
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
    $(".navigation").toggleClass("show");
  });

  //滑動至錨點位置
  $(".menu a").click(function () {
    //設定變數儲存抓到的屬性值
    var btn = $(this).attr("href"); //返還取得的屬性值 attr:取的屬性值
    var pos = $(btn).offset(); //抓取相對的座標位置
    $("body,html").stop().animate({ scrollTop: pos.top }, 1000); //變數tpos的top(y軸)
    //偵測卷軸的頂端位置(scrollTop)滾動到與pos頂端一樣位置的地方 (pos.top),滾動秒數到達指定位置
    //有些瀏覽器scroll寫在body內，有些寫在html內，所以都要抓
  });
  //id才可以滑動到指定位置，class不行

  //置頂按鈕
  $("#go_top").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 1000);
  });

  //指定卷軸位置淡出淡入
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("#go_top").stop().fadeIn();
    } else {
      $("#go_top").stop().fadeOut();
    }
    //.stop() 才能讓反應秒數間進行其他動作時，可以直接執行其他動作而不是一定要做完所有指令
  });
});

//jQuery Smoove

$(".smoove").smoove({
  offset: "20%", //物件在視窗25%高度的時候才出現
});

//滾軸置底後，隱藏topbar
window.onscroll = function () {
  var windowHeight = window.innerHeight;
  var bodyHeight = document.body.offsetHeight;
  var scrollY = window.scrollY;

  if (windowHeight + scrollY >= bodyHeight) {
    document.getElementById("topbar").style.opacity = "0";
  } else {
    document.getElementById("topbar").style.opacity = "1";
  }
};

// 建立一個隱藏的div來計算滾動條寬度
function getScrollbarWidth() {
    // 創建一個div元素
    const div = document.createElement('div');
    
    // 設置div的樣式
    div.style.visibility = 'hidden';
    div.style.overflow = 'scroll'; // 強制出現滾動條
    div.style.msOverflowStyle = 'scrollbar'; // 為IE設置強制滾動條
    div.style.position = 'absolute';
    div.style.top = '-9999px';
    
    // 插入div到body中
    document.body.appendChild(div);
    
    // 計算滾動條寬度
    const scrollbarWidth = div.offsetWidth - div.clientWidth;
    
    // 移除div
    document.body.removeChild(div);
    
    return scrollbarWidth;
}

// 取得滾動條寬度
const scrollbarWidth = getScrollbarWidth();

//light box
$(document).ready(function () {
  var scrollPosition = 0;

  // 當點擊縮略圖時，顯示 Lightbox 並設置圖片
  $(".lightbox-trigger").click(function () {
    var src = $(this).find("img").attr("src");
    $("#lightbox-image").attr("src", src);
    var text = $(this).find("p").first().text();
    $("#lightbox-content").text(text);
    $("#lightbox").css("display", "flex").hide().fadeIn();
    $("body").addClass("no-scroll"); // 添加 no-scroll
    $("body").css("padding-right", scrollbarWidth + "px");
    $(".navigation").css("margin-right", scrollbarWidth + "px");
  });

  // 當點擊 Lightbox 本身時，隱藏 Lightbox
  $("#lightbox").click(function () {
    $(this).fadeOut(function () {
      $("body").removeClass("no-scroll");
      $("body").css("padding-right", "0");
      $(".navigation").css("margin-right", "0");
    });
  });
});

//light box (artist area)

$(document).ready(function () {
  var scrollPosition = 0;

  // 當點擊縮略圖時，顯示 Lightbox 並設置圖片
  $(".lightbox-trigger2").click(function (event) {
    var bgImage = $(this).css("background-image");
    var src = bgImage.replace(/^url\(['"](.+)['"]\)/, "$1");
    $("#lightbox-image2").attr("src", src);
    $("#lightbox2").css("display", "flex").hide().fadeIn();
    $("body").addClass("no-scroll"); // 添加 no-scroll
    $("body").css("padding-right", scrollbarWidth + "px");
    $(".navigation").css("margin-right", scrollbarWidth + "px");
    var text = $(this).find("p").first().text();
    $("#lightbox-content-service").text(text);
    var title = $(this).find("h3").first().text();
    $("#content-title").text(title);
  });

  // 當點擊 Lightbox 本身時，隱藏 Lightbox
  $("#lightbox2").click(function () {
    $(this).fadeOut(function () {
      $("body").removeClass("no-scroll");
      $("body").css("padding-right", "0");
      $(".navigation").css("margin-right", "0");
    });
  });
});
