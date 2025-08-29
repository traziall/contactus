import { generator } from '../use/generator.js';

export const appMonth = {
    template: /*html*/`
    <section class="im-month card-ui mb-1rem">
        <header>
            <button type="button">
                <i v-m-icon="'keyboard_arrow_left'"></i>
            </button>
            <div>
                <p>2025 - Febrero</p>
            </div>
            <button type="button">
                <i v-m-icon="'keyboard_arrow_right'"></i>
            </button>
        </header>
        <ul class="week-names">
            <li>Dom</li>
            <li>Lun</li>
            <li>Mar</li>
            <li>Mie</li>
            <li>Jue</li>
            <li>Vie</li>
            <li>Sab</li>
        </ul>
        <ul class="days">
            <template v-for="item in days">
                <li :class="[{ 'active' : item === 12 }, { 'ok' : item === 9 || item === 10 || item === 4 || item === 6 || item === 7 }]">{{ item }}</li>
            </template>
        </ul>
    </section>`,
    computed: {
        days() {
            return generator.dateForSelects({
                monthDays: '2025-05-09'
            }).days
        }
    }
}