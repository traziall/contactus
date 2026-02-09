import { deseosStore, pjsStore } from '../store.js';
import { dialogAcquired } from './dialo-acquired.js';

export const launcherBanner = {
    template: /* html */`
    <div class="launcher-banner" ref="banner">
        <section class="banner-content">
            <div class="elements">
                <ul>
                    <li v-for="(item, i) in randoms" :key="i"
                        :class="[{active: item.active}, { 'active-end': item.activeEnd }]">
                        <figure class="bg">
                            <img :src="'assets/img/' + item.img" alt="">
                        </figure>
                        <figure class="avatar">
                            <img :src="'assets/img/' + item.avatar" alt="">
                        </figure>
                    </li>
                </ul>
            </div>
            <div class="btn-play">
                <div class="acquired">
                    <p>Adquiridos</p>
                    <ul>
                        <template v-for="item in adquired">
                            <li>
                                <figure>
                                    <img :src="'assets/img/' + item.avatar" alt="">
                                </figure>
                            </li>
                        </template>
                    </ul>
                </div>
                <button type="button" :disabled="spinning" @click="startPlay($event)">
                    <span>{{ deseos }}</span>
                    <img class="mr-2 inline-block" width="40" src="assets/img/Objeto_Destino_entrelazado.webp" alt="">
                    <span>{{ deseos > 0 ? 'Pedir deseo' : 'Reiniciar' }}</span>
                </button>
            </div>
        </section>

        <aside class="banner-aside">
            <ul>
                <template v-for="item in selected">
                    <template v-if="item.data">
                        <li :class="item.data.type">
                            <div class="content">
                                <h6>{{ item.data.name }}</h6>
                            </div>
                            <figure>
                                <img :src="'assets/img/' + item.data.avatar" alt="">
                            </figure>
                        </li>
                    </template>
                </template>
            </ul>
        </aside>
        <template v-if="acquiredItem">
            <dialo-acquired
            :img="acquiredItem.img"
            :type="acquiredItem.type"
            :color="acquiredItem.color"
            :name="acquiredItem.name"
            @on-action="reserAcquired"
            ></dialo-acquired>
        </template>
    </div>
    `,
    components: {
        "dialo-acquired": dialogAcquired
    },
    data: () => ({
        pjsStore: pjsStore(),
        deseosStore: deseosStore(),
        randoms: [], // los 10 ítems generados
        activeIndex: 0,
        spinning: false,

        cycles: 0,
        maxCycles: 0,
        slowdownSteps: 0,
        finalIndex: 0,
        acquiredItem: null,

        intervalId: null,
    }),
    mounted() {},
    methods: {
        reserAcquired() {
            this.acquiredItem = null;
        },
        goBanner() {
            this.$emit('go-view', 'home');
        },
        startPlay(e) {
            // prepara los 10 ítems
            const deseos = this.deseosStore.counter;
            const pjs = this.pjsStore.pjs.every(x => x.data);
            if(deseos === 0 || !pjs) {
                if(deseos === 0) {
                    this.pjsStore.clear();
                    this.deseosStore.update(5);
                    this.deseosStore.clarAcquired();
                    this.goBanner();
                }
                return;
            };
            this.generateItems();
            this.startRoulette();
            this.deseosStore.update(deseos - 1);
        },

        generateItems() {
            const pjs = this.pjsStore.pjs;

            this.randoms = Array.from({ length: 10 }).map(() => {
                const r = Math.random();
                if (r > 0.65) {
                    const pj = pjs[Math.floor(Math.random() * pjs.length)];
                    return {
                        img: pj.data.img,
                        avatar: pj.data.avatar,
                        name: pj.data.name,
                        type: pj.data.type,
                        color: pj.data.color,
                        active: false,
                        activeEnd: false
                    };
                }
                return {
                    img: 'genshi-arma.webp',
                    avatar: 'genshi-arma.webp',
                    name: 'Espadon',
                    type: 'cryo',
                    color: '#0ea5e9',
                    active: false,
                    activeEnd: false
                };
            });
        },

        startRoulette() {
            if (this.spinning) return;
            this.spinning = true;

            this.randoms.forEach(x => {
                x.active = false;
                x.activeEnd = false;
            });

            this.activeIndex = 0;

            // Decide entre 2 y 4 ciclos completos
            this.maxCycles = Math.floor(Math.random() * 3) + 2; // 2,3,4
            this.cycles = 0;

            // Selecciona el índice final donde se frenará
            this.finalIndex = Math.floor(Math.random() * 10);

            // La última vuelta tendrá frenado en N pasos
            this.slowdownSteps = 14; // puedes ajustar

            this.runNormalCycles();
        },

        runNormalCycles() {
            let speed = 80; // velocidad base rápida

            const loop = () => {
                this.highlightItem();

                this.activeIndex++;

                if (this.activeIndex >= 10) {
                    this.activeIndex = 0;
                    this.cycles++;
                }

                // Si ya completó los ciclos → ir al frenado final
                if (this.cycles >= this.maxCycles) {
                    return this.runSlowdown();
                }

                this.intervalId = setTimeout(loop, speed);
            };

            loop();
        },

        runSlowdown() {
            let step = 0;
            let speed = 120; // empieza un poco más lento

            const loop = () => {
                this.highlightItem();

                // Si llegamos al índice final → terminar
                if (this.activeIndex === this.finalIndex && step >= this.slowdownSteps) {
                    this.finishSpin();
                    return;
                }

                this.activeIndex++;
                if (this.activeIndex >= 10) this.activeIndex = 0;

                step++;
                speed += 25; // cada paso más lento

                this.intervalId = setTimeout(loop, speed);
            };

            loop();
        },

        highlightItem() {
            // reset
            this.randoms.forEach(x => (x.active = false));
            this.randoms.forEach(x => (x.activeEnd = false));

            // activa el actual
            const current = this.randoms[this.activeIndex];
            if (current) current.active = true;
        },

        finishSpin() {
            clearTimeout(this.intervalId);
            this.randoms.forEach(x => (x.active = false));

            const current = this.randoms[this.activeIndex];
            current.activeEnd = true;

            this.acquiredItem = current;
            this.deseosStore.addAcquired(current);

            this.spinning = false;
        }
    },
    computed: {
        deseos() {
            return this.deseosStore.counter;
        },
        selected() {
            return this.pjsStore.pjs;
        },
        adquired() {
            return this.deseosStore.acquired;
        }
    }
};