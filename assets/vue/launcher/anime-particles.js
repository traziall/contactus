export class EffectParticle {
    constructor(el, options = {}) {
        this.container = el;
        this.particles = [];
        // Configuración por defecto
        this.config = {
            maxParticles: options.maxParticles || 15,
            duration: options.duration || 1500, // Tiempo de vida
            interval: options.interval || 300,  // Frecuencia de creación
            direction: options.direction || 'bottom-top',
            sizes: options.sizes || ['xs', 'sm', 'md', 'lg'],
            colors: options.colors || ['#ffffff'], // Puede ser un array de colores
            ...options
        };

        this.timer = null;
        this.init();
    }

    init() {
        this.timer = setInterval(() => {
            if (this.particles.length < this.config.maxParticles) {
                this.create();
            }
        }, this.config.interval);
    }

    create() {
        const p = document.createElement('span');
        const sizeClass = this.config.sizes[Math.floor(Math.random() * this.config.sizes.length)];
        p.className = `particle-${sizeClass}`;

        // Estilo inicial aleatorio
        const color = this.config.colors[Math.floor(Math.random() * this.config.colors.length)];
        p.style.backgroundColor = color;
        p.style.boxShadow = `0 0 8px ${color}`;
        p.style.position = 'absolute';

        // Determinar coordenadas iniciales según dirección
        this._setInitialPosition(p);

        this.container.appendChild(p);
        this.particles.push(p);

        this.animate(p);
    }

    _setInitialPosition(p) {
        const dir = this.config.direction;
        if (dir === 'bottom-top') {
            p.style.bottom = '-10px';
            p.style.left = Math.random() * 100 + '%';
        } else if (dir === 'top-bottom') {
            p.style.top = '-10px';
            p.style.left = Math.random() * 100 + '%';
        } else if (dir === 'left-right') {
            p.style.left = '-10px';
            p.style.top = Math.random() * 100 + '%';
        } else if (dir === 'right-left') {
            p.style.right = '-10px';
            p.style.top = Math.random() * 100 + '%';
        }
    }

    animate(p) {
        const dir = this.config.direction;
        const movement = {
            translateY: dir === 'bottom-top' ? [0, -150] : (dir === 'top-bottom' ? [0, 150] : 0),
            translateX: dir === 'left-right' ? [0, 150] : (dir === 'right-left' ? [0, -150] : (Math.random() - 0.5) * 50)
        };

        anime({
            targets: p,
            ...movement,
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0],
            easing: 'easeOutSine',
            duration: this.config.duration,
            complete: () => {
                p.remove();
                this.particles = this.particles.filter(item => item !== p);
            }
        });
    }

    destroy() {
        clearInterval(this.timer);
        this.particles.forEach(p => p.remove());
    }
}