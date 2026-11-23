/* Protección básica de imágenes: bloquea clic derecho y arrastrar.
   Solo afecta a las imágenes de /assets/images/ (etiquetas y arte), no a los logos. */
(function () {
  var SELECTOR = 'img[src*="assets/images/"]';

  function overProtectedImage(e) {
    var imgs = document.querySelectorAll(SELECTOR);
    for (var i = 0; i < imgs.length; i++) {
      var r = imgs[i].getBoundingClientRect();
      if (e.clientX >= r.left && e.clientX <= r.right &&
          e.clientY >= r.top && e.clientY <= r.bottom) {
        return true;
      }
    }
    return false;
  }

  document.addEventListener("contextmenu", function (e) {
    if (overProtectedImage(e)) { e.preventDefault(); }
  });

  document.addEventListener("dragstart", function (e) {
    var t = e.target;
    if (t && t.tagName === "IMG" && t.matches && t.matches(SELECTOR)) { e.preventDefault(); }
  });
})();
