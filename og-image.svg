(function () {
  const contactForm = document.getElementById('contactForm');
  const vendorForm = document.getElementById('vendorForm');
  const email = window.STORE.email;

  function openMail(subject, body) {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const formData = new FormData(contactForm);
      const body = [
        `Ime: ${formData.get('name')}`,
        `E-pošta: ${formData.get('email')}`,
        '',
        `${formData.get('message')}`
      ].join('\n');

      openMail(String(formData.get('subject')), body);
    });
  }

  if (vendorForm) {
    vendorForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const formData = new FormData(vendorForm);
      const subject = `Prijava ponudnika: ${formData.get('vendorName')}`;
      const body = [
        `Ime ponudnika: ${formData.get('vendorName')}`,
        `Kontaktna oseba: ${formData.get('contactPerson')}`,
        `E-pošta: ${formData.get('email')}`,
        `Telefon: ${formData.get('phone')}`,
        '',
        'Opis ponudbe:',
        `${formData.get('offer')}`
      ].join('\n');

      openMail(subject, body);
    });
  }
})();
