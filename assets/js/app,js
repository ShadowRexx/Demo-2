// ============================================
// PRIME SHOE JERSEY HUB — App JavaScript
// ============================================

// ============================================
// NAVBAR
// ============================================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  // Scroll effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // Hamburger menu
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      const lines = hamburger.querySelectorAll('.hamburger-lines span');
      const isOpen = mobileNav.classList.contains('open');
      if (isOpen) {
        lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        lines[1].style.opacity = '0';
        lines[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        lines[0].style.transform = '';
        lines[1].style.opacity = '';
        lines[2].style.transform = '';
      }
    });
    // Close on outside click
    document.addEventListener('click', e => {
      if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.remove('open');
      }
    });
  }

  // Mark active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ============================================
// SEARCH
// ============================================
function initSearch() {
  const input = document.getElementById('nav-search-input');
  const dropdown = document.getElementById('search-results-dropdown');
  if (!input || !dropdown || typeof PRODUCTS === 'undefined') return;

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q || q.length < 2) { dropdown.classList.remove('active'); return; }

    const results = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    ).slice(0, 6);

    if (results.length === 0) { dropdown.classList.remove('active'); return; }

    dropdown.innerHTML = results.map(p => `
      <div class="search-result-item" onclick="window.location='product.html?id=${p.id}'">
        <img src="${p.images[0]}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&q=70'" />
        <div style="flex:1;min-width:0;">
          <div class="name">${p.name}</div>
          <div class="price">${formatPrice(p.price)}</div>
        </div>
        <div style="font-size:10px;font-family:var(--font-cond);font-weight:700;color:var(--silver);text-transform:uppercase;letter-spacing:0.05em;">${p.category}</div>
      </div>
    `).join('');
    dropdown.classList.add('active');
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && input.value.trim()) {
      window.location = `shop.html?q=${encodeURIComponent(input.value.trim())}`;
      dropdown.classList.remove('active');
    }
    if (e.key === 'Escape') { dropdown.classList.remove('active'); input.blur(); }
  });

  document.addEventListener('click', e => {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
    }
  });
}

// ============================================
// HERO SLIDER
// ============================================
const HERO_SLIDES = [
  'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1600&q=80',
  'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1600&q=80',
  'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=1600&q=80',
  'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=1600&q=80',
];

function initHeroSlider() {
  const slider = document.getElementById('hero-slider');
  const dotsContainer = document.getElementById('hero-dots');
  if (!slider) return;

  let current = 0;

  // Create slides
  HERO_SLIDES.forEach((src, i) => {
    const slide = document.createElement('div');
    slide.className = `hero-slide${i === 0 ? ' active' : ''}`;
    slide.style.backgroundImage = `url(${src})`;
    slider.appendChild(slide);
  });

  // Create dots
  if (dotsContainer) {
    HERO_SLIDES.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.className = `hero-dot${i === 0 ? ' active' : ''}`;
      dot.onclick = () => goToSlide(i);
      dotsContainer.appendChild(dot);
    });
  }

  function goToSlide(idx) {
    slider.querySelectorAll('.hero-slide').forEach((s, i) => s.classList.toggle('active', i === idx));
    dotsContainer?.querySelectorAll('.hero-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
    current = idx;
  }

  // Auto-advance
  setInterval(() => { goToSlide((current + 1) % HERO_SLIDES.length); }, 5000);
}

// ============================================
// PRODUCT CARD BUILDER
// ============================================
function buildProductCard(product, opts = {}) {
  const { showQuickAdd = true } = opts;
  const disc = getDiscountPct(product);
  const badge = BADGE_CONFIG[product.badge];
  const stars = '★'.repeat(Math.floor(product.rating)) + (product.rating % 1 >= 0.5 ? '½' : '');
  const stockPct = Math.min(100, (product.stock / 20) * 100);

  return `
    <div class="product-card reveal" onclick="window.location='product.html?id=${product.id}'" style="cursor:pointer;">
      <div class="product-card-img">
        <img src="${product.images[0]}" alt="${product.name}" loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=70'" />
        <div class="product-card-badges">
          ${badge ? `<span class="badge ${badge.cls}">${badge.label}</span>` : ''}
          ${product.stock <= 5 ? '<span class="badge badge-red" style="margin-top:4px;">Only '+product.stock+' left</span>' : ''}
        </div>
        <div class="product-card-discount">
          <span class="badge badge-dark">-${disc}%</span>
        </div>
        ${showQuickAdd ? `
        <div class="product-card-actions">
          <button class="btn btn-neon btn-sm btn-full ripple-btn"
            onclick="event.stopPropagation(); quickAddToCart(${product.id})">
            + Add to Cart
          </button>
        </div>` : ''}
        <div class="product-card-stock-bar" style="width:${stockPct}%"></div>
      </div>
      <div class="product-card-body">
        <div class="product-card-cat">${product.brand} · ${product.category}</div>
        <div class="product-card-name">${product.name}</div>
        <div class="product-card-rating">
          <span class="stars">${stars}</span>
          <span class="rating-count">(${product.reviews})</span>
        </div>
        <div class="product-card-price">
          <span class="price-current">${formatPrice(product.price)}</span>
          <span class="price-original">${formatPrice(product.originalPrice)}</span>
        </div>
      </div>
    </div>
  `;
}

function buildSkeletonCard() {
  return `
    <div class="skeleton-card">
      <div class="skeleton" style="aspect-ratio:1;width:100%;"></div>
      <div style="padding:16px;gap:8px;display:flex;flex-direction:column;">
        <div class="skeleton" style="height:12px;width:60%;border-radius:4px;"></div>
        <div class="skeleton" style="height:16px;width:90%;border-radius:4px;"></div>
        <div class="skeleton" style="height:12px;width:40%;border-radius:4px;"></div>
        <div class="skeleton" style="height:24px;width:50%;border-radius:4px;margin-top:4px;"></div>
      </div>
    </div>
  `;
}

function quickAddToCart(productId) {
  const product = getProductById(productId);
  if (!product) return;
  const defaultSize = product.sizes[2] || product.sizes[0];
  cartAdd(product, defaultSize, 1);
}

// ============================================
// SCROLL REVEAL
// ============================================
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  function observeAll() {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
  }
  observeAll();
  // Re-observe when new content is added
  const mutObs = new MutationObserver(observeAll);
  mutObs.observe(document.body, { childList: true, subtree: true });
}

// ============================================
// RIPPLE EFFECT
// ============================================
function initRipple() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('.ripple-btn, .btn-neon, .btn-outline');
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX-rect.left-size/2}px;top:${e.clientY-rect.top-size/2}px`;
    btn.style.position = 'relative';
    btn.style.overflow = 'hidden';
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  });
}

// ============================================
// TICKER (duplicate for seamless loop)
// ============================================
function initTicker() {
  const track = document.querySelector('.ticker-track');
  if (!track) return;
  track.innerHTML += track.innerHTML; // duplicate content
}

// ============================================
// WHATSAPP BUTTON
// ============================================
function buildWAButton() {
  const btn = document.createElement('a');
  btn.href = 'https://wa.me/919876543210?text=Hi%20Prime%20Shoe%20Jersey%20Hub%2C%20I%20need%20help!';
  btn.target = '_blank';
  btn.style.cssText = `
    position:fixed;bottom:88px;right:20px;z-index:500;
    width:52px;height:52px;border-radius:50%;
    background:#25D366;display:flex;align-items:center;justify-content:center;
    box-shadow:0 4px 20px rgba(37,211,102,0.4);
    transition:transform 0.2s,box-shadow 0.2s;
  `;
  btn.innerHTML = `<svg viewBox="0 0 24 24" fill="white" width="26" height="26"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;
  btn.addEventListener('mouseenter', () => { btn.style.transform = 'scale(1.1)'; btn.style.boxShadow = '0 6px 30px rgba(37,211,102,0.6)'; });
  btn.addEventListener('mouseleave', () => { btn.style.transform = ''; btn.style.boxShadow = '0 4px 20px rgba(37,211,102,0.4)'; });
  document.body.appendChild(btn);
}

// ============================================
// GLOBAL INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initSearch();
  initHeroSlider();
  initScrollReveal();
  initRipple();
  initTicker();
  buildWAButton();
});
