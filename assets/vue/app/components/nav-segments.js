import { mIcon } from '../vue-directives.js';

export const appNavSegments = {
    emits: ["on-nav"],
    directives: {
        mIcon
    },
    data: () => ({
        active: 1,
        menu: [
            {
                id: 1,
                icon: 'home',
                label: 'Cardio'
            },
            {
                id: 2,
                icon: 'ballot',
                label: 'Ejercicio'
            },
            {
                id: 3,
                icon: 'bar_chart',
                label: 'Yoga'
            }
        ]
    }),
    template: /*html*/`
    <nav class="nav-segments mb-2rem">
        <template v-for="item in menu">
            <button type="button" :class="[{ 'active' : item.id === active }]" @click="next(item)">
                <i v-m-icon="item.icon"></i>
                <span>{{ item.label }}</span>
            </button>
        </template>
    </nav>`,
    methods: {
        next(item) {
            this.active = item.id;
            this.$emit('on-nav', item)
        }
    }
}