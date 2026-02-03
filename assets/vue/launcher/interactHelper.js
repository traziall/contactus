// interactHelper.js
export const interactHelper = {
    move(target, options = {}) {
        const {
            handles = null,
            inertia = false,
            restrict = null,
            onMove = null,
            onEnd = null
        } = options;

        // Selección de zonas donde agarrar
        const selector = handles
            ? (Array.isArray(handles) ? handles.join(", ") : handles)
            : target; // si no hay handles, el elemento principal sirve

        interact(selector).draggable({
            inertia: inertia,

            listeners: {
                move(event) {
                    const el = target;

                    // obtener posición actual
                    const x = (parseFloat(el.getAttribute('data-x')) || 0) + event.dx;
                    const y = (parseFloat(el.getAttribute('data-y')) || 0) + event.dy;

                    // aplicar transformación
                    el.style.transform = `translate(${x}px, ${y}px)`;

                    // guardar
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
                                    : restrict, // acepta objeto custom o selector
                        endOnly: true
                    })
                ]
                : []
        });
    }
};

