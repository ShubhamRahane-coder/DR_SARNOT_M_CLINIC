
(function () {
  var footerHTML = `
<footer class="bg-slate-50 border-t border-slate-200 mt-16" style="font-family:Inter,sans-serif">
  <div class="max-w-7xl mx-auto px-8 py-16">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

      <!-- Brand -->
      <div class="md:col-span-1">
        <div class="text-lg font-extrabold text-[#002046] mb-3" style="font-family:Manrope,sans-serif">Sarnot Clinic</div>
        <p class="text-slate-500 text-sm mb-5">High-end clinical excellence since 2010. World-class dental, skin &amp; hair care in Loni, Ahmednagar.</p>
        <div class="flex gap-3">
          <a href="https://wa.me/917057893339" target="_blank" class="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:opacity-80 transition-opacity" title="WhatsApp">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          </a>
          <a href="#" class="w-9 h-9 rounded-full bg-[#002046] flex items-center justify-center text-white hover:opacity-80 transition-opacity" title="Facebook">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
          </a>
          <a href="#" class="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white hover:opacity-80 transition-opacity" title="Instagram">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
        </div>
      </div>

      <!-- Pages -->
      <div>
        <h5 class="font-bold text-[#002046] mb-4 text-sm uppercase tracking-wider">Pages</h5>
        <ul class="space-y-2.5 text-slate-500 text-sm">
          <li><a href="index.html" class="hover:text-[#002046] transition-colors">Home</a></li>
          <li><a href="services.html" class="hover:text-[#002046] transition-colors">Services</a></li>
          <li><a href="about.html" class="hover:text-[#002046] transition-colors">About Us</a></li>
          <li><a href="contact.html" class="hover:text-[#002046] transition-colors">Contact</a></li>
          <li><a href="book-appointment.html" class="hover:text-[#002046] transition-colors">Book Appointment</a></li>
        </ul>
      </div>

      <!-- Services -->
      <div>
        <h5 class="font-bold text-[#002046] mb-4 text-sm uppercase tracking-wider">Services</h5>
        <ul class="space-y-2.5 text-slate-500 text-sm">
          <li>Root Canal (RCT)</li>
          <li>Dental Implants</li>
          <li>Orthodontics &amp; Braces</li>
          <li>Skin &amp; Laser Treatment</li>
          <li>Hair PRP Therapy</li>
          <li>Pediatric Dentistry</li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h5 class="font-bold text-[#002046] mb-4 text-sm uppercase tracking-wider">Contact</h5>
        <div class="space-y-3 text-slate-500 text-sm">
          <div class="flex gap-2 items-start">
            <span class="material-symbols-outlined text-[#416562] text-base mt-0.5">location_on</span>
            <span>Near Bus Stand, Loni&ndash;Sangamner Road, Ahmednagar, MH 413736</span>
          </div>
          <div class="flex gap-2 items-center">
            <span class="material-symbols-outlined text-[#416562] text-base">call</span>
            <a href="tel:+917057893339" class="hover:text-[#002046]">+91 70578 93339</a>
          </div>
          <div class="flex gap-2 items-center">
            <span class="material-symbols-outlined text-[#416562] text-base">call</span>
            <a href="tel:+917057273339" class="hover:text-[#002046]">+91 70572 73339</a>
          </div>
          <div class="flex gap-2 items-center">
            <span class="material-symbols-outlined text-[#416562] text-base">mail</span>
            <a href="mailto:sarnotclinic@gmail.com" class="hover:text-[#002046]">sarnotclinic@gmail.com</a>
          </div>
          <div class="flex gap-2 items-center">
            <span class="material-symbols-outlined text-[#416562] text-base">schedule</span>
            <span>Mon&ndash;Sat: 10 AM &ndash; 8 PM</span>
          </div>
        </div>
      </div>

    </div>

    <!-- Bottom bar -->
    <div class="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
      <span>&copy; 2026 Dr. Sarnot Multispeciality Clinic. All Rights Reserved.</span>
      <span class="flex items-center gap-1">
        <span class="material-symbols-outlined text-green-500 text-sm" style="font-variation-settings:'FILL' 1">shield</span>
        HIPAA Compliant
      </span>
    </div>
  </div>
</footer>
`;

  // Inject into page
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  const animStyles = `
    <style>
      .reveal {
        opacity: 0;
        transition: all 2.5s cubic-bezier(0.2, 1, 0.3, 1);
        will-change: transform, opacity;
      }
      .reveal.active {
        opacity: 1;
        transform: translate(0, 0) scale(1) !important;
      }
      .reveal-up { transform: translateY(80px); }
      .reveal-down { transform: translateY(-80px); }
      .reveal-left { transform: translateX(-80px); }
      .reveal-right { transform: translateX(80px); }
      .reveal-scale { transform: scale(0.92); }
      
      /* Floating Animation */
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-12px); }
      }
      .animate-float {
        animation: float 5s ease-in-out infinite;
      }

      /* Hover Effects */
      .hover-lift {
        transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      .hover-lift:hover {
        transform: translateY(-10px);
      }

      /* Stagger delays */
      .delay-100 { transition-delay: 200ms; }
      .delay-200 { transition-delay: 400ms; }
      .delay-300 { transition-delay: 600ms; }
      .delay-400 { transition-delay: 800ms; }
      .delay-500 { transition-delay: 1000ms; }
      .delay-600 { transition-delay: 1200ms; }
      .delay-700 { transition-delay: 1400ms; }
      .delay-800 { transition-delay: 1600ms; }
    </style>
  `;
  document.head.insertAdjacentHTML('afterbegin', animStyles);

  const observerOptions = {
    threshold: 0,
    rootMargin: '0px'
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  function initAnimations() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => revealObserver.observe(el));
    
    // Immediate sweep for already visible elements (especially hero on refresh)
    const checkVisible = () => {
      reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('active');
        }
      });
    };
    
    // Run multiple times to catch different rendering stages
    checkVisible();
    setTimeout(checkVisible, 100);
    setTimeout(checkVisible, 500);
  }

  // FAQ Logic
  function initFAQs() {
    document.querySelectorAll('.faq-item').forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      const icon = item.querySelector('.faq-icon');

      if (question && answer && icon && !item.dataset.faqInit) {
        item.dataset.faqInit = "true";
        // Reset state only if not already initialized
        answer.style.maxHeight = '0px';
        answer.style.opacity = '0';
        answer.style.transform = 'translateY(-10px)';
        answer.style.overflow = 'hidden';
        answer.style.transition = 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease, transform 0.4s ease';

        question.addEventListener('click', () => {
          const isOpen = answer.style.maxHeight !== '0px';

          // Close all other FAQs in the same container
          const parent = item.parentElement;
          if (parent) {
            parent.querySelectorAll('.faq-item').forEach(otherItem => {
              if (otherItem !== item) {
                const otherAnswer = otherItem.querySelector('.faq-answer');
                const otherIcon = otherItem.querySelector('.faq-icon');
                if (otherAnswer) {
                  otherAnswer.style.maxHeight = '0px';
                  otherAnswer.style.opacity = '0';
                  otherAnswer.style.transform = 'translateY(-10px)';
                }
                if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
              }
            });
          }

          // Toggle current
          if (isOpen) {
            answer.style.maxHeight = '0px';
            answer.style.opacity = '0';
            answer.style.transform = 'translateY(-10px)';
            icon.style.transform = 'rotate(0deg)';
          } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            answer.style.opacity = '1';
            answer.style.transform = 'translateY(0)';
            icon.style.transform = 'rotate(180deg)';
          }
        });

        // Allow clicking the answer to close it too
        answer.addEventListener('click', () => {
          answer.style.maxHeight = '0px';
          answer.style.opacity = '0';
          answer.style.transform = 'translateY(-10px)';
          icon.style.transform = 'rotate(0deg)';
        });
      }
    });
  }

  // Run on load
  console.log("Sarnot Clinic Engine: Initializing...");
  initAnimations();
  initFAQs();
  
  // Re-run after a delay for dynamic content or slow renders
  setTimeout(() => {
    initAnimations();
    initFAQs();
    console.log("Sarnot Clinic Engine: Ready.");
  }, 500);
})();
