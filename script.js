// AOS Animation Init
        AOS.init({ duration: 800, once: true });

        // Swiper Hero Init
        const swiper = new Swiper('.swiper-hero', {
            loop: true,
            autoplay: { delay: 4000 },
            effect: 'fade'
        });

        // GLightbox Init
        const lightbox = GLightbox({ selector: '.glightbox' });

        // Typing Effect
        const words = ["परम धर्म है।", "हमारी ज़िम्मेदारी है।", "मानवता की पहचान है।"];
        let i = 0, timer;
        function typingEffect() {
            let word = words[i].split("");
            var loopTyping = function() {
                if (word.length > 0) {
                    document.getElementById('typing').innerHTML += word.shift();
                } else {
                    setTimeout(deletingEffect, 2000);
                    return false;
                }
                timer = setTimeout(loopTyping, 100);
            };
            loopTyping();
        }
        function deletingEffect() {
            let word = words[i].split("");
            var loopDeleting = function() {
                if (word.length > 0) {
                    word.pop();
                    document.getElementById('typing').innerHTML = word.join("");
                } else {
                    i = (i + 1) % words.length;
                    typingEffect();
                    return false;
                }
                timer = setTimeout(loopDeleting, 50);
            };
            loopDeleting();
        }
        typingEffect();

        // Dark/Light Theme Toggle with localStorage
        const themeToggle = document.getElementById('themeToggle');
        const currentTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', currentTheme);
        themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

        themeToggle.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            let newTheme = theme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
        });

        // Mobile Hamburger Menu Toggle
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');
        hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));

        // FAQ Accordion Toggle
        document.querySelectorAll('.faq-question').forEach(item => {
            item.addEventListener('click', () => {
                const parent = item.parentNode;
                parent.classList.toggle('active');
            });
        });

        // Animated Counters
        const counters = document.querySelectorAll('.counter-number');
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / 200;
                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 15);
                } else {
                    counter.innerText = target + "+";
                }
            };
            updateCount();
        });

        // Gallery Filtering
        function filterGallery(category) {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            
            document.querySelectorAll('.gallery-item').forEach(item => {
                if (category === 'all' || item.classList.contains(category)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }

        // Back to Top Button Visibility
        const backTopBtn = document.getElementById('backTop');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backTopBtn.style.display = 'flex';
            } else {
                backTopBtn.style.display = 'none';
            }
        });