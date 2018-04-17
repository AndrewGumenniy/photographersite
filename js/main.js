$(document).ready(function() {
  setPosterSize();
  $(window).resize(function() {
    setPosterSize();
  });
  // set size for elemts
  function setPosterSize() {
    // main page background size
    $(function() {
      if ($(window).width() >= 1100) {
        $("#slideshow img").each(function() {
          $(this).attr("src", $(this).attr("data-src"));
        });
      }
    });
    // position and visible main page background for different browsers
    if ($(window).width() > 1500 || $(window).width() < 1100) {
      $("#slideshow > div").css("left", 0);
    } else {
      var left = ($(window).width() - 1140) / 2;
      $("#slideshow > div").css("left", left);
    }
    if ($(window).width() < 1100) {
      $("#dslideshow").remove();
    }
    // hide slider for images in portfolio for small screens
    if ($(window).width() < 640) {
      $(".about-item #portfolio").removeAttr("id");
    }
  }
  // slideshow on mane page
  $("#slideshow > div:gt(0)").hide();
  if ($(window).width() > 640) {
    setInterval(function() {
      $("#slideshow > div:first")
        .fadeOut(2500)
        .next()
        .fadeIn(2500)
        .end()
        .appendTo("#slideshow");
    }, 5000);
  }
  // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $("header").outerHeight();

  $(window).scroll(function(event) {
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);
  function hasScrolled() {
    var st = $(this).scrollTop();
    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta) return;
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      $("header")
        .removeClass("nav-down")
        .addClass("nav-up");
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $("header")
          .removeClass("nav-up")
          .addClass("nav-down");
      }
    }
    lastScrollTop = st;
  }
});