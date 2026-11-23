// Dinding karya: geser dengan tombol, panah keyboard, roda mouse, atau seret.
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.track');
  if (!track) return;
  const pieces = [...track.querySelectorAll('.piece')];
  const prev = document.querySelector('.step[data-dir="-1"]');
  const next = document.querySelector('.step[data-dir="1"]');
  const current = document.querySelector('[data-current]');
  document.querySelector('[data-total]').textContent = pieces.length;
  const smooth = matchMedia('(prefers-reduced-motion: no-preference)').matches ? 'smooth' : 'auto';
  let index = 0;

  const setCurrent = (i) => {
    index = i;
    pieces.forEach((p, n) => p.classList.toggle('is-current', n === i));
    current.textContent = i + 1;
    prev.disabled = i === 0;
    next.disabled = i === pieces.length - 1;
  };

  const go = (i) => {
    i = Math.max(0, Math.min(pieces.length - 1, i));
    track.scrollTo({ left: pieces[i].offsetLeft - pieces[0].offsetLeft, behavior: smooth });
    setCurrent(i);
  };

  // Karya yang paling dekat ke tepi kiri dinding dianggap "sedang dilihat".
  const sync = () => {
    const x = track.scrollLeft;
    let best = 0;
    pieces.forEach((p, n) => {
      if (Math.abs(p.offsetLeft - pieces[0].offsetLeft - x) <
          Math.abs(pieces[best].offsetLeft - pieces[0].offsetLeft - x)) best = n;
    });
    if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 2) best = pieces.length - 1;
    if (best !== index) setCurrent(best);
  };
  let raf;
  track.addEventListener('scroll', () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(sync); }, { passive: true });

  prev.addEventListener('click', () => go(index - 1));
  next.addEventListener('click', () => go(index + 1));
  track.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); go(index + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(index - 1); }
  });

  // Seret dengan mouse (sentuhan sudah ditangani browser).
  let startX = 0, startLeft = 0, moved = false, down = false;
  track.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    down = true; moved = false; startX = e.clientX; startLeft = track.scrollLeft;
  });
  window.addEventListener('pointermove', (e) => {
    if (!down) return;
    const dx = e.clientX - startX;
    if (!moved && Math.abs(dx) > 5) { moved = true; track.classList.add('is-dragging'); }
    if (moved) track.scrollLeft = startLeft - dx;
  });
  window.addEventListener('pointerup', () => {
    if (!down) return;
    down = false;
    if (moved) { track.classList.remove('is-dragging'); sync(); go(index); }
  });
  track.addEventListener('dragstart', (e) => e.preventDefault());

  setCurrent(0);
});
