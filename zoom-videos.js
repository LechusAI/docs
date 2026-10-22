// Videos inside <Frame>: click to see them enlarged over the page, like Mintlify does with images.
// Click again (or press Esc) to close.
(function () {
  function close() {
    var o = document.getElementById('video-zoom');
    if (o) o.remove();
  }
  document.addEventListener('click', function (e) {
    if (e.target.closest && e.target.closest('#video-zoom')) { close(); return; }
    var video = e.target.closest && e.target.closest('div.not-prose video');
    if (!video) return;
    var overlay = document.createElement('div');
    overlay.id = 'video-zoom';
    var big = document.createElement('video');
    big.src = video.currentSrc || video.src;
    big.autoplay = big.loop = big.muted = big.playsInline = true;
    big.currentTime = video.currentTime;
    overlay.appendChild(big);
    document.body.appendChild(overlay);
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
})();
