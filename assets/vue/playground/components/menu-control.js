export const manuControl = {
    props: {
        menu: {
            type: Array,
            default: []
        }
    },
    template: /* html */`
    <div class="menu-controls">
        <ul>
            <template v-for="item in menu">
                <li>
                    <button type="button">
                        <i class="mir" :class="item.ico"></i>
                        <span>{{ item.label }}</span>
                    </button>
                </li>
            </template>
        </ul>
    </div>`,
}