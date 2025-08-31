import { socials } from '../helpers.js';

export const tzFooter = {
    data: () => ({
        btns: socials
    }),
    template: /* html */`
    <footer class="tz-footer">
        <section>
            <div class="content">
                <p>Traziall</p>
            </div>
            <ul>
                <template v-for="item in btns">
                    <li>
                        <a target="_blank" :href="item.path">
                            <i :class="item.icon" :style="{ color: item.color }"></i>
                        </a>
                    </li>
                </template>
            </ul>
        </section>
    </footer>`,
}