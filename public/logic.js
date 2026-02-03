// WhatsApp Integration for JUBAT
const ORDER_PHONE = '+254751659527';
const SCHEDULE_PHONE = '+254723726530';

/**
 * Function to handle Order Now button click
 * Directs user to WhatsApp for orders
 */
function orderNow() {
    const message = encodeURIComponent(
        'Hello JUBAT! I would like to place an order for purified drinking water. Please let me know the available options and delivery details. Thank you!'
    );
    const whatsappURL = `https://wa.me/${ORDER_PHONE.replace(/^\+/, '')}?text=${message}`;
    window.open(whatsappURL, '_blank');
}

/**
 * Function to handle Schedule Order button click
 * Directs user to WhatsApp for scheduling deliveries and refills
 */
function scheduleOrder() {
    const message = encodeURIComponent(
        'Hello JUBAT! I would like to schedule a delivery or book a refill at your South B Branch. Please let me know the available time slots. Thank you!'
    );
    const whatsappURL = `https://wa.me/${SCHEDULE_PHONE.replace(/^\+/, '')}?text=${message}`;
    window.open(whatsappURL, '_blank');
}

/**
 * Hamburger menu toggle for mobile navigation
 */
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '60px';
            navMenu.style.left = '0';
            navMenu.style.right = '0';
            navMenu.style.backgroundColor = '#0d1b2a';
            navMenu.style.flexDirection = 'column';
            navMenu.style.width = '100%';
            navMenu.style.zIndex = '999';
        });
    }

    // Handle contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Create WhatsApp message
            const whatsappMessage = encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`
            );
            
            // Use the order phone for inquiries
            window.open(`https://wa.me/${ORDER_PHONE.replace(/^\+/, '')}?text=${whatsappMessage}`, '_blank');
            
            // Reset form
            this.reset();
            alert('Thank you! Your message has been sent via WhatsApp.');
        });
    }

    // Update active navigation link based on current page
    updateActiveNavLink();
});

/**
 * Update active navigation link based on current page
 */
function updateActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Smooth scroll to sections (if needed)
 */
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Format phone numbers for display
 */
function formatPhoneNumber(phone) {
    // Removes all non-digit characters
    const cleaned = phone.replace(/\D/g, '');
    
    // Format as per local preference
    if (cleaned.length === 12 && cleaned.startsWith('254')) {
        return `+${cleaned.substring(0, 3)} ${cleaned.substring(3, 6)} ${cleaned.substring(6)}`;
    }
    return phone;
}

/**
 * Validate email format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validate phone format
 */
function isValidPhone(phone) {
    const phoneRegex = /^(\+?254|0)[0-9]{9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

/**
 * Show notification message
 */
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background-color: ${type === 'success' ? '#28a745' : '#dc3545'};
        color: white;
        border-radius: 5px;
        z-index: 2000;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/**
 * Track user interactions for analytics
 */
function trackEvent(eventName, eventData = {}) {
    // This function can be extended to track user events
    console.log(`Event: ${eventName}`, eventData);
    
    // You can integrate with Google Analytics or other tracking services here
    // Example: gtag('event', eventName, eventData);
}

// Track page views
window.addEventListener('load', function() {
    const pageName = window.location.pathname.split('/').pop() || 'index.html';
    trackEvent('page_view', { page: pageName });
});

// Track button clicks
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn')) {
        const buttonText = e.target.textContent.trim();
        trackEvent('button_click', { button: buttonText });
    }
});

// Track navigation
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('nav-link')) {
        const linkText = e.target.textContent.trim();
        trackEvent('navigation_click', { link: linkText });
    }
});

/**
 * Initialize tooltips (if needed)
 */
function initializeTooltips() {
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltipText = this.getAttribute('data-tooltip');
            const tooltip = document.createElement('div');
            tooltip.textContent = tooltipText;
            tooltip.className = 'tooltip';
            tooltip.style.cssText = `
                position: absolute;
                background-color: #333;
                color: white;
                padding: 8px 12px;
                border-radius: 4px;
                font-size: 0.9rem;
                white-space: nowrap;
                z-index: 1000;
                bottom: 125%;
                left: 50%;
                transform: translateX(-50%);
            `;
            this.appendChild(tooltip);
        });
        
        element.addEventListener('mouseleave', function() {
            const tooltip = this.querySelector('.tooltip');
            if (tooltip) tooltip.remove();
        });
    });
}

// Call initialization on page load
window.addEventListener('load', initializeTooltips);
