// dragHelper.js
export const dragHelper = {
    draggables: [],

    /**
     * Activa Interact.js sobre un listado de items
     * @param {Array<HTMLElement>} elements - lista de DOM refs
     * @param {Function} onStart
     * @param {Function} onMove
     * @param {Function} onDrop
     */
    enable(elements, { onStart, onMove, onDrop }) {
        // destruye cualquier instancia anterior
        this.destroy();

        elements.forEach((el) => {
            if (!el) return; // evita refs nulas

            const instance = interact(el).draggable({
                listeners: {
                    start: (event) => onStart && onStart(event, el),
                    move: (event) => {
                        const x = (parseFloat(el.getAttribute('data-x')) || 0) + event.dx;
                        const y = (parseFloat(el.getAttribute('data-y')) || 0) + event.dy;

                        el.style.transform = `translate(${x}px, ${y}px)`;
                        el.setAttribute('data-x', x);
                        el.setAttribute('data-y', y);

                        onMove && onMove({ x, y, el, event });
                    },
                    end: (event) => {
                        onDrop && onDrop(event, el);

                        // reset visual
                        el.style.transform = "translate(0,0)";
                        el.removeAttribute('data-x');
                        el.removeAttribute('data-y');
                    }
                }
            });

            this.draggables.push(instance);
        });
    },

    /**
     * Destruye todos los draggables activos
     */
    destroy() {
        this.draggables.forEach((i) => {
            try {
                if (i && typeof i.unset === "function") {
                    i.unset(); // ✔ seguro
                }
            } catch (e) {
                // Silenciar errores de interact que intenta limpiar instancias muertas
                console.warn("Interact: instancia ya destruida, saltando.");
            }
        });

        this.draggables = [];
    },

    /**
     * Verifica si el drop fue dentro de una zona específica.
     * @param {MouseEvent} event
     * @param {{ zone: string | HTMLElement }} options
     * @returns {{
     *   isInside: boolean,
     *   zoneElement: HTMLElement | null
     * }}
     */
    isInside(event, zone) {

        let zoneElements = [];

        // Resolver tipo de zona
        if (typeof zone === "string") {
            zoneElements = Array.from(document.querySelectorAll(zone));
        } else if (zone instanceof HTMLElement) {
            zoneElements = [zone];
        } else {
            return { isInside: false, zoneElement: null };
        }

        const { clientX, clientY } = event;

        // Buscar cuál zona contiene las coordenadas del drop
        for (const el of zoneElements) {
            const rect = el.getBoundingClientRect();

            const inside =
                clientX > rect.left &&
                clientX < rect.right &&
                clientY > rect.top &&
                clientY < rect.bottom;

            if (inside) {
                return {
                    isInside: true,
                    zoneElement: el
                };
            }
        }

        return {
            isInside: false,
            zoneElement: null
        };
    }
};