(function () {
  const container = document.getElementById('productPage');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const product = window.PRODUCTS.find((item) => item.id === id);

  if (!product) {
    container.innerHTML = '<div class="empty-state">Izdelek ni bil najden. <a class="text-link" href="shop.html">Nazaj v trgovino</a></div>';
    return;
  }

  document.title = `${product.name} | Digitalna tržnica Haloze`;

  container.innerHTML = `
    <div class="product-single">
      <div class="product-thumb">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <div class="product-single-content">
        <span class="badge">${product.category}</span>
        <h1>${product.name}</h1>
        <div class="inline-meta">
          <span>${product.vendor}</span>
          <span>${product.location}</span>
          <span>${product.unit}</span>
        </div>
        <p class="lead">${product.description}</p>
        <p class="product-price">${window.HalozeStore.formatPrice(product.price)}</p>
        <div class="card-actions">
          <button class="btn btn-primary" data-add-to-cart="${product.id}">Dodaj v košarico</button>
          <a class="btn btn-secondary" href="checkout.html">Na košarico</a>
        </div>
      </div>
    </div>
  `;

  window.HalozeStore.bindAddToCart(container);
})();
