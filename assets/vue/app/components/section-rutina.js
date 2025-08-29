export const appRutina = {
    mounted() {
        this.init()
    },
    data: () => ({
        items: [
            {
                label: 'Entrenamiento',
                img: 'assets/img/ex-1.png',
                text: 'x12',
            },
            {
                label: 'Estiramiento de cuello',
                img: 'assets/img/ex-2.png',
                text: 'x6',
            },
            {
                label: 'Estiramiento de espalda',
                img: 'assets/img/ex-3.png',
                text: 'x18',
            },
            {
                label: 'Entrenamiento',
                img: 'assets/img/ex-1.png',
                text: 'x12',
            },
            {
                label: 'Estiramiento de cuello',
                img: 'assets/img/ex-2.png',
                text: 'x6',
            },
            {
                label: 'Estiramiento de espalda',
                img: 'assets/img/ex-3.png',
                text: 'x18',
            },
        ]
    }),
    template: /*html*/`
    <section class="section-rutina mb-1rem">
        <ul ref="sortable">
            <template v-for="item in items">
                <li class="item">
                    <button type="button" class="handle">
                        <i class="mir mi-drag_indicator"></i>
                    </button>
                    <div class="body">
                        <div class="img">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="titles">
                            <p class="title">{{ item.label }}</p>
                            <p class="subtitle">{{ item.text }}</p>
                        </div>
                        <div class="check">
                            <i class="mir mi-check_box_outline_blank"></i>
                        </div>
                    </div>
                </li>
            </template>
        </ul>
    </section>`,
    methods: {
        init() {
            Sortable.create(this.$refs.sortable, {
                animation: 150,
                dragClass: 'item',
                handle: ".handle",
            });

        }
    }
}