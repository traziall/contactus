import { EffectParticle } from '../anime-particles.js';
import { dragHelper } from '../dragHelper.js';
import { pjsStore } from '../store.js';

export const launcherPlay = {
    template: /* html */`
    <div class="launcher-play">
        <section class="launcher-team">
            <header class="launcher-elements">
                <h6>Elementos</h6>
                <ul>
                    <li><img src="assets/img/genshi-icon-element-dendro.png" alt=""></li>
                    <li><img src="assets/img/genshi-icon-element-hydro.png" alt=""></li>
                    <li><img src="assets/img/genshi-icon-element-electro.png" alt=""></li>
                </ul>
            </header>
            <div class="launcher-pjs">
                <ul class="pjs-selected" ref="dropZoneRef">
                    <template v-for="(pj, index) in itemsB" :key="index">
                        <li class="pj-item" :class="pj.data ? pj.data.theme : ''">
                            <template v-if="pj.data">
                                <button type="button" class="z-10 relative" @click="removeFromB(index)">Remover</button>
                                <figure class="pj">
                                    <img :src="'assets/img/' + pj.data.img" :alt="pj.data.name">
                                </figure>
                                <div class="effect-particles"></div>
                                <figure class="pj-drop" :class="pj.data.theme"></figure>
                            </template>
                            <template v-else>
                                <figure class="pj-drop">
                                    <div class="add">
                                        <i class="mir mi-add"></i>
                                    </div>
                                </figure>
                            </template>
                        </li>
                    </template>
                </ul>
            </div>
        </section>
        <aside class="launcher-aside">
            <header>
                <fieldset>
                    <legend>Buscar</legend>
                    <div>
                        <i class="mir mi-search"></i>
                        <input type="text" v-model="search">
                    </div>
                </fieldset>
            </header>
            <ul class="aside-pjs">
                <template v-for="(pj, idx) in filteredItems" :key="pj.id">
                    <li class="relative z-20" :ref="el => setItemRef(el, pj.id)">
                        <figure>
                            <img :src="'assets/img/' + pj.avatar" alt="">
                        </figure>
                        <div class="body">
                            <h6>{{ pj.name }}</h6>
                            <p>
                                <img :src="'assets/img/genshi-icon-element-' + pj.type +'.png'" alt="">
                                <span>{{ pj.type }}</span>
                            </p>
                        </div>
                    </li>
                </template>
            </ul>
        </aside>
    </div>
    `,
    data: () => ({
        pjsStore: pjsStore(),
        search: '',
        itemsA: [
            {
                id: 1,
                name: 'Amber',
                img: 'genshi-amber.png',
                avatar: 'genshi-amber-avatar.webp',
                type: 'pyro',
                theme: 'theme-pyro',
                active: false,
                color: '#ef4444'
            },
            {
                id: 2,
                name: 'Eula',
                img: 'genshi-eula.png',
                avatar: 'genshi-eula-avatar.webp',
                type: 'cryo',
                theme: 'theme-cryo',
                active: false,
                color: '#0ea5e9'
            },
            {
                id: 3,
                name: 'Sacarosa',
                img: 'genshi-sacarosa.png',
                avatar: 'genshi-sacarosa-avatar.webp',
                type: 'anemo',
                theme: 'theme-anemo',
                active: false,
                color: '#14b8a6'
            },
            {
                id: 4,
                name: 'Bennett',
                img: 'genshi-bennett.png',
                avatar: 'genshi-bennett-avatar.webp',
                type: 'pyro',
                theme: 'theme-pyro',
                active: false,
                color: '#ef4444'
            },/*
    {
        id: 5,
        name: 'Kaeya',
        img: 'genshi-kaeya.png',
        avatar: 'genshi-kaeya-avatar.webp',
        type: 'cryo',
        theme: 'theme-cryo',
        active: false,
        color: '#ef4444'
    },
    {
        id: 6,
        name: 'Albedo',
        img: 'genshi-albedo.png',
        avatar: 'genshi-albedo-avatar.png',
        type: 'geo',
        theme: 'theme-geo',
        active: false,
        color: '#FAD451'
    },*/
            {
                id: 7,
                name: 'Shenhe',
                img: 'genshi-shenhe.png',
                avatar: 'genshi-shenhe-avatar.webp',
                type: 'geo',
                theme: 'theme-geo',
                active: false,
                color: '#FAD451'
            },
            {
                id: 8,
                name: 'Kuki',
                img: 'genshi-kuki.png',
                avatar: 'genshi-kuki-avatar.webp',
                type: 'electro',
                theme: 'theme-electro',
                active: false,
                color: '#a855f7'
            },
            {
                id: 9,
                name: 'Collei',
                img: 'genshi-collei.png',
                avatar: 'genshi-collei-avatar.webp',
                type: 'dendro',
                theme: 'theme-dendro',
                active: false,
                color: '#22c55e'
            }
        ],
        instances: [],
        itemsB: [],
        itemRefsA: {}, // Cambiado a objeto para mapear ID -> Elemento
        currentDrag: null
    }),
    mounted() {
        this.itemsB = this.pjsStore.pjs;
        this.syncItemsA();
        this.activateDrag();

        this.$nextTick(() => {
            this.itemsB.forEach((slot, index) => {
                if (slot.data) {
                    this.manageParticle(index, slot.data);
                }
            });
        });
    },
    methods: {
        // Función para limpiar y asignar refs por ID
        setItemRef(el, id) {
            if (el) {
                this.itemRefsA[id] = el;
            }
        },

        syncItemsA() {
            // Filtra itemsA para quitar los que ya están en itemsB por nombre o ID
            this.itemsA = this.itemsA.filter(pjA =>
                !this.itemsB.some(pjB =>
                    pjB.data && pjB.data.id === pjA.id
                )
            );
        },

        activateDrag() {
            this.$nextTick(() => {
                // Convertimos el objeto de refs a un array para el helper
                const elements = Object.values(this.itemRefsA);
                dragHelper.enable(elements, {
                    onStart: (ev, el) => {
                        // Buscamos el ID del elemento que se está arrastrando
                        const id = Object.keys(this.itemRefsA).find(key => this.itemRefsA[key] === el);
                        // Buscamos el item real en itemsA usando ese ID
                        const item = this.itemsA.find(x => x.id == id);
                        this.currentDrag = { id: id, item: item };
                    },
                    onDrop: (ev, el) => {
                        if (dragHelper.isInside(ev, this.$refs.dropZoneRef)) {
                            this.moveToB();
                            this.pjsStore.update(this.itemsB);
                        }
                    }
                });
            });
        },

        moveToB() {
            if (!this.currentDrag) return;
            const { id, item } = this.currentDrag;

            const slotIndex = this.itemsB.findIndex(s => s.data === null);
            if (slotIndex === -1) return;

            // Asignamos el personaje al slot
            this.itemsB[slotIndex].data = item;

            // DISPARAMOS partícula solo para este índice
            this.manageParticle(slotIndex, item);

            this.itemsA = this.itemsA.filter(pj => pj.id != id);
            this.itemRefsA = {};
            this.currentDrag = null;
            this.$nextTick(() => this.activateDrag());
        },

        removeFromB(i) {
            const slot = this.itemsB[i];
            if (!slot || slot.data === null) return;

            // DESTRUIMOS partícula solo para este índice
            this.manageParticle(i, null);

            this.itemsA.push(slot.data);
            slot.data = null;

            this.itemRefsA = {};
            this.$nextTick(() => this.activateDrag());
        },

        // Dentro de tu método de partículas, usa el ID para trackear qué instancia pertenece a quién
        manageParticle(index, data) {
            // 1. Si el slot ya tiene una instancia, la destruimos primero para no duplicar
            if (this.instances[index]) {
                this.instances[index].destroy();
                delete this.instances[index];
            }

            // 2. Si hay datos (un personaje), creamos la partícula
            if (data) {
                this.$nextTick(() => {
                    // Buscamos el contenedor de partículas específico de ese slot
                    const slotEl = this.$refs.dropZoneRef.children[index];
                    const box = slotEl.querySelector('.effect-particles');

                    if (box) {
                        const effect = new EffectParticle(box, {
                            maxParticles: 10,
                            duration: 2000,
                            interval: 400,
                            direction: 'bottom-top',
                            colors: [data.color]
                        });
                        this.instances[index] = effect;
                    }
                });
            }
        }
    },
    computed: {
        // Renombrado de 'filter' a 'filteredItems' para mayor claridad
        filteredItems() {
            const search = this.search.toLowerCase();
            return this.itemsA.filter(x =>
                x.name.toLowerCase().includes(search)
            );
        }
    },
    watch: {
        // IMPORTANTE: Si el filtro cambia, debemos refrescar los draggables
        search() {
            this.itemRefsA = {};
            this.activateDrag();
        }
    }
};