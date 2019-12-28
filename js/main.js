(function($) {
  ("use strict");
  // mobile responsive navbar
  jQuery("#mobile-menu").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "767"
  });
  // main sider
  $(".slider-active").owlCarousel({
    loop: true,
    nav: true,
    navText: ["Back", "Next"],
    autoplay: true,
    autoplayTimeout: "5000",
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  // product furniture slider
  $(".furniture-active").owlCarousel({
    loop: true,
    nav: true,
    navText: ["Back", "Next"],
    autoplay: true,
    margin: 30,
    autoplayHoverPause: true,
    autoplayTimeout: "5000",
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 4
      }
    }
  });
  // product lighting slider
  $(".lighting-active").owlCarousel({
    loop: true,
    nav: true,
    navText: ["Back", "Next"],
    autoplay: true,
    margin: 30,
    autoplayHoverPause: true,
    autoplayTimeout: "5000",
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 4
      }
    }
  });
  // product sofas slider
  $(".sofas-active").owlCarousel({
    loop: true,
    nav: true,
    navText: ["Back", "Next"],
    autoplay: true,
    margin: 30,
    autoplayHoverPause: true,
    autoplayTimeout: "5000",
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 4
      }
    }
  });
  // product chairs slider
  $(".chairs-active").owlCarousel({
    loop: true,
    nav: true,
    navText: ["Back", "Next"],
    autoplay: true,
    margin: 30,
    autoplayHoverPause: true,
    autoplayTimeout: "5000",
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 4
      }
    }
  });
  // brand slider
  $(".brand-active").owlCarousel({
    loop: true,
    nav: false,
    navText: ["Back", "Next"],
    autoplay: true,
    margin: 30,
    autoplayHoverPause: true,
    autoplayTimeout: "5000",
    responsive: {
      0: {
        items: 2
      },
      476: {
        items: 3
      },
      768: {
        items: 4
      },
      992: {
        items: 5
      },
      1200: {
        items: 6
      }
    }
  });

  $("select").niceSelect();

  // product upsell slider
  $(".upsell-active").owlCarousel({
    loop: true,
    nav: true,
    navText: ["Back", "Next"],
    autoplay: true,
    margin: 30,
    autoplayHoverPause: true,
    autoplayTimeout: "5000",
    responsive: {
      0: {
        items: 2
      },
      476: {
        items: 3
      },
      768: {
        items: 4
      },
      992: {
        items: 5
      },
      1200: {
        items: 5
      }
    }
  });

  // shop page catagory accordion
  $(".collapse")
    .on("shown.bs.collapse", function() {
      $(this)
        .parent()
        .find(".fa-plus-square-o")
        .removeClass("fa-plus-square-o")
        .addClass("fa-minus-square-o");
    })
    .on("hidden.bs.collapse", function() {
      $(this)
        .parent()
        .find(".fa-minus-square-o")
        .removeClass("fa-minus-square-o")
        .addClass("fa-plus-square-o");
    });

  // price slider range
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 1000,
    values: [100, 500],
    slide: function(event, ui) {
      $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
    }
  });
  $("#amount").val(
    "$" +
      $("#slider-range").slider("values", 0) +
      " - $" +
      $("#slider-range").slider("values", 1)
  );

})(jQuery);

// scrollTop
jQuery(document).ready(function() {
  jQuery(".scrolltop").click(function() {
    jQuery("html").animate(
      {
        scrollTop: "0px"
      },
      1000
    );
  });
  jQuery(window).scroll(function() {
    var top = jQuery(window).scrollTop();
    if (top > 200) {
      jQuery(".scrolltop").show(500);
    } else {
      jQuery(".scrolltop").hide(500);
    }
  });
});

jQuery(document).ready(function() {
  jQuery(window).scroll(function() {
    var screenwidth = jQuery(window).width();
    if (screenwidth > 767) {
      jQuery(window).scroll(function() {
        var upor = jQuery(window).scrollTop();
        if (upor > 200) {
          jQuery(".main-menu").addClass("fixed");
        } else {
          jQuery(".main-menu").removeClass("fixed");
        }
      });
    } else {
      jQuery(window).scroll(function() {
        var upor = jQuery(window).scrollTop();
        if (upor >= 1) {
          jQuery(".main-menu").removeClass("fixed");
        }
      });
    }
  });
});