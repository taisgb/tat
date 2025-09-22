document.addEventListener("DOMContentLoaded", () => {
  // --- FAQ Toggle Functionality ---
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      const wasActive = item.classList.contains("active");
      
      faqItems.forEach((otherItem) => {
        otherItem.classList.remove("active");
      });

      if (!wasActive) {
        item.classList.add("active");
      }
    });
  });

  // --- Smooth Scrolling for Navigation Links ---
  const navLinks = document.querySelectorAll(".nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }); 

  // --- Testimonials Carousel with Swiper.js (RESPONSIVO) ---
  // Define as configurações para cada tamanho de tela
  const desktopOptions = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 5,
      stretch: 20,
      depth: 100,
      modifier: 1.5,
      slideShadows: false,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  };

  const mobileOptions = {
    effect: 'slide', // Efeito simples para celular
    loop: true,
    slidesPerView: 1, // Apenas 1 slide por vez
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  };

  // Inicializa o Swiper com as opções corretas
  const swiper = new Swiper('.depoimentos-carousel.swiper', 
    window.innerWidth <= 768 ? mobileOptions : desktopOptions
  );

  // Opcional: Recarrega a página se o tamanho da tela mudar
  // para garantir que o Swiper se reconfigure corretamente.
  window.addEventListener('resize', () => {
    location.reload();
  });
});