(function () {
  const grid = document.getElementById('shopGrid');
  const searchInput = document.getElementById('searchInput');
  const categoryFilter = document.getElementById('categoryFilter');
  const resultsCount = document.getElementById('resultsCount');

  if (!grid || !searchInput || !categoryFilter || !resultsCount) return;

  const categories = Array.from(new Set(window.PRODUCTS.map((item) => item.category)));
  categoryFilter.insertAdjacentHTML(
    'beforeend',
    categories.map((category) => `<option value="${category}">${category}</option>`).join('')
  );

  function render() {
    const query = searchInput.value.trim().toLowerCase();
    const selectedCategory = categoryFilter.value;

    const filtered = window.PRODUCTS.filter((product) => {
      const matchesQuery = [product.name, product.category, product.vendor, product.location]
        .join(' ')
        .toLowerCase()
        .includes(query);
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesQuery && matchesCategory;
    });

    resultsCount.textContent = `${filtered.length} ${filtered.length === 1 ? 'izdelek' : 'izdelkov'}`;

    if (!filtered.length) {
      grid.innerHTML = '<div class="empty-state">Ni rezultatov za izbrane filtre.</div>';
      return;
    }

    grid.innerHTML = filtered.map(window.HalozeStore.createProductCard).join('');
    window.HalozeStore.bindAddToCart(grid);
  }

  searchInput.addEventListener('input', render);
  categoryFilter.addEventListener('change', render);
  render();
})();
