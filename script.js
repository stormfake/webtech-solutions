// Inicializar iconos de Lucide
lucide.createIcons();

// Manejo del formulario de cotización
document.getElementById('quoteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener valores del formulario
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;
    
    // Crear mensaje para WhatsApp
    const text = `*WEBTECH SOLUTIONS*%0A` +
                 `Hola, mi nombre es ${name}.%0A` +
                 `*Teléfono:* ${phone}%0A` +
                 `*Servicio:* ${service}%0A` +
                 `*Detalle:* ${message}`;
    
    // Abrir WhatsApp con el mensaje
    window.open(`https://wa.me/51931359332?text=${text}`, '_blank');
    
    // Opcional: Limpiar el formulario después de enviar
    this.reset();
});

// Scroll suave para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Opcional: Animación al hacer scroll (entrada de elementos)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';
            entry.target.style.transition = 'all 0.6s ease-out';
            
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
        }
    });
}, observerOptions);

// Observar las tarjetas de servicios y zonas
document.querySelectorAll('.service-card, .zone-card').forEach(el => {
    observer.observe(el);
});

// Validación adicional del formulario (opcional)
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', function(e) {
    // Solo permitir números
    this.value = this.value.replace(/[^0-9]/g, '');
    
    // Limitar a 9 dígitos (formato peruano)
    if (this.value.length > 9) {
        this.value = this.value.slice(0, 9);
    }
});

// Mostrar mensaje de confirmación (opcional)
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#25D366' : '#ef4444'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 9999;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Agregar estilos para las animaciones de notificación
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

console.log('✅ WEBTECH SOLUTIONS - JavaScript cargado correctamente');