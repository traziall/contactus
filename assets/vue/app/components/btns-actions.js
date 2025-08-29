export const appBtnsActions = {
    data: () => ({
        items: [
            {
                color: 'emerald',
                icon: 'settings',
                label: 'Ajuste General'
            },
            {
                color: 'teal',
                icon: 'settings_accessibility',
                label: 'Ajuste de ejercicios'
            },
            {
                color: 'sky',
                icon: 'checklist',
                label: 'Opciones de ejercicio',
            },
            {
                color: 'cyan',
                icon: 'language',
                label: 'Idioma',
            },
        ]
    }),
    template: /*html*/`
    <ul class="btns-actions">
        <template v-for="item in items">
            <li class="li">
                <button type="button">
                    <div class="bloq-icon size-iv" :class="item.color">
                        <i class="mir" :class="'mi-' + item.icon"></i>
                    </div>
                    <p>
                        {{ item.label }}
                    </p>
                    <span class="icon mir mi-chevron_right"></span>
                </button>
            </li>
        </template>
    </ul>`
}