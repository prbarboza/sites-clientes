(function ($) {

  "use strict";

  /* ===========================
     AOS (seguro)
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
     LOADER (CRÍTICO)
  ============================ */
  function removeLoader() {
    if ($('#ftco-loader').length > 0) {
      $('#ftco-loader').removeClass('show').fadeOut('slow', function () {
        $(this).remove();
      });
    }
  }
  $(window).on('load', removeLoader);

  /* ===========================
     STELLAR (seguro)
  ============================ */
  if ($.fn.stellar) {
    $(window).stellar({
      responsive: true,
      horizontalScrolling: false,
      parallaxBackgrounds: true
    });
  }

  /* ===========================
     SCROLLAX (seguro)
  ============================ */
  if ($.Scrollax) {
    $.Scrollax();
  }

  /* ===========================
     CAROUSELS (OWL)
  ============================ */
  function initCarousels() {

    if ($.fn.owlCarousel) {

      $('.destination-slider').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 20,
        nav: true,
        dots: true,
        smartSpeed: 600,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
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

      $('.carousel-testimony').owlCarousel({
        autoplay: true,
        loop: true,
        items: 1,
        nav: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        navText: [
          '<span class="ion-ios-arrow-back">',
          '<span class="ion-ios-arrow-forward">'
        ]
      });

      $('.single-slider').owlCarousel({
        autoplay: true,
        loop: true,
        items: 1,
        nav: true,
        dots: true
      });

      var boatSlider = $('.boat-slider').owlCarousel({
        items: 1,
        loop: false,
        autoplay: false,
        dots: false,
        nav: false,
        smartSpeed: 500,
        mouseDrag: true,
        touchDrag: true
      });

      var totalBoats = $('.boat-slider .boat-card').length;

      function updateBoatCounter(index) {
        var current = index + 1;
        $('#boat-counter, #boat-counter-bottom')
          .text('Barco ' + current + ' de ' + totalBoats);
      }

      boatSlider.on('initialized.owl.carousel changed.owl.carousel', function (e) {
        updateBoatCounter(e.item.index);
      });

      $('.boat-prev').on('click', function () {
        boatSlider.trigger('prev.owl.carousel');
      });

      $('.boat-next').on('click', function () {
        boatSlider.trigger('next.owl.carousel');
      });

    }

 $('.carrossel-premium__owl').owlCarousel({
  autoplay: false,
  loop: true,
  margin: 20,
  nav: true,      // ⬅️ obrigatório
  dots: false,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  responsive: {
    0: { items: 1 },
    768: { items: 2 },
    1200: { items: 3 }
  }
});

// Fecha o menu mobile ao clicar fora
document.addEventListener('click', function (event) {
  const navbar = document.querySelector('.navbar-collapse');
  const toggler = document.querySelector('.navbar-toggler');

  if (!navbar || !toggler) return;

  const isOpen = navbar.classList.contains('show');

  if (isOpen && !navbar.contains(event.target) && !toggler.contains(event.target)) {
    toggler.click();
  }
});

  }

    initCarousels();

 /* ===========================
   ONE PAGE SCROLL (âncoras) – SIMPLES
=========================== */
$("#ftco-nav a[href^='#']").on('click', function (e) {
  var target = $(this.hash);

  if (target.length) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: target.offset().top
    }, 700);
  }
});

/* ===========================
   BOTÃO VOLTAR AO TOPO
=========================== */
$(window).on('scroll', function () {
  if ($(this).scrollTop() > 300) {
    $('#backToTop').fadeIn();
  } else {
    $('#backToTop').fadeOut();
  }
});

$('#backToTop').on('click', function () {
  $('html, body').animate({ scrollTop: 0 }, 600);
});
  

document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 300) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  });

  btn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

// Corrige menu mobile: fecha ao clicar fora
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

/* ===========================
    TRILHAS – CARROSSEL + DETALHES
=========================== */
$('.trilhas-carousel').owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    // Removi a margin daqui para não dar conflito global
    responsive: {
        0: { 
            items: 1.15,           // Um card inteiro
            margin: 10,          // Espaço pequeno entre eles
            stagePadding: 0,   // A espiada lateral (ajuste conforme o seu gosto)
            nav: false          // Esconde setas no mobile para não cobrir o card
        },
        992: { 
            items: 4,           // Seus 4 cards perfeitos
            margin: 30,         // Espaçamento elegante no desktop
            stagePadding: 0     // IMPORTANTE: Zero no desktop para não cortar os cards das pontas
        }
    }
});

$(document).on('click', '.trilha-toggle', function () {
  $(this).next('.trilha-details').slideToggle();
});

// Ativa tanto o carrossel de Trilhas quanto o de Mergulho com a mesma configuração
$('.trilhas-carousel, .mergulho-carousel').owlCarousel({
    loop: false,
    nav: true,
    dots: true,
    responsive: {
        0: { 
            items: 1.15,
            margin: 20,
            stagePadding: 0,
            nav: false
        },
        992: { 
            items: 4,
            margin: 20,
            stagePadding: 0
        }
    }
});

/* ===========================
    BARCOS – CARROSSEL (10 ITENS)
=========================== */
$('.barcos-carousel').owlCarousel({
  loop: true,
  margin: 15,
  nav: false,
  dots: true, // Para 10 itens, os pontinhos ajudam a saber que tem muita opção
  autoplay: true,
  autoplayTimeout: 4000,
  responsive: {
    0: { 
      items: 1.3, // Um pouco mais de "espiada"
      stagePadding: 20
    },
    768: {
      items: 2.3
    },
    1000: {
      items: 4 // No desktop, como são 10, podemos mostrar 4 por vez
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".mobile-passeios-nav");
  if (!nav) return;

  const track = nav.querySelector(".mobile-passeios-track");
  const left = nav.querySelector(".mp-left");
  const right = nav.querySelector(".mp-right");
  if (!track || !left || !right) return;

  const step = () => {
    const card = track.querySelector(".mobile-passeio-card");
    const gap = parseInt(getComputedStyle(track).gap) || 12;
    return card ? card.offsetWidth + gap : 300;
  };

  right.addEventListener("click", () => {
    track.scrollBy({ left: step(), behavior: "smooth" });
  });

  left.addEventListener("click", () => {
    track.scrollBy({ left: -step(), behavior: "smooth" });
  });
});


})(jQuery);


