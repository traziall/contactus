// interactHelper.js
export const interactHelper = {
    move(target, options = {}) {
        const {
            handles = null,
            inertia = false,
            restrict = null,
            onStart = null,
            onMove = null,
            onEnd = null
        } = options;

        // --------------------------------------
        // Normalizar handles a un selector válido
        // --------------------------------------
        const getHandleSelector = (handles) => {
            if (!handles) return target; // fallback: el target entero

            // Si es un nodo DOM
            if (handles instanceof HTMLElement) {
                return handles;
            }

            // Si es un array de nodos DOM
            if (Array.isArray(handles) && handles.every(h => h instanceof HTMLElement)) {
                return handles;
            }

            // Si es string
            if (typeof handles === "string") {
                return handles;
            }

            console.warn("⚠️ 'handles' no es válido:", handles);
            return target;
        };

        const selector = getHandleSelector(handles);

        // --------------------------------------
        // Inicializar draggable
        // --------------------------------------
        interact(selector).draggable({
            inertia,

            listeners: {
                start(event) {
                    if (onStart) onStart(event);
                },

                move(event) {
                    const el = target;

                    const prevX = parseFloat(el.getAttribute('data-x')) || 0;
                    const prevY = parseFloat(el.getAttribute('data-y')) || 0;

                    const x = prevX + event.dx;
                    const y = prevY + event.dy;

                    el.style.transform = `translate(${x}px, ${y}px)`;
                    el.setAttribute('data-x', x);
                    el.setAttribute('data-y', y);

                    if (onMove) onMove({ x, y, event });
                },

                end(event) {
                    if (onEnd) onEnd(event);
                }
            },

            modifiers: restrict
                ? [
                    interact.modifiers.restrictRect({
                        restriction:
                            restrict === "parent"
                                ? "parent"
                                : restrict === "window"
                                    ? "self"
                                    : restrict,
                        endOnly: true
                    })
                ]
                : []
        });
    }
};
