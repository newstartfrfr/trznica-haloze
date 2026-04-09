:root {
  --bg: #f7f5ef;
  --surface: #ffffff;
  --surface-soft: #f0ebe0;
  --text: #183027;
  --muted: #5a6b64;
  --primary: #204f3d;
  --primary-dark: #16382b;
  --accent: #c78a2a;
  --border: #dfd7c7;
  --shadow: 0 20px 50px rgba(16, 34, 27, 0.08);
  --radius: 22px;
  --container: 1180px;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: 'Inter', system-ui, sans-serif;
  color: var(--text);
  background: linear-gradient(180deg, #fbfaf7 0%, var(--bg) 100%);
}
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
button, input, select, textarea { font: inherit; }

.container {
  width: min(calc(100% - 2rem), var(--container));
  margin-inline: auto;
}
.narrow { width: min(calc(100% - 2rem), 760px); margin-inline: auto; }

.site-header {
  position: sticky;
  top: 0;
  z-index: 30;
  backdrop-filter: blur(14px);
  background: rgba(251, 250, 247, 0.92);
  border-bottom: 1px solid rgba(223, 215, 199, 0.8);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: 78px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 800;
  letter-spacing: -0.02em;
}
.brand img { width: 44px; height: 44px; }
.brand-footer img { width: 38px; height: 38px; }

.site-nav {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.site-nav a {
  color: var(--muted);
  font-weight: 600;
}
.site-nav a.active,
.site-nav a:hover { color: var(--primary); }
.nav-toggle {
  display: none;
  border: 1px solid var(--border);
  background: var(--surface);
  border-radius: 14px;
  padding: 0.6rem 0.8rem;
}

.cart-link span {
  display: inline-grid;
  place-items: center;
  min-width: 1.4rem;
  height: 1.4rem;
  margin-left: 0.35rem;
  padding-inline: 0.35rem;
  background: var(--primary);
  color: #fff;
  border-radius: 999px;
  font-size: 0.76rem;
}

.hero, .page-hero {
  padding: 4.5rem 0 2rem;
}
.page-hero.small { padding: 3.5rem 0 1rem; }
.hero-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
}
.hero h1,
.page-hero h1 {
  font-size: clamp(2.4rem, 5vw, 4.5rem);
  line-height: 1.02;
  letter-spacing: -0.05em;
  margin: 0 0 1rem;
}
.lead {
  font-size: 1.1rem;
  line-height: 1.75;
  color: var(--muted);
  margin: 0 0 1.5rem;
}
.eyebrow {
  display: inline-block;
  padding: 0.5rem 0.85rem;
  margin: 0 0 1rem;
  border-radius: 999px;
  background: #eef3ef;
  color: var(--primary);
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.02em;
}
.hero-card,
.card,
.feature-card,
.product-card,
.cta-panel {
  background: var(--surface);
  border: 1px solid rgba(223, 215, 199, 0.9);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}
.hero-card { padding: 1.25rem; }
.hero-points {
  display: grid;
  gap: 0.7rem;
  padding: 0;
  margin: 1.5rem 0 0;
  list-style: none;
  color: var(--text);
  font-weight: 600;
}
.hero-points li::before,
.check-list li::before {
  content: '•';
  color: var(--accent);
  font-weight: 900;
  margin-right: 0.65rem;
}
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 0.9rem 1.2rem;
  border-radius: 999px;
  border: 0;
  cursor: pointer;
  font-weight: 700;
  transition: transform 0.2s ease, background 0.2s ease;
}
.btn:hover { transform: translateY(-1px); }
.btn-primary {
  background: var(--primary);
  color: white;
}
.btn-primary:hover { background: var(--primary-dark); }
.btn-secondary {
  background: var(--surface-soft);
  color: var(--text);
}
.btn-ghost {
  background: transparent;
  color: var(--primary);
  border: 1px solid var(--border);
}

.section { padding: 2rem 0 4rem; }
.alt-section { background: rgba(255,255,255,0.45); }
.section-head {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.section-head h2,
.prose-block h2,
.card h2 { margin: 0; font-size: clamp(1.8rem, 4vw, 2.8rem); letter-spacing: -0.04em; }
.text-link {
  color: var(--primary);
  font-weight: 700;
}

.feature-grid,
.product-grid,
.footer-grid,
.form-grid,
.checkout-grid,
.info-grid {
  display: grid;
  gap: 1.25rem;
}
.feature-grid,
.info-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.product-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.footer-grid { grid-template-columns: 1.3fr 0.7fr 0.9fr; }
.form-grid,
.checkout-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }

.feature-card,
.card { padding: 1.4rem; }
.feature-card h3,
.product-card h3 { margin-top: 0; font-size: 1.15rem; }
.feature-card p,
.card p,
.product-meta,
.product-description,
.form-note { color: var(--muted); line-height: 1.7; }

.product-card {
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.product-thumb {
  aspect-ratio: 1.2 / 1;
  background: linear-gradient(135deg, #dde9e3, #f4ead2);
  overflow: hidden;
}
.product-thumb img { width: 100%; height: 100%; object-fit: cover; }
.product-body {
  display: grid;
  gap: 0.8rem;
  padding: 1rem;
  height: 100%;
}
.product-top {
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
}
.product-price {
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--primary);
  white-space: nowrap;
}
.badge {
  display: inline-flex;
  width: fit-content;
  padding: 0.35rem 0.7rem;
  background: #f2ecdb;
  border-radius: 999px;
  color: #775210;
  font-size: 0.82rem;
  font-weight: 700;
}
.card-actions {
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
  margin-top: auto;
}

.filter-bar {
  display: grid;
  grid-template-columns: 1.6fr 0.7fr;
  gap: 1rem;
  margin-bottom: 1rem;
}
.filter-bar input,
.filter-bar select,
.stack-form input,
.stack-form textarea {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 0.95rem 1rem;
  background: #fff;
}
.results-meta { color: var(--muted); margin-bottom: 1rem; }
.stack-form {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
}
.stack-form label {
  display: grid;
  gap: 0.45rem;
  font-weight: 600;
}
.form-note { font-size: 0.95rem; }

.cta-panel {
  padding: 1.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.site-footer {
  padding: 2.2rem 0;
  border-top: 1px solid rgba(223, 215, 199, 0.8);
  background: rgba(255,255,255,0.6);
}
.site-footer h3 { margin-top: 0; }
.site-footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.6rem;
  color: var(--muted);
}
.site-footer p { color: var(--muted); }

.prose-block {
  max-width: 860px;
  margin-inline: auto;
}
.check-list {
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
  display: grid;
  gap: 0.75rem;
  font-weight: 600;
}

.product-single {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr 1fr;
  align-items: start;
}
.product-single .product-thumb {
  aspect-ratio: 1 / 0.85;
  border-radius: var(--radius);
}
.product-single-content {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 1.5rem;
}
.inline-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: var(--muted);
}

.cart-list {
  display: grid;
  gap: 0.9rem;
}
.cart-item {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.75rem;
  padding: 1rem;
  border: 1px solid var(--border);
  border-radius: 18px;
}
.cart-item h3 {
  margin: 0 0 0.35rem;
  font-size: 1rem;
}
.cart-item p { margin: 0.1rem 0; color: var(--muted); }
.cart-summary {
  margin-top: 1.2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
}
.empty-state {
  padding: 1.3rem;
  border: 1px dashed var(--border);
  border-radius: 18px;
  color: var(--muted);
}

@media (max-width: 960px) {
  .hero-grid,
  .product-single,
  .feature-grid,
  .product-grid,
  .footer-grid,
  .form-grid,
  .checkout-grid,
  .info-grid,
  .filter-bar {
    grid-template-columns: 1fr;
  }

  .cta-panel,
  .section-head {
    align-items: start;
    flex-direction: column;
  }
}

@media (max-width: 780px) {
  .nav-toggle { display: inline-flex; }
  .site-nav {
    position: absolute;
    top: 78px;
    left: 0;
    right: 0;
    display: none;
    flex-direction: column;
    align-items: start;
    gap: 0.85rem;
    padding: 1rem;
    background: rgba(251, 250, 247, 0.98);
    border-bottom: 1px solid var(--border);
  }
  .site-nav.open { display: flex; }
  .hero h1, .page-hero h1 { font-size: clamp(2rem, 10vw, 3rem); }
}
