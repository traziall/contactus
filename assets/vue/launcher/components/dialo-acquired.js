import { EffectParticle } from '../anime-particles.js';

export const dialogAcquired = {
    props: {
        img: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: 'cyan'
        }
    },
    data: () => ({
        instances: null,
        scale: ''
    }),
    template: /* html */`
        <div class="banner-acquired" :class="type">
            <div class="effect-particles"  ref="particles" :class="type"></div>
            <div class="content">
                <figure :class="scale">
                    <img :src="'assets/img/' + img" alt="">
                </figure>
                <div class="titles">
                    <h2>{{ name }}</h2>
                    <p>
                        <img :src="'assets/img/genshi-icon-element-' + type + '.png'" alt="">
                        <span>{{ type }}</span>
                    </p>
                </div>
                <section>
                    <button type="button" @click="action">
                        Aceptar
                    </button>
                </section>
            </div>
        </div>
    `,
    mounted() {
        this.particles();
        setTimeout(() => {
            this.scale = 'active';
        }, 50)
    },
    methods: {
        action() {
            this.$emit('on-action', null)
        },
        particles() {
            const box = this.$refs.particles;
            console.log(this.color);
            this.instances = new EffectParticle(box, {
                maxParticles: 75,
                duration: 2000,
                interval: 400,
                direction: 'bottom-top',
                colors: [this.color]
            });
        }
    },
    unmounted() {
        this.instances.destroy();
        this.instances = null;
    }
};