/**
 * Theme Switcher - Light/Dark Mode Toggle
 * Accessible theme switching with localStorage persistence
 */

(function() {
    'use strict';
    
    const STORAGE_KEY = 'debug-club-theme';
    const THEME_DARK = 'dark';
    const THEME_LIGHT = 'light';
    
    // Initialize theme on page load
    function initTheme() {
        const savedTheme = localStorage.getItem(STORAGE_KEY);
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = savedTheme || (prefersDark ? THEME_DARK : THEME_LIGHT);
        
        setTheme(theme, false);
        updateToggleButton(theme);
    }
    
    // Set theme
    function setTheme(theme, save = true) {
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
    }
    
    // Toggle between themes
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
        
        setTheme(newTheme);
        updateToggleButton(newTheme);
        
        // Add transition class for smooth animation
        document.body.classList.add('theme-transitioning');
        setTimeout(() => {
            document.body.classList.remove('theme-transitioning');
        }, 300);
    }
    
    // Update toggle button appearance
    function updateToggleButton(theme) {
        const toggleBtn = document.getElementById('theme-toggle');
        if (!toggleBtn) return;
        
        const icon = toggleBtn.querySelector('i');
        const text = toggleBtn.querySelector('.theme-text');
        
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
    }
    
    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTheme);
    } else {
        initTheme();
    }
    
    // Attach toggle function to window for button onclick
    window.toggleTheme = toggleTheme;
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        const savedTheme = localStorage.getItem(STORAGE_KEY);
        if (!savedTheme) {
            setTheme(e.matches ? THEME_DARK : THEME_LIGHT);
            updateToggleButton(e.matches ? THEME_DARK : THEME_LIGHT);
        }
    });
})();
