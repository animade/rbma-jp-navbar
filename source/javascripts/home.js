//= require "modernizr/modernizr.js"
//= require "jquery"
//= require "jquery.transit"

// -------------------------------------------------
//
// Home
// 
// -------------------------------------------------

(function() {

  "use strict";

  var nextSlide = 0,
    slideCount = 0;

  function init() {

    $('.js-slide').each(function() {
      slideCount++;
    });

    addEventListeners();

    var $firstSlide = $('.js-slide.active')
    setShade($firstSlide);


    // Preload first slides image
    var img = new Image();
    var bg = $('.js-slide-bg', '.js-slide.active').css('background-image');
    bg = bg.replace('url(', '').replace(')', '');
    img.onload = startIntro();
    img.src = bg;
  }

  function changeSlide(e) {

    // Stop ability to click while slide is in transition
    removeEventListeners();

    var $target = $(e.currentTarget);

    if ($target.hasClass('js-next')) {
      nextSlide = nextSlide == slideCount - 1 ? 0 : nextSlide + 1;
    } else {
      nextSlide = nextSlide == 0 ? slideCount - 1 : nextSlide - 1;
    }

    var $nextSlide = $('.js-slide').eq(nextSlide);
    $nextSlide.addClass('next-up');
    setShade($nextSlide);

    $('.js-slide.active').addClass('transition-out')
      .on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
        $(this).removeClass('active transition-out').off();

        $('.js-slide.next-up').addClass('active').removeClass('next-up');

        addEventListeners();

      });

  }

  // Set the arrow cursor to the right shade (light or dark)
  function setShade($el) {
    var shade = $el.hasClass('light') ? 'light' : 'dark';
    $('.js-prev, .js-next, .js-nav, .js-about-overlay').removeClass('light dark').addClass(shade);
  }

  function showInfoHint() {
    $('.js-instrument-overlay, .js-instrument-overlay-bg', '.js-slide.active').addClass('hint');
  }

  function hideInfoHint() {
    $('.js-instrument-overlay, .js-instrument-overlay-bg', '.js-slide.active').removeClass('hint');
  }

  function showInfoOverlay() {
    var $slide = $('.js-slide.active');
    $slide.addClass('show--info--overlay');

    $slide.find('.js-slide-bg').addClass('hidden');

    // Close overlay when user clicks anywhere on slide
    $slide.on('click', hideInfoOverlay);
  }

  function hideInfoOverlay() {
    var $slide = $('.js-slide.active');
    $slide.removeClass('show--info--overlay');
    $slide.find('.js-slide-bg').removeClass('hidden');
    $slide.scrollTop(0);
    $slide.off();
  }

  function showNavHint() {
    $('.js-nav').addClass('hint');
  }

  function hideNavHint() {
    $('.js-nav').removeClass('hint');
  }

  function showAboutOverlay() {
    var $aboutEl = $('.js-about-overlay');
    $aboutEl.addClass('show--about--overlay front');

    // Blur slide image by uncovering blurred image underneath current one
    $('.js-slide.active').find('.js-slide-bg').addClass('hidden');

    // Close overlay when user clicks anywhere
    $aboutEl.on('click', hideAboutOverlay);
  }

  function hideAboutOverlay() {
    var $aboutEl = $('.js-about-overlay');
    $aboutEl.removeClass('show--about--overlay')
      .on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
        $aboutEl.removeClass('front').off();
      });

    $('.js-slide.active').find('.js-slide-bg').removeClass('hidden');
  }

  // ------------------------------------------
  // Event listeners
  // ------------------------------------------

  function addEventListeners() {
    $('.js-prev, .js-next').on('click', changeSlide);

    $('.js-info').on('mouseover', showInfoHint);
    $('.js-info').on('mouseout', hideInfoHint);
    $('.js-info').on('click', showInfoOverlay);

    $('.js-nav').on('mouseover', showNavHint);
    $('.js-nav').on('mouseleave', hideNavHint);

    $('.js-about').on('click', showAboutOverlay);
  }

  function removeEventListeners() {
    $('.js-prev, .js-next').off();
    $('.js-info').off();
  }

  // ------------------------------------------
  // Start intro screen
  // ------------------------------------------
  //
  // Sorry for all the timeouts, waiting for the css transitions
  // to end wasn't enough in this case, looks good tho :)

  function startIntro() {

    // Hide preloader (which is just a black div on top)
    $('.js-preloader').fadeOut(1500);

    var $intro = $('.js-intro');

    // Animate intro content in
    setTimeout(function() {
      $('.js-intro-content').removeClass('hidden');

      // Animate intro text in
      setTimeout(function() {
        $('.js-intro-description', $intro).removeClass('hidden');

        $intro.on('click', startTutorial);
        setTimeout(startTutorial, 8000);

      }, 1500);

    }, 1500);

  }

  function startTutorial() {

    $('.js-intro-content', '.js-intro').addClass('hidden')
      .on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {

        // Animate right arrow indicator in
        $('.js-tut-arrow-right, .js-tut-step-1').addClass('active');

        // Animate left arrow indicator in
        setTimeout(function() {
          $('.js-tut-arrow-right, .js-tut-step-1').addClass('no-transition').fadeOut(500, function() {
            $('.js-tut-arrow-left, .js-tut-step-2').addClass('active');
          });

          // Animate teaser text in from the bottom
          setTimeout(function() {
            $('.js-tut-arrow-left, .js-tut-step-2').addClass('no-transition').fadeOut(500, function() {
              $('.js-tut-teaser, .js-tut-step-3').addClass('active');
            });

            // Hide tutorial
            setTimeout(function() {
              $('.js-tut-teaser, .js-tut-step-3').addClass('no-transition').fadeOut(500, function() {
                hideIntro();
              });
            }, 2500);

          }, 3200);

        }, 3200);

      });

  }

  function hideIntro() {

    $('.js-instruments').removeClass('blur');
    $('.js-intro').fadeOut(800, function() {
      $(this).remove();
    });

  }

  var Piece = function() {

    var self = this;

    self.init();

  };

  Piece.prototype = {

    // -------------------------------------------------
    //
    // Initial scene setup
    // 
    // -------------------------------------------------

    init: function() {


    }

  };

  new Piece();

  $(init);

})();