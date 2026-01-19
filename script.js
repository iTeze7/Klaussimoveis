const properties = [
  {
    images: [
      'img/ap1/ap1.jpeg',
      'img/ap1/ap11.jpeg',
      'img/ap1/ap12.jpeg',
      'img/ap1/ap13.jpeg',
      'img/ap1/ap14.jpeg',
      'img/ap1/ap16.jpeg'
    ],
    title: "Sobrado Moderno",
    location: "Vila Nova Carmela",
    features: "03 dormitórios • sendo 01 suíte • 180m²",
    description: "Olá! Vi este imóvel no anúncio e quero saber valores e condições. Sobrado Vila Nova Carmela."
  },
  {
    images: [
      'img/ap2/ap2.jpeg',
      'img/ap2/ap21.jpeg',
      'img/ap2/ap23.jpeg',
      'img/ap2/ap24.jpeg',
      'img/ap2/ap25.jpeg',
      'img/ap2/ap26.jpeg',
      'img/ap2/ap27.jpeg',
      'img/ap2/ap28.jpeg',
      'img/ap2/ap29.jpeg',
      'img/ap2/ap210.jpeg',
      'img/ap2/ap211.jpeg'
    ],
    title: "Apartamento",
    location: "Vila Silvia, Condomínio Primavera",
    features: "2 quartos • 40m²",
    description: "Olá! Vi este apartamento no anúncio e gostaria de saber mais informações. Apartamento Vila Silvia."
  },
  {
    images: [
      'img/ap4/ap4.jpeg',
      'img/ap4/ap41.jpeg',
      'img/ap4/ap42.jpeg',
      'img/ap4/ap43.jpeg',
      'img/ap4/ap44.jpeg',
      'img/ap4/ap45.jpeg',
      'img/ap4/ap46.jpeg',
      'img/ap4/ap47.jpeg',
      'img/ap4/ap48.jpeg',
      'img/ap4/ap49.jpeg',
      'img/ap4/ap410.jpeg',
      'img/ap4/ap411.jpeg'
    ],
    title: "Casa Em Condomínio",
    location: "Próximo ao Cecap, região Vila Barros",
    features: "2 suítes • Acabamento moderno • 73m²",
    description: "Olá, tenho interesse neste imóvel e gostaria de mais informações. Casa em condomínio próximo ao Cecap."
  },
  {
    images: [
      'img/ap3/ap3.jpeg',
      'img/ap3/ap31.jpeg',
      'img/ap3/ap32.jpeg',
      'img/ap3/ap33.jpeg',
      'img/ap3/ap34.jpeg',
      'img/ap3/ap35.jpeg',
      'img/ap3/ap36.jpeg',
      'img/ap3/ap37.jpeg',
      'img/ap3/ap38.jpeg',
      'img/ap3/ap39.jpeg',
      'img/ap3/ap310.jpeg',
      'img/ap3/ap311.jpeg',
      'img/ap3/ap312.jpeg'
    ],
    title: "Apartamento",
    location: "José Miguel Ackel, Condomínio Seasons Family",
    features: "2 Quartos • 1 Vaga de Garagem • 45m²",
    description: "Olá! Vi este apartamento no anúncio e gostaria de saber valor, entrada e financiamento. Apartamento José miguel Ackel."
  },
  {
    images: [
      'img/ap5/ap1.jpeg',
      'img/ap5/ap2.jpeg',
      'img/ap5/ap3.jpeg',
      'img/ap5/ap4.jpeg',
      'img/ap5/ap5.jpeg',
      'img/ap5/ap6.jpeg',
      'img/ap5/ap7.jpeg',
      'img/ap5/ap8.jpeg',
      'img/ap5/ap9.jpeg',
      'img/ap5/ap10.jpeg',
      'img/ap5/ap11.jpeg',
      'img/ap5/ap12.jpeg'
    ],
    title: "Casa à venda",
    location: "Jardim Jovaia | Guarulhos",
    features: " 2 dormitórios • 6 vagas de garagem • 210m²",
    description: "Olá! Tenho interesse nessa Casa. Gostaria de agendar uma visita para conhecer o imóvel. Casa à venda no Jardim Jovaia em Guarulhos."
  },
  {
    images: [
      'img/ap6/ap1.jpeg',
      'img/ap6/ap2.jpeg',
      'img/ap6/ap3.jpeg',
      'img/ap6/ap4.jpeg',
      'img/ap6/ap5.jpeg',
      'img/ap6/ap6.jpeg',
      'img/ap6/ap7.jpeg'
    ],
    title: "Duplex à venda",
    location: "Guarulhos",
    features: "?",
    description: "Olá! Vi este Duplex no anúncio e gostaria de saber valor, entrada e financiamento. Duplex à venda em Guarulhos."
  }
];

// FAQs
const faqs = [
  {
    question: "Como funciona o processo de compra de um imóvel?",
    answer: "O processo começa com uma conversa para entender suas necessidades. Em seguida, apresento imóveis que se encaixam no seu perfil, agendamos visitas e, após a escolha, cuido de toda a documentação e assinamos os papéis."
  },
  {
    question: "Vocês trabalham com financiamento imobiliário?",
    answer: "Sim! Como o programa minha casa minha vida (CAIXA) e Bancos privados."
  },
  {
    question: "Trabalha com terreno e galpão comercial?",
    answer: "Sim! Até mesmo imóveis na planta."
  },
  {
    question: "Quais documentos são necessários para comprar um imóvel?",
    answer: "Os principais são: RG, CPF, comprovante de renda. Forneço uma lista completa e personalizada após nossa primeira conversa."
  },
  {
    question: "Você também ajuda quem quer vender um imóvel?",
    answer: "Claro! Ofereço avaliação gratuita do seu imóvel, fotos profissionais e acompanhamento até a venda ser concluída."
  },
  {
    question: "Todo imóvel pode ser Financiado?",
    answer: "Não! A documentação precisa estar 100% em dia, Mais dúvidas entre em contato comigo!"
  }
];

// ==================== RENDER FUNCTIONS ====================

function renderProperties() {
  const grid = document.getElementById('propertiesGrid');
  grid.innerHTML = properties.map((property, index) => `
    <div class="property-card fade-in fade-in-delay-${(index % 6) + 1}">
      <div class="property-image-carousel" data-index="${index}">
        <div class="carousel-images">
          ${property.images.map((img, imgIndex) => `
            <img src="${img}" alt="${property.title} - Foto ${imgIndex + 1}" loading="lazy" class="${imgIndex === 0 ? 'active' : ''}">
          `).join('')}
        </div>
        <div class="property-image-overlay"></div>
        <span class="property-badge">Destaque</span>
        ${property.images.length > 1 ? `
          <button class="carousel-btn carousel-prev" onclick="changeSlide(${index}, -1)" aria-label="Foto anterior">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button class="carousel-btn carousel-next" onclick="changeSlide(${index}, 1)" aria-label="Próxima foto">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
          <div class="carousel-dots">
            ${property.images.map((_, dotIndex) => `
              <span class="carousel-dot ${dotIndex === 0 ? 'active' : ''}" onclick="goToSlide(${index}, ${dotIndex})"></span>
            `).join('')}
          </div>
        ` : ''}
      </div>
      <div class="property-content">
        <h3>${property.title}</h3>
        <div class="property-location">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          ${property.location}
        </div>
        <div class="property-features">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 3 21 3 21 9"></polyline>
            <polyline points="9 21 3 21 3 15"></polyline>
            <line x1="21" y1="3" x2="14" y2="10"></line>
            <line x1="3" y1="21" x2="10" y2="14"></line>
          </svg>
          ${property.features}
        </div>
        <a href="https://wa.me/5511959957349?text=${encodeURIComponent(property.description)}" target="_blank" rel="noopener noreferrer" class="btn-property">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
          Saber mais
        </a>
      </div>
    </div>
  `).join('');
}

// Carousel navigation functions
function changeSlide(propertyIndex, direction) {
  const carousel = document.querySelector(`.property-image-carousel[data-index="${propertyIndex}"]`);
  const images = carousel.querySelectorAll('.carousel-images img');
  const dots = carousel.querySelectorAll('.carousel-dot');
  
  let currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
  let newIndex = currentIndex + direction;
  
  // Infinite loop
  if (newIndex < 0) newIndex = images.length - 1;
  if (newIndex >= images.length) newIndex = 0;
  
  images[currentIndex].classList.remove('active');
  images[newIndex].classList.add('active');
  
  if (dots.length > 0) {
    dots[currentIndex].classList.remove('active');
    dots[newIndex].classList.add('active');
  }
}

function goToSlide(propertyIndex, slideIndex) {
  const carousel = document.querySelector(`.property-image-carousel[data-index="${propertyIndex}"]`);
  const images = carousel.querySelectorAll('.carousel-images img');
  const dots = carousel.querySelectorAll('.carousel-dot');
  
  let currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
  
  if (currentIndex !== slideIndex) {
    images[currentIndex].classList.remove('active');
    images[slideIndex].classList.add('active');
    
    if (dots.length > 0) {
      dots[currentIndex].classList.remove('active');
      dots[slideIndex].classList.add('active');
    }
  }
}


function initTouchSwipe() {
  const carousels = document.querySelectorAll('.property-image-carousel');
  
  carousels.forEach(carousel => {
    let touchStartX = 0;
    let isSwiping = false;
    const propertyIndex = carousel.dataset.index;
    
    carousel.addEventListener('touchstart', (e) => {
     touchStartX = e.touches[0].clientX;
      isSwiping = true;
    }, { passive: true });
    
    carousel.addEventListener('touchmove', (e) => {
      if (!isSwiping) return;
      // Prevent default only for horizontal swipes
      const touchCurrentX = e.touches[0].clientX;
      const diff = Math.abs(touchStartX - touchCurrentX);
      if (diff > 10) {
        e.preventDefault();
      }
    }, { passive: false });
    
    carousel.addEventListener('touchend', (e) => {
      if (!isSwiping) return;
      const touchEndX = e.changedTouches[0].clientX;
      handleSwipe(propertyIndex, touchStartX, touchEndX);
       isSwiping = false;
    }, { passive: true });
  });
}

function handleSwipe(propertyIndex, startX, endX) {
  const swipeThreshold = 20; // Minimum distance for swipe
  const diff = startX - endX;
  
  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      // Swipe left - next image
      changeSlide(parseInt(propertyIndex), 1);
    } else {
      // Swipe right - previous image
      changeSlide(parseInt(propertyIndex), -1);
    }
  }
}

function renderFAQs() {
  const list = document.getElementById('faqList');
  list.innerHTML = faqs.map((faq, index) => `
    <div class="faq-item" data-index="${index}">
      <button class="faq-question" onclick="toggleFAQ(${index})">
        ${faq.question}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="faq-answer">
        <div class="faq-answer-inner">${faq.answer}</div>
      </div>
    </div>
  `).join('');
}

function toggleFAQ(index) {
  const items = document.querySelectorAll('.faq-item');
  items.forEach((item, i) => {
    if (i === index) {
      item.classList.toggle('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// ==================== HEADER SCROLL ====================

function handleScroll() {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

// ==================== MOBILE MENU ====================

function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('mobileMenuBtn');
  menu.classList.toggle('open');
  
  // Update icon
  if (menu.classList.contains('open')) {
    btn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    `;
  } else {
    btn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    `;
  }
}

// Close mobile menu when clicking a link
document.getElementById('mobileMenu').addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    document.getElementById('mobileMenu').classList.remove('open');
    document.getElementById('mobileMenuBtn').innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    `;
  }
});

// ==================== SCROLL ANIMATIONS ====================

function handleScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in');
  const windowHeight = window.innerHeight;
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      element.classList.add('visible');
    }
  });
}

// ==================== SMOOTH SCROLL ====================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ==================== INIT ====================

document.addEventListener('DOMContentLoaded', () => {
  // Render dynamic content
  renderProperties();
  renderFAQs();
    
  // Initialize touch swipe for mobile carousels
  initTouchSwipe();

  // Set current year
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  
  // Mobile menu button
  document.getElementById('mobileMenuBtn').addEventListener('click', toggleMobileMenu);
  
  handleScrollAnimations();
  handleScroll();
});

window.addEventListener('scroll', () => {
  handleScroll();
  handleScrollAnimations();
});
