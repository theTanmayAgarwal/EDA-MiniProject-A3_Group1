// Main JavaScript - GSAP Animations & Interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Register GSAP Plugins
    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    // Initialize all components
    initNavigation();
    initThemeToggle();
    initHeroAnimations();
    initScrollAnimations();
    initStatsCounter();
    initChartFilters();
    initDataTable();
    initBackToTop();
    initSmoothScroll();

    // Initialize charts after a short delay
    setTimeout(() => {
        if (typeof initCharts === 'function') {
            initCharts();
        }
    }, 100);
});

// Navigation
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    // Scroll effect for navbar
    ScrollTrigger.create({
        start: 'top -100',
        onUpdate: (self) => {
            if (self.direction === 1 && self.scroll() > 100) {
                navbar.classList.add('scrolled');
            } else if (self.scroll() < 100) {
                navbar.classList.remove('scrolled');
            }
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

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const isLight = document.body.classList.contains('light-mode');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        });
    }
}

// Hero Animations
function initHeroAnimations() {
    const tl = gsap.timeline({ delay: 0.3 });

    // Animate hero content with new structure
    tl.from('.hero-badge', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
    })
    .from('.hero-line', {
        y: '100%',
        duration: 1,
        ease: 'power4.out',
        stagger: 0.15
    }, '-=0.4')
    .from('.hero-desc', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.5')
    .from('.hero-stats', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.5')
    .from('.stat-item', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.1
    }, '-=0.4')
    .from('.hero-cta', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.3')
    .from('.scroll-indicator', {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    }, '-=0.3');

    // Animate aurora and blobs subtly
    gsap.from('.aurora', {
        scale: 0.8,
        opacity: 0,
        duration: 2,
        ease: 'power2.out',
        stagger: 0.3
    });

    gsap.from('.blob', {
        scale: 0.5,
        opacity: 0,
        duration: 2.5,
        ease: 'power2.out',
        stagger: 0.4,
        delay: 0.5
    });
}

// Scroll Animations
function initScrollAnimations() {
    // Reveal sections on scroll
    gsap.utils.toArray('.reveal-section').forEach((section, i) => {
        gsap.to(section, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'top 20%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Animate chart sections
    gsap.utils.toArray('.chart-section').forEach((section, i) => {
        gsap.to(section, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Parallax effect on hero background elements
    gsap.to('.aurora-container', {
        y: 150,
        opacity: 0.3,
        scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        }
    });

    gsap.to('.blob', {
        y: 80,
        scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5
        }
    });

    gsap.to('.particles-container', {
        y: 50,
        opacity: 0,
        scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 2
        }
    });
}

// Stats Counter Animation
function initStatsCounter() {
    const stats = document.querySelectorAll('.stat-number[data-count]');

    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));

        ScrollTrigger.create({
            trigger: stat,
            start: 'top 80%',
            onEnter: () => {
                gsap.to(stat, {
                    innerHTML: target,
                    duration: 2,
                    ease: 'power2.out',
                    snap: { innerHTML: 1 },
                    onUpdate: function() {
                        stat.innerHTML = Math.round(this.targets()[0].innerHTML).toLocaleString();
                    }
                });
            },
            once: true
        });
    });
}

// Chart Filters
function initChartFilters() {
    const filterBtns = document.querySelectorAll('.chart-filter');
    const basicCharts = document.getElementById('basic-charts');
    const advancedCharts = document.getElementById('advanced-charts');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            // Show/hide sections with animation
            if (basicCharts && advancedCharts) {
                if (filter === 'all') {
                    gsap.to([basicCharts, advancedCharts], {
                        opacity: 1,
                        duration: 0.4,
                        onStart: function() {
                            this.targets()[0].style.display = 'block';
                        }
                    });
                } else if (filter === 'basic') {
                    gsap.to(basicCharts, { opacity: 1, duration: 0.4 });
                    gsap.to(advancedCharts, {
                        opacity: 0,
                        duration: 0.4,
                        onComplete: () => {
                            advancedCharts.style.display = 'none';
                        }
                    });
                    basicCharts.style.display = 'block';
                } else if (filter === 'advanced') {
                    gsap.to(advancedCharts, { opacity: 1, duration: 0.4 });
                    gsap.to(basicCharts, {
                        opacity: 0,
                        duration: 0.4,
                        onComplete: () => {
                            basicCharts.style.display = 'none';
                        }
                    });
                    advancedCharts.style.display = 'block';
                }

                // Resize charts after animation
                setTimeout(() => {
                    window.dispatchEvent(new Event('resize'));
                }, 500);
            }
        });
    });
}

// Data Table
function initDataTable() {
    const tableBody = document.getElementById('tableBody');
    if (!tableBody || typeof sampleTableData === 'undefined') return;

    sampleTableData.forEach((row, index) => {
        const tr = document.createElement('tr');
        tr.className = 'border-b border-dark-border/50 hover:bg-dark-elevated/30 transition-colors';

        const modeColors = {
            'Metro': '#0071e3',
            'PMPML City Bus': '#30d158',
            'Cab (Ola/Uber)': '#ff9f0a',
            'Personal Two-Wheeler': '#ff375f',
            'Auto Rickshaw': '#5e5ce6',
            'Carpool': '#64d2ff'
        };

        const timeLabels = {
            'Morning Peak': 'Morning Peak',
            'Evening Peak': 'Evening Peak',
            'Midday': 'Midday',
            'Night': 'Night'
        };

        tr.innerHTML = `
            <td class="px-4 py-3 text-sm">${row.startingPoint}</td>
            <td class="px-4 py-3 text-sm">${row.destination}</td>
            <td class="px-4 py-3 text-sm">
                <span class="px-2 py-1 rounded-full text-xs font-medium" style="background-color: ${modeColors[row.primaryMode]}20; color: ${modeColors[row.primaryMode]}">
                    ${row.primaryMode.split(' ')[0]}
                </span>
            </td>
            <td class="px-4 py-3 text-sm">${timeLabels[row.timeOfDay] || row.timeOfDay}</td>
            <td class="px-4 py-3 text-sm">${row.travelTime} min</td>
            <td class="px-4 py-3 text-sm">₹${row.cost}</td>
            <td class="px-4 py-3 text-sm">${generateStars(row.satisfaction)}</td>
        `;

        tableBody.appendChild(tr);
    });
}

// Generate star rating HTML
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<svg class="w-3.5 h-3.5 text-amber-400 inline" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>';
        } else {
            stars += '<svg class="w-3.5 h-3.5 text-gray-600 inline" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>';
        }
    }
    return stars;
}

// Back to Top Button
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;

    ScrollTrigger.create({
        start: 'top -500',
        end: 'bottom bottom',
        onEnter: () => {
            backToTop.classList.add('visible');
        },
        onLeaveBack: () => {
            backToTop.classList.remove('visible');
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
                const offset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Window resize handler for charts
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        document.querySelectorAll('[id$="Chart"]').forEach(chart => {
            if (chart.id && typeof Plotly !== 'undefined') {
                Plotly.Plots.resize(chart.id);
            }
        });
    }, 250);
});