(function ($) {
  "use strict";

  /* ===========================
     AOS
  ============================ */
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'slide'
    });
  }

  /* ===========================
     FULL HEIGHT (HERO)
  ============================ */
  function fullHeight() {
    function setHeight() {
      if (window.innerWidth > 768) {
        $('.js-fullheight').css('height', $(window).height());
      } else {
        $('.js-fullheight').css('height', 'auto');
      }
    }
    setHeight();
    $(window).on('resize', setHeight);
  }
  fullHeight();

  /* ===========================
     LOADER
  ============================ */
  $(window).on('load', function () {
    if ($('#ftco-loader').length > 0) {
      $('#ftco-loader').removeClass('show').fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  /* ===========================
     STELLAR
  ============================ */
  if ($.fn.stellar) {
    $(window).stellar({
      responsive: true,
      horizontalScrolling: false,
      parallaxBackgrounds: true
    });
  }

  /* ===========================
     SCROLLAX
  ============================ */
  if ($.Scrollax) {
    $.Scrollax();
  }

  /* ===========================
     OWL CAROUSELS (CENTRALIZADO)
  ============================ */
  function initCarousels() {
    if (!$.fn.owlCarousel) return;

    /* Destination */
    $('.destination-slider').each(function () {
      $(this).owlCarousel({
        autoplay: true,
        loop: true,
        margin: 20,
        nav: true,
        dots: true,
        smartSpeed: 600,
        navText: [
          '<span class="ion-ios-arrow-back"></span>',
          '<span class="ion-ios-arrow-forward"></span>'
        ],
        responsive: {
          0: { items: 1 },
          576: { items: 2 },
          992: { items: 3 },
          1200: { items: 4 }
        }
      });
    });

    /* Testimony */
    $('.carousel-testimony').each(function () {
      $(this).owlCarousel({
        autoplay: true,
        loop: true,
        items: 1,
        nav: true,
        navText: [
          '<span class="ion-ios-arrow-back"></span>',
          '<span class="ion-ios-arrow-forward"></span>'
        ]
      });
    });

    /* Single */
    $('.single-slider').each(function () {
      $(this).owlCarousel({
        autoplay: true,
        loop: true,
        items: 1,
        nav: true,
        dots: true
      });
    });

    /* Boat */
    $('.boat-slider').each(function () {
      const $slider = $(this);
      const total = $slider.find('.boat-card').length;

      $slider.owlCarousel({
        items: 1,
        loop: false,
        autoplay: false,
        dots: false,
        nav: false,
        smartSpeed: 500
      });

      function updateCounter(index) {
        $('#boat-counter, #boat-counter-bottom')
          .text('Barco ' + (index + 1) + ' de ' + total);
      }

      $slider.on('initialized.owl.carousel changed.owl.carousel', function (e) {
        updateCounter(e.item.index);
      });

      $('.boat-prev').on('click', function () {
        $slider.trigger('prev.owl.carousel');
      });

      $('.boat-next').on('click', function () {
        $slider.trigger('next.owl.carousel');
      });
    });

    /* Premium */
    $('.carrossel-premium__owl').each(function () {
      $(this).owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          1200: { items: 3 }
        }
      });
    });

    /* Trilhas / Mergulho */
    $('.trilhas-carousel, .mergulho-carousel').each(function () {
      $(this).owlCarousel({
        loop: false,
        nav: true,
        dots: true,
        responsive: {
          0: {
            items: 1.15,
            margin: 20,
            nav: false
          },
          992: {
            items: 4,
            margin: 20
          }
        }
      });
    });

    /* Barcos */
    $('.barcos-carousel').each(function () {
      $(this).owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
          0: { items: 1.3, stagePadding: 20 },
          768: { items: 2.3 },
          1000: { items: 4 }
        }
      });
    });

    /* CTA */
    $('.cta-slider').each(function () {
      $(this).owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
        items: 1,
        dots: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
      });
    });

    $('.carrossel-geral').owlCarousel({
  loop: false,
  dots: false,
  nav: true,
  margin: 12,
  navText: ['‹','›'], // ← agora tem conteúdo
  responsive: {
    0: { items: 1, stagePadding: 0 },
    1000: { items: 4 }
  }
});

$('.interesses-carousel').owlCarousel({
  loop: false,
  dots: false,
  nav: true,
  margin: 12,
  navText: ['‹','›'], // idem
  responsive: {
    0: { items: 1, stagePadding: 0 },
    1000: { items: 4 }
  }
});


  }



  $(window).on('load', initCarousels);

  /* ===========================
     ONE PAGE SCROLL
  ============================ */
  $("#ftco-nav a[href^='#']").on('click', function (e) {
    const target = $(this.hash);
    if (target.length) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: target.offset().top }, 700);
    }
  });

  /* ===========================
     BACK TO TOP
  ============================ */
  const $backTop = $('#backToTop');
  $(window).on('scroll', function () {
    $backTop.toggle($(this).scrollTop() > 300);
  });

  $backTop.on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 600);
  });

  /* ===========================
     FECHA MENU MOBILE AO CLICAR FORA
  ============================ */
  $(document).on('click', function (e) {
    const menu = $('#ftco-nav');
    const toggle = $('.navbar-toggler');

    if (
      menu.hasClass('show') &&
      !$(e.target).closest('#ftco-nav, .navbar-toggler').length
    ) {
      toggle.trigger('click');
    }
  });

})(jQuery);
