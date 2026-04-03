// ============================================
// PRIME SHOE JERSEY HUB — Cart System
// ============================================

const CART_KEY = 'psjh_cart';

// ---- State ----
let cartItems = loadCart();

function loadCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch(e) { return []; }
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
}

// ---- Core Operations ----
function cartAdd(product, size, qty = 1) {
  const key = `${product.id}-${size}`;
  const existing = cartItems.find(i => i.key === key);
  if (existing) {
    existing.qty += qty;
  } else {
    cartItems.push({
      key,
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size,
      qty,
      category: product.category,
    });
  }
  saveCart();
  cartRefreshUI();
  showToast(`${product.name.split(' ').slice(0,3).join(' ')} added to cart! 🛒`);
  return true;
}

function cartRemove(key) {
  cartItems = cartItems.filter(i => i.key !== key);
  saveCart();
  cartRefreshUI();
  renderCartItems();
}

function cartUpdateQty(key, delta) {
  const item = cartItems.find(i => i.key === key);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cartRemove(key);
  else { saveCart(); cartRefreshUI(); renderCartItems(); }
}

function cartClear() {
  cartItems = [];
  saveCart();
  cartRefreshUI();
}

function getCartTotal() {
  return cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);
}

function getCartCount() {
  return cartItems.reduce((sum, i) => sum + i.qty, 0);
}

// ---- UI ----
function cartRefreshUI() {
  const count = getCartCount();
  document.querySelectorAll('.cart-count-badge, .cart-badge').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

function openCart() {
  document.getElementById('cart-overlay')?.classList.add('open');
  document.getElementById('cart-sidebar')?.classList.add('open');
  document.body.style.overflow = 'hidden';
  renderCartItems();
}

function closeCart() {
  document.getElementById('cart-overlay')?.classList.remove('open');
  document.getElementById('cart-sidebar')?.classList.remove('open');
  document.body.style.overflow = '';
}

function renderCartItems() {
  const container = document.getElementById('cart-items');
  if (!container) return;

  if (cartItems.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <div class="cart-empty-msg">Your cart is empty</div>
        <p style="font-size:13px;color:var(--silver);margin-top:8px;">Add some gear and come back!</p>
        <a href="shop.html" class="btn btn-neon btn-sm" style="margin-top:16px;" onclick="closeCart()">Browse Products</a>
      </div>`;
    return;
  }

  const subtotal = getCartTotal();
  container.innerHTML = cartItems.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&q=70'" />
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-meta">Size: ${item.size} · ${item.category}</div>
        <div class="cart-item-price">₹${(item.price * item.qty).toLocaleString('en-IN')}</div>
        <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;">
          <div class="cart-qty">
            <button class="cart-qty-btn" onclick="cartUpdateQty('${item.key}', -1)">−</button>
            <span class="cart-qty-val">${item.qty}</span>
            <button class="cart-qty-btn" onclick="cartUpdateQty('${item.key}', 1)">+</button>
          </div>
          <button class="cart-remove" onclick="cartRemove('${item.key}')">Remove</button>
        </div>
      </div>
    </div>
  `).join('');

  // Update footer total
  const totalEl = document.getElementById('cart-subtotal-val');
  if (totalEl) totalEl.textContent = '₹' + subtotal.toLocaleString('en-IN');
}

// ---- Build Cart Sidebar HTML (called once on DOMContentLoaded) ----
function buildCartSidebar() {
  if (document.getElementById('cart-sidebar')) return; // already exists

  const overlay = document.createElement('div');
  overlay.id = 'cart-overlay';
  overlay.onclick = closeCart;

  const sidebar = document.createElement('aside');
  sidebar.id = 'cart-sidebar';
  sidebar.innerHTML = `
    <div class="cart-header">
      <div>
        <div class="cart-title">Your Cart</div>
        <div id="cart-item-count" style="font-size:12px;color:var(--silver);margin-top:2px;font-family:var(--font-cond);letter-spacing:0.05em;"></div>
      </div>
      <button class="cart-close" onclick="closeCart()">
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    </div>
    <div class="cart-items" id="cart-items"></div>
    <div class="cart-footer">
      <div class="cart-cod-note">
        <span>💳</span> Cash on Delivery Available
      </div>
      <div class="cart-subtotal">
        <span class="cart-subtotal-label">Subtotal</span>
        <span class="cart-subtotal-val" id="cart-subtotal-val">₹0</span>
      </div>
      <a href="checkout.html" class="btn btn-neon btn-full" style="margin-bottom:10px;">Proceed to Checkout →</a>
      <button class="btn btn-dark btn-full btn-sm" onclick="closeCart()">Continue Shopping</button>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.appendChild(sidebar);
}

// ---- Toast Notification ----
function showToast(msg, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <div class="toast-icon ${type === 'error' ? 'error' : ''}">
      ${type === 'error' ? '✕' : '✓'}
    </div>
    <span>${msg}</span>
  `;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ---- Navbar Cart Button ----
function buildNavCartBtn() {
  const btns = document.querySelectorAll('[data-cart-trigger]');
  btns.forEach(btn => { btn.onclick = openCart; });
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  buildCartSidebar();
  buildNavCartBtn();
  cartRefreshUI();

  // Keyboard shortcut to close cart
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeCart();
  });
});
