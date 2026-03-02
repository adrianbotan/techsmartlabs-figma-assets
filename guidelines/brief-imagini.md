# Brief Imagini — TechSmart Labs

> Consolidat din notele proiectului "7 Siteuri + 1" (Notion).
> Surse: 1-Brief Imagini, Proces de generare a imaginilor, 1-Website Wireframe.

---

## 1. Prompt general — galerie imagini

Studio de software social care creaza aplicatii web la comanda, explicate simplu, pentru organizatii mici, ONG-uri si initiative cu impact in comunitate.

Toate imaginile trebuie sa para din **aceeasi companie** — un singur spatiu recognoscibil, aceiasi 4-6 angajati care reapar discret (din spate, profil blur, doar mainile).

---

## 2. Stil si spatiu

- Birou modern de software / studio digital social, echipe mici, colaborare prietenoasa.
- Open-space luminos, geamuri mari, oras in fundal blur, mese albe sau lemn deschis, multe plante verzi, sali de sedinta cu pereti de sticla.
- Mobilierul, birourile, scaunele si obiectele de decor trebuie sa fie **consistente** de la o imagine la alta.
- Oamenii nu au fetele clar vizibile: din spate, lateral blur, sau doar mainile in cadru.

---

## 3. Coloristica si lumina

- **Paleta**: navy / primary blue, alb, lime green si coral orange ca accente.
- **Dominant**: alb, gri foarte deschis, albastru si teal soft pe ecrane si elemente UI.
- **Accente calde**: lemn, lime green si coral/orange in detalii (post-it-uri, butoane pe ecran, obiecte mici), plus verdele plantelor.
- **Atmosfera**: calda, empatica.
- **Lumina**: naturala de zi, soft si difuza, fara umbre dure. Evita lumina rece, clinica.

---

## 4. Cadre si lentile

| Tip | Focal | Folosire |
|-----|-------|----------|
| Cadre largi | 24–35mm | Overview de open-space si sali de sedinta |
| Cadre medii | 35–50mm | Colturi de birou, workstation-uri, grupuri mici la masa |
| Close-up | 50–85mm | Maini pe tastatura, documente, tablete, detalii de ecran cu interfete clare |

- Adancime de camp mica cand apar oameni, pentru a pastra spatiul si fetele soft.

---

## 5. Varietate

Pastreaza acelasi spatiu, mobilier si echipa, dar variaza:
- Unghiul camerei (frontal, 3/4, de sus, dinspre fereastra)
- Distanta (wide pentru overview, medium pentru colt de birou, close pentru detalii)
- Combinatiile de elemente (open-space, sala de sedinta, masa de lucru, zona cu whiteboard)

Fiecare imagine trebuie sa fie recognoscibila din acelasi univers vizual, dar sa nu para dublura a alteia.

---

## 6. Text si branding in imagini — DON'Ts

- **Nu** afisa niciun logo sau nume de companie lizibil pe pereti, monitoare, haine sau obiecte.
- **Evita** texte lungi sau clar citibile in UI; daca apar, sa fie doar elemente abstracte / blur, fara cuvinte reale recognoscibile.
- **Fara** texte tip slogan pe tricouri, cani, postere sau alte obiecte.

---

## 7. Pipeline de generare (6 noduri)

### 7.1 Light-style node
Capturare ghid fotografic coerent: mood keywords, temperatura de culoare, curba de contrast, highlight tone, shadow lift, lumina preferata (soft morning, warm golden, cool overcast). Camera settings: focal lengths, aperture, inaltime si unghiuri tipice. Output: set de referinta + LUT normalizat pentru consistenta.

### 7.2 Office-style node
Identitate fizica a spatiului: mobilier, materiale, texturi, finisaje, plante, props. Paleta de brand reflectata in textile si accente. Interdictii: fara logo-uri vizibile, fara ecrane citibile, fara documente cu informatii lizibile. Output: template-uri de scena + lista de props.

### 7.3 Office-collage node (fara caractere)
Interioare si close-up-uri fara oameni: spatiu, obiecte, detalii. Se foloseste LUT-ul si template-urile de birou. Wide shots, midshots, macro details — workstation-uri, meeting corners, lounge areas, accente de culoare. Electronice fara brand marks, text out of focus. Output: set de imagini care stabilesc scenografia.

### 7.4 Character-collage node
Caractere anonimizate consistente cu referintele de likeness. Varsta: 20-40 ani, est-europeni, imbracaminte profesionala, prezentare echilibrata de gen. Fete partial obscurate prin unghi, umbra sau blur. Subiecti in planuri secundare sau la distanta. Output: colectie de pose, hand shots, silhouette/over-the-shoulder assets.

### 7.5 Composite-setup node (oameni + spatii)
Combinare scene + ghid lumina + caractere anonimizate = imagini editoriale finale. Full-room overviews cu oameni in distanta, midshots cu caractere blurred, close-ups pe maini si interactiuni. Reguli GDPR-friendly: oameni in planuri secundare, focus pe obiecte, informatii blur, fara branding pe electronice. Output: setul cel mai mare de imagini finale.

### 7.6 Consistenta si alocare
- **100 imagini finale** total
- Distributie: referinte de lumina/culoare, colaje doar birou, caractere anonimizate, scene compozite
- Acelasi LUT si curba de contrast filmic aplicata peste tot
- Numar mic de fixed random seeds pentru look coerent cu variatie controlata

---

## 8. Setari tehnice de generare

- Aspect ratios consistente: wide hero ratio + patrat/portret pentru thumbnails
- Camera height presets fixe
- Reguli de depth-of-field controlat (oameni in background, soft out of focus)
- Variation strength low-to-medium pentru likeness
- Post-procesare automata: blur de-identificare fete, mascare logo-uri, threshold legibilitate text

---

## 9. Specificatii imagini per sectiune (din wireframe)

### Logo
| Path | Format | Scop | Brief |
|------|--------|------|-------|
| assets/images/logo/01.svg | SVG | Logo principal header | Branding modern IT, merge pe light si dark |
| assets/images/logo/02.svg | SVG | Logo secundar pagini interioare | Versiune alternativa |

### Banner / Hero
| Path | Format | Scop | Brief |
|------|--------|------|-------|
| assets/images/banner/03.png | PNG 280x54 | Element decorativ hero | Grafic decorativ, fundal transparent |

### About
| Path | Format | Scop | Brief |
|------|--------|------|-------|
| assets/images/about/01.webp | WebP | About section — stanga | Echipa IT profesionala, workspace modern |
| assets/images/about/02.webp | WebP | About section — dreapta | Profesionisti IT colaborand, setting business |
| assets/images/about/03.webp | WebP | About Company — thumbnail 1 | Echipa lucrand impreuna, birou modern |
| assets/images/about/04.webp | WebP | About Company — thumbnail 2 | Meeting sau colaborare, workspace tech |
| assets/images/about/05.webp | WebP | About breadcrumb hero | Hero image pagina about, tema tech & business |
| assets/images/about/07.webp | WebP | Mission section large | Misiunea companiei, inovatie |
| assets/images/about/avatar.png | PNG | Avatar testimonial client | Foto profesional client sau logo companie |

### Service Icons
| Path | Format | Scop | Brief |
|------|--------|------|-------|
| assets/images/service/01.svg | SVG | IT Consulting | Icon consultanta IT |
| assets/images/service/02.svg | SVG | Cyber Security | Icon securitate, scut |
| assets/images/service/03.svg | SVG | Software Development | Icon dev, cod/aplicatie |
| assets/images/service/04.svg | SVG | Managed IT Services | Icon servicii gestionate |
| assets/images/service/13.svg | SVG | Decoratie sectiune servicii | Shape decorativ background |

### Case Studies / Proiecte
| Path | Format | Scop | Brief |
|------|--------|------|-------|
| assets/images/case/01.webp | WebP | App Development | Showcase proiect mobile app |
| assets/images/case/02.webp | WebP | Cybersecurity | Dashboard securitate |
| assets/images/case/03.webp | WebP | Network Optimization | Infrastructura retea |
| assets/images/case/04.webp | WebP | Digital Transformation | Integrare tech in business |

### Vision / Feature
| Path | Format | Scop | Brief |
|------|--------|------|-------|
| assets/images/others/01.webp | WebP | Vision section main | Vizualizare tech de varf, inovatie |
| assets/images/others/board.webp | WebP | Vision board overlay | Element overlay, planificare strategica |

### Blog
| Path | Format | Scop | Brief |
|------|--------|------|-------|
| assets/images/blog/01.webp | WebP | Articol 1 thumbnail | Tema IT si tech, profesional |
| assets/images/blog/02.webp | WebP | Articol 2 thumbnail | Tech si business insights |
| assets/images/blog/03.webp | WebP | Articol 3 thumbnail | Solutii IT si inovatie |
| assets/images/blog/04.webp | WebP | Articol 4 thumbnail | Trenduri tech si crestere business |
| assets/images/blog/05.webp | WebP | Articol single — main | Imagine large format blog |
| assets/images/blog/06.webp | WebP | Articol single — secundar | Imagine secundara continut |

### About Icons (Valori companie + Statistici)
| Path | Format | Scop | Brief |
|------|--------|------|-------|
| assets/images/about/icons/01.svg | SVG | Inovatie | Icon forward-thinking |
| assets/images/about/icons/02.svg | SVG | Client-Centricity | Icon focus pe client |
| assets/images/about/icons/03.svg | SVG | Integritate | Icon incredere, etica |
| assets/images/about/icons/04.svg | SVG | Excelenta | Icon calitate |
| assets/images/about/icons/05.svg | SVG | Solutii Inovatoare | Icon creativitate, problem-solving |
| assets/images/about/icons/06.svg | SVG | Ani experienta | Icon counter |
| assets/images/about/icons/07.svg | SVG | Clienti | Icon counter |
| assets/images/about/icons/08.svg | SVG | Proiecte | Icon counter |

### Contact Icons
| Path | Format | Scop | Brief |
|------|--------|------|-------|
| assets/images/contact/icon/01.svg | SVG | Locatie | Icon adresa |
| assets/images/contact/icon/02.svg | SVG | Email | Icon email |
| assets/images/contact/icon/03.svg | SVG | Telefon | Icon telefon |

### Feature Icons
| Path | Format | Scop | Brief |
|------|--------|------|-------|
| assets/images/feature/01.svg | SVG | IT Consulting | Icon feature |
| assets/images/feature/02.svg | SVG | Cloud Migration | Icon cloud |
| assets/images/feature/03.svg | SVG | Cyber Security | Icon securitate |
| assets/images/feature/04.svg | SVG | Software Development | Icon dev |
| assets/images/feature/05.svg | SVG | Managed IT Services | Icon servicii |
| assets/images/feature/06.svg | SVG | IT Infrastructure | Icon infrastructura |

### Header
| Path | Format | Scop | Brief |
|------|--------|------|-------|
| assets/images/header/01.svg | SVG | Language selector flag | Icon steag limba |

---

## 10. Culori de referinta (din wireframe)

| Rol | Valoare |
|-----|---------|
| Primary | #27ae60 |
| Background light | #f8f9fa |
| Background dark | #1F1F25 |
| Background footer | rgb(240, 242, 245) |
| Text primary | #1F1F25 |
| Text secondary | #7f8c8d |
| Text light | #ffffff |

---

## 11. Tipografie

| Tip | Font | Greutati | Folosire |
|-----|------|----------|----------|
| Headings (H1-H3) | Chivo | 400, 700, 900 | Titluri pagini, sectiuni |
| Body | Noto Sans | 400, 500, 600, 700, 800 | Text body, descrieri, paragrafe |
