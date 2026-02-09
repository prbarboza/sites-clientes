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