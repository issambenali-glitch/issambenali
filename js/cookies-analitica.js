/* ═══════════════════════════════════════════════════════════
   AVISO DE COOKIES + GOOGLE ANALYTICS (con consentimiento previo)
   issambenali.es · Un solo archivo para todas las páginas.
   Google Analytics NO se carga hasta que el visitante acepta.
   La decisión se guarda y vale para toda la web (misma clave que
   la página de inicio: "ib_cookies").
   Para usarlo en una página nueva, pega antes de </head>:
   <script src="/js/cookies-analitica.js" defer></script>
   ═══════════════════════════════════════════════════════════ */
(function () {
  var GA_ID = 'G-011M5HKWLR';
  var CLAVE = 'ib_cookies';

  function leer() { try { return localStorage.getItem(CLAVE); } catch (e) { return null; } }
  function guardar(v) { try { localStorage.setItem(CLAVE, v); } catch (e) { } }

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };

  function cargarAnalitica() {
    if (window.__ga_cargado) return;
    window.__ga_cargado = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, { anonymize_ip: true });
  }
  window.cargarAnalitica = window.cargarAnalitica || cargarAnalitica;

  if (leer() === 'aceptadas') { cargarAnalitica(); return; }
  if (leer() === 'rechazadas') return;

  // Si la página ya trae su propio aviso (página de inicio, fichas), no duplicar
  function mostrarAviso() {
    if (document.getElementById('cookieBanner')) return;

    var css = document.createElement('style');
    css.textContent =
      '.ck-banner{position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;max-width:760px;margin:0 auto;' +
      'display:flex;flex-wrap:wrap;gap:16px;align-items:center;justify-content:space-between;padding:20px 22px;' +
      'background:#fff;color:#0A0A0A;border:1px solid #e0e0e0;border-radius:8px;box-shadow:0 12px 40px rgba(0,0,0,.16);' +
      "font-family:'DM Sans',sans-serif}" +
      '.ck-banner[hidden]{display:none}' +
      '.ck-text{flex:1 1 320px;font-size:13.5px;line-height:1.55;color:#444;margin:0}' +
      '.ck-text a{color:#E8530A}' +
      '.ck-actions{display:flex;gap:8px;flex-wrap:wrap}' +
      '.ck-btn{font-family:inherit;font-size:14px;font-weight:500;padding:11px 18px;border-radius:4px;cursor:pointer;border:1px solid transparent}' +
      '.ck-btn--accept{background:#E8530A;color:#fff}.ck-btn--accept:hover{background:#C4420A}' +
      '.ck-btn--ghost{background:#fff;color:#0A0A0A;border-color:#d6d6d6}.ck-btn--ghost:hover{border-color:#0A0A0A}' +
      '.ck-btn:focus-visible{outline:3px solid #E8530A;outline-offset:2px}' +
      '@media(max-width:560px){.ck-actions{width:100%}.ck-btn{flex:1}}';
    document.head.appendChild(css);

    var b = document.createElement('div');
    b.id = 'cookieBanner';
    b.className = 'ck-banner';
    b.setAttribute('role', 'dialog');
    b.setAttribute('aria-live', 'polite');
    b.setAttribute('aria-label', 'Aviso de cookies');
    var TXT = {
      es: ['Uso cookies propias necesarias para que la web funcione y cookies de analítica para saber qué páginas se visitan. Las de analítica solo se activan si las aceptas. Más detalle en la ', 'política de cookies', 'Solo las necesarias', 'Aceptar todas'],
      ca: ['Faig servir galetes pròpies necessàries perquè el web funcioni i galetes d\'analítica per saber quines pàgines es visiten. Les d\'analítica només s\'activen si les acceptes. Més detall a la ', 'política de galetes', 'Només les necessàries', 'Acceptar-les totes'],
      fr: ['J\'utilise des cookies nécessaires au fonctionnement du site et des cookies de mesure d\'audience. Ces derniers ne sont activés que si vous les acceptez. Plus de détails dans la ', 'politique de cookies', 'Nécessaires uniquement', 'Tout accepter'],
      en: ['I use cookies needed for the site to work and analytics cookies to see which pages are visited. Analytics cookies are only enabled if you accept them. More details in the ', 'cookie policy', 'Necessary only', 'Accept all'],
      ar: ['أستخدم ملفات تعريف ارتباط ضرورية لعمل الموقع وأخرى للإحصاءات لمعرفة الصفحات التي تُزار. لا تُفعَّل ملفات الإحصاءات إلا بموافقتك. التفاصيل في ', 'سياسة ملفات تعريف الارتباط', 'الضرورية فقط', 'قبول الكل']
    };
    var idioma = (document.documentElement.lang || 'es').slice(0, 2);
    var x = TXT[idioma] || TXT.es;
    b.innerHTML =
      '<p class="ck-text">' + x[0] + '<a href="/politica-privacidad/#cookies">' + x[1] + '</a>.</p>' +
      '<div class="ck-actions">' +
      '<button type="button" class="ck-btn ck-btn--ghost" data-ck="rechazadas">' + x[2] + '</button>' +
      '<button type="button" class="ck-btn ck-btn--accept" data-ck="aceptadas">' + x[3] + '</button>' +
      '</div>';
    b.addEventListener('click', function (e) {
      var v = e.target && e.target.getAttribute && e.target.getAttribute('data-ck');
      if (!v) return;
      guardar(v);
      b.hidden = true;
      if (v === 'aceptadas') cargarAnalitica();
    });
    document.body.appendChild(b);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mostrarAviso);
  else mostrarAviso();
})();
