export class DropdownHelper {
    constructor(selector, options = {}) {
        this.containers = document.querySelectorAll(selector);
        if (!this.containers.length) return;

        this.options = {
            toggleClass: 'is-active',
            closeOthers: true,
            onFocus: true, // Si es true, no se cierra al hacer clic dentro del menú
            onOpen: () => {},
            onClose: () => {},
            ...options
        };

        this.init();
    }

    init() {
        document.addEventListener('click', (e) => this._handleOutsideClick(e));

        this.containers.forEach((container) => {
            const trigger = container.querySelector('[data-toggle="dropdown"]');
            const menu = container.querySelector('.dropdown-menu');

            if (!menu || !trigger) return;

            // Evento en el disparador
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.toggle(container, menu);
            });

            // Nueva lógica onFocus para el contenedor del menú
            menu.addEventListener('click', (e) => {
                if (!this.options.onFocus) {
                    // Si onFocus es false, cerramos con un ligero delay
                    setTimeout(() => {
                        this.close(container, menu);
                    }, 50);
                } else {
                    // Si onFocus es true, evitamos que el click se propague al document
                    e.stopPropagation();
                }
            });
        });
    }

    toggle(container, menu) {
        const isOpen = menu.classList.contains(this.options.toggleClass);
        if (this.options.closeOthers && !isOpen) {
            this.closeAll();
        }

        isOpen ? this.close(container, menu) : this.open(container, menu);
    }

    open(container, menu) {
        menu.classList.add(this.options.toggleClass);
        container.setAttribute('aria-expanded', 'true');
        this.options.onOpen(container);
    }

    close(container, menu) {
        menu.classList.remove(this.options.toggleClass);
        container.setAttribute('aria-expanded', 'false');
        this.options.onClose(container);
    }

    closeAll() {
        this.containers.forEach(container => {
            const menu = container.querySelector('.dropdown-menu');
            if (menu) this.close(container, menu);
        });
    }

    _handleOutsideClick(e) {
        this.containers.forEach(container => {
            if (!container.contains(e.target)) {
                const menu = container.querySelector('.dropdown-menu');
                if (menu && menu.classList.contains(this.options.toggleClass)) {
                    this.close(container, menu);
                }
            }
        });
    }
}

export class CollapseHelper {
    constructor(parentId, options = {}) {
        this.parent = typeof parentId === 'string' ? document.getElementById(parentId) : parentId;
        if (!this.parent) return;

        this.options = {
            itemSelector: '.accordion-item',
            triggerSelector: '.accordion-trigger',
            contentSelector: '.accordion-content',
            toggleClass: 'is-open',
            activeButtonClass: 'is-active',
            allowMultiple: false,
            openIndex: null, // number | number[]
            fade: false,      // Si es true, activa la animación por JS
            fadeTime: 300,   // Tiempo en milisegundos
            onToggle: (item, isOpen) => {},
            ...options
        };

        this.items = this.parent.querySelectorAll(this.options.itemSelector);
        if (!this.items.length) return;

        this.init();
    }

    init() {
        // Preparación inicial de los elementos
        this.items.forEach((item) => {
            const content = item.querySelector(this.options.contentSelector);
            if (!content) return;

            // Forzamos el estado cerrado inicial sin disparar animaciones

            if (this.options.fade) {
            content.style.overflow = 'hidden';
            content.style.maxHeight = '0px';
                content.style.transition = `max-height ${this.options.fadeTime}ms ease-in-out`;
            }
        });

        this.items.forEach((item, index) => {
            const trigger = item.querySelector(this.options.triggerSelector);
            const content = item.querySelector(this.options.contentSelector);

            if (!trigger || !content) return;

            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggle(item, content, trigger);
            });
        });

        this._handleInitialOpen();
    }

    _handleInitialOpen() {
        let indices = this.options.openIndex;
        if (indices === null || indices === undefined) return;

        if (!Array.isArray(indices)) indices = [indices];

        // Validación de lógica number[] (tu marca personal)
        let validIndices = [...new Set(indices)]
            .filter(i => typeof i === 'number' && !isNaN(i));

        if (!this.options.allowMultiple && validIndices.length > 1) {
            console.warn("CollapseHelper: 'allowMultiple' es false. Solo se abrirá el primero.");
            validIndices = [validIndices[0]];
        }

        validIndices.forEach(index => {
            if (this.items[index]) {
                const item = this.items[index];
                const trigger = item.querySelector(this.options.triggerSelector);
                const content = item.querySelector(this.options.contentSelector);
                this.open(item, content, trigger);
            }
        });
    }

    toggle(item, content, trigger) {
        const isOpen = content.classList.contains(this.options.toggleClass);
        if (!this.options.allowMultiple && !isOpen) this.closeAll();
        isOpen ? this.close(item, content, trigger) : this.open(item, content, trigger);
    }

    open(item, content, trigger) {
        if (!content || !trigger) return;

        content.classList.add(this.options.toggleClass);
        trigger.classList.add(this.options.activeButtonClass);
        trigger.setAttribute('aria-expanded', 'true');

        // Calculamos la altura real del contenido para el efecto
        const height = content.scrollHeight;
        content.style.maxHeight = height + "px";

        this.options.onToggle(item, true);
    }

    close(item, content, trigger) {
        if (!content || !trigger) return;

        content.classList.remove(this.options.toggleClass);
        trigger.classList.remove(this.options.activeButtonClass);
        trigger.setAttribute('aria-expanded', 'false');

        content.style.maxHeight = "0px";

        this.options.onToggle(item, false);
    }

    closeAll() {
        this.items.forEach(item => {
            const content = item.querySelector(this.options.contentSelector);
            const trigger = item.querySelector(this.options.triggerSelector);
            this.close(item, content, trigger);
        });
    }
}

export class ElementClassToggle {
    constructor(elementId, options = {}) {
        this.target = typeof elementId === 'string' ? document.getElementById(elementId) : elementId;
        if (!this.target) throw new Error("Elemento objetivo no encontrado.");

        this.options = {
            btns: '.control',
            classToggle: 'active',
            ...options
        };

        this.buttons = document.querySelectorAll(this.options.btns);
        if (!this.buttons.length) throw new Error("No se encontraron botones con el selector especificado.");

        this.init();
    }

    init() {
        this.buttons.forEach((button) => {
            button.addEventListener('click', () => {
                const action = button.dataset.action || 'toggle';
                this.handleAction(action);
            });
        });

        console.info("ElementClassToggle inicializado");
    }

    handleAction(action) {
        if (action === 'add') {
            this.target.classList.add(this.options.classToggle);
        } else if (action === 'remove') {
            this.target.classList.remove(this.options.classToggle);
        } else if (action === 'toggle') {
            this.target.classList.toggle(this.options.classToggle);
        } else {
            console.warn(`Acción no válida: ${action}`);
        }
    }
}

export class ToggleHelper {
    constructor(el, options = {}) {
        this.el = typeof el === 'string' ? document.querySelector(el) : el;
        if (!this.el) return;

        this.options = {
            classToggle: null,  // si es null o '', usa display:none
            target: 'root',
            event: 'click',
            focusMode: "none",         // none | inside | lock
            onToggle: (el, state) => {},
            ...options
        };

        this.targets = this._resolveTargets(this.options.target);
        this.useDisplayMode = !this.options.classToggle;

        this._listeners = []; // registro de eventos para destroy()

        this.init();
    }

    // -------------------------------------
    // RESOLVER TARGETS
    // -------------------------------------
    _resolveTargets(t) {
        let list = [];

        // ROOT
        if (t === 'root') return [this.el];

        // HTMLElement directo
        if (t instanceof HTMLElement) return [t];

        // NodeList
        if (t instanceof NodeList) return Array.from(t);

        // Array heterogéneo
        if (Array.isArray(t)) {
            t.forEach(item => {
                list.push(...this._resolveTargets(item)); // recursivo
            });
            return list;
        }

        // Selector string
        if (typeof t === 'string') {
            const closestParent = this.el.closest(t);
            if (closestParent) return [closestParent];

            const external = document.querySelectorAll(t);
            if (external.length) return Array.from(external);
        }

        return [];
    }

    // -------------------------------------
    // EVENTOS CENTRALIZADOS
    // -------------------------------------
    _addListener(target, event, handler) {
        target.addEventListener(event, handler);
        this._listeners.push({ target, event, handler });
    }

    init() {
        // Evento del trigger
        this._addListener(this.el, this.options.event, (e) => {
            e.preventDefault();
            e.stopPropagation();

            if (this.options.focusMode === "lock") {
                const anyOpen = this.targets.some(t =>
                    this.useDisplayMode
                        ? t.style.display !== 'none'
                        : t.classList.contains(this.options.classToggle)
                );
                if (!anyOpen) this.open();
                return;
            }

            this.toggle();
        });

        // FOCUS MODE
        if (this.options.focusMode !== "none") {
            // Clic fuera → cerrar
            this._addListener(document, 'click', () => {
                this.close();
            });

            // inside → clic dentro NO cierra
            if (this.options.focusMode === "inside") {
                this.targets.forEach(target => {
                    this._addListener(target, 'click', (e) => {
                        e.stopPropagation();
                    });
                });
            }
        }
    }

    // -------------------------------------
    // ACCIONES PRINCIPALES
    // -------------------------------------
    toggle() {
        this.targets.forEach(target => {
            const isActive = this._toggleElement(target);
            this.options.onToggle(target, isActive);
        });
    }

    open() {
        this.targets.forEach(target => {
            this._applyState(target, true);
            this.options.onToggle(target, true);
        });
    }

    close() {
        this.targets.forEach(target => {
            this._applyState(target, false);
            this.options.onToggle(target, false);
        });
    }

    // -------------------------------------
    // MÉTODOS INTERNOS
    // -------------------------------------
    _toggleElement(target) {
        if (this.useDisplayMode) {
            const isVisible = target.style.display !== 'none';
            target.style.display = isVisible ? 'none' : '';
            return !isVisible;
        } else {
            return target.classList.toggle(this.options.classToggle);
        }
    }

    _applyState(target, state) {
        if (this.useDisplayMode) {
            target.style.display = state ? '' : 'none';
        } else {
            target.classList[state ? 'add' : 'remove'](this.options.classToggle);
        }
    }

    // -------------------------------------
    // 🧹 DESTROY()
    // -------------------------------------
    destroy() {
        // remover todos los listeners
        this._listeners.forEach(({ target, event, handler }) => {
            target.removeEventListener(event, handler);
        });

        // limpiar referencias
        this._listeners = [];
        this.targets = [];
        this.el = null;
    }
}
