import { appCardImage } from './card-image.js';

export const appSwiperSteps = {
    components: {
        'card-image': appCardImage
    },
    mounted() {
        this.init()
    },
    data: () => ({
        items: [
            {
                title: 'Entrenamiento',
                img: 'assets/img/1.jpeg',
                subTitle: null,
            },
            {
                title: 'Estiramiento de cuello',
                img: 'assets/img/2.jpeg',
                subTitle: null,
            },
            {
                title: 'Estiramiento de espalda',
                img: 'assets/img/3.jpeg',
                subTitle: null,
            },
            {
                title: 'Alibio',
                img: 'assets/img/4.jpeg',
                subTitle: null,
            }
        ]
    }),
    template: /*html*/`
    <div class="swiper mb-1rem" ref="swiper">
        <div class="swiper-wrapper">
            <template v-for="item in items">
                <div class="swiper-slide">
                    <card-image align="end" :height="150" text="md" :set-data="item"></card-image>
                </div>
            </template>
        </div>
    </div>
    `,
    methods: {
        init() {
            new Swiper(this.$refs.swiper, {
                loop: true,
                slidesPerView: 1.75,
                spaceBetween: 10
            });

        }
    }
}