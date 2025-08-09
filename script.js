document.addEventListener('DOMContentLoaded', () => {
   
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

   
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); 

            

            const viewerName = document.getElementById('viewerName').value;
            const viewerEmail = document.getElementById('viewerEmail').value;
            const viewerPhone = document.getElementById('viewerPhone').value;
            const viewerMessage = document.getElementById('viewerMessage').value;

            
            if (!viewerName || !viewerMessage) {
                formMessage.textContent = 'Please fill in your name and message.';
                formMessage.className = 'form-message error';
                return;
            }

            
            formMessage.textContent = 'Sending your message...';
            formMessage.className = 'form-message';

            setTimeout(() => {
               
                const success = Math.random() > 0.2; 

                if (success) {
                    formMessage.textContent = 'Message sent successfully! I will get back to you soon.';
                    formMessage.className = 'form-message success';
                    contactForm.reset();
                } else {
                    formMessage.textContent = 'Failed to send message. Please try again later or contact me directly via email.';
                    formMessage.className = 'form-message error';
                }
            }, 2000); 
        });
    }

});

