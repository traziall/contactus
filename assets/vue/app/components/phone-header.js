export const phoneHeader = {
    props: {
        setTitle: {
            type: String,
            default: () => 'Inicio'
        },
        icon: {
            type: String,
            default: () => 'home'
        }
    },
    template: /* html */`
        <header class="phone-body-header">
            <div>
                <h2 class="inline-flex items-center gap-2 text-xl font-semibold">
                    <i class="mir" :class="headerIcon"></i>
                    <span>{{ setTitle }}</span>
                </h2>
            </div>
            <div>
                <button type="button">
                    <i class="mir mi-menu"></i>
                </button>
            </div>
        </header>
    `,
    computed: {
        headerIcon() {
            return 'mi-' + this.icon
        }
    }
};