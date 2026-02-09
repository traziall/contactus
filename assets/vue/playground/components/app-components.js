import { storeComponents } from "../store-playground.js";
import { appComponent } from "./app-component.js";

export const appComponents = {
    template: /* html */`
    <section>
        <template v-for="item in items">
            <app-component :data="item"></app-component>
        </template>
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