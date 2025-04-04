// DOM Elements
const hamburgerBtn = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const readMoreBtns = document.querySelectorAll('.read-more');
const newsletterForm = document.getElementById('newsletter-form');
const contactForm = document.getElementById('contact-form');
const poemCards = document.querySelectorAll('.poem-card');

// Mobile Navigation Toggle
hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    nav.classList.toggle('active');
    
    // Toggle hamburger animation
    const bars = document.querySelectorAll('.bar');
    if (hamburgerBtn.classList.contains('active')) {
        bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
    } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        nav.classList.remove('active');
        
        // Reset hamburger icon
        const bars = document.querySelectorAll('.bar');
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    });
});

// Read More buttons for poems
readMoreBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const poemCard = this.closest('.poem-card');
        const poemPreview = poemCard.querySelector('.poem-preview');
        
        // Toggle expanded class
        poemCard.classList.toggle('expanded');
        
        if (poemCard.classList.contains('expanded')) {
            // Show full poem text (this is a placeholder - in a real app you would load the full poem)
            const fullPoem = getFullPoem(poemCard.querySelector('h3').textContent);
            poemPreview.innerHTML = fullPoem;
            this.textContent = 'संक्षिप्त रूप दिखाएँ';
        } else {
            // Show preview text again
            const originalPreview = getOriginalPreview(poemCard.querySelector('h3').textContent);
            poemPreview.innerHTML = originalPreview;
            this.textContent = 'पूरी कविता पढ़ें...';
        }
    });
});

// Full poem content (in a real app, this would come from a database)
function getFullPoem(title) {
    const poems = {
        'हिमालय': `तुहिन-गिरि के उत्तुंग शिखर पर,<br>
                    बैठ शिला की शीतल छाँह,<br>
                    एक पुरुष भीगे नयनों से,<br>
                    देख रहा था प्रलय प्रवाह।<br><br>
                    
                    नीचे जल था, ऊपर हिम था,<br>
                    एक तरल था, एक सघन,<br>
                    एक तत्व की ही प्रधानता,<br>
                    कहो उसे जड़ या चेतन।<br><br>
                    
                    हिम-राशि में अवगाहन कर,<br>
                    निकला मनुज-जाति का सर्जन,<br>
                    अद्वैत ने विविधता में ली,<br>
                    झाँकी एक नवीन दर्पण।`,
        
        'अग्निपथ': `वृक्ष हों भले खड़े,<br>
                    हों घने, हों बड़े,<br>
                    एक पत्र छाँह भी<br>
                    माँग मत, माँग मत, माँग मत।<br><br>
                    
                    अग्निपथ, अग्निपथ, अग्निपथ।<br>
                    तू न थकेगा कभी,<br>
                    तू न थमेगा कभी,<br>
                    तू न मुड़ेगा कभी,<br>
                    कर शपथ, कर शपथ, कर शपथ।<br><br>
                    
                    यह महान दृश्य है,<br>
                    चल रहा मनुष्य है,<br>
                    अश्रु-स्वेद-रक्त से<br>
                    लथपथ, लथपथ, लथपथ।`,
        
        'रश्मि रथी': `उषा की पहली किरण ने जब<br>
                      चूमा उस भीषण रण का माथा,<br>
                      हिल उठा विश्व, मृत्यु-पाश में<br>
                      बंधा जगत होने लगा प्रभात।<br><br>
                      
                      ध्यान-मग्न शिव की भृकुटी पर<br>
                      अटकी हुई थी सृष्टि अनंत,<br>
                      प्रलय-नीरव, प्रलय-तिमिर में<br>
                      तन्मय हो रहा जगत सनातन।<br><br>
                      
                      सूर्य-मुखी से सूर्य-मुखी तक<br>
                      सूर्य-मुखी का है यह जगत,<br>
                      दिन का प्रथम चरण पहला,<br>
                      सूर्य-रश्मियों का साक्षात।`
    };
    
    return poems[title] || 'पूर्ण कविता उपलब्ध नहीं है।';
}

// Original preview text
function getOriginalPreview(title) {
    const previews = {
        'हिमालय': `तुहिन-गिरि के उत्तुंग शिखर पर,<br>
                   बैठ शिला की शीतल छाँह,<br>
                   एक पुरुष भीगे नयनों से,<br>
                   देख रहा था प्रलय प्रवाह।`,
        
        'अग्निपथ': `वृक्ष हों भले खड़े,<br>
                    हों घने, हों बड़े,<br>
                    एक पत्र छाँह भी<br>
                    माँग मत, माँग मत, माँग मत।`,
        
        'रश्मि रथी': `उषा की पहली किरण ने जब<br>
                      चूमा उस भीषण रण का माथा,<br>
                      हिल उठा विश्व, मृत्यु-पाश में<br>
                      बंधा जगत होने लगा प्रभात।`
    };
    
    return previews[title] || 'कविता प्रीव्यू उपलब्ध नहीं है।';
}

// Newsletter Form Submission
newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    
    // Validate email (simple validation)
    if (!email || !email.includes('@')) {
        showNotification('कृपया एक वैध ईमेल पता दर्ज करें।', 'error');
        return;
    }
    
    // In a real app, you would send this to a server
    console.log('Newsletter subscription: ' + email);
    
    // Show success notification
    showNotification('आपने हमारे न्यूज़लेटर के लिए सफलतापूर्वक सदस्यता ले ली है!', 'success');
    
    // Reset form
    this.reset();
});

// Contact Form Submission
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const subject = this.querySelectorAll('input[type="text"]')[1].value;
    const message = this.querySelector('textarea').value;
    
    // Simple validation
    if (!name || !email || !message) {
        showNotification('कृपया सभी आवश्यक फ़ील्ड भरें।', 'error');
        return;
    }
    
    // In a real app, you would send this to a server
    console.log('Contact form submission:');
    console.log({ name, email, subject, message });
    
    // Show success notification
    showNotification('आपका संदेश सफलतापूर्वक भेजा गया है!', 'success');
    
    // Reset form
    this.reset();
});

// Notification system
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add close button
    const closeBtn = document.createElement('span');
    closeBtn.className = 'notification-close';
    closeBtn.innerHTML = '&times;';
    closeBtn.onclick = function() {
        document.body.removeChild(notification);
    };
    notification.appendChild(closeBtn);
    
    // Add to the DOM
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (document.body.contains(notification)) {
            document.body.removeChild(notification);
        }
    }, 5000);
}

// Add animation for poem cards
poemCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'var(--shadow)';
    });
});

// Scroll reveal animation
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    
    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    // Observe each section
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
});

// Add CSS for the animations
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        z-index: 1000;
        animation: slideIn 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        max-width: 300px;
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .notification.success {
        background-color: var(--accent-color);
    }
    
    .notification.error {
        background-color: #F44336;
    }
    
    .notification.info {
        background-color: #2196F3;
    }
    
    .notification-close {
        margin-left: 10px;
        cursor: pointer;
        float: right;
        font-size: 20px;
        font-weight: bold;
    }
`;
document.head.appendChild(style);

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerOffset = 70; // Account for fixed header
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Author cards additional interaction
document.querySelectorAll('.author-card').forEach(card => {
    card.addEventListener('click', function(e) {
        // Don't trigger if clicking on the button
        if (!e.target.classList.contains('btn-small') && !e.target.closest('.btn-small')) {
            const authorName = this.querySelector('h3').textContent;
            // In a real application, you would navigate to the author's page
            console.log(`Navigate to ${authorName}'s page`);
        }
    });
}); 