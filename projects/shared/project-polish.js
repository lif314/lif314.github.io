document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('js-polish');
  const navbar = document.querySelector('.navbar');

  const burger = navbar?.querySelector('.navbar-burger');
  const menu = navbar?.querySelector('.navbar-menu');
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

  const researchMenu = navbar?.querySelector('.research-menu');
  const researchToggle = researchMenu?.querySelector('.research-toggle');
  researchToggle?.addEventListener('click', () => {
    const open = researchMenu.classList.toggle('is-active');
    researchToggle.setAttribute('aria-expanded', String(open));
  });

  const updateScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const percent = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0;
    document.body.style.setProperty('--scroll-progress', `${percent}%`);
    navbar?.classList.toggle('is-scrolled', window.scrollY > 12);
  };
  updateScroll();
  window.addEventListener('scroll', updateScroll, { passive: true });

  const images = [...document.querySelectorAll('section img')].filter((image) =>
    !image.closest('.publication-authors') && !image.classList.contains('interpolation-image'));
  images.forEach((image, index) => {
    if (index > 1) image.loading = 'lazy';
    image.decoding = 'async';
    image.classList.add('polishable-image');
  });

  const lightbox = document.createElement('div');
  lightbox.className = 'polish-lightbox';
  lightbox.hidden = true;
  lightbox.innerHTML = '<button type="button" aria-label="Close image">&times;</button><img alt="Expanded research figure">';
  document.body.appendChild(lightbox);
  const lightboxImage = lightbox.querySelector('img');
  const closeLightbox = () => { lightbox.hidden = true; document.body.style.overflow = ''; };
  images.forEach((image) => image.addEventListener('click', () => {
    lightboxImage.src = image.currentSrc || image.src;
    lightboxImage.alt = image.alt || 'Expanded research figure';
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
  }));
  lightbox.addEventListener('click', (event) => { if (event.target !== lightboxImage) closeLightbox(); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeLightbox(); });

  const bibtex = document.querySelector('#BibTeX pre code');
  if (bibtex) {
    const copy = document.createElement('button');
    copy.type = 'button';
    copy.className = 'shared-copy-button';
    copy.textContent = 'Copy BibTeX';
    document.querySelector('#BibTeX .title')?.insertAdjacentElement('afterend', copy);
    copy.addEventListener('click', async () => {
      await navigator.clipboard.writeText(bibtex.textContent);
      copy.textContent = 'Copied';
      window.setTimeout(() => { copy.textContent = 'Copy BibTeX'; }, 1500);
    });
  }

  const revealTargets = document.querySelectorAll('.section .title.is-3, .section .title.is-4, .publication-video');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: .08 });
    revealTargets.forEach((target) => { target.classList.add('polish-reveal'); observer.observe(target); });
  }
});
