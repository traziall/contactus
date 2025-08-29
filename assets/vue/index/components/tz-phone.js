export const tzPhone = {
    data: () => ({
        btns: [
            {
                target: true,
                path: '',
                label: 'Youtube',
                icon: 'icofont-youtube'
            },
            {
                target: true,
                path: '',
                label: 'Facebook',
                icon: 'icofont-facebook'
            },
            {
                target: true,
                path: '',
                label: 'X',
                icon: 'icofont-x'
            },
            {
                target: true,
                path: '',
                label: 'instagram',
                icon: 'icofont-instagram'
            },
        ]
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
                    <button type="button">
                        <i :class="item.icon"></i>
                        <p>{{ item.label }}</p>
                    </button>
                </li>
            </ul>
        </div>
    </figure>`,
}