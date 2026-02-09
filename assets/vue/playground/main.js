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
                    const inside = dragHelper.isInside(ev, '.card-form');
                    if (inside.isInside) {
                        const id = Number(inside.zoneElement.dataset.id);
                        const item = this.getItemGroup(Number(el.dataset.id), el.dataset.group);
                        this.getItem(id, item)
                    }
                }
            });
        },
        getItem(id, data) {
            const item = this.components.item(id);
            this.components.update(id, {
                ...item,
                assets: [...item.assets, data]
            })
        },
        getItemGroup(id, name) {
            const group = this.components.itemsComponents[name];
            return group.find(x => x.id === id);
        }
    }
}).use(createPinia()).mount('#app');