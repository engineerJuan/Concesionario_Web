const carsData = [
    {
        id: 1,
        brand: "Lamborghini",
        model: "Urus Performance",
        year: 2023,
        price: "6.8",
        priceUnit: "MDP",
        kilometers: "5,000",
        exteriorColor: "Azul",
        interiorColor: "Negro con Azul",
        imageBase: "lamborghiniUrus", 
        imageExtension: ".webp",
        totalImages: 6,
        specs: {
            motor: "V8 Twin-Turbo 4.0L",
            potencia: "666 HP",
            aceleracion: "3.3s (0-100 km/h)",
            velocidadMax: "305 km/h",
            transmision: "Automática 8 velocidades",
            traccion: "Integral permanente",
            consumo: "12.7 L/100km"
        },
        features: [
            "Sistema de escape deportivo",
            "Modos de conducción: STRADA, SPORT, CORSA",
            "Suspensión neumática adaptativa",
            "Frenos de cerámica carbono-cerámica",
            "Sistema de sonido Bang & Olufsen",
            "Pantalla táctil 10.1''",
            "Asientos deportivos con calefacción"
        ]
    },
    {
        id: 2,
        brand: "Lamborghini",
        model: "STO",
        year: 2023,
        price: "13.5",
        priceUnit: "MDP",
        kilometers: "1,600",
        exteriorColor: "Azul",
        interiorColor: "Amarillo",
        imageBase: "lamborghiniSto",
        imageExtension: ".webp",
        totalImages: 6,
        specs: {
            motor: "V10 Atmosférico 5.2L",
            potencia: "640 HP",
            aceleracion: "3.0s (0-100 km/h)",
            velocidadMax: "310 km/h",
            transmision: "Automática 7 velocidades",
            traccion: "Trasera",
            peso: "1,339 kg"
        },
        features: [
            "Paquete de competición",
            "Aerodinámica activa",
            "Sistema de frenado de competición",
            "Chasis de fibra de carbono",
            "Modo de conducción de pista",
            "Asientos de cubo de carbono",
            "Pantalla telemetría"
        ]
    },
    {
        id: 3,
        brand: "Lamborghini",
        model: "Huracán Tecnica",
        year: 2023,
        price: "9.3",
        priceUnit: "MDP",
        kilometers: "5,000",
        exteriorColor: "Amarillo",
        interiorColor: "Amarillo",
        imageBase: "lamborghiniHuracan",
        imageExtension: ".webp",
        totalImages: 6,
        specs: {
            motor: "V10 Atmosférico 5.2L",
            potencia: "640 HP",
            aceleracion: "3.2s (0-100 km/h)",
            velocidadMax: "325 km/h",
            transmision: "Automática 7 velocidades",
            traccion: "Trasera",
            parMotor: "600 Nm"
        },
        features: [
            "Sistema LDVI (Lamborghini Integrated Vehicle Dynamics)",
            "Aerodinámica mejorada",
            "Suspensión magneto-reológica",
            "Modo Strada, Sport y Corsa",
            "Sistema de escape deportivo",
            "Rines de aleación forjada",
            "Interior en Alcántara"
        ]
    },
    {
        id: 4,
        brand: "Ferrari",
        model: "296 GTB",
        year: 2024,
        price: "10.5",
        priceUnit: "MDP",
        kilometers: "1,500+",
        exteriorColor: "Azul",
        interiorColor: "Negro y Amarillo",
        imageBase: "Ferrari296Gtb",
        imageExtension: ".webp",
        totalImages: 6,
        specs: {
            motor: "V6 Twin-Turbo Híbrido 3.0L",
            potencia: "830 HP",
            aceleracion: "2.9s (0-100 km/h)",
            velocidadMax: "330 km/h",
            transmision: "Doble embrague 8 velocidades",
            potenciaElectrica: "122 kW",
            autonomiaElectrica: "25 km"
        },
        features: [
            "Sistema híbrido enchufable",
            "Modo eléctrico puro",
            "Aerodinámica activa",
            "Frenos de cerámica carbono-cerámica",
            "Pantalla digital 16''",
            "Sistema de sonido JBL",
            "Asientos deportivos con memoria"
        ]
    },
    {
        id: 5,
        brand: "Ferrari",
        model: "Roma",
        year: 2021,
        price: "6.6",
        priceUnit: "MDP",
        kilometers: "7,000",
        exteriorColor: "Gris",
        interiorColor: "Rojo",
        imageBase: "FerrariRoma",
        imageExtension: ".webp",
        totalImages: 6,
        specs: {
            motor: "V8 Twin-Turbo 3.9L",
            potencia: "620 HP",
            aceleracion: "3.4s (0-100 km/h)",
            velocidadMax: "320 km/h",
            transmision: "Doble embrague 8 velocidades",
            traccion: "Trasera",
            consumo: "10.4 L/100km"
        },
        features: [
            "Diseño Gran Turismo",
            "Pantalla digital 16''",
            "Sistema de sonido premium",
            "Asientos eléctricos con memoria",
            "Climatizador automático",
            "Control de velocidad crucero",
            "Cámara de reversa"
        ]
    },
    {
        id: 6,
        brand: "Porsche",
        model: "GT3 RS",
        year: 2025,
        price: "8.5",
        priceUnit: "MDP",
        kilometers: "700",
        exteriorColor: "Rojo con fibra de carbono",
        interiorColor: "Negro y Rojo",
        imageBase: "PorscheGt3Rs",
        imageExtension: ".webp",
        totalImages: 6,
        specs: {
            motor: "Flat-6 Atmosférico 4.0L",
            potencia: "525 HP",
            aceleracion: "3.2s (0-100 km/h)",
            velocidadMax: "296 km/h",
            transmision: "PDK 7 velocidades",
            traccion: "Trasera",
            rpmMax: "9,000"
        },
        features: [
            "Paquete aerodinámico Weissach",
            "Suspensión de doble horquilla",
            "Frenos de cerámica PCCB",
            "Rines de magnesio forjado",
            "Asientos de cubo de carbono",
            "Jaula de seguridad integrada",
            "Sistema de telemetría"
        ]
    },
    {
        id: 7,
        brand: "McLaren",
        model: "765LT",
        year: 2021,
        price: "11.2",
        priceUnit: "MDP",
        kilometers: "1,300+",
        exteriorColor: "Gris con fibra de carbono",
        interiorColor: "Negro con Naranja",
        imageBase: "Mclaren765lt",
        imageExtension: ".webp",
        totalImages: 6,
        specs: {
            motor: "V8 Twin-Turbo 4.0L",
            potencia: "765 HP",
            aceleracion: "2.8s (0-100 km/h)",
            velocidadMax: "330 km/h",
            transmision: "Doble embrague 7 velocidades",
            traccion: "Trasera",
            parMotor: "800 Nm"
        },
        features: [
            "Paquete Longtail",
            "Aerodinámica mejorada",
            "Sistema de escape de titanio",
            "Frenos de cerámica",
            "Chasis monocasco de carbono",
            "Suspensión hidráulica",
            "Modos de conducción variable"
        ]
    },
    {
        id: 8,
        brand: "Rolls-Royce",
        model: "Cullinan",
        year: 2023,
        price: "12.9",
        priceUnit: "MDP",
        kilometers: "308",
        exteriorColor: "Blanco",
        interiorColor: "Blanco con Morado",
        imageBase: "RollsRoyceCullinan",
        imageExtension: ".webp",
        totalImages: 6,
        specs: {
            motor: "V12 Twin-Turbo 6.75L",
            potencia: "571 HP",
            aceleracion: "5.2s (0-100 km/h)",
            velocidadMax: "250 km/h (limitada)",
            transmision: "Automática 8 velocidades",
            traccion: "Integral",
            consumo: "15.0 L/100km"
        },
        features: [
            "Techo Starlight",
            "Suspensión Magic Carpet Ride",
            "Sistema de sonido Bespoke Audio",
            "Asientos masajeadores",
            "Tablero en madera veneciana",
            "Pantalla de entretenimiento trasera",
            "Sistema de climatización 4 zonas"
        ]
    },
    {
        id: 9,
        brand: "Mercedes-Benz",
        model: "AMG GTR",
        year: 2021,
        price: "3.9",
        priceUnit: "MDP",
        kilometers: "2,500",
        exteriorColor: "Gris con fibra de carbono",
        interiorColor: "Negro",
        imageBase: "MercedesBenzGtr",
        imageExtension: ".webp",
        totalImages: 6,
        specs: {
            motor: "V8 Biturbo 4.0L",
            potencia: "585 HP",
            aceleracion: "3.6s (0-100 km/h)",
            velocidadMax: "318 km/h",
            transmision: "Automática 7 velocidades",
            traccion: "Trasera",
            parMotor: "700 Nm"
        },
        features: [
            "Paquete AMG Performance",
            "Aerodinámica activa",
            "Suspensión AMG RIDE CONTROL",
            "Frenos de compuesto cerámico",
            "Rines de aleación forjada",
            "Interior en cuero Nappa",
            "Sistema de sonido Burmester"
        ]
    }
];

const carsGrid = document.getElementById('cars-grid');
const brandFilter = document.getElementById('brand-filter');
const priceFilter = document.getElementById('price-filter');
const sortFilter = document.getElementById('sort-filter');
const modal = document.getElementById('car-modal');
const closeModalBtns = document.querySelectorAll('.close-modal');

document.addEventListener('DOMContentLoaded', () => {
    renderCars(carsData);
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    brandFilter.addEventListener('change', filterCars);
    priceFilter.addEventListener('change', filterCars);
    sortFilter.addEventListener('change', filterCars);
    
    document.querySelector('.scroll-indicator')?.addEventListener('click', () => {
        document.querySelector('#catalogo').scrollIntoView({ behavior: 'smooth' });
    });
    
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
    
    document.querySelector('.newsletter-input button')?.addEventListener('click', handleNewsletterSubmit);
});

function renderCars(cars) {
    carsGrid.innerHTML = '';
    
    if (cars.length === 0) {
        carsGrid.innerHTML = `
            <div class="no-results" style="text-align:center; color:white; grid-column:1/-1; padding: 60px;">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 20px; color: var(--gold);"></i>
                <h3 style="margin-bottom: 10px;">No se encontraron vehículos</h3>
                <p style="color: var(--gray-light);">Intenta con otros filtros de búsqueda.</p>
            </div>
        `;
        return;
    }

    cars.forEach((car, index) => {
        setTimeout(() => {
            const card = createCarCard(car);
            carsGrid.appendChild(card);
        }, index * 100);
    });
}

function createCarCard(car) {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.style.animationDelay = `${car.id * 0.1}s`;
    
    const isNew = car.year >= 2023;
    const imagePath = `images/${car.imageBase}1${car.imageExtension}`;
    
    card.innerHTML = `
        ${isNew ? '<div class="car-badge">NUEVO</div>' : ''}
        <div class="car-image-container">
            <img src="${imagePath}" 
                 alt="${car.brand} ${car.model}" 
                 loading="lazy">
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
                case 'year-asc': return a.year - b.year;
                default: return 0;
            }
        });
    }

    renderCars(filtered);
}

window.openModal = function(id) {
    const car = carsData.find(c => c.id === id);
    if (!car) return;

    const images = [];
    for (let i = 1; i <= car.totalImages; i++) {
        images.push(`images/${car.imageBase}${i}${car.imageExtension}`);
    }

    const mainImg = document.getElementById('modal-main-img');
    mainImg.src = images[0];    
    document.getElementById('modal-title').innerText = `${car.brand} ${car.model}`;
    document.getElementById('modal-price').innerText = `$${car.price} ${car.priceUnit}`;
    
    const specsContainer = document.getElementById('modal-specs');
    specsContainer.innerHTML = `
        <div class="spec-item"><span>Año</span><strong>${car.year}</strong></div>
        <div class="spec-item"><span>Kilómetros</span><strong>${car.kilometers} km</strong></div>
        <div class="spec-item"><span>Color Exterior</span><strong>${car.exteriorColor}</strong></div>
        <div class="spec-item"><span>Color Interior</span><strong>${car.interiorColor}</strong></div>
        <div class="spec-item"><span>Motor</span><strong>${car.specs.motor}</strong></div>
        <div class="spec-item"><span>Potencia</span><strong>${car.specs.potencia}</strong></div>
        <div class="spec-item"><span>Aceleración 0-100</span><strong>${car.specs.aceleracion}</strong></div>
        <div class="spec-item"><span>Velocidad Máxima</span><strong>${car.specs.velocidadMax}</strong></div>
    `;

    const featuresList = document.getElementById('modal-features');
    featuresList.innerHTML = car.features.map(f => `<li>${f}</li>`).join('');

    const thumbnailsContainer = document.getElementById('modal-thumbnails');
    thumbnailsContainer.innerHTML = images.map((img, index) => `
        <img src="${img}" 
             onclick="changeModalImage('${img}', this)" 
             class="${index === 0 ? 'active' : ''}"
             alt="${car.brand} ${car.model} - Vista ${index + 1}">
    `).join('');

    const whatsappBtn = document.getElementById('modal-whatsapp');
    const message = `Hola, estoy interesado en el ${car.brand} ${car.model} ${car.year} por $${car.price} ${car.priceUnit}. ¿Podrían darme más información?`;
    const whatsappUrl = `https://wa.me/5215587654321?text=${encodeURIComponent(message)}`;
    whatsappBtn.href = whatsappUrl;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

window.changeModalImage = function(src, element) {
    const mainImg = document.getElementById('modal-main-img');
    mainImg.src = src;
    
    document.querySelectorAll('.gallery-thumbnails img').forEach(img => img.classList.remove('active'));
    element.classList.add('active');
}

closeModalBtns.forEach(btn => {
    btn.onclick = function() {
        const modal = this.closest('.modal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };
});

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function handleContactSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const inputs = form.querySelectorAll('input, textarea, select');
    let isValid = true;
    
    inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#f44336';
        } else {
            input.style.borderColor = '';
        }
    });
    
    if (!isValid) {
        showNotification("Por favor completa todos los campos requeridos.", "error");
        return;
    }
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        form.reset();
        showNotification("¡Solicitud enviada con éxito! Un asesor se pondrá en contacto contigo en breve.", "success");
    }, 2000);
}

function handleNewsletterSubmit(e) {
    e.preventDefault();
    const input = this.parentElement.querySelector('input');
    const email = input.value.trim();
    
    if (!email || !validateEmail(email)) {
        showNotification("Por favor ingresa un email válido.", "error");
        return;
    }
    
    input.value = '';
    showNotification("¡Gracias por suscribirte al Newsletter Élite Motors!", "success");
}

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
            document.body.style.overflow = 'hidden';
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            document.body.style.overflow = 'auto';
        }
    });
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        document.body.style.overflow = 'auto';
    });
});

let lastScroll = 0;
window.addEventListener('scroll', () => {
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
        header.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
        header.style.backdropFilter = 'none';
        header.style.padding = '20px 0';
        header.style.boxShadow = 'none';
        header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
    
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator && currentScroll > 100) {
        scrollIndicator.style.opacity = '0';
        scrollIndicator.style.visibility = 'hidden';
    } else if (scrollIndicator) {
        scrollIndicator.style.opacity = '1';
        scrollIndicator.style.visibility = 'visible';
    }
});

function showNotification(message, type = "success") {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
    
    notification.innerHTML = `
        <i class="fas ${icon}"></i>
        <span>${message}</span>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 30px;
        right: 30px;
        background: ${type === 'success' ? 'rgba(76, 175, 80, 0.95)' : 'rgba(244, 67, 54, 0.95)'};
        color: white;
        padding: 20px 25px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        gap: 15px;
        z-index: 3000;
        box-shadow: var(--shadow);
        animation: slideInRight 0.3s ease forwards;
        max-width: 400px;
        backdrop-filter: blur(10px);
    `;
    
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOutRight {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease forwards';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG' && e.target.closest('.car-card, .modal-gallery')) {
        e.preventDefault();
        showNotification("Las imágenes están protegidas. Contáctanos para obtener más información.", "info");
    }
});