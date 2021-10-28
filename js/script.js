$(document).ready(function(){
  $('.section-process-slider').slick({
    arrows: true,
    accessibility: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    cssEase: 'ease',
    draggable: true,
    fade: true,
    responsive: true,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    useCSS: true,
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false

  });
});

$(".header-scroll-btn").click(function() {
    $('html, body').animate({
        scrollTop: $(".section-process").offset().top
    }, 500);
});

$(".button--bubble").each(function() {
  var $circlesTopLeft = $(this)
  .parent()
  .find(".circle.top-left");
  var $circlesBottomRight = $(this)
  .parent()
  .find(".circle.bottom-right");

  var tl = new TimelineLite();
  var tl2 = new TimelineLite();

  var btTl = new TimelineLite({ paused: true });

  tl.to($circlesTopLeft, 1.2, {
    x: -25,
    y: -25,
    scaleY: 2,
    ease: SlowMo.ease.config(0.1, 0.7, false)
  });
  tl.to($circlesTopLeft.eq(0), 0.1, { scale: 0.2, x: "+=6", y: "-=2" });
  tl.to(
    $circlesTopLeft.eq(1),
    0.1,
    { scaleX: 1, scaleY: 0.8, x: "-=10", y: "-=7" },
    "-=0.1"
  );
  tl.to(
    $circlesTopLeft.eq(2),
    0.1,
    { scale: 0.2, x: "-=15", y: "+=6" },
    "-=0.1"
  );
  tl.to($circlesTopLeft.eq(0), 1, {
    scale: 0,
    x: "-=5",
    y: "-=15",
    opacity: 0
  });
  tl.to(
    $circlesTopLeft.eq(1),
    1,
    { scaleX: 0.4, scaleY: 0.4, x: "-=10", y: "-=10", opacity: 0 },
    "-=1"
  );
  tl.to(
    $circlesTopLeft.eq(2),
    1,
    { scale: 0, x: "-=15", y: "+=5", opacity: 0 },
    "-=1"
  );

  var tlBt1 = new TimelineLite();
  var tlBt2 = new TimelineLite();

  tlBt1.set($circlesTopLeft, { x: 0, y: 0, rotation: -45 });
  tlBt1.add(tl);

  tl2.set($circlesBottomRight, { x: 0, y: 0 });
  tl2.to($circlesBottomRight, 1.1, {
    x: 30,
    y: 30,
    ease: SlowMo.ease.config(0.1, 0.7, false)
  });
  tl2.to($circlesBottomRight.eq(0), 0.1, { scale: 0.2, x: "-=6", y: "+=3" });
  tl2.to(
    $circlesBottomRight.eq(1),
    0.1,
    { scale: 0.8, x: "+=7", y: "+=3" },
    "-=0.1"
  );
  tl2.to(
    $circlesBottomRight.eq(2),
    0.1,
    { scale: 0.2, x: "+=15", y: "-=6" },
    "-=0.2"
  );
  tl2.to($circlesBottomRight.eq(0), 1, {
    scale: 0,
    x: "+=5",
    y: "+=15",
    opacity: 0
  });
  tl2.to(
    $circlesBottomRight.eq(1),
    1,
    { scale: 0.4, x: "+=7", y: "+=7", opacity: 0 },
    "-=1"
  );
  tl2.to(
    $circlesBottomRight.eq(2),
    1,
    { scale: 0, x: "+=15", y: "-=5", opacity: 0 },
    "-=1"
  );

  tlBt2.set($circlesBottomRight, { x: 0, y: 0, rotation: 45 });
  tlBt2.add(tl2);

  btTl.add(tlBt1);
  btTl.to(
    $(this)
    .parent()
    .find(".button.effect-button"),
    0.8,
    { scaleY: 1.1 },
    0.1
  );
  btTl.add(tlBt2, 0.2);
  btTl.to(
    $(this)
    .parent()
    .find(".button.effect-button"),
    1.8,
    { scale: 1, ease: Elastic.easeOut.config(1.2, 0.4) },
    1.2
  );

  btTl.timeScale(2.6);

  $(this).on("mouseover", function() {
    btTl.restart();
  });
});

$( document ).ready(function() {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    // console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}
