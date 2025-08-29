export const appHeaderFront = {
    emits: ["on-section"],
    template: /*html*/`
    <header class="header-front">
        <nav class="nav">
            <button type="button" @click="onSection">
                <i class="mir mi-keyboard_arrow_left"></i>
                <span>Volver</span>
            </button>
            <div>
                <i class="mir mi-menu"></i>
            </div>
        </nav>
        <div class="body">
            <h2>Entrenamiento</h2>
        </div>
        <footer class="footer">
            <div class="titles">
                <span>21 <small>dias</small></span>
                <span>25%</span>
            </div>
            <figure class="bar-progress">
                <div class="progress"></div>
            </figure>
        </footer>
    </header>`,
    methods: {
        onSection() {
            this.$emit('on-section', {
                isPanel: false,
                panel: 'main'
            })
        }
    }
}