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


document.addEventListener("click", function (e) {
  const card = e.target.closest(".card-item");
  if (!card) return;

  const link = card.querySelector("a[href]");
  if (!link) return;

  if (e.target.closest(".seta-btn")) return;

  window.location.href = link.href;
});

$(document).ready(function () {
    // 1. Fecha o menu ao clicar em links simples (Home, Contato, etc)
    // 2. Fecha o menu ao clicar nos itens de DENTRO do dropdown (Pesca, Mergulho, etc)
    // 3. NÃO fecha ao clicar no "Pai" (Passeios)
    $('.navbar-nav a').on('click', function (e) {
        var $el = $(this);
        var $navbarCollapse = $('.navbar-collapse');

        // Se o link for o "Pai" do dropdown, não faz nada e deixa o Bootstrap abrir o submenu
        if ($el.hasClass('dropdown-toggle')) {
            return; 
        }

        // Se o menu estiver aberto (show), ele fecha ao clicar no link
        if ($navbarCollapse.hasClass('show')) {
            $navbarCollapse.collapse('hide');
        }
    });
});

$(document).ready(function() {
    // Escuta o clique em qualquer botão de reservar que aponte para o WhatsApp
    $('a[href*="wa.me"]').on('click', function(e) {
        e.preventDefault(); // Para o link padrão
        
        // 1. Pega o nome da lancha/experiência (ajuste o seletor se necessário)
        var itemNome = $('h2').first().text().trim(); 
        
        // 2. Define o número (o que você já usa no PDF)
        var numero = "558196514045"; 
        
        // 3. Monta a mensagem personalizada
        var mensagem = "Olá! Gostaria de mais informações e disponibilidade sobre: " + itemNome;
        
        // 4. Codifica para URL e redireciona
        var urlFinal = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem);
        window.open(urlFinal, '_blank');
    });
});

$(document).ready(function() {
    // 1. Localiza todos os cards de serviço
    $('.premium-service-card').each(function() {
        // 2. Encontra o link que já existe dentro dele (o botão "Ver Frota" ou "Saiba Mais")
        var linkDestino = $(this).find('a').attr('href');
        
        if(linkDestino) {
            // 3. Muda o cursor para "mãozinha" ao passar sobre o card
            $(this).css('cursor', 'pointer');
            
            // 4. Quando clicar em qualquer lugar do card...
            $(this).on('click', function(e) {
                // Se o usuário não clicou diretamente no botão (para não disparar dois cliques)
                if (!$(e.target).is('a, button')) {
                    window.location.href = linkDestino;
                }
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('galleryLancha');
    const dots = document.querySelectorAll('.dot');

    // Função para as setas
    window.moveGallery = function(direction) {
        if (gallery) {
            const scrollAmount = gallery.clientWidth;
            gallery.scrollBy({
                left: direction * scrollAmount,
                behavior: 'auto' // 'auto' torna a troca instantânea (mais rápida)
            });
        }
    };

    // Função para os pontos (dots)
    window.jumpToSlide = function(index) {
        if (gallery) {
            const scrollAmount = gallery.clientWidth;
            gallery.scrollTo({
                left: index * scrollAmount,
                behavior: 'auto' 
            });
        }
    };

    // Atualiza os pontos ativos durante o scroll (mouse ou dedo)
    if (gallery) {
        gallery.addEventListener('scroll', () => {
            const index = Math.round(gallery.scrollLeft / gallery.clientWidth);
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        });
    }
});

/* --- SISTEMA INDEPENDENTE PARA AVENTURAS --- */
window.moveGalleryCustom = function(btn, direction) {
    const container = btn.closest('.custom-gallery-container');
    const wrapper = container.querySelector('.custom-gallery-wrapper');
    
    if (wrapper) {
        const scrollAmount = wrapper.clientWidth;
        wrapper.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth'
        });
    }
};

window.jumpToSlideCustom = function(dot, index) {
    const container = dot.closest('.custom-gallery-container');
    const wrapper = container.querySelector('.custom-gallery-wrapper');
    
    if (wrapper) {
        const scrollAmount = wrapper.clientWidth;
        wrapper.scrollTo({
            left: index * scrollAmount,
            behavior: 'smooth'
        });
    }
};

// Faz os pontinhos (dots) das aventuras acenderem sozinhos no scroll
document.addEventListener('DOMContentLoaded', function() {
    const adventureWrappers = document.querySelectorAll('.adventure-block .custom-gallery-wrapper');
    adventureWrappers.forEach(wrapper => {
        wrapper.addEventListener('scroll', function() {
            const container = this.closest('.custom-gallery-container');
            const dots = container.querySelectorAll('.dot');
            const index = Math.round(this.scrollLeft / this.clientWidth);
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        });
    });
});



})(jQuery);

/* =========================================
====CONTATO RÁPIDO (WhatsApp) – SIMPLES====*/

// Função para capturar o formulário e enviar para o WhatsApp
function sendToWhatsapp() {
    console.log("Botão clicado!"); // Isso aparecerá no F12 para teste

    // Pega os elementos do HTML pelos IDs que você criou
    const nomeInput = document.getElementById('userName');
    const dataInput = document.getElementById('userDate');
    const checkboxes = document.querySelectorAll('input[name="servico"]:checked');
    
    // Validação básica
    if (!nomeInput.value || nomeInput.value.trim() === "") {
        alert("Por favor, digite seu nome.");
        nomeInput.focus();
        return;
    }

    // Monta a lista de serviços selecionados
    let servicos = [];
    checkboxes.forEach((cb) => {
        servicos.push(cb.value);
    });

    // Monta o texto da mensagem
    let texto = `Olá Noronha Local! Meu nome é ${nomeInput.value}.`;
    
    if (dataInput.value) {
        texto += ` Planejo ir em ${dataInput.value}.`;
    }

    if (servicos.length > 0) {
        texto += ` Gostaria de informações sobre: *${servicos.join(', ')}*.`;
    } else {
        texto += ` Gostaria de conhecer melhor os passeios da Noronha Local.`;
    }

    // URL do WhatsApp (substitua pelo seu número se necessário)
    const fone = "558196514045";
    const url = `https://wa.me/${fone}?text=${encodeURIComponent(texto)}`;
    
    // Abre em uma nova aba
    window.open(url, '_blank');
}


