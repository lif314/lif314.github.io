document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.navbar-burger');
  const menu = document.getElementById(burger?.dataset.target || '');

  burger?.addEventListener('click', () => {
    const open = burger.classList.toggle('is-active');
    menu?.classList.toggle('is-active', open);
    burger.setAttribute('aria-expanded', String(open));
  });

  menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    burger?.classList.remove('is-active');
    menu.classList.remove('is-active');
    burger?.setAttribute('aria-expanded', 'false');
  }));

  const lightbox = document.querySelector('.lightbox');
  const lightboxImage = lightbox?.querySelector('img');
  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.hidden = true;
    document.body.style.overflow = '';
  };

  document.querySelectorAll('[data-lightbox]').forEach((button) => {
    button.addEventListener('click', () => {
      if (!lightbox || !lightboxImage) return;
      lightboxImage.src = button.dataset.lightbox;
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
      lightbox.querySelector('.lightbox-close')?.focus();
    });
  });

  lightbox?.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeLightbox();
  });

  const lazyVideos = document.querySelectorAll('video[data-src]');
  const loadVideo = (video) => {
    if (video.src) return;
    video.src = video.dataset.src;
    video.load();
    if (video.classList.contains('auto-demo')) {
      video.play().catch(() => {});
    }
  };

  if ('IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        loadVideo(entry.target);
        videoObserver.unobserve(entry.target);
      });
    }, { rootMargin: '320px 0px' });
    lazyVideos.forEach((video) => videoObserver.observe(video));
  } else {
    lazyVideos.forEach(loadVideo);
  }

  const copyButton = document.querySelector('.copy-button');
  copyButton?.addEventListener('click', async () => {
    const bibtex = document.querySelector('.bibtex-wrap code')?.textContent || '';
    await navigator.clipboard.writeText(bibtex);
    copyButton.innerHTML = '<i class="fas fa-check"></i> Copied';
    window.setTimeout(() => { copyButton.innerHTML = '<i class="far fa-copy"></i> Copy'; }, 1600);
  });
});
