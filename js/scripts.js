(function ($) {
  $(document).ready(function () {
    "use strict";

    var currentYear = new Date().getFullYear();
    $("#year").text(currentYear);
    $("#year2").text(currentYear);

    function performSearch() {
      var searchText = $("#searchInput").val().toLowerCase();
      var blogPosts = $(".blog-post h3");
  
      blogPosts.each(function() {
        var blogPostText = $(this).text().toLowerCase();
        if (blogPostText.includes(searchText)) {
          $(this).parent().css("display", "block");
        } else {
          $(this).parent().css("display", "none");
        }
      });
    }
  
    $("#searchButton").click(function() {
      performSearch();
    });
  
    $("#searchInput").on("input", function() {
      performSearch();
    });
  
    // Reset the display when a new search is initiated
    $("#searchForm").submit(function(event) {
      event.preventDefault();
      $(".blog-post h3").each(function() {
        $(this).parent().css("display", "block");
      });
    });


    // TAB
    $(".tab-nav li").on('click', function (e) {
      $(".tab-item").hide();
      $(".tab-nav li").removeClass('active');
      $(this).addClass("active");
      var selected_tab = $(this).find("a").attr("href");
      $(selected_tab).stop().show();
      return false;
    });


    // SEARCH BOX
    $('.navbar .search-button').on('click', function (e) {
      $(this).toggleClass('open');
      $(".search-box").toggleClass('active');
      $("body").toggleClass("overflow");
    });


    // HAMBURGER MENU
    $('.hamburger-menu').on('click', function (e) {
      $(this).toggleClass('open');
      $(".side-widget").toggleClass('active');
      $("body").toggleClass("overflow");
    });


    // LOGO HOVER
    $(".logo-item, .case-gallery li figure img").hover(function () {
        $('.logo-item, .case-gallery li figure img').not(this).css({
          "opacity": "0.3"
        });
      },
      function () {
        $('.logo-item, .case-gallery li figure img').not(this).css({
          "opacity": "1"
        });
      });


    // PAGE TRANSITION
    $('body a').on('click', function (e) {

      if (typeof $(this).data('fancybox') == 'undefined') {
        e.preventDefault();
        var url = this.getAttribute("href");
        if (url.indexOf('#') != -1) {
          var hash = url.substring(url.indexOf('#'));


          if ($('body ' + hash).length != 0) {
            $('.page-transition').removeClass("active");


          }
        } else {
          $('.page-transition').toggleClass("active");
          setTimeout(function () {
            window.location = url;
          }, 1000);

        }
      }
    });


  });
  // END DOCUMENT READY


  // SLIDER
  var mainslider = new Swiper('.slider-main', {
    spaceBetween: 0,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    loop: true,
    effect: 'fade',
    loopedSlides: 1,
    thumbs: {
      swiper: slidercontent
    }
  });


  // SLIDER CONTENT
  var slidercontent = new Swiper('.slider-content', {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><circle r="13" cy="15" cx="15"></circle></svg></span>';
      },
    },
  });

  if ($(".slider-main")[0]) {
    mainslider.controller.control = slidercontent;
    slidercontent.controller.control = mainslider;
  } else {}


  // CAROUSEL SLIDER
  var swiper = new Swiper('.carousel-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }
  });


  // CAROUSEL SLIDER
  var swiper = new Swiper('.recent-cases-slider', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    }
  });


  // TESTIMONIALS SLIDER
  var swiper = new Swiper('.testimonials-slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
  });


  // STEPS SLIDER
  var swiper = new Swiper('.steps-slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
  });


  // STEPS SLIDER
  var swiper = new Swiper('.office-slider', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
  });


  // COUNTER
  $(document).scroll(function () {
    $('.odometer').each(function () {
      var parent_section_postion = $(this).closest('section').position();
      var parent_section_top = parent_section_postion.top;
      if ($(document).scrollTop() > parent_section_top - 300) {
        if ($(this).data('status') == 'yes') {
          $(this).html($(this).data('count'));
          $(this).data('status', 'no');
        }
      }
    });
  });


  // DATA BACKGROUND IMAGE
  var pageSection = $("*");
  pageSection.each(function (indx) {
    if ($(this).attr("data-background")) {
      $(this).css("background", "url(" + $(this).data("background") + ")");
    }
  });

  // DATA BACKGROUND COLOR
  var pageSection = $("*");
  pageSection.each(function (indx) {
    if ($(this).attr("data-background")) {
      $(this).css("background", $(this).data("background"));
    }
  });


  // PARALLAX
  $.stellar({
    horizontalScrolling: false,
    verticalOffset: 0,
    responsive: true
  });


  // STICKY NAVBAR
  $(window).on("scroll touchmove", function () {
    $('.navbar').toggleClass('sticky', $(document).scrollTop() > 0);

  });


  // STICKY UP DOWN
  var didScroll;
  var lastScrollTop = 0;
  var delta = 0;
  var navbarHeight = $('.navbar').outerHeight();

  $(window).scroll(function (event) {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = true;
    }
  }, 0);

  function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
      return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      $('.navbar').removeClass('nav-down').addClass('nav-up');
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $('.navbar').removeClass('nav-up').addClass('nav-down');
      }
    }

    lastScrollTop = st;
  };


  // MASONRY
  var $container = $(".masonry");
  $container.imagesLoaded(function () {
    $container.isotope({
      itemSelector: '.masonry li',
      layoutMode: 'masonry'
    });
  });


  // PRELOADER
//   $(window).load(function () {
//     $("body").addClass("page-loaded");
//   });


})(jQuery);
