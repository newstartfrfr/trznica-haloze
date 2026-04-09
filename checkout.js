(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('#site-nav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      const isOpen = siteNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  function formatPrice(value) {
    return new Intl.NumberFormat('sl-SI', {
      style: 'currency',
      currency: 'EUR'
    }).format(value);
  }

  function getCart() {
    try {
      return JSON.parse(localStorage.getItem('haloze-cart') || '[]');
    } catch {
      return [];
    }
  }

  function setCart(cart) {
    localStorage.setItem('haloze-cart', JSON.stringify(cart));
    updateCartCount();
  }

  function addToCart(id) {
    const product = window.PRODUCTS.find((item) => item.id === id);
    if (!product) return;
    const cart = getCart();
    const existing = cart.find((item) => item.id === id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ id, quantity: 1 });
    }
    setCart(cart);
    alert('Izdelek je dodan v košarico.');
  }

  function removeFromCart(id) {
    const next = getCart().filter((item) => item.id !== id);
    setCart(next);
  }

  function updateQuantity(id, delta) {
    const cart = getCart();
    const item = cart.find((entry) => entry.id === id);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart(cart);
  }

  function getCartDetailed() {
    return getCart().map((entry) => {
      const product = window.PRODUCTS.find((item) => item.id === entry.id);
      if (!product) return null;
      return {
        ...product,
        quantity: entry.quantity,
        total: product.price * entry.quantity
      };
    }).filter(Boolean);
  }

  function getCartTotal() {
    return getCartDetailed().reduce((sum, item) => sum + item.total, 0);
  }

  function updateCartCount() {
    const count = getCart().reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('[data-cart-count]').forEach((el) => {
      el.textContent = String(count);
    });
  }

  function createProductCard(product) {
    return `
      <article class="product-card">
        <a class="product-thumb" href="product.html?id=${product.id}">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
        </a>
        <div class="product-body">
          <span class="badge">${product.category}</span>
          <div class="product-top">
            <div>
              <h3>${product.name}</h3>
              <p class="product-meta">${product.vendor} • ${product.location}</p>
            </div>
            <div class="product-price">${formatPrice(product.price)}</div>
          </div>
          <p class="product-description">${product.description}</p>
          <div class="card-actions">
            <a class="btn btn-ghost" href="product.html?id=${product.id}">Podrobnosti</a>
            <button class="btn btn-primary" data-add-to-cart="${product.id}">Dodaj</button>
          </div>
        </div>
      </article>
    `;
  }

  function bindAddToCart(root) {
    root.querySelectorAll('[data-add-to-cart]').forEach((button) => {
      button.addEventListener('click', function () {
        addToCart(button.getAttribute('data-add-to-cart'));
      });
    });
  }

  const featuredTarget = document.querySelector('[data-featured-products]');
  if (featuredTarget) {
    const featured = window.PRODUCTS.filter((item) => item.featured).slice(0, 3);
    featuredTarget.innerHTML = featured.map(createProductCard).join('');
    bindAddToCart(featuredTarget);
  }

  window.HalozeStore = {
    formatPrice,
    getCart,
    setCart,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartDetailed,
    getCartTotal,
    updateCartCount,
    createProductCard,
    bindAddToCart
  };

  updateCartCount();
})();
