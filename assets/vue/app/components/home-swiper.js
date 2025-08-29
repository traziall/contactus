const { ref, onMounted } = Vue;
import { appCardService } from './card-service.js';

export const appHomeSwiper = {
    emits: ["on-section"],
    setup() {
        const swiperEl = ref(null);

        onMounted(() => {
            new Swiper(swiperEl.value, {
                loop: true,
                slidesPerView: 1.25,
                spaceBetween: 10
            });
        });

        return { swiperEl };
    },
    components: {
        'card-service': appCardService
    },
    data: () => ({
        items: [
            {
                title: 'Resistencia',
                dayComplete: 8,
                dayEnd: 9,
                message: 'Completa los 7 desafíos<br>restantes. Animo!',
                img: 'assets/img/men-fitnes.png',
                color: 'violet'
            },
            {
                title: 'Estiramiento',
                dayComplete: 3,
                dayEnd: 15,
                message: 'Completa los 7 desafíos<br>restantes. Animo!',
                img: 'assets/img/chica-fitnes-2.png',
                color: 'teal'
            },
            {
                title: 'Saludable',
                dayComplete: 4,
                dayEnd: 8,
                message: 'Completa los 7 desafíos<br>restantes. Animo!',
                img: 'assets/img/chica-fitnes.png',
                color: ''
            }
        ]
    }),
    template: /*html*/`
    <div class="swiper w-full swiper-home mb-1rem" ref="swiperEl">
        <div class="swiper-wrapper">
            <template v-for="item in items">
                <div class="swiper-slide" @click="onSection">
                    <card-service :set-data="item"></card-service>
                </div>
            </template>
        </div>
    </div>
    `,
    methods: {
        onSection() {
            this.$emit('on-section', {
                isPanel: true,
                panel: 'practice'
            });
        }
    }
}
