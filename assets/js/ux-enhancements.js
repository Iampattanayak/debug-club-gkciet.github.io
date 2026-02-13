/**
 * UX Enhancements for Debug Club Website
 * Enhanced user experience interactions and animations
 */

(function() {
    'use strict';

    // ============================================================================
    // 1. NAVBAR SCROLL BEHAVIOR
    // ============================================================================
    
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    const scrollThreshold = 50;

    function handleNavbarScroll() {
        const currentScroll = window.pageYOffset;
        
        // Add scrolled class for styling
        if (currentScroll > scrollThreshold) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll (optional - commented out by default)
        // if (currentScroll > lastScroll && currentScroll > 100) {
        //     navbar?.style.transform = 'translateY(-100%)';
        // } else {
        //     navbar?.style.transform = 'translateY(0)';
        // }
        
        lastScroll = currentScroll;
    }

    // Debounced scroll handler for better performance
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(handleNavbarScroll);
    }, { passive: true });

    // ============================================================================
    // 2. CARD MOUSE TRACKING FOR HOVER EFFECTS
    // ============================================================================
    
    const cards = document.querySelectorAll('.card-clone');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            card.style.setProperty('--mouse-x', `${x}%`);
            card.style.setProperty('--mouse-y', `${y}%`);
        });
        
        // Reset on mouse leave
        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--mouse-x', '50%');
            card.style.setProperty('--mouse-y', '50%');
        });
    });

    // ============================================================================
    // 3. SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL without jumping
                if (history.pushState) {
                    history.pushState(null, null, href);
                }
                
                // Focus the target for accessibility
                target.focus({ preventScroll: true });
            }
        });
    });

    // ============================================================================
    // 4. INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS
    // ============================================================================
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optionally unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements with fade-in classes
    document.querySelectorAll('.fade-in-up, .fade-in, .card-clone').forEach(el => {
        observer.observe(el);
    });

    // ============================================================================
    // 5. BUTTON RIPPLE EFFECT
    // ============================================================================
    
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = button.getBoundingClientRect();
            const ripple = document.createElement('span');
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple-effect');
            
            button.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // ============================================================================
    // 6. IMPROVED MOBILE MENU UX
    // ============================================================================
    
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            const isClickInside = navbarCollapse.contains(e.target) || 
                                 navbarToggler.contains(e.target);
            
            if (!isClickInside && navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
        
        // Close menu when clicking a link
        navbarCollapse.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            });
        });
        
        // Prevent body scroll when mobile menu is open
        navbarToggler.addEventListener('click', () => {
            setTimeout(() => {
                if (navbarCollapse.classList.contains('show')) {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = '';
                }
            }, 50);
        });
    }

    // ============================================================================
    // 7. LOADING STATE SIMULATOR (for demo purposes)
    // ============================================================================
    
    window.simulateLoading = (buttonElement, duration = 2000) => {
        if (!buttonElement) return;
        
        const originalText = buttonElement.innerHTML;
        buttonElement.classList.add('btn-loading');
        buttonElement.disabled = true;
        
        setTimeout(() => {
            buttonElement.classList.remove('btn-loading');
            buttonElement.disabled = false;
            buttonElement.innerHTML = originalText;
        }, duration);
    };

    // ============================================================================
    // 8. PERFORMANCE OPTIMIZATION - REDUCE MOTION FOR USERS WHO PREFER IT
    // ============================================================================
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        // Disable animations for users who prefer reduced motion
        document.documentElement.style.setProperty('--transition-fast', '0s');
        document.documentElement.style.setProperty('--transition-base', '0s');
        document.documentElement.style.setProperty('--transition-slow', '0s');
        document.documentElement.style.setProperty('--transition-bounce', '0s');
    }

    // ============================================================================
    // 9. LAZY LOAD IMAGES WITH FADE IN
    // ============================================================================
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            }
        });
    }, { rootMargin: '50px' });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });

    // ============================================================================
    // 10. KEYBOARD NAVIGATION IMPROVEMENTS
    // ============================================================================
    
    // Skip to main content link
    const skipLink = document.querySelector('.skip-to-main');
    if (skipLink) {
        skipLink.addEventListener('click', (e) => {
            e.preventDefault();
            const main = document.querySelector('main') || document.querySelector('[role="main"]');
            if (main) {
                main.tabIndex = -1;
                main.focus();
                main.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // Trap focus in mobile menu when open
    function trapFocus(element) {
        const focusableElements = element.querySelectorAll(
            'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];
        
        element.addEventListener('keydown', (e) => {
            if (e.key !== 'Tab') return;
            
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
            }
        });
    }
    
    if (navbarCollapse) {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.target.classList.contains('show')) {
                    trapFocus(navbarCollapse);
                }
            });
        });
        
        observer.observe(navbarCollapse, { attributes: true, attributeFilter: ['class'] });
    }

    // ============================================================================
    // 11. TOAST NOTIFICATIONS (utility function)
    // ============================================================================
    
    window.showToast = (message, type = 'info', duration = 3000) => {
        const toast = document.createElement('div');
        toast.className = `toast-notification toast-${type}`;
        toast.textContent = message;
        toast.setAttribute('role', 'alert');
        toast.setAttribute('aria-live', 'polite');
        
        document.body.appendChild(toast);
        
        // Trigger animation
        setTimeout(() => toast.classList.add('show'), 10);
        
        // Remove toast
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, duration);
    };

    // ============================================================================
    // INITIALIZATION
    // ============================================================================
    
    console.log('✨ UX Enhancements loaded successfully!');
    
    // Add loaded class to body for CSS transitions
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });

})();
