import { mIcon } from '../vue-directives.js';

export const appHeader = {
    directives: {
        mIcon
    },
    emits: ["on-menu"],
    props: {
        setTitle: {
            type: String,
            default: () => "Title"
        },
        setIcon: {
            type: String,
            default: () => null
        }
    },
    template: /*html*/`
    <header class="section-header">
        <div>
            <h1>
                <template v-if="icon">
                    <i :class="icon"></i>
                </template>
                <span>{{ setTitle }}</span>
            </h1>
        </div>
        <div>
            <button type="button" class="btn-menu" @click="onSection">
                <i v-m-icon="'menu'"></i>
            </button>
        </div>
    </header>`,
    computed: {
        icon() {
            return this.setIcon ? `mir mi-${this.setIcon}` : null;
        }
    },
    methods: {
        onSection() {
            this.$emit('on-menu', {
                isPanel: true,
                panel: 'menu'
            })
        }
    }
}