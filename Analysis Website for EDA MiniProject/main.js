// Main JavaScript for Student Commute EDA Website

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    // Hide loader
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
    }, 1500);

    // Initialize components
    initNavigation();
    initThemeToggle();
    initScrollAnimations();
    initStatsCounter();
    initEDAAccordion();
    initChartFilters();
    initDataTable();
    initBackToTop();
    initSmoothScroll();

    // Initialize charts after a short delay
    setTimeout(initCharts, 500);
});

// Navigation
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // Mobile menu toggle
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

// Theme Toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        if (sunIcon) sunIcon.classList.remove('hidden');
        if (moonIcon) moonIcon.classList.add('hidden');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const isLight = document.body.classList.contains('light-mode');

            if (sunIcon) sunIcon.classList.toggle('hidden', !isLight);
            if (moonIcon) moonIcon.classList.toggle('hidden', isLight);

            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        });
    }
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with data-animate attribute
    document.querySelectorAll('[data-animate]').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Observe sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Stats Counter Animation
function initStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');

    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000;
        const start = 0;
        const startTime = performance.now();

        const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(easeOutQuart * target);

            element.textContent = current.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target.toLocaleString();
            }
        };

        requestAnimationFrame(updateCounter);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));
}

// EDA Accordion
function initEDAAccordion() {
    const steps = document.querySelectorAll('.eda-step');

    steps.forEach(step => {
        const header = step.querySelector('.eda-step-header');

        if (header) {
            header.addEventListener('click', () => {
                const isActive = step.classList.contains('active');

                // Close all steps
                steps.forEach(s => s.classList.remove('active'));

                // Open clicked step if it wasn't active
                if (!isActive) {
                    step.classList.add('active');
                }
            });
        }
    });
}

// Toggle EDA Step (global function for onclick)
function toggleEDAStep(element) {
    const step = element.closest('.eda-step');
    if (step) {
        step.classList.toggle('active');
    }
}

// Chart Filters
function initChartFilters() {
    const filterBtns = document.querySelectorAll('.chart-filter-btn');
    const basicCharts = document.getElementById('basic-charts');
    const advancedCharts = document.getElementById('advanced-charts');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            // Show/hide sections
            if (basicCharts && advancedCharts) {
                if (filter === 'all') {
                    basicCharts.style.display = 'block';
                    advancedCharts.style.display = 'block';
                } else if (filter === 'basic') {
                    basicCharts.style.display = 'block';
                    advancedCharts.style.display = 'none';
                } else if (filter === 'advanced') {
                    basicCharts.style.display = 'none';
                    advancedCharts.style.display = 'block';
                }

                // Resize charts
                window.dispatchEvent(new Event('resize'));
            }
        });
    });
}

// Data Table
function initDataTable() {
    const tableBody = document.getElementById('tableBody');
    if (!tableBody) return;

    // Populate table with sample data
    sampleTableData.forEach((row, index) => {
        const tr = document.createElement('tr');
        tr.className = 'border-b border-dark-border hover:bg-dark-surface/50 transition-colors';

        tr.innerHTML = `
            <td class="px-4 py-3 text-sm text-gray-300">${row.startingPoint}</td>
            <td class="px-4 py-3 text-sm text-gray-300">${row.destination}</td>
            <td class="px-4 py-3 text-sm">
                <span class="px-2 py-1 rounded-full text-xs font-medium" style="background-color: ${colors.modes[row.primaryMode]}20; color: ${colors.modes[row.primaryMode]}">
                    ${row.primaryMode}
                </span>
            </td>
            <td class="px-4 py-3 text-sm text-gray-300">${row.timeOfDay}</td>
            <td class="px-4 py-3 text-sm text-gray-300">${row.travelTime} min</td>
            <td class="px-4 py-3 text-sm text-gray-300">₹${row.cost}</td>
            <td class="px-4 py-3 text-sm">
                <div class="flex">
                    ${generateStars(row.satisfaction)}
                </div>
            </td>
        `;

        tableBody.appendChild(tr);
    });
}

// Generate star rating
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>';
        } else {
            stars += '<svg class="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>';
        }
    }
    return stars;
}

// Back to Top Button
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.remove('opacity-0', 'invisible');
            backToTop.classList.add('opacity-100', 'visible');
        } else {
            backToTop.classList.add('opacity-0', 'invisible');
            backToTop.classList.remove('opacity-100', 'visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth Scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80; // Account for fixed navbar
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Utility: Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize for charts
window.addEventListener('resize', debounce(() => {
    // Resize all Plotly charts
    document.querySelectorAll('[id$="Chart"]').forEach(chart => {
        if (chart.id && Plotly) {
            Plotly.Plots.resize(chart.id);
        }
    });
}, 250));

// Expose global functions
window.toggleEDAStep = toggleEDAStep;