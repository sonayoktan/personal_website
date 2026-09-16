/**
 * Sonay Personal Portfolio - Interactive Scripts
 * Handles Dark/Light theme switching, multi-language (EN/TR) support, and dynamic UI
 */

(function () {
  'use strict';

  // ==========================================
  // 1. Theme Management (Dark / Light)
  // ==========================================
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const root = document.documentElement;

  function setTheme(theme) {
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      console.warn('localStorage is not available', e);
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function () {
      const isDark = root.classList.contains('dark');
      setTheme(isDark ? 'light' : 'dark');
    });
  }

  // Listen for system theme changes if user hasn't set an explicit preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });

  // ==========================================
  // 2. Multi-Language System (EN / TR)
  // ==========================================
  const translations = {
    en: {
      pageTitle: "Sonay Yoktan — Biologist",
      metaDesc: "A biologist based in Turkey. Passionate about biological sciences, life systems, and scientific research.",
      brandAria: "Sonay Yoktan Home",
      themeToggleAria: "Toggle theme",
      langSwitchAria: "Language selection",

      // Hero
      heroTitle: 'Hey, I\'m <span class="name-highlight">Sonay Yoktan</span>!',
      heroBioLocation: "A biologist based in Turkey",
      heroBioExp: "Experienced in molecular biology, laboratory research, and biodiversity studies with hands-on project experience across national research programmes.",
      heroEmailBtn: "Send email",

      // Projects
      projectsTitle: "Research & Projects",
      projectsDesc: "Selected research projects, fieldwork, and scientific investigations:",

      project1Title: "Sea of Marmara Benthic Genetics",
      project1Desc: "Molecular genetics & DNA barcoding assessing the two-layer hydrography's impact on macrozoobenthic invertebrate diversity (METU IMS).",

      project2Title: "<em>Patella caerulea</em> Ecology",
      project2Desc: "Principal Investigator analyzing population density, shell morphology, and intertidal dynamics of <em>Patella caerulea</em> along the Sinop coast.",

      project3Title: "Marine Pollution Monitoring",
      project3Desc: "Seabed biodiversity monitoring and environmental health evaluation across the Sea of Marmara and Black Sea with TÜBİTAK MAM.",

      project4Title: "Conservation & EEBST 2026",
      project4Badge: "Field & Research",
      project4Desc: "Oral presentation at EEBST 2026 symposium & volunteer fieldwork monitoring and protecting <em>Caretta caretta</em> and <em>Chelonia mydas</em> sea turtles.",

      // Socials
      socialsTitle: "Find me on",
      socialsDesc: "You can find me on the following platforms:",

      // Contact
      contactTitle: "Get in touch",
      contactPrefix: "You can reach me anytime at",
      contactSuffix: "",

      // Footer
      footerPrefix: "Built with",
      footerAuthor: "by Sonay Yoktan",
      footerSourceText: "This website is",
      footerSourceLink: "open source"
    },
    tr: {
      pageTitle: "Sonay Yoktan — Biyolog",
      metaDesc: "Türkiye merkezli biyolog. Biyolojik bilimler, yaşam sistemleri ve bilimsel araştırmalara tutkulu.",
      brandAria: "Sonay Yoktan Ana Sayfa",
      themeToggleAria: "Temayı değiştir",
      langSwitchAria: "Dil seçimi",

      // Hero
      heroTitle: 'Merhaba, ben <span class="name-highlight">Sonay Yoktan</span>!',
      heroBioLocation: "Türkiye'de araştırmalar yapan bir biyolog",
      heroBioExp: "Moleküler biyoloji, laboratuvar araştırmaları ve biyoçeşitlilik çalışmalarında deneyimli; ulusal araştırma programlarında aktif proje tecrübesine sahip.",
      heroEmailBtn: "E-posta gönder",

      // Projects
      projectsTitle: "Araştırma & Projeler",
      projectsDesc: "Seçilmiş araştırma projeleri, saha çalışmaları ve bilimsel incelemeler:",

      project1Title: "Marmara Denizi Bentik Genetiği",
      project1Desc: "İki tabakalı hidrografinin makrozoobentik omurgasız çeşitliliği üzerindeki etkisini değerlendiren moleküler genetik ve DNA barkodlama çalışmaları (ODTÜ DBE).",

      project2Title: "<em>Patella caerulea</em> Ekolojisi",
      project2Desc: "Sinop kıyılarında <em>Patella caerulea</em> türünün popülasyon yoğunluğu, kabuk morfolojisi ve gelgit bölgesi dinamiklerini inceleyen yürütücü araştırmacı.",

      project3Title: "Deniz Kirliliği İzleme",
      project3Desc: "TÜBİTAK MAM ile Marmara Denizi ve Karadeniz genelinde deniz tabanı biyoçeşitlilik izleme ve çevresel sağlık değerlendirmesi.",

      project4Title: "Koruma & EEBST 2026",
      project4Badge: "Saha & Araştırma",
      project4Desc: "EEBST 2026 sempozyumunda sözlü sunum ve <em>Caretta caretta</em> ile <em>Chelonia mydas</em> deniz kaplumbağalarını izleme ve koruma amaçlı gönüllü saha çalışmaları.",

      // Socials
      socialsTitle: "Bana ulaşın",
      socialsDesc: "Beni aşağıdaki platformlarda bulabilirsiniz:",

      // Contact
      contactTitle: "İletişime geçin",
      contactPrefix: "Bana dilediğiniz zaman",
      contactSuffix: " adresinden ulaşabilirsiniz.",

      // Footer
      footerPrefix: "ile hazırlandı:",
      footerAuthor: "Sonay Yoktan",
      footerSourceText: "Bu web sitesi",
      footerSourceLink: "açık kaynaklıdır"
    }
  };

  const langSwitch = document.getElementById('lang-switch');
  const langButtons = document.querySelectorAll('.lang-btn');
  let currentLang = 'en';

  function setLanguage(lang) {
    if (lang !== 'en' && lang !== 'tr') {
      lang = 'en';
    }
    currentLang = lang;
    document.documentElement.lang = lang;

    // Update active button indicators
    langButtons.forEach(function (btn) {
      const isTarget = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', isTarget);
      btn.setAttribute('aria-pressed', isTarget ? 'true' : 'false');
    });

    const dict = translations[lang];
    if (!dict) return;

    // Update text nodes
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Update HTML content nodes
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // Page title and meta tags
    if (dict.pageTitle) {
      document.title = dict.pageTitle;
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', dict.pageTitle);
    }
    if (dict.metaDesc) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', dict.metaDesc);
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', dict.metaDesc);
    }

    // Accessible labels
    if (themeToggleBtn && dict.themeToggleAria) {
      themeToggleBtn.setAttribute('aria-label', dict.themeToggleAria);
    }
    const brandLogo = document.querySelector('.brand-logo');
    if (brandLogo && dict.brandAria) {
      brandLogo.setAttribute('aria-label', dict.brandAria);
    }
    if (langSwitch && dict.langSwitchAria) {
      langSwitch.setAttribute('aria-label', dict.langSwitchAria);
    }

    try {
      localStorage.setItem('lang', lang);
    } catch (e) {
      console.warn('localStorage is not available', e);
    }
  }

  // Button clicks
  langButtons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang) {
        setLanguage(targetLang);
      }
    });
  });

  // Clicking the container toggles language
  if (langSwitch) {
    langSwitch.addEventListener('click', function () {
      const nextLang = currentLang === 'en' ? 'tr' : 'en';
      setLanguage(nextLang);
    });
  }

  // Initial language setup
  let initialLang = 'en';
  try {
    const savedLang = localStorage.getItem('lang');
    if (savedLang === 'en' || savedLang === 'tr') {
      initialLang = savedLang;
    } else if (navigator.language && navigator.language.toLowerCase().startsWith('tr')) {
      initialLang = 'tr';
    }
  } catch (e) {}

  setLanguage(initialLang);

  // ==========================================
  // 3. Dynamic Footer Year & Utilities
  // ==========================================
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Prevent duplicate mailto launches (double-click debounce)
  document.querySelectorAll('a[href^="mailto:"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (link.dataset.clicking === 'true') {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      link.dataset.clicking = 'true';
      link.style.pointerEvents = 'none';
      setTimeout(function () {
        delete link.dataset.clicking;
        link.style.pointerEvents = '';
      }, 1200);
    });
  });
})();
