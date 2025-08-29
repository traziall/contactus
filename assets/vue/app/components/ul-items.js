export const appItems = {
    data: () => ({
        items: [
            {
                label: 'Entrenamiento',
                img: 'assets/img/6.jpg',
                subTitle: null,
            },
            {
                label: 'Estiramiento de cuello',
                img: 'assets/img/7.webp',
                subTitle: null,
            },
            {
                label: 'Estiramiento de espalda',
                img: 'assets/img/8.webp',
                subTitle: null,
            },
        ]
    }),
    template: /*html*/`
    <ul class="ul-items mb-2rem">
        <template v-for="item in items">
            <li>
                <article class="card-item">
                    <div class="bloq-avatar size-vii ui-omelet">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="body">
                        <h4>{{ item.label }}</h4>
                        <p class="text-mute">20 min - 17 Ejercicios</p>
                        <p>Dificulta: Media</p>
                    </div>
                </article>
            </li>
        </template>
    </ul>`
}