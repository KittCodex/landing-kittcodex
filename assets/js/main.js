/* Interaccion y renderizado dinamico */
(() => {
  "use strict";

  const WHATSAPP_NUMBER = (window.SITE_CONFIG && window.SITE_CONFIG.whatsapp) || "51999999999";

  /* ---------- 1. Utilidades ---------- */

  const ICONS = {
    check: '<svg class="icon"><use href="#icon-check"/></svg>',
    chevron: '<svg class="icon"><use href="#icon-chevron-down"/></svg>',
    whatsapp: '<svg class="icon icon--fill"><use href="#icon-whatsapp"/></svg>',
    sparkle: '<svg class="icon icon--fill"><use href="#icon-sparkle"/></svg>'
  };

  const icon = (id) => '<svg class="icon"><use href="#' + id + '"/></svg>';

  const d = (section) => DATA[section];

  const waLink = (text) => {
    return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);
  };

  /* ---------- 2. Animaciones reveal ---------- */

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  const observeReveals = (scope) => {
    const els = (scope || document).querySelectorAll(".reveal:not(.is-visible)");
    els.forEach((el) => revealObserver.observe(el));
  };

  /* ---------- 3. Renders (contenido dinámico) ---------- */

  const renderValueProps = (container) => {
    const items = d("valueProps");
    container.classList.add("stagger");
    container.innerHTML = items
      .map(
        (item) =>
          '<article class="reveal rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">' +
          '<span class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600/10 text-indigo-600">' + icon(item.icon) + "</span>" +
          '<h3 class="font-display text-lg font-semibold text-slate-900">' + item.title + "</h3>" +
          '<p class="mt-2 text-sm leading-relaxed text-slate-600">' + item.desc + "</p>" +
          "</article>"
      )
      .join("");
  };

  const renderServicePanel = (container) => {
    const item = d("services")[0];
    if (!item) return;
    const features = item.features
      .map(
        (f) =>
          '<li class="flex items-start gap-3 text-sm text-slate-300 sm:text-base">' +
          '<span class="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">' + ICONS.check + "</span>" +
          "<span>" + f + "</span></li>"
      )
      .join("");
    const stats = [
      { value: "5 – 15 días", label: "Tiempo de entrega" },
      { value: "90+", label: "Velocidad de carga" },
      { value: "100%", label: "Diseño a medida" },
      { value: "< 24 h", label: "Tiempo de respuesta" }
    ]
      .map(
        (s) =>
          '<div class="reveal reveal-zoom rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-center">' +
          '<p class="font-display text-2xl font-bold text-white sm:text-3xl">' + s.value + "</p>" +
          '<p class="mt-1 text-xs text-slate-400">' + s.label + "</p>" +
          "</div>"
      )
      .join("");
    const chip = (iconId, text, pos, delay) =>
      '<span class="anim-floaty absolute z-10 flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-900/90 px-3 py-1.5 text-xs font-medium text-slate-200 shadow-lg backdrop-blur ' + pos + '" style="animation-delay:' + delay + 's">' +
      '<span class="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400"><svg class="icon h-3.5 w-3.5"><use href="#' + iconId + '" /></svg></span>' +
      text +
      "</span>";
    container.innerHTML =
      '<div class="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-indigo-950/60 sm:p-12 lg:p-16">' +
      '<div class="bg-grid absolute inset-0" aria-hidden="true"></div>' +
      '<div class="absolute -top-24 right-0 h-80 w-80 rounded-full bg-indigo-600/25 blur-3xl" aria-hidden="true"></div>' +
      '<div class="absolute -bottom-28 left-10 h-80 w-80 rounded-full bg-violet-600/15 blur-3xl" aria-hidden="true"></div>' +
      '<div class="relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">' +
      '<div class="reveal reveal-left">' +
      '<span class="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-semibold text-indigo-200">' +
      '<span class="anim-blink h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true"></span>' +
      "Servicio principal</span>" +
      '<h3 class="mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">Landing <span class="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Page</span></h3>' +
      '<p class="mt-5 max-w-xl text-lg leading-relaxed text-slate-400">' + item.desc + "</p>" +
      '<ul class="mt-8 grid gap-3 sm:grid-cols-2">' + features + "</ul>" +
      '<div class="mt-10 flex flex-col gap-3 sm:flex-row">' +
      '<a class="wa-general inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1ebe5b]" href="#">' + ICONS.whatsapp + "<span>" + item.cta + "</span></a>" +
      '<a class="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10" href="#planes">Ver planes</a>' +
      "</div>" +
      "</div>" +
      '<div class="reveal reveal-right relative mx-auto w-full max-w-md">' +
      '<div class="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 shadow-2xl shadow-indigo-950/60">' +
      '<div class="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">' +
      '<span class="h-2.5 w-2.5 rounded-full bg-red-500/80" aria-hidden="true"></span>' +
      '<span class="h-2.5 w-2.5 rounded-full bg-yellow-500/80" aria-hidden="true"></span>' +
      '<span class="h-2.5 w-2.5 rounded-full bg-emerald-500/80" aria-hidden="true"></span>' +
      '<span class="ml-3 flex-1 truncate rounded-full bg-white/5 px-3 py-1 font-mono text-[10px] text-slate-500">kittcodex.com/landing</span>' +
      "</div>" +
      '<div class="space-y-6 p-8">' +
      '<div class="overflow-hidden rounded-xl border border-white/10">' +
      '<img src="assets/img/preview-landing.png" alt="Preview de una landing page de KittCodex" class="block h-44 w-full object-cover object-top" loading="lazy" />' +
      '</div>' +
      '<div class="flex justify-center gap-2">' +
      '<span class="rounded-full bg-indigo-600 px-4 py-1.5 text-[10px] font-semibold text-white">Cotizar</span>' +
      '<span class="rounded-full border border-white/15 px-4 py-1.5 text-[10px] font-semibold text-slate-300">Ver planes</span>' +
      "</div>" +
      "</div>" +
      "</div>" +
      chip("icon-gauge", "Rápida Carga optimizada", "-right-3 -top-3", 0.4) +
      chip("icon-chat", "Formulario integrado", "-left-4 bottom-24", 1.2) +
      chip("icon-target", "SEO optimizado", "-right-2 bottom-6", 2) +
      "</div>" +
      "</div>" +
      '<div class="stagger relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">' + stats + "</div>" +
      "</div>";
  };

  const renderPlans = (container) => {
    const items = d("plans");
    container.classList.add("stagger");
    container.innerHTML = items
      .map((plan) => {
        const badge = plan.badge
          ? '<span class="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">' + ICONS.sparkle + plan.badge + "</span>"
          : "";
        const features = plan.features
          .map((f) => '<li class="flex items-start gap-2.5 text-slate-300"><span class="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500">' + ICONS.check + "</span><span>" + f + "</span></li>")
          .join("");
        const featured = plan.featured;
        const base = plan.base
          ? '<p class="mt-4 text-sm font-medium text-indigo-300">' + plan.base + "</p>"
          : "";
        const cardCls = featured
          ? "border-2 border-indigo-500 bg-slate-900 ring-1 ring-indigo-500/40"
          : "border border-white/10 bg-slate-900/70";
        const ctaCls = featured
          ? "bg-indigo-600 text-white hover:bg-indigo-500"
          : "border border-white/15 text-white hover:bg-white/10";
        return (
          '<article class="reveal reveal-zoom relative flex flex-col rounded-2xl p-8 pt-10 transition hover:-translate-y-1 ' + cardCls + '">' +
          badge +
          '<h3 class="font-display text-lg font-semibold text-white">' + plan.name + "</h3>" +
          '<div class="mt-3 flex items-baseline gap-1"><span class="text-sm text-slate-400">S/</span><span class="text-5xl font-bold text-white">' + plan.price + "</span></div>" +
          '<p class="mt-3 text-sm leading-relaxed text-slate-400">' + plan.tagline + "</p>" +
          base +
          '<div class="my-6 h-px bg-white/10"></div>' +
          '<ul class="space-y-2.5 text-sm">' + features + "</ul>" +
          '<div class="mt-auto pt-8"><a class="wa-general flex w-full items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition ' + ctaCls + '" href="#">' + plan.cta + "</a></div>" +
          "</article>"
        );
      })
      .join("");
  };

  const renderInfraFeatures = (container) => {
    const items = d("infraFeatures");
    container.classList.add("stagger");
    container.innerHTML = items
      .map(
        (f) =>
          '<li class="reveal group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md">' +
          '<span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-600/10 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">' + icon(f.icon) + "</span>" +
          '<span class="text-sm font-medium text-slate-700">' + f.label + "</span>" +
          "</li>"
      )
      .join("");
  };

  const renderMaintenance = (container) => {
    const items = d("maintenance");
    container.innerHTML = items
      .map((card) => {
        const badge = card.badge
          ? '<span class="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">' + ICONS.sparkle + card.badge + "</span>"
          : "";
        const features = card.features
          .map((f) => '<li class="flex items-start gap-3 text-slate-700"><span class="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500">' + ICONS.check + "</span><span>" + f + "</span></li>")
          .join("");
        const featured = card.featured;
        const cardCls = featured
          ? "border-2 border-indigo-600 bg-white shadow-lg ring-1 ring-indigo-600/30"
          : "border border-slate-200 bg-white shadow-sm";
        return (
          '<article class="reveal reveal-zoom relative flex flex-col rounded-2xl p-8 pt-10 transition hover:-translate-y-1 ' + cardCls + '">' +
          badge +
          '<h3 class="font-display text-lg font-bold text-slate-900">' + card.name + "</h3>" +
          '<div class="mt-3 flex items-baseline gap-1"><span class="text-sm text-slate-500">S/</span><span class="text-5xl font-bold text-slate-900">' + card.price + '</span><span class="text-sm text-slate-500">' + card.period + "</span></div>" +
          '<div class="my-6 h-px bg-slate-200"></div>' +
          '<ul class="space-y-3">' + features + "</ul>" +
          '<div class="mt-auto pt-8"><a class="wa-general inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500" href="#">' + card.cta + "</a></div>" +
          "</article>"
        );
      })
      .join("");
  };

  const renderProcess = (container) => {
    const items = d("process");
    container.innerHTML =
      '<div class="relative">' +
      '<span class="absolute left-6 top-6 hidden h-px bg-slate-200 lg:left-0 lg:right-0 lg:block" aria-hidden="true"></span>' +
      '<ol class="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">' +
      items
        .map(
          (step, i) =>
            '<li class="flex flex-col items-center text-center">' +
            '<span class="relative flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-600/30">' +
            icon(step.icon) +
            '<span class="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white ring-2 ring-white">' + (i + 1) + "</span>" +
            "</span>" +
            '<h3 class="mt-5 font-display text-base font-semibold text-slate-900">' + step.title + "</h3>" +
            '<p class="mt-1 max-w-xs text-sm text-slate-600">' + step.desc + "</p>" +
            "</li>"
        )
        .join("") +
      "</ol></div>";
  };

  const renderProjects = (container) => {
    const items = d("projects");
    if (!items || !items.length) {
      container.innerHTML =
        '<div class="col-span-full flex flex-col items-center rounded-2xl border border-dashed border-slate-300 bg-white px-8 py-16 text-center">' +
        '<span class="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600/10 text-indigo-600"><svg class="icon text-3xl"><use href="#icon-sparkle" /></svg></span>' +
        '<h3 class="mt-4 font-display text-lg font-semibold text-slate-900">Próximamente</h3>' +
        '<p class="mt-2 max-w-md text-sm text-slate-600">Aquí mostrarás los proyectos que desarrollemos para nuestros clientes.</p>' +
        "</div>";
      return;
    }
    container.innerHTML = items
      .map(
        (p) =>
          '<article class="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">' +
          '<div class="relative h-44 overflow-hidden bg-gradient-to-br from-indigo-600/10 via-slate-50 to-violet-600/10">' +
          (p.img
            ? '<img class="h-full w-full object-cover transition duration-500 group-hover:scale-105" src="' + p.img + '" alt="Captura de ' + p.name + '" loading="lazy" />'
            : '<div class="flex h-full items-center justify-center"><span class="text-slate-300 transition group-hover:text-indigo-400"><svg class="icon text-5xl"><use href="#' + (p.icon || "icon-rocket") + '" /></svg></span></div>') +
          (p.badge ? '<span class="absolute left-4 top-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">' + p.badge + "</span>" : "") +
          "</div>" +
          '<div class="flex flex-1 flex-col p-6">' +
          '<h3 class="font-display text-base font-semibold text-slate-900">' + p.name + "</h3>" +
          '<p class="mt-1 text-sm text-slate-500">' + p.category + "</p>" +
          '<p class="mt-2 text-sm text-slate-600">' + p.desc + "</p>" +
          (p.tags && p.tags.length ? '<div class="mt-4 flex flex-wrap gap-2">' + p.tags.map((tg) => '<span class="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">' + tg + "</span>").join("") + "</div>" : "") +
          (p.url
            ? '<div class="mt-auto pt-5"><a class="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-indigo-500 hover:bg-indigo-600 hover:text-white" href="' + p.url + '" target="_blank" rel="noopener noreferrer"><span>Ver proyecto</span><span class="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600/10 text-indigo-600 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-indigo-600"><svg class="icon h-3.5 w-3.5"><use href="#icon-arrow-right" /></svg></span></a></div>'
            : "") +
          "</div>" +
          "</article>"
      )
      .join("");
  };

  const accordionItem = (a) => {
    const items = a.items
      .map((i) => '<li class="flex items-start gap-2.5"><span class="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500">' + ICONS.check + "</span><span>" + i + "</span></li>")
      .join("");
    const mini = a.icon
      ? '<span class="flex items-center gap-3 font-medium text-slate-900"><span class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-600">' + icon(a.icon) + "</span>" + a.title + "</span>"
      : '<span class="font-medium text-slate-900">' + a.title + "</span>";
    return (
      '<div class="accordion-item overflow-hidden rounded-xl border border-slate-200 bg-white">' +
      '<button type="button" class="accordion-head flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-slate-50" aria-expanded="false">' +
      mini +
      '<span class="accordion-chevron flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-transform duration-300">' + ICONS.chevron + "</span>" +
      "</button>" +
      '<div class="accordion-panel"><div class="accordion-inner"><div class="px-5 pb-5"><ul class="space-y-2.5 text-sm text-slate-600">' + items + "</ul></div></div></div>" +
      "</div>"
    );
  };

  const renderFaq = (container) => {
    const items = d("faq");
    container.innerHTML = items.map(accordionItem).join("");
  };

  const renderFooterServices = (container) => {
    const items = d("footerServices");
    container.innerHTML = items
      .map((s) => '<li><a class="text-sm text-slate-400 transition hover:text-white" href="' + s.href + '">' + s.label + "</a></li>")
      .join("");
  };

  const renderSelect = (container, list, placeholder) => {
    const opts = list
      .map((o) => '<option value="' + o + '">' + o + "</option>")
      .join("");
    container.innerHTML = '<option value="" selected disabled hidden>' + placeholder + "</option>" + opts;
  };

  const renderAll = (scope) => {
    const root = scope || document;
    const targets = {
      valueProps: renderValueProps,
      servicePanel: renderServicePanel,
      plans: renderPlans,
      infraFeatures: renderInfraFeatures,
      maintenance: renderMaintenance,
      process: renderProcess,
      projects: renderProjects,
      faq: renderFaq,
      footerServices: renderFooterServices,
      serviceSelect: (c) => renderSelect(c, d("serviceOptions"), d("formPlaceholders").service),
      budgetSelect: (c) => renderSelect(c, d("budgetOptions"), d("formPlaceholders").budget)
    };
    root.querySelectorAll("[data-render]").forEach((el) => {
      const fn = targets[el.dataset.render];
      if (fn) fn(el);
    });
  };

  /* ---------- 4. WhatsApp ---------- */

  const bindWhatsApp = () => {
    const greeting = "Hola KittCodex, quiero cotizar una landing page para mi negocio.";
    document.querySelectorAll(".wa-general, .wa-infra").forEach((a) => {
      a.setAttribute("href", waLink(greeting));
    });
  };

  /* ---------- 5. Header / menú móvil ---------- */

  const header = document.getElementById("site-header");
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const SCROLLED_CLASSES = ["bg-slate-950/85", "backdrop-blur-md", "shadow-lg", "shadow-black/20", "border-b", "border-white/10"];
  let menuOpen = false;

  const applyHeaderState = () => {
    if (!header) return;
    const on = window.scrollY > 8 || menuOpen;
    SCROLLED_CLASSES.forEach((c) => header.classList.toggle(c, on));
  };

  const onScroll = () => applyHeaderState();

  const toggleMenu = (open) => {
    if (!header || !menuToggle || !mobileMenu) return;
    menuOpen = open;
    mobileMenu.classList.toggle("open", open);
    mobileMenu.hidden = !open;
    menuToggle.setAttribute("aria-expanded", String(open));
    const openIcon = menuToggle.querySelector(".icon-menu-open");
    const closeIcon = menuToggle.querySelector(".icon-menu-close");
    if (openIcon) openIcon.classList.toggle("hidden", open);
    if (closeIcon) closeIcon.classList.toggle("hidden", !open);
    document.body.style.overflow = open ? "hidden" : "";
    applyHeaderState();
  };

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      toggleMenu(!menuOpen);
    });
  }

  document.addEventListener("click", (e) => {
    const link = e.target.closest(".mobile-link");
    if (link && menuOpen) {
      toggleMenu(false);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menuOpen) {
      toggleMenu(false);
    }
  });

  /* ---------- 6. Scrollspy ---------- */

  const navLinks = () => document.querySelectorAll("[data-nav]");

  const onScrollSpy = () => {
    const offset = 120;
    const sections = document.querySelectorAll("main section[id]");
    let currentId = "";
    sections.forEach((sec) => {
      if (window.scrollY + offset >= sec.offsetTop) currentId = sec.id;
    });
    navLinks().forEach((link) => {
      const active = link.dataset.target === currentId;
      link.classList.toggle("text-indigo-400", active);
      link.classList.toggle("text-slate-300", !active);
    });
  };

  window.addEventListener("scroll", () => {
    onScroll();
    onScrollSpy();
  });
  window.addEventListener("resize", onScrollSpy);

  /* ---------- 7. Acordeones ---------- */

  document.addEventListener("click", (e) => {
    const head = e.target.closest(".accordion-head");
    if (!head) return;
    const item = head.closest(".accordion-item");
    const group = item.closest(".faq-list, .terms-col, .terms-cols");
    if (group) {
      group.querySelectorAll(".accordion-item").forEach((other) => {
        if (other !== item) {
          other.classList.remove("is-open");
          other.querySelector(".accordion-panel")?.classList.remove("is-open");
          other.querySelector(".accordion-head")?.setAttribute("aria-expanded", "false");
          other.querySelector(".accordion-chevron")?.classList.remove("rotate-180");
        }
      });
    }
    const isOpen = item.classList.toggle("is-open");
    const panel = item.querySelector(".accordion-panel");
    if (panel) panel.classList.toggle("is-open", isOpen);
    head.setAttribute("aria-expanded", String(isOpen));
    const chevron = item.querySelector(".accordion-chevron");
    if (chevron) chevron.classList.toggle("rotate-180", isOpen);
  });

  /* ---------- 8. Formulario ---------- */

  const form = document.getElementById("contact-form");
  const errorHint = document.querySelector(".form-error-hint");
  const sent = document.querySelector(".form-sent");
  let sentTimer = null;

  const fieldError = (input, show) => {
    input.classList.toggle("input-error", show);
    let msg = input.parentElement.querySelector(".field-error");
    if (show) {
      if (!msg) {
        msg = document.createElement("p");
        msg.className = "field-error";
        msg.textContent = "Por favor, revisa los campos marcados.";
        input.parentElement.appendChild(msg);
      }
    } else if (msg) {
      msg.remove();
    }
  };

  const validateField = (input) => {
    const value = input.value.trim();
    let valid = value.length > 0;
    if (input.type === "email" && value) {
      valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }
    fieldError(input, !valid);
    return valid;
  };

  if (form) {
    ["name", "email", "message"].forEach((name) => {
      const input = form.querySelector('[name="' + name + '"]');
      if (input) {
        input.addEventListener("blur", () => validateField(input));
        input.addEventListener("input", () => {
          if (input.classList.contains("input-error")) validateField(input);
        });
      }
    });

    form.addEventListener("input", () => {
      if (sent && !sent.classList.contains("hidden")) {
        clearTimeout(sentTimer);
        sent.classList.add("hidden");
      }
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.elements.name;
      const company = form.elements.company;
      const email = form.elements.email;
      const phone = form.elements.phone;
      const service = form.elements.service;
      const budget = form.elements.budget;
      const message = form.elements.message;

      const okName = validateField(name);
      const okEmail = validateField(email);
      const okMessage = validateField(message);
      const valid = okName && okEmail && okMessage;

      if (errorHint) errorHint.classList.toggle("hidden", valid);
      if (!valid) return;

      const lines = [
        "Hola KittCodex! Soy " + name.value.trim(),
        company.value.trim() ? "Empresa: " + company.value.trim() : "",
        email.value.trim() ? "Email: " + email.value.trim() : "",
        phone.value.trim() ? "Tel: " + phone.value.trim() : "",
        service.value ? "Servicio: " + service.value : "",
        budget.value ? "Presupuesto: " + budget.value : "",
        "",
        message.value.trim()
      ].filter(Boolean);

      const url = waLink(lines.join("\n"));

      window.open(url, "_blank", "noopener");

      form.reset();
      form.querySelectorAll(".input-error").forEach((i) => fieldError(i, false));
      if (sent) {
        sent.classList.remove("hidden");
        clearTimeout(sentTimer);
        sentTimer = setTimeout(function () {
          sent.classList.add("hidden");
        }, 6000);
      }
    });
  }

  /* ---------- 9. Init ---------- */

  renderAll(document);
  observeReveals(document);
  bindWhatsApp();
  onScroll();
  onScrollSpy();
})();
