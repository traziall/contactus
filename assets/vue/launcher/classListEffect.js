export class classListEffect {

    static enterLeave(el, options = {}) {

        const {
            classEnter = [],
            classLeave = [],
            classToggle = [],
            duration = 200,
            delay = 0,
            useDisplay = true
        } = options;


        const addEnter = () => classEnter.forEach(c => el.classList.add(c));
        const removeEnter = () => classEnter.forEach(c => el.classList.remove(c));

        const addLeave = () => classLeave.forEach(c => el.classList.add(c));
        const removeLeave = () => classLeave.forEach(c => el.classList.remove(c));

        const addToggle = () => classToggle.forEach(c => el.classList.add(c));
        const removeToggle = () => classToggle.forEach(c => el.classList.remove(c));


        // 🔥 FIX: toggle suave en entrada
        const applyToggleSmooth = () => {
            return new Promise(resolve => {
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        addToggle();
                        resolve();
                    });
                });
            });
        };


        // ---------------- ENTER (mostrar) ----------------
        const enter = async () => {

            if (useDisplay) {
                removeLeave();
                el.style.display = "";
            }

            removeLeave();
            removeEnter();

            await applyToggleSmooth(); // suaviza el toggle

            const delayTimer = setTimeout(() => {
                addEnter();
            }, delay);

            const endTimer = setTimeout(() => {}, delay + duration);

            return { delayTimer, endTimer };
        };


        // ---------------- LEAVE (ocultar) ----------------
        const leave = () => {

            removeEnter(); // quitar enter antes de animar leave

            // 🟢 FIX salida
            removeToggle();

            const delayTimer = setTimeout(() => {
                addLeave();
            }, delay);

            const endTimer = setTimeout(() => {
                if (useDisplay) {
                    el.style.display = "none";
                }
                removeLeave();
            }, delay + duration);

            return { delayTimer, endTimer };
        };


        if (useDisplay) el.style.display = "none";

        return { enter, leave, el };
    }
}
