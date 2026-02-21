/**
 * Theme Switcher - Light/Dark Mode Toggle
 * Accessible theme switching with localStorage persistence
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'debug-club-theme';
  const THEME_DARK = 'dark';
  const THEME_LIGHT = 'light';

  // Initialize theme on page load
  function initTheme() {
    try {
      const savedTheme = localStorage.getItem(STORAGE_KEY);
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const theme = savedTheme || (prefersDark ? THEME_DARK : THEME_LIGHT);

      setTheme(theme, false);
      updateToggleButton(theme);
      console.log('[Theme Switcher] Initialized with theme:', theme);
    } catch (error) {
      console.error('[Theme Switcher] Initialization error:', error);
    }
  }

  // Set theme
  function setTheme(theme, save = true) {
    try {
      const html = document.documentElement;
      const body = document.body;

      if (theme === THEME_LIGHT) {
        html.setAttribute('data-bs-theme', 'light');
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
      } else {
        html.setAttribute('data-bs-theme', 'dark');
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
      }

      if (save) {
        localStorage.setItem(STORAGE_KEY, theme);
      }

      // Dispatch custom event for other scripts
      window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
      console.log('[Theme Switcher] Theme set to:', theme);
    } catch (error) {
      console.error('[Theme Switcher] Error setting theme:', error);
    }
  }

  // Toggle between themes
  window.toggleTheme = function() {
    try {
      const currentTheme = document.documentElement.getAttribute('data-bs-theme');
      const newTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
      
      console.log('[Theme Switcher] Toggle clicked. Current:', currentTheme, 'New:', newTheme);

      setTheme(newTheme);
      updateToggleButton(newTheme);

      // Add transition class for smooth animation
      document.body.classList.add('theme-transitioning');
      setTimeout(() => {
        document.body.classList.remove('theme-transitioning');
      }, 300);
    } catch (error) {
      console.error('[Theme Switcher] Error toggling theme:', error);
    }
  };

  // Update toggle button appearance
  function updateToggleButton(theme) {
    try {
      const toggleBtn = document.getElementById('theme-toggle');
      if (!toggleBtn) {
        console.warn('[Theme Switcher] Toggle button not found in DOM');
        return;
      }

      const icon = toggleBtn.querySelector('i');
      const text = toggleBtn.querySelector('.theme-text');

      if (!icon) {
        console.warn('[Theme Switcher] Icon element not found');
        return;
      }

      if (theme === THEME_LIGHT) {
        icon.className = 'fas fa-moon';
        if (text) text.textContent = 'Dark';
        toggleBtn.setAttribute('aria-label', 'Switch to dark theme');
        toggleBtn.setAttribute('title', 'Switch to dark theme');
      } else {
        icon.className = 'fas fa-sun';
        if (text) text.textContent = 'Light';
        toggleBtn.setAttribute('aria-label', 'Switch to light theme');
        toggleBtn.setAttribute('title', 'Switch to light theme');
      }
      console.log('[Theme Switcher] Button appearance updated');
    } catch (error) {
      console.error('[Theme Switcher] Error updating button:', error);
    }
  }

  // Initialize immediately and on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }

  // Also attach button click listener as backup
  document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', window.toggleTheme);
      console.log('[Theme Switcher] Click listener attached to button');
    }
  });

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    try {
      const savedTheme = localStorage.getItem(STORAGE_KEY);
      if (!savedTheme) {
        const theme = e.matches ? THEME_DARK : THEME_LIGHT;
        setTheme(theme);
        updateToggleButton(theme);
      }
    } catch (error) {
      console.error('[Theme Switcher] Error handling system theme change:', error);
    }
  });
})();
