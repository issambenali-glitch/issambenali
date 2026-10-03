/* ═══════════════════════════════════════════════════════════
   BOTÓN FLOTANTE DE WHATSAPP · issambenali.es
   Aparece abajo a la derecha en todas las páginas.
   Para usarlo en una página nueva, pega antes de </head>:
   <script src="/js/whatsapp.js" defer></script>
   Para cambiar el número o el mensaje, edita las dos líneas de abajo.
   ═══════════════════════════════════════════════════════════ */
(function () {
  var TELEFONO = '34614615790';
  var MENSAJE = 'Hola Issam, te escribo desde tu web.';

  function crear() {
    if (document.getElementById('waFloat')) return;

    var css = document.createElement('style');
    css.textContent =
      '.wa-float{position:fixed;right:18px;bottom:18px;z-index:250;display:flex;align-items:center;gap:10px;' +
      'background:#25D366;color:#fff;text-decoration:none;border-radius:999px;padding:12px 18px 12px 14px;' +
      "font-family:'DM Sans',sans-serif;font-size:15px;font-weight:600;box-shadow:0 8px 24px rgba(0,0,0,.22);" +
      'transition:transform .2s,box-shadow .2s}' +
      '.wa-float:hover{transform:translateY(-2px);box-shadow:0 12px 30px rgba(0,0,0,.28)}' +
      '.wa-float:focus-visible{outline:3px solid #E8530A;outline-offset:3px}' +
      '.wa-float svg{width:26px;height:26px;flex:none}' +
      '@media(max-width:640px){.wa-float{padding:13px;right:14px;bottom:14px}.wa-float span{display:none}}' +
      '@media print{.wa-float{display:none}}' +
      'body:has(#cookieBanner:not([hidden])) .wa-float{display:none}';
    document.head.appendChild(css);

    var a = document.createElement('a');
    a.id = 'waFloat';
    a.className = 'wa-float';
    a.href = 'https://wa.me/' + TELEFONO + '?text=' + encodeURIComponent(MENSAJE);
    a.target = '_blank';
    a.rel = 'noopener';
    a.setAttribute('aria-label', 'Escribir a Issam Benali por WhatsApp');
    a.innerHTML =
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#fff" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/>' +
      '<path fill="#25D366" d="M8.6 6.6c.3 0 .6.1.7.5l.9 2.1c.1.3 0 .6-.2.8l-.7.8c.7 1.3 1.800 2.400 3.100 3.100l.8-.9c.2-.2.5-.3.8-.2l2.100.9c.3.1.5.4.5.7 0 1.300-1.100 2.300-2.400 2.300-4.200 0-7.800-3.600-7.800-7.800 0-1.300 1-2.300 2.200-2.300z"/></svg>' +
      '<span>WhatsApp</span>';
    document.body.appendChild(a);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', crear);
  else crear();
})();
