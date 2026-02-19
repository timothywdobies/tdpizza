// ===========================
// APARTMENT PIZZA LAB - MAIN JS
// ===========================

// Configuration (YOU NEED TO FILL THESE IN)
const CONFIG = {
    // Get this from Gumroad after you create your product
    gumroadProductLink: 'https://your-username.gumroad.com/l/apartment-pizza-playbook',

    // Get this from Beehiiv after you set up your publication
    beehiivPublicationId: 'YOUR_BEEHIIV_PUBLICATION_ID',

    // Affiliate links - replace with your actual Amazon affiliate links
    affiliateLinks: {
        'scale': 'https://amazon.com/your-affiliate-link-scale',
        'sheet-pan': 'https://amazon.com/your-affiliate-link-pan',
        'thermometer': 'https://amazon.com/your-affiliate-link-thermometer',
        'steel': 'https://amazon.com/your-affiliate-link-steel',
        'bench-scraper': 'https://amazon.com/your-affiliate-link-scraper',
        'peel': 'https://amazon.com/your-affiliate-link-peel',
        'oxo-scale': 'https://amazon.com/your-affiliate-link-oxo',
        'nordic-pan': 'https://amazon.com/your-affiliate-link-nordic',
        'thermopro': 'https://amazon.com/your-affiliate-link-thermopro',
        'steel-square': 'https://amazon.com/your-affiliate-link-steel-square',
        'wood-peel': 'https://amazon.com/your-affiliate-link-peel-wood'
    }
};

// ===========================
// PLAYBOOK BUY BUTTON
// ===========================

function initPlaybookButton() {
    const buyButton = document.getElementById('buy-playbook');

    if (buyButton) {
        buyButton.addEventListener('click', function(e) {
            e.preventDefault();

            // Open Gumroad overlay (this is the recommended way)
            // Once you have your Gumroad link, this will open a nice popup checkout
            window.open(CONFIG.gumroadProductLink, '_blank');

            // Track the click (optional - for analytics)
            trackEvent('playbook_purchase_click', {
                location: 'landing_page'
            });
        });
    }
}

// ===========================
// EMAIL OPT-IN FORM
// ===========================

function initEmailForm() {
    const emailForm = document.getElementById('email-form');
    const emailInput = document.getElementById('email-input');

    if (emailForm) {
        emailForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const email = emailInput.value;

            if (!isValidEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // BEEHIIV INTEGRATION
            // Once you have your Beehiiv publication ID, this will subscribe users
            // For now, this is a placeholder that just logs to console

            try {
                // Placeholder - replace with actual Beehiiv API call
                console.log('Subscribing email:', email);

                // Uncomment when you have Beehiiv set up:
                /*
                const response = await fetch('https://api.beehiiv.com/v2/publications/' + CONFIG.beehiivPublicationId + '/subscriptions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer YOUR_BEEHIIV_API_KEY'
                    },
                    body: JSON.stringify({
                        email: email,
                        reactivate_existing: false,
                        send_welcome_email: true,
                        utm_source: 'website',
                        utm_medium: 'opt-in-form'
                    })
                });

                if (response.ok) {
                    showSuccessMessage();
                } else {
                    showErrorMessage();
                }
                */

                // For now, just show success
                showSuccessMessage();
                emailInput.value = '';

                // Track the opt-in
                trackEvent('email_optin', {
                    source: 'free_cheatsheet'
                });

            } catch (error) {
                console.error('Email subscription error:', error);
                showErrorMessage();
            }
        });
    }
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showSuccessMessage() {
    const form = document.getElementById('email-form');
    const successHTML = `
        <div style="background: #4CAF50; color: white; padding: 1rem; border-radius: 8px; text-align: center;">
            <p style="margin: 0; font-weight: 600;">✅ Success! Check your email for the cheat sheet.</p>
        </div>
    `;
    form.outerHTML = successHTML;
}

function showErrorMessage() {
    alert('Oops! Something went wrong. Please try again or email me directly.');
}

// ===========================
// AFFILIATE LINK TRACKING
// ===========================

function initAffiliateLinks() {
    // Get all affiliate link buttons
    const affiliateButtons = document.querySelectorAll('[data-gear]');

    affiliateButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            const gearType = this.getAttribute('data-gear');
            const affiliateUrl = CONFIG.affiliateLinks[gearType];

            if (affiliateUrl && !affiliateUrl.includes('your-affiliate-link')) {
                // Open the affiliate link
                window.open(affiliateUrl, '_blank');

                // Track the click
                trackEvent('affiliate_click', {
                    gear_type: gearType,
                    url: affiliateUrl
                });
            } else {
                // If links aren't set up yet, show a message
                console.warn('Affiliate link not configured for:', gearType);
                alert('Affiliate links coming soon! Check back later.');
            }
        });
    });
}

// ===========================
// ANALYTICS TRACKING
// ===========================

function trackEvent(eventName, data = {}) {
    // This is a placeholder for analytics tracking
    // Once you set up Google Analytics or Plausible, update this

    console.log('📊 Event tracked:', eventName, data);

    // Example: Google Analytics (GA4)
    /*
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, data);
    }
    */

    // Example: Plausible Analytics
    /*
    if (typeof plausible !== 'undefined') {
        plausible(eventName, { props: data });
    }
    */
}

// ===========================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===========================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Only smooth scroll if it's an internal anchor (not just "#")
            if (href.length > 1) {
                const target = document.querySelector(href);

                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// ===========================
// INITIALIZE EVERYTHING
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🍕 Apartment Pizza Lab initialized');

    initPlaybookButton();
    initEmailForm();
    initAffiliateLinks();
    initSmoothScroll();
});

// ===========================
// HELPER: PAGE VIEW TRACKING
// ===========================

// Track page views
trackEvent('page_view', {
    page: window.location.pathname,
    referrer: document.referrer
});
