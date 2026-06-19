/* ===================================================================
   KnowBridge — shared layout (header + footer) for every page.
   Injected with JS so there is a single source of truth and the site
   still works by double-clicking any .html file (no server needed).
   =================================================================== */
(function () {
  "use strict";

  var BRIDGE_SVG =
    '<svg class="brand-mark" viewBox="0 0 64 48" aria-hidden="true">' +
    '<path d="M2 40 C 18 14, 46 14, 62 40" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>' +
    '<line x1="14" y1="40" x2="14" y2="6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>' +
    '<line x1="50" y1="40" x2="50" y2="6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>' +
    '<line x1="14" y1="6" x2="50" y2="6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>' +
    '<line x1="22" y1="30" x2="22" y2="40" stroke="currentColor" stroke-width="1.6"/>' +
    '<line x1="32" y1="26" x2="32" y2="40" stroke="currentColor" stroke-width="1.6"/>' +
    '<line x1="42" y1="30" x2="42" y2="40" stroke="currentColor" stroke-width="1.6"/>' +
    '<line x1="2" y1="40" x2="62" y2="40" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>' +
    "</svg>";

  var NAV = [
    { label: "Home", href: "index.html", key: "home" },
    { label: "About", href: "about.html", key: "about" },
    { label: "Topics", href: "topics.html", key: "topics" },
    { label: "Videos", href: "videos.html", key: "videos" },
    { label: "Podcast", href: "podcast.html", key: "podcast" },
    { label: "Stories", href: "stories.html", key: "stories" },
    { label: "Contact", href: "contact.html", key: "contact" }
  ];

  var page = document.body.getAttribute("data-page") || "home";

  /* ---------- Header ---------- */
  function headerHTML() {
    var links = NAV.map(function (n) {
      return '<a href="' + n.href + '"' + (n.key === page ? ' class="active"' : "") +
        ' data-i18n="nav.' + n.key + '">' + n.label + "</a>";
    }).join("");

    return (
      '<header class="site-header" id="top">' +
      '<div class="container header-inner">' +
        '<a href="index.html" class="brand" aria-label="KnowBridge home">' + BRIDGE_SVG +
          '<span class="brand-text"><span class="brand-name">KNOWBRIDGE</span>' +
          '<span class="brand-tag" data-i18n="brand.tag">Knowledge Access Matters</span></span></a>' +
        '<button class="nav-toggle" id="navToggle" aria-label="Open menu" aria-expanded="false">' +
          "<span></span><span></span><span></span></button>" +
        '<nav class="site-nav" id="siteNav" aria-label="Primary">' + links +
          '<a class="nav-cta" href="https://fariselshammouty.github.io/ancient-medical-knowbridge/" target="_blank" rel="noopener">' +
            '<span data-i18n="nav.ancient">Ancient Medicine</span>' +
            '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5h5v5M19 5l-8 8M11 5H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
          "</a>" +
          '<div class="lang-select">' +
            '<button class="lang-btn" id="langBtn" aria-haspopup="true" aria-expanded="false">' +
              '<svg viewBox="0 0 24 24" class="globe" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>' +
              ' <span id="langCode">EN</span> ' +
              '<svg viewBox="0 0 24 24" class="chev" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
            "</button>" +
            '<ul class="lang-menu" id="langMenu" role="menu">' +
              '<li role="menuitem" data-lang="en" class="is-current">English</li>' +
              '<li role="menuitem" data-lang="ar">العربية</li>' +
              '<li role="menuitem" data-lang="fr">Français</li>' +
              '<li role="menuitem" data-lang="es">Español</li>' +
            "</ul></div>" +
        "</nav>" +
      "</div></header>"
    );
  }

  /* ---------- Footer ---------- */
  function footerHTML() {
    return (
      '<footer class="site-footer">' +
      '<div class="container footer-grid">' +
        '<div class="footer-brand">' +
          '<a href="index.html" class="brand footer-logo">' + BRIDGE_SVG +
            '<span class="brand-text"><span class="brand-name">KNOWBRIDGE</span>' +
            '<span class="brand-tag" data-i18n="brand.tag">Knowledge Access Matters</span></span></a>' +
          '<p class="footer-blurb" data-i18n="footer.blurb">Building bridges between knowledge and life.</p>' +
        "</div>" +
        '<div class="footer-cols">' +
          '<div class="footer-col"><h4 data-i18n="footer.about">About KnowBridge</h4>' +
            '<a href="about.html" data-i18n="footer.mission">Our Mission</a><a href="about.html#team" data-i18n="footer.team">Team</a><a href="contact.html" data-i18n="nav.contact">Contact</a></div>' +
          '<div class="footer-col"><h4 data-i18n="footer.explore">Explore</h4>' +
            '<a href="videos.html" data-i18n="nav.videos">Videos</a><a href="podcast.html" data-i18n="nav.podcast">Podcast</a><a href="stories.html" data-i18n="nav.stories">Stories</a></div>' +
          '<div class="footer-col"><h4 data-i18n="footer.resources">Resources</h4>' +
            '<a href="topics.html" data-i18n="nav.topics">Topics</a><a href="topics.html" data-i18n="link.journeys">Journeys</a><a href="contact.html" data-i18n="footer.educators">For Educators</a></div>' +
        "</div>" +
        '<div class="footer-funding">' +
          '<p data-i18n-html="footer.funding">Inspired by research conducted within the <strong>MECANO Doctoral Network</strong>.</p>' +
          '<div class="funding-logos">' +
            '<div class="mecano"><svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="16" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="20" cy="20" r="9" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="20" cy="4" r="2.2" fill="currentColor"/><circle cx="36" cy="20" r="2.2" fill="currentColor"/><circle cx="20" cy="36" r="2.2" fill="currentColor"/><circle cx="4" cy="20" r="2.2" fill="currentColor"/></svg>' +
              "<span><strong>MECANO</strong><small>DOCTORAL NETWORK</small></span></div>" +
            '<div class="eu"><svg viewBox="0 0 60 40" class="eu-flag" aria-hidden="true"><rect width="60" height="40" fill="#003399"/><g fill="#FFCC00" id="eu-stars"></g></svg>' +
              '<span data-i18n-html="footer.eu">Funded by<br/>the European Union</span></div>' +
          "</div>" +
        "</div>" +
      "</div>" +
      '<div class="footer-bottom"><div class="container">© 2024 KnowBridge. All rights reserved. &nbsp;·&nbsp; A prototype site.</div></div>' +
      "</footer>"
    );
  }

  /* ---------- Inject ---------- */
  var headerMount = document.getElementById("kb-header");
  var footerMount = document.getElementById("kb-footer");
  if (headerMount) headerMount.innerHTML = headerHTML();
  if (footerMount) footerMount.innerHTML = footerHTML();

  /* ---------- Header: solid background on scroll ---------- */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile navigation ---------- */
  var navToggle = document.getElementById("navToggle");
  var siteNav = document.getElementById("siteNav");
  function closeNav() {
    if (!siteNav) return;
    siteNav.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var open = siteNav.classList.toggle("open");
      navToggle.classList.toggle("open", open);
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    siteNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeNav);
    });
  }

  /* ---------- Language selector + translation engine ---------- */
  var langSelect = document.querySelector(".lang-select");
  var langBtn = document.getElementById("langBtn");
  var langMenu = document.getElementById("langMenu");
  var I18N = window.KB_I18N || { en: {} };
  var RTL_LANGS = { ar: true };

  function t(lang, key) {
    var dict = I18N[lang] || {};
    if (dict[key] != null) return dict[key];
    if (I18N.en && I18N.en[key] != null) return I18N.en[key];
    return null;
  }

  function ensureArabicFont() {
    if (document.getElementById("kb-ar-font")) return;
    var l = document.createElement("link");
    l.id = "kb-ar-font";
    l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap";
    document.head.appendChild(l);
  }

  function applyLang(lang) {
    if (!I18N[lang]) lang = "en";
    var rtl = !!RTL_LANGS[lang];

    document.documentElement.lang = lang;
    document.documentElement.dir = rtl ? "rtl" : "ltr";
    if (rtl) ensureArabicFont();

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = t(lang, el.getAttribute("data-i18n"));
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var v = t(lang, el.getAttribute("data-i18n-html"));
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var v = t(lang, el.getAttribute("data-i18n-placeholder"));
      if (v != null) el.setAttribute("placeholder", v);
    });

    var lc = document.getElementById("langCode");
    if (lc) lc.textContent = lang.toUpperCase();
    if (langMenu) {
      langMenu.querySelectorAll("li").forEach(function (x) {
        x.classList.toggle("is-current", x.getAttribute("data-lang") === lang);
      });
    }
    try { localStorage.setItem("kb-lang", lang); } catch (e) {}
  }

  if (langBtn && langMenu) {
    langBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = langSelect.classList.toggle("open");
      langBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    langMenu.querySelectorAll("li").forEach(function (li) {
      li.addEventListener("click", function () {
        applyLang(li.getAttribute("data-lang") || "en");
        langSelect.classList.remove("open");
      });
    });
    document.addEventListener("click", function () { langSelect.classList.remove("open"); });
  }

  // apply saved language on load
  var saved = "en";
  try { saved = localStorage.getItem("kb-lang") || "en"; } catch (e) {}
  applyLang(saved);

  /* ---------- Newsletter / subscribe forms (prototype) ---------- */
  document.querySelectorAll(".subscribe-form").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = form.querySelector('input[type="email"]');
      var btn = form.querySelector('button[type="submit"], button');
      if (email) email.value = "";
      if (email) email.placeholder = "Subscribed ✓ Welcome aboard!";
      if (btn) {
        var original = btn.textContent;
        btn.textContent = "Thank you!";
        setTimeout(function () {
          btn.textContent = original;
          if (email) email.placeholder = "Your email address";
        }, 4000);
      }
    });
  });

  /* ---------- Prototype forms (e.g. contact) ---------- */
  document.querySelectorAll(".proto-form").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = form.querySelector(".form-result") || (function () {
        var n = document.createElement("p");
        n.className = "form-result";
        n.style.cssText = "margin:8px 0 0;color:#389169;font-weight:600;";
        form.appendChild(n);
        return n;
      })();
      note.textContent = "Thanks! Your message has been received (prototype — not actually sent).";
      form.reset();
    });
  });

  /* ---------- European Union flag stars ---------- */
  function starPath(cx, cy, outer, inner) {
    var d = "";
    for (var i = 0; i < 10; i++) {
      var r = i % 2 === 0 ? outer : inner;
      var ang = -Math.PI / 2 + (i * Math.PI) / 5;
      d += (i === 0 ? "M" : "L") + (cx + r * Math.cos(ang)).toFixed(2) + " " + (cy + r * Math.sin(ang)).toFixed(2) + " ";
    }
    return d + "Z";
  }
  var stars = document.getElementById("eu-stars");
  if (stars) {
    for (var k = 0; k < 12; k++) {
      var a = -Math.PI / 2 + (k * Math.PI * 2) / 12;
      var p = document.createElementNS("http://www.w3.org/2000/svg", "path");
      p.setAttribute("d", starPath(30 + 12 * Math.cos(a), 20 + 12 * Math.sin(a), 3, 1.4));
      stars.appendChild(p);
    }
  }
})();
