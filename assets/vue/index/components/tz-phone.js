import { socials } from '../helpers.js';

export const tzPhone = {
    data: () => ({
        btns: socials
    }),
    template: /* html */`
    <figure class="im-phone">
        <div class="im-phone-cam"></div>
        <div class="im-btns-vol"></div>
        <header class="im-phone-header">
            <ul>
                <li>
                    <i class="mir mi-network_cell"></i>
                    <span>5G</span>
                </li>
            </ul>
            <ul>
                <li>
                    <i class="mir mi-wifi"></i>
                </li>
            </ul>
        </header>
        <div class="im-phone-body">
            <section class="im-phone-timer">
                <span class="timer-hour">12</span>
                <div class="timer-minutes">
                    <span>:02</span>
                    <span>AM</span>
                </div>
            </section>
            <ul class="im-phone-menu">
                <li v-for="item in btns">
                    <a :href="item.path" :target="item.target ? '_blank' : '_self'">
                        <i :class="item.icon"></i>
                        <p>{{ item.label }}</p>
                    </a>
                </li>
            </ul>
        </div>
    </figure>`,
}