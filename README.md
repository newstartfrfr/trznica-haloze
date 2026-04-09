[README.md](https://github.com/user-attachments/files/26613993/README.md)
# Digitalna tržnica Haloze – statična HTML verzija

To je preprosta statična spletna trgovina za GitHub Pages.

## Kaj vsebuje
- večstranski HTML website
- responsive dizajn
- katalog izdelkov
- detail stran izdelka
- lokalna košarica z localStorage
- checkout prek e-poštnega povpraševanja
- kontakt in prijava ponudnika prek mailto

## Datoteke, ki jih najprej spremeni
- `assets/js/data.js` → zamenjaj demo izdelke in kontaktni email
- `contact.html` → preveri kontaktne podatke
- `robots.txt` in `sitemap.xml` → zamenjaj `https://example.com` s svojo domeno

## GitHub Pages objava
1. razzipaj mapo
2. vse datoteke vrzi v root svojega GitHub repoja
3. na GitHubu odpri repo → Settings → Pages
4. Source nastavi na `Deploy from a branch`
5. izberi branch `main` in mapo `/root`
6. shrani

Ko GitHub Pages objavi stran, zamenjaj še URL v `robots.txt` in `sitemap.xml`.

## Opomba
Ta verzija je namenoma statična. Plačilo ni integrirano. Košarica pripravi osnutek e-pošte s povpraševanjem.
