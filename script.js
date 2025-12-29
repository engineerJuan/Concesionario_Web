const carsData = [
    {
        id: 1, brand: "Lamborghini", model: "Urus Performance", year: 2023, price: "6.8", priceUnit: "MDP", kilometers: "5,000", exteriorColor: "Azul", interiorColor: "Negro con Azul", imageBase: "lamborghiniUrus", imageExtension: ".webp", totalImages: 6,
        specs: { motor: "V8 Twin-Turbo 4.0L", potencia: "666 HP", aceleracion: "3.3s (0-100 km/h)", velocidadMax: "305 km/h", transmision: "Automática 8 velocidades", traccion: "Integral permanente", consumo: "12.7 L/100km" },
        features: ["Sistema de escape deportivo", "Modos de conducción: STRADA, SPORT, CORSA", "Suspensión neumática adaptativa", "Frenos de cerámica carbono-cerámica", "Sistema de sonido Bang & Olufsen", "Pantalla táctil 10.1''", "Asientos deportivos con calefacción"]
    },
    {
        id: 2, brand: "Lamborghini", model: "STO", year: 2023, price: "13.5", priceUnit: "MDP", kilometers: "1,600", exteriorColor: "Azul", interiorColor: "Amarillo", imageBase: "lamborghiniSto", imageExtension: ".webp", totalImages: 6,
        specs: { motor: "V10 Atmosférico 5.2L", potencia: "640 HP", aceleracion: "3.0s", velocidadMax: "310 km/h", transmision: "Automática 7 vel", traccion: "Trasera", peso: "1,339 kg" },
        features: ["Paquete competición", "Aerodinámica activa", "Frenos competición", "Chasis carbono", "Modo pista", "Asientos cubo", "Telemetría"]
    },
    {
        id: 3, brand: "Lamborghini", model: "Huracán Tecnica", year: 2023, price: "9.3", priceUnit: "MDP", kilometers: "5,000", exteriorColor: "Amarillo", interiorColor: "Amarillo", imageBase: "lamborghiniHuracan", imageExtension: ".webp", totalImages: 6,
        specs: { motor: "V10 Atmosférico 5.2L", potencia: "640 HP", aceleracion: "3.2s", velocidadMax: "325 km/h", transmision: "Automática 7 vel", traccion: "Trasera", parMotor: "600 Nm" },
        features: ["Sistema LDVI", "Aerodinámica mejorada", "Suspensión magneto-reológica", "Modos conducción", "Escape deportivo", "Rines forjados", "Interior Alcántara"]
    },
    {
        id: 4, brand: "Ferrari", model: "296 GTB", year: 2024, price: "10.5", priceUnit: "MDP", kilometers: "1,500+", exteriorColor: "Azul", interiorColor: "Negro y Amarillo", imageBase: "Ferrari296Gtb", imageExtension: ".webp", totalImages: 6,
        specs: { motor: "V6 Twin-Turbo Híbrido", potencia: "830 HP", aceleracion: "2.9s", velocidadMax: "330 km/h", transmision: "Doble embrague 8 vel", potenciaElectrica: "122 kW", autonomiaElectrica: "25 km" },
        features: ["Híbrido enchufable", "Modo eléctrico puro", "Aerodinámica activa", "Frenos carbono", "Pantalla 16''", "Sonido JBL", "Asientos memoria"]
    },
    {
        id: 5, brand: "Ferrari", model: "Roma", year: 2021, price: "6.6", priceUnit: "MDP", kilometers: "7,000", exteriorColor: "Gris", interiorColor: "Rojo", imageBase: "FerrariRoma", imageExtension: ".webp", totalImages: 6,
        specs: { motor: "V8 Twin-Turbo 3.9L", potencia: "620 HP", aceleracion: "3.4s", velocidadMax: "320 km/h", transmision: "Doble embrague 8 vel", traccion: "Trasera", consumo: "10.4 L/100km" },
        features: ["Diseño GT", "Pantalla 16''", "Sonido premium", "Asientos eléctricos", "Climatizador", "Control crucero", "Cámara reversa"]
    },
    {
        id: 6, brand: "Porsche", model: "GT3 RS", year: 2025, price: "8.5", priceUnit: "MDP", kilometers: "700", exteriorColor: "Rojo carbono", interiorColor: "Negro y Rojo", imageBase: "PorscheGt3Rs", imageExtension: ".webp", totalImages: 6,
        specs: { motor: "Flat-6 Atmosférico 4.0L", potencia: "525 HP", aceleracion: "3.2s", velocidadMax: "296 km/h", transmision: "PDK 7 vel", traccion: "Trasera", rpmMax: "9,000" },
        features: ["Paquete Weissach", "Suspensión doble horquilla", "Frenos PCCB", "Rines magnesio", "Asientos carbono", "Jaula seguridad", "Telemetría"]
    },
    {
        id: 7, brand: "McLaren", model: "765LT", year: 2021, price: "11.2", priceUnit: "MDP", kilometers: "1,300+", exteriorColor: "Gris carbono", interiorColor: "Negro Naranja", imageBase: "Mclaren765lt", imageExtension: ".webp", totalImages: 6,
        specs: { motor: "V8 Twin-Turbo 4.0L", potencia: "765 HP", aceleracion: "2.8s", velocidadMax: "330 km/h", transmision: "Doble embrague 7 vel", traccion: "Trasera", parMotor: "800 Nm" },
        features: ["Paquete Longtail", "Aerodinámica", "Escape titanio", "Frenos cerámica", "Chasis monocasco", "Suspensión hidráulica", "Modos conducción"]
    },
    {
        id: 8, brand: "Rolls-Royce", model: "Cullinan", year: 2023, price: "12.9", priceUnit: "MDP", kilometers: "308", exteriorColor: "Blanco", interiorColor: "Blanco Morado", imageBase: "RollsRoyceCullinan", imageExtension: ".webp", totalImages: 6,
        specs: { motor: "V12 Twin-Turbo 6.75L", potencia: "571 HP", aceleracion: "5.2s", velocidadMax: "250 km/h", transmision: "Automática 8 vel", traccion: "Integral", consumo: "15.0 L/100km" },
        features: ["Techo Starlight", "Suspensión Magic Carpet", "Sonido Bespoke", "Asientos masaje", "Madera veneciana", "Pantallas traseras", "Clima 4 zonas"]
    },
    {
        id: 9, brand: "Mercedes-Benz", model: "AMG GTR", year: 2021, price: "3.9", priceUnit: "MDP", kilometers: "2,500", exteriorColor: "Gris carbono", interiorColor: "Negro", imageBase: "MercedesBenzGtr", imageExtension: ".webp", totalImages: 6,
        specs: { motor: "V8 Biturbo 4.0L", potencia: "585 HP", aceleracion: "3.6s", velocidadMax: "318 km/h", transmision: "Automática 7 vel", traccion: "Trasera", parMotor: "700 Nm" },
        features: ["Paquete AMG Performance", "Aerodinámica activa", "Suspensión AMG RIDE", "Frenos cerámicos", "Rines forjados", "Cuero Nappa", "Sonido Burmester"]
    }
];

const carsGrid = document.getElementById('cars-grid');
const brandFilter = document.getElementById('brand-filter');
const priceFilter = document.getElementById('price-filter');
const sortFilter = document.getElementById('sort-filter');
const modal = document.getElementById('car-modal');
const closeModalBtns = document.querySelectorAll('.close-modal');
const NUMERO_DIRECTO = "525539735554";
const lightbox = document.getElementById('fullscreen-lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const btnZoomToggle = document.getElementById('btn-zoom-toggle');
const closeLightbox = document.querySelector('.close-lightbox');

document.addEventListener('DOMContentLoaded', () => {
    if (carsGrid) {
        renderCars(carsData);
        brandFilter.addEventListener('change', filterCars);
        priceFilter.addEventListener('change', filterCars);
        sortFilter.addEventListener('change', filterCars);
    }
    setupSmoothScroll();
    setupContactForm();
    setupNewsletter();
    setupLightboxEvents();
    setupMobileMenu();
});

function setupLightboxEvents() {
    const mainImg = document.getElementById('modal-main-img');
    if (mainImg) {
        mainImg.addEventListener('click', () => {
            openLightbox(mainImg.src);
        });
    }

    if (closeLightbox) closeLightbox.addEventListener('click', closeLightboxFunc);
    if (btnZoomToggle) btnZoomToggle.addEventListener('click', toggleLightboxZoom);

    if (lightboxImg) {
        lightboxImg.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleLightboxZoom(e);
        });
        lightboxImg.addEventListener('mousemove', (e) => requestAnimationFrame(() => handleZoomMove(e)));
        lightboxImg.addEventListener('touchmove', (e) => {
            e.preventDefault();
            requestAnimationFrame(() => handleZoomMove(e));
        }, { passive: false });
        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightboxFunc();
        });
    }
}

function openLightbox(src) {
    if (!lightbox) return;
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
    requestAnimationFrame(() => { lightbox.classList.add('active'); });
    document.body.style.overflow = 'hidden';
}

function closeLightboxFunc() {
    lightbox.classList.remove('active');
    setTimeout(() => {
        lightbox.style.display = 'none';
        lightboxImg.classList.remove('zoomed');
        lightboxImg.style.transformOrigin = 'center center';
        if (btnZoomToggle) btnZoomToggle.classList.remove('active');
    }, 300);
}

function toggleLightboxZoom(e) {
    e.stopPropagation();
    lightboxImg.classList.toggle('zoomed');
    btnZoomToggle.classList.toggle('active');
    if (!lightboxImg.classList.contains('zoomed')) {
        lightboxImg.style.transformOrigin = 'center center';
    }
}

function handleZoomMove(e) {
    if (!lightboxImg.classList.contains('zoomed')) return;
    let clientX, clientY;
    if (e.type === 'touchmove' || e.type === 'touchstart') {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
    } else {
        clientX = e.clientX;
        clientY = e.clientY;
    }
    const rect = lightboxImg.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;
    lightboxImg.style.transformOrigin = `${xPercent}% ${yPercent}%`;
}

function renderCars(cars) {
    if (!carsGrid) return; 
    carsGrid.innerHTML = '';
    if (cars.length === 0) {
        carsGrid.innerHTML = `
            <div style="text-align:center; color:white; grid-column:1/-1; padding: 60px;">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 20px; color: var(--gold);"></i>
                <h3 style="margin-bottom: 10px;">No se encontraron vehículos</h3>
                <p style="color: var(--gray-light);">Intenta con otros filtros.</p>
            </div>
        `;
        return;
    }
    const fragment = document.createDocumentFragment();
    cars.forEach((car, index) => {
        const card = createCarCard(car);
        card.style.animationDelay = `${index * 0.05}s`;
        fragment.appendChild(card);
    });
    carsGrid.appendChild(fragment);
}

function createCarCard(car) {
    const card = document.createElement('div');
    card.className = 'car-card';
    const isNew = car.year >= 2024;
    const imagePath = `images/${car.imageBase}1${car.imageExtension}`;
    card.innerHTML = `
        ${isNew ? '<div class="car-badge">NUEVO</div>' : ''}
        <div class="car-image-container">
            <img src="${imagePath}" alt="${car.brand} ${car.model}" loading="lazy" decoding="async">
        </div>
        <div class="car-details">
            <span class="car-brand">${car.brand}</span>
            <h3>${car.model}</h3>
            <div class="car-price">$${car.price} ${car.priceUnit}</div>
            <div class="car-specs-preview">
                <span><i class="fas fa-calendar-alt"></i> ${car.year}</span>
                <span><i class="fas fa-tachometer-alt"></i> ${car.kilometers} km</span>
                <span><i class="fas fa-palette"></i> ${car.exteriorColor}</span>
            </div>
            <button class="view-details-btn" onclick="openModal(${car.id})">
                <i class="fas fa-eye"></i> Ver Detalles
            </button>
        </div>
    `;
    return card;
}

function filterCars() {
    if (!carsGrid) return; 
    const brandValue = brandFilter.value;
    const priceValue = priceFilter.value;
    const sortValue = sortFilter.value;
    let filtered = carsData.filter(car => {
        const matchBrand = brandValue === 'all' || car.brand === brandValue;
        let matchPrice = true;
        const price = parseFloat(car.price);
        if (priceValue === 'low') matchPrice = price < 5;
        else if (priceValue === 'mid') matchPrice = price >= 5 && price <= 10;
        else if (priceValue === 'high') matchPrice = price > 10;
        return matchBrand && matchPrice;
    });
    if (sortValue !== 'default') {
        filtered.sort((a, b) => {
            const priceA = parseFloat(a.price);
            const priceB = parseFloat(b.price);
            switch(sortValue) {
                case 'price-asc': return priceA - priceB;
                case 'price-desc': return priceB - priceA;
                case 'year-desc': return b.year - a.year;
                default: return 0;
            }
        });
    }
    renderCars(filtered);
}

window.openModal = function(id) {
    if (!modal) return; 
    const car = carsData.find(c => c.id === id);
    if (!car) return;
    const images = [];
    for (let i = 1; i <= car.totalImages; i++) {
        images.push(`images/${car.imageBase}${i}${car.imageExtension}`);
    }
    const mainImg = document.getElementById('modal-main-img');
    mainImg.src = images[0];
    mainImg.classList.remove('zoomed');
    mainImg.style.transformOrigin = 'center center';
    document.getElementById('modal-title').innerText = `${car.brand} ${car.model}`;
    document.getElementById('modal-price').innerText = `$${car.price} ${car.priceUnit}`;
    const specsHTML = `
        <div class="spec-item"><span>Año</span><strong>${car.year}</strong></div>
        <div class="spec-item"><span>Kilómetros</span><strong>${car.kilometers} km</strong></div>
        <div class="spec-item"><span>Exterior</span><strong>${car.exteriorColor}</strong></div>
        <div class="spec-item"><span>Interior</span><strong>${car.interiorColor}</strong></div>
        <div class="spec-item"><span>Motor</span><strong>${car.specs.motor}</strong></div>
        <div class="spec-item"><span>Potencia</span><strong>${car.specs.potencia}</strong></div>
        <div class="spec-item"><span>Aceleración</span><strong>${car.specs.aceleracion}</strong></div>
        <div class="spec-item"><span>Velocidad Máx</span><strong>${car.specs.velocidadMax}</strong></div>
    `;
    document.getElementById('modal-specs').innerHTML = specsHTML;
    document.getElementById('modal-features').innerHTML = car.features.map(f => `<li>${f}</li>`).join('');
    document.getElementById('modal-thumbnails').innerHTML = images.map((img, index) => `
        <img src="${img}" onclick="changeModalImage('${img}', this)" class="${index === 0 ? 'active' : ''}" alt="Vista previa" loading="lazy">
    `).join('');
    const whatsappBtn = document.getElementById('modal-whatsapp');
    const message = `Hola, estoy interesado en el ${car.brand} ${car.model} ${car.year} por $${car.price} ${car.priceUnit}.`;
    whatsappBtn.href = `https://wa.me/${NUMERO_DIRECTO}?text=${encodeURIComponent(message)}`;
    modal.style.display = 'block';
    if (!lightbox || lightbox.style.display === 'none') {
        document.body.style.overflow = 'hidden'; 
    }
}

window.changeModalImage = function(src, element) {
    const mainImg = document.getElementById('modal-main-img');
    mainImg.style.opacity = '0.7';
    mainImg.src = src;
    setTimeout(() => { mainImg.style.opacity = '1'; }, 100);
    mainImg.classList.remove('zoomed');
    mainImg.style.transformOrigin = 'center center';
    document.querySelectorAll('.gallery-thumbnails img').forEach(img => img.classList.remove('active'));
    element.classList.add('active');
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const target = document.querySelector('#ubicacion') || document.querySelector('#catalogo');
            if(target) target.scrollIntoView({ behavior: 'smooth' });
        });
    }
}

function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
    if (closeModalBtns) {
        closeModalBtns.forEach(btn => {
            btn.onclick = function() {
                this.closest('.modal').style.display = 'none';
                document.body.style.overflow = 'auto';
            };
        });
    }
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
}

function handleContactSubmit(e) {
    e.preventDefault();
    const form = e.target;
    if(!form.checkValidity()) {
        showNotification("Por favor completa los campos requeridos.", "error");
        return;
    }
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Procesando...';
    submitBtn.disabled = true;
    const nombre = form.querySelector('input[placeholder="Nombre Completo"]').value;
    const correo = form.querySelector('input[placeholder="Correo Electrónico"]').value;
    const telefono = form.querySelector('input[placeholder="Teléfono (10 dígitos)"]').value;
    const selectInteres = document.getElementById('car-interest');
    const autoInteres = selectInteres.options[selectInteres.selectedIndex].text;
    const mensajeUsuario = form.querySelector('textarea').value;
    const textoWhatsapp = `*Hola Global Car* 🏎️%0A%0A👤 *Nombre:* ${nombre}%0A📧 *Correo:* ${correo}%0A📱 *Tel:* ${telefono}%0A🚗 *Interés:* ${autoInteres}%0A💬 *Mensaje:* ${mensajeUsuario}`;
    setTimeout(() => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const baseUrl = isMobile ? "https://api.whatsapp.com/send" : "https://web.whatsapp.com/send";
        window.open(`${baseUrl}?phone=${NUMERO_DIRECTO}&text=${textoWhatsapp}`, '_blank');
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        form.reset();
        showNotification("¡Abriendo WhatsApp!", "success");
    }, 800);
}

function setupNewsletter() {
    const newsletterBtn = document.querySelector('.newsletter-input button');
    if (newsletterBtn) {
        newsletterBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const input = this.parentElement.querySelector('input');
            if (input.value.includes('@')) {
                showNotification("¡Gracias por suscribirte!", "success");
                input.value = '';
            } else {
                showNotification("Ingresa un correo válido", "error");
            }
        });
    }
}

function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.replace('fa-bars', 'fa-times');
                document.body.style.overflow = 'hidden';
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
                document.body.style.overflow = 'auto';
            }
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.querySelector('i').classList.replace('fa-times', 'fa-bars');
                document.body.style.overflow = 'auto';
            });
        });
    }
}

let lastScroll = 0;
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateNavbar();
            ticking = false;
        });
        ticking = true;
    }
});

function updateNavbar() {
    const header = document.getElementById('navbar');
    const currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
        header.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
        header.style.backdropFilter = 'blur(10px)';
        header.style.padding = '15px 0';
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.3)';
        if (currentScroll > lastScroll && currentScroll > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.backdropFilter = 'none';
        header.style.padding = '20px 0';
        header.style.boxShadow = 'none';
        header.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
}

function showNotification(message, type = "success") {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed; top: 90px; right: 20px; 
        background: ${type === 'success' ? '#4CAF50' : '#f44336'}; 
        color: white; padding: 15px 25px; border-radius: 8px; 
        z-index: 9999; box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        font-family: sans-serif; animation: slideIn 0.3s ease;
    `;
    notification.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check' : 'fa-exclamation'}"></i> ${message}`;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

document.addEventListener('contextmenu', e => {
    if (e.target.tagName === 'IMG') e.preventDefault();
});