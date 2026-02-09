import { storeComponents } from "../store-playground.js";
import { appComponent } from "./app-component.js";

export const appComponents = {
    template: /* html */`
    <section>
        <div v-for="item in items" :key="item.id">
            <app-component :data="item"></app-component>
        </div>
    </section>
    `,
    components: {
        "app-component": appComponent
    },
    data: () => ({
        components: storeComponents()
    }),
    computed: {
        items() {
            return this.components.components;
        }
    }
}