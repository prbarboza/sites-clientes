const gallery = document.getElementById('galleryLancha');
const dots = document.querySelectorAll('.dot');

function moveGallery(direction) {
    gallery.scrollLeft += (direction * gallery.clientWidth);
}

function jumpToSlide(index) {
    gallery.scrollLeft = (index * gallery.clientWidth);
}

gallery.addEventListener('scroll', () => {
    const index = Math.round(gallery.scrollLeft / gallery.clientWidth);
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
});