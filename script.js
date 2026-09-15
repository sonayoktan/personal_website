/**
 * Sonay Personal Portfolio - Interactive Scripts
 * Handles Dark/Light theme switching and dynamic year
 */

(function () {
  'use strict';

  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const root = document.documentElement;

  // Function to set theme
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

  // Toggle button event listener
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

  // Set current year dynamically
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Prevent duplicate mailto launches (double-click / double-trigger debounce)
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
