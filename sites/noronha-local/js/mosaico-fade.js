document.addEventListener('DOMContentLoaded', function () {

  const gallery = document.querySelector('.mosaico-wrapper');
  if (!gallery) return;

  const items = Array.from(gallery.querySelectorAll('.mosaico-item'));
  const mainImg = gallery.querySelector('.item-1 img');

  let index = 0;
  let interval = null;

  /* ======================================================
     DESKTOP — swap de imagens ao clicar (como já funcionava)
  ====================================================== */
  items.forEach(item => {
    const img = item.querySelector('img');

    item.addEventListener('click', () => {
      if (window.innerWidth <= 768) return;
      if (item.classList.contains('item-1')) return;

      const temp = mainImg.src;
      mainImg.src = img.src;
      img.src = temp;
    });
  });

  /* ======================================================
     MOBILE — fade automático SEM trocar src
  ====================================================== */
  function startMobileFade() {
    if (window.innerWidth > 768) return;

    // estado inicial limpo
    items.forEach(i => i.classList.remove('active'));
    index = 0;
    items[index].classList.add('active');

    interval = setInterval(() => {
      items[index].classList.remove('active');
      index = (index + 1) % items.length;
      items[index].classList.add('active');
    }, 3500);
  }

  function stopMobileFade() {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  }

  // inicialização
  if (window.innerWidth <= 768) startMobileFade();

  window.addEventListener('resize', () => {
    stopMobileFade();
    if (window.innerWidth <= 768) startMobileFade();
  });

});