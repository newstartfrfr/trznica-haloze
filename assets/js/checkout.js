(function () {
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  const checkoutForm = document.getElementById('checkoutForm');
  if (!cartItems || !cartTotal || !checkoutForm) return;

  function renderCart() {
    const items = window.HalozeStore.getCartDetailed();

    if (!items.length) {
      cartItems.innerHTML = '<div class="empty-state">Košarica je prazna. <a class="text-link" href="shop.html">Nazaj v trgovino</a></div>';
      cartTotal.textContent = window.HalozeStore.formatPrice(0);
      return;
    }

    cartItems.innerHTML = items.map((item) => `
      <div class="cart-item">
        <div>
          <h3>${item.name}</h3>
          <p>${item.vendor} • ${item.location}</p>
          <p>${item.quantity} × ${window.HalozeStore.formatPrice(item.price)}</p>
        </div>
        <div class="card-actions">
          <button class="btn btn-ghost" data-qty="minus" data-id="${item.id}">−</button>
          <button class="btn btn-ghost" data-qty="plus" data-id="${item.id}">+</button>
          <button class="btn btn-secondary" data-remove="${item.id}">Odstrani</button>
        </div>
      </div>
    `).join('');

    cartTotal.textContent = window.HalozeStore.formatPrice(window.HalozeStore.getCartTotal());

    cartItems.querySelectorAll('[data-qty]').forEach((button) => {
      button.addEventListener('click', function () {
        const delta = button.getAttribute('data-qty') === 'plus' ? 1 : -1;
        window.HalozeStore.updateQuantity(button.getAttribute('data-id'), delta);
        renderCart();
      });
    });

    cartItems.querySelectorAll('[data-remove]').forEach((button) => {
      button.addEventListener('click', function () {
        window.HalozeStore.removeFromCart(button.getAttribute('data-remove'));
        renderCart();
      });
    });
  }

  checkoutForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const items = window.HalozeStore.getCartDetailed();
    if (!items.length) {
      alert('Košarica je prazna.');
      return;
    }

    const formData = new FormData(checkoutForm);
    const bodyLines = [
      'Pozdravljeni,',
      '',
      'pošiljam povpraševanje za naslednje artikle:',
      '',
      ...items.map((item) => `- ${item.name} | količina: ${item.quantity} | skupaj: ${window.HalozeStore.formatPrice(item.total)}`),
      '',
      `Skupna ocenjena vrednost: ${window.HalozeStore.formatPrice(window.HalozeStore.getCartTotal())}`,
      '',
      `Ime: ${formData.get('name')}`,
      `E-pošta: ${formData.get('email')}`,
      `Telefon: ${formData.get('phone')}`,
      '',
      'Dodatne želje:',
      `${formData.get('message') || ''}`
    ];

    const subject = 'Povpraševanje iz Digitalne tržnice Haloze';
    window.location.href = `mailto:${window.STORE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
  });

  renderCart();
})();
