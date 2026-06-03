/* 46 London Row - interactions
   Vanilla JS, no dependencies. */
(function () {
  "use strict";

  /* ---------- Mobile nav ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");
  var scrim = document.getElementById("nav-scrim");

  function setMenu(open) {
    menu.classList.toggle("open", open);
    if (scrim) scrim.classList.toggle("open", open);
    document.body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }
  function closeMenu() { setMenu(false); }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      setMenu(!menu.classList.contains("open"));
    });
    // Close when a link is tapped
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") closeMenu();
    });
    // Close when the scrim (area outside the menu) is tapped
    if (scrim) scrim.addEventListener("click", closeMenu);
    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("open")) closeMenu();
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var revealTargets = document.querySelectorAll(
    ".section-head, .feature-grid > li, .split-media, .split-body, .floor-card, .transport-card, .story > *, .viewing-intro, .contact-card, .gallery-grid > li"
  );
  revealTargets.forEach(function (el) { el.classList.add("reveal"); });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Sticky CTA: hide while hero or viewing section is in view ---------- */
  var stickyCta = document.querySelector(".sticky-cta");
  var hero = document.getElementById("hero");
  var viewing = document.getElementById("viewing");

  if (stickyCta && "IntersectionObserver" in window) {
    var hideZones = [hero, viewing].filter(Boolean);
    var visibleHideZones = new Set();
    var ctaObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) visibleHideZones.add(entry.target);
        else visibleHideZones.delete(entry.target);
      });
      stickyCta.style.opacity = visibleHideZones.size ? "0" : "1";
      stickyCta.style.pointerEvents = visibleHideZones.size ? "none" : "auto";
    }, { threshold: 0.25 });
    hideZones.forEach(function (z) { ctaObserver.observe(z); });
  }

  /* ---------- Active nav link on scroll ---------- */
  var sections = document.querySelectorAll("main section[id]");
  var navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
  function setActive(id) {
    navLinks.forEach(function (link) {
      link.classList.toggle("active", link.getAttribute("href") === "#" + id);
    });
  }
  if (sections.length && "IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { threshold: 0.5 });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- Lightbox gallery ---------- */
  var lightbox = document.getElementById("lightbox");
  if (lightbox) {
    var lbImg = lightbox.querySelector(".lightbox-img");
    var items = Array.prototype.slice.call(document.querySelectorAll(".gallery-item"));
    var sources = items.map(function (b) { return b.getAttribute("data-full"); });
    var alts = items.map(function (b) { var i = b.querySelector("img"); return i ? i.alt : ""; });
    var current = 0;
    var lastFocused = null;

    function show(i) {
      current = (i + sources.length) % sources.length;
      lbImg.src = sources[current];
      lbImg.alt = alts[current];
    }
    function openLb(i) {
      lastFocused = document.activeElement;
      show(i);
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
      lightbox.querySelector(".lightbox-close").focus();
    }
    function closeLb() {
      lightbox.hidden = true;
      document.body.style.overflow = "";
      if (lastFocused) lastFocused.focus();
    }

    items.forEach(function (btn, i) {
      btn.addEventListener("click", function () { openLb(i); });
    });
    lightbox.querySelector(".lightbox-close").addEventListener("click", closeLb);
    lightbox.querySelector(".lightbox-prev").addEventListener("click", function () { show(current - 1); });
    lightbox.querySelector(".lightbox-next").addEventListener("click", function () { show(current + 1); });
    lightbox.addEventListener("click", function (e) { if (e.target === lightbox) closeLb(); });
    document.addEventListener("keydown", function (e) {
      if (lightbox.hidden) return;
      if (e.key === "Escape") closeLb();
      else if (e.key === "ArrowLeft") show(current - 1);
      else if (e.key === "ArrowRight") show(current + 1);
    });
  }
})();
