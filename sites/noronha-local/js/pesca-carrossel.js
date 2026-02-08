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

$(document).ready(function () {
    // Seleciona todos os links do menu que apontam para um ID (#)
    $('.navbar-nav a[href*="#"]').on('click', function () {
        // Verifica se o botão de "hambúrguer" está visível (indicando que é mobile)
        if ($('.navbar-toggler').is(':visible')) {
            // Simula o clique no botão para fechar o menu
            $('.navbar-toggler').click();
        }
    });
});