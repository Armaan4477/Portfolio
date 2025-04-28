(function() {
    emailjs.init("Ktbwb5Q3f_mf7lWqz");
})();

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = 'Sending...';
            submitBtn.disabled = true;
            
            const now = new Date();
            const formattedTime = now.toLocaleString();

            const templateParams = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value,
                time: formattedTime
            };
            
            emailjs.send('service_75yfjkm', 'template_k3vy5h7', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    
                    contactForm.reset();
                    alert('Thank you for your message! I will get back to you soon.');
                })
                .catch(function(error) {
                    console.log('FAILED...', error);
                    alert('Oops! There was a problem sending your message. Please try again later.');
                })
                .finally(() => {
                    submitBtn.innerText = originalBtnText;
                    submitBtn.disabled = false;
                });
        });
    }
});
