export class EffectParticle {
    constructor(el, options = {}) {
        this.container = el;
        this.particles = [];
        this.config = {
            maxParticles: options.maxParticles || 15,
            duration: options.duration || 1500,
            interval: options.interval || 300,
            direction: options.direction || 'bottom-top',
            sizes: options.sizes || [4, 8, 12],
            colors: options.colors || ['#ffffff'],
            life: options.life !== undefined ? options.life : 100, // 0 a 100
            ...options
        };

        this.timer = null;
        this.init();
    }

    init() {
        if (getComputedStyle(this.container).position === 'static') {
            this.container.style.position = 'relative';
        }
        this.container.style.overflow = 'hidden';

        this.timer = setInterval(() => {
            if (this.particles.length < this.config.maxParticles) {
                this.create();
            }
        }, this.config.interval);
    }

    create() {
        const p = document.createElement('span');
        const size = this.config.sizes[Math.floor(Math.random() * this.config.sizes.length)];
        const color = this.config.colors[Math.floor(Math.random() * this.config.colors.length)];

        Object.assign(p.style, {
            position: 'absolute',
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: color,
            borderRadius: '50%',
            boxShadow: `0 0 8px ${color}`,
            pointerEvents: 'none',
            opacity: 0
        });

        this._setInitialPosition(p);
        this.container.appendChild(p);
        this.particles.push(p);
        this.animate(p);
    }

    _setInitialPosition(p) {
        const dir = this.config.direction;
        const reset = { top: 'auto', bottom: 'auto', left: 'auto', right: 'auto' };
        Object.assign(p.style, reset);

        if (dir === 'bottom-top') {
            p.style.bottom = '-15px';
            p.style.left = Math.random() * 100 + '%';
        } else if (dir === 'top-bottom') {
            p.style.top = '-15px';
            p.style.left = Math.random() * 100 + '%';
        } else if (dir === 'left-right') {
            p.style.left = '-15px';
            p.style.top = Math.random() * 100 + '%';
        } else if (dir === 'right-left') {
            p.style.right = '-15px';
            p.style.top = Math.random() * 100 + '%';
        }
    }

    animate(p) {
        const { direction, life, duration } = this.config;
        const lifeFactor = life / 100;
        
        // Medimos el contenedor en el momento de la animación
        const rect = this.container.getBoundingClientRect();
        
        let translateX = 0;
        let translateY = 0;

        // Determinamos el eje de movimiento principal
        const isVertical = direction === 'bottom-top' || direction === 'top-bottom';
        const isHorizontal = direction === 'left-right' || direction === 'right-left';

        if (isVertical) {
            // El recorrido máximo es la altura del contenedor
            const distance = rect.height * lifeFactor;
            translateY = direction === 'bottom-top' ? -distance : distance;
            // Un poco de variación lateral para que no sea una línea recta perfecta
            translateX = (Math.random() - 0.5) * 30; 
        } 
        
        if (isHorizontal) {
            // El recorrido máximo es el ancho del contenedor
            const distance = rect.width * lifeFactor;
            translateX = direction === 'left-right' ? distance : -distance;
            // Un poco de variación vertical
            translateY = (Math.random() - 0.5) * 30;
        }

        anime({
            targets: p,
            translateX: translateX,
            translateY: translateY,
            opacity: [0, 1, 0], // El fade-out coincide con el final de su "life"
            scale: [0.5, 1, 0.3],
            easing: 'linear', // Lineal para que el progreso de "life" sea exacto al tiempo
            duration: duration,
            complete: () => {
                p.remove();
                this.particles = this.particles.filter(item => item !== p);
            }
        });
    }

    destroy() {
        clearInterval(this.timer);
        this.particles.forEach(p => p.remove());
        this.particles = [];
    }
}