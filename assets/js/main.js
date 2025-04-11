// DOM Elements
const languageButtons = document.querySelectorAll('.lang-btn');
const mobileMenuButton = document.querySelector('#menu-toggle');
const mobileMenu = document.querySelector('#main-nav');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
const videoPlayer = document.querySelector('.video-player');
const surveyButton = document.querySelector('.survey-button');
const contactLinks = document.querySelectorAll('.contact-link');

// Current language state
let currentLang = localStorage.getItem('preferredLang') || 'ru';

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');
    
    // Set initial language
    changeLang(currentLang);
    
    // Add event listeners for mobile menu
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            mobileMenuButton.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
            mobileMenu.classList.remove('active');
            mobileMenuButton.classList.remove('active');
        }
    });

    // Initialize video player if exists
    const videoFrame = document.getElementById('videoFrame');
    if (videoFrame && translations[currentLang].videoSrc) {
        videoFrame.src = translations[currentLang].videoSrc;
    }

    console.log('Initialization complete');
});

// Update language across the website
function changeLang(lang) {
    console.log('Changing language to:', lang);
    try {
        currentLang = lang;
        localStorage.setItem('preferredLang', lang);
        
        // Update document language
        document.documentElement.lang = lang;

        // Update language buttons
        languageButtons.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
        
        // Get translations for current language
        const t = translations[lang];
        if (!t) {
            console.error('Translations not found for language:', lang);
            return;
        }

        // Update all elements with IDs
        const elementsToUpdate = {
            'mainParagraph': 'mainParagraph',
            'projectGoalsTitle': 'projectGoalsTitle',
            'goalTitle1': 'goalTitle1',
            'goalTitle2': 'goalTitle2',
            'goalTitle3': 'goalTitle3',
            'goalTitle4': 'goalTitle4',
            'goal1': 'goal1',
            'goal2': 'goal2',
            'goal3': 'goal3',
            'goal4': 'goal4',
            'videoTitle': 'videoTitle',
            'featureTitle1': 'featureTitle1',
            'featureDesc1': 'featureDesc1',
            'featureTitle2': 'featureTitle2',
            'featureDesc2': 'featureDesc2',
            'featureTitle3': 'featureTitle3',
            'featureDesc3': 'featureDesc3',
            'featureTitle4': 'featureTitle4',
            'featureDesc4': 'featureDesc4',
            'surveyTitle': 'surveyTitle',
            'surveyText': 'surveyText',
            'contactTitle': 'contactTitle',
            'contactText': 'contactText',
            'footerAbout': 'footerAbout',
            'footerLinks': 'footerLinks',
            'footerContactTitle': 'footerContactTitle',
            'quickHome': 'quickHome',
            'quickGoals': 'quickGoals',
            'quickVideo': 'quickVideo',
            'quickContact': 'quickContact',
            'footerPolicy': 'footerPolicy',
            'footerLicense': 'footerLicense',
            'addressText': 'addressText',
            'workTime': 'workTime',
            'footerCopy': 'footerCopy'
        };

        // Update each element if it exists
        Object.entries(elementsToUpdate).forEach(([id, key]) => {
            const element = document.getElementById(id);
            if (element && t[key] !== undefined) {
                element.textContent = t[key];
            }
        });

        // Update all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (t[key]) {
                element.textContent = t[key];
            }
        });

        // Update video source if exists
        const videoFrame = document.getElementById('videoFrame');
        if (videoFrame && t.videoSrc) {
            videoFrame.src = t.videoSrc;
        }

        // Update hero image based on language
        const heroImage = document.getElementById('heroImage');
        if (heroImage) {
            const imagePaths = {
                'ru': 'image1.png',
                'kz': 'Kazimage.png',
                'en': 'Engimage.png'
            };
            heroImage.src = imagePaths[lang];
            heroImage.alt = 'MedixGO App Screenshot';
        }

        console.log('Language update complete');
    } catch (error) {
        console.error('Error in changeLang:', error);
    }
}

// Toggle mobile menu
function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
}

// Initialize video player
function initVideoPlayer() {
    if (videoPlayer) {
        // Add YouTube API script if not already loaded
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
        
        // Initialize player when API is ready
        window.onYouTubeIframeAPIReady = function() {
            new YT.Player(videoPlayer, {
                videoId: videoPlayer.dataset.videoId,
                playerVars: {
                    autoplay: 0,
                    controls: 1,
                    modestbranding: 1,
                    rel: 0
                }
            });
        };
    }
}

// Handle contact link clicks
function handleContactLink(platform) {
    const links = {
        email: 'mailto:contact@medixgo.com',
        whatsapp: 'https://wa.me/your-whatsapp-number',
        telegram: 'https://t.me/your-telegram-username',
        telegramBot: 'https://t.me/your-bot-username',
        instagram: 'https://instagram.com/your-instagram-username'
    };
    
    if (links[platform]) {
        window.open(links[platform], '_blank');
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', init); 