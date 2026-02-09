const { createApp } = Vue;
import { dragHelper } from "../launcher/dragHelper.js";
import { appComponents } from "./components/app-components.js";
import { appAside } from "./components/aside.js";
import { btnFloat } from "./components/btn-float.js";
import { navTop } from "./components/nav-top.js";
import { storeComponents } from "./store-playground.js";
const { createPinia } = Pinia;

createApp({
    components: {
        "nav-top": navTop,
        "app-aside": appAside,
        "btn-float": btnFloat,
        "btn-components": appComponents,
    },
    data: () => ({
        components: storeComponents()
    }),
    mounted() {
        this.drag();
    },
    methods: {
        drag() {
            const elements = this.$el.querySelectorAll('.drag-item');
            dragHelper.enable(elements, {
                onStart: (ev, el) => {
                    el.classList.add('elevate');
                },
                onDrop: (ev, el) => {
                    el.classList.remove('elevate');
                    if (dragHelper.isInside(ev, this.$refs.dropZoneRef)) {
                        console.log(ev);
                        this.components.add({
                            position: {
                                x: ev.client.x,
                                y: ev.client.y,
                            },
                            title: 'Queso con yuca'
                        })
                    }
                }
            });
        }
    }
}).use(createPinia()).mount('#app');