// Menu repliable sur petit écran + marquage de la page courante.
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // On referme le menu après un clic sur un lien (utile au téléphone).
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' && window.innerWidth < 720) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#site-nav a').forEach(function (a) {
    if (a.getAttribute('href') === here) {
      a.setAttribute('aria-current', 'page');
    }
  });
})();
