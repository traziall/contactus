import { mIcon } from '../vue-directives.js';

export const appMenuBotton = {
    emits: ["on-menu"],
    directives: {
        mIcon
    },
    mounted() {
        this.nextView(this.menu[0]);
    },
    data: () => ({
        active: 1,
        menu: [
            {
                id: 1,
                icon: 'home',
                label: 'Inicio'
            },
            {
                id: 2,
                icon: 'ballot',
                label: 'Catalogo'
            },
            {
                id: 3,
                icon: 'bar_chart',
                label: 'Informe'
            },
            {
                id: 4,
                icon: 'person',
                label: 'Ajustes'
            }
        ]
    }),
    template: /*html*/`
    <nav class="menu-bottom">
        <ul>
            <template v-for="item in menu">
                <li>
                    <button type="button" :class="[{ 'active' : item.id === active }]" @click="nextView(item)">
                        <i v-m-icon="item.icon"></i>
                        <p>{{ item.label }}</p>
                    </button>
                </li>
            </template>
        </ul>
    </nav>`,
    methods: {
        nextView(item) {
            this.active = item.id;
            this.$emit('on-menu', item)
        }
    }
}