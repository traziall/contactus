export function effectPlay(el, options = {}) {
    const {
        color = "blue",
        duration = 1200,
        size = 120
    } = options;

    // Crear elemento
    const fx = document.createElement("div");
    fx.className = "summon-fx";
    fx.style.position = "absolute";
    fx.style.width = size + "px";
    fx.style.height = size + "px";
    fx.style.borderRadius = "50%";
    fx.style.pointerEvents = "none";
    fx.style.background = `radial-gradient(${color}, transparent 70%)`;
    fx.style.opacity = 0;

    // Posicionar dentro del contenedor
    const rect = el.getBoundingClientRect();
    const x = options.x - rect.left - size / 2;
    const y = options.y - rect.top - size / 2;

    fx.style.left = x + "px";
    fx.style.top = y + "px";

    el.appendChild(fx);

    // Animación principal
    anime({
        targets: fx,
        opacity: [0, 1, 0],
        scale: [0.2, 2.5],
        duration,
        easing: "easeOutQuad",
        complete: () => fx.remove()
    });

    // “Rayo cayendo”
    const ray = document.createElement("div");
    ray.style.position = "absolute";
    ray.style.width = "6px";
    ray.style.height = "170px";
    ray.style.background = color;
    ray.style.borderRadius = "3px";
    ray.style.left = x + size / 2 - 3 + "px";
    ray.style.top = y - 160 + "px";
    ray.style.opacity = 0;

    el.appendChild(ray);

    anime({
        targets: ray,
        translateY: 160,
        opacity: [0, 1, 0],
        duration: duration * 0.8,
        easing: "easeOutCubic",
        complete: () => ray.remove()
    });
}
