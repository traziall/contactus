import { socials } from '../helpers.js';

export const tzPhone = {
    props: {
        // Ej.: "America/Bogota", "Europe/Madrid"…
        timeZone: { type: String, default: undefined }
    },
    data: () => ({
        btns: socials,
        hour: '12',
        minutes: '00',
        ampm: 'AM',
        _tick: null
    }),
    methods: {
        _updateClock() {
            const now = new Date();
            // Forzamos en-US para AM/PM clásico
            const fmt = new Intl.DateTimeFormat('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true,
                timeZone: this.timeZone
            });

            const parts = fmt.formatToParts(now).reduce((acc, p) => {
                acc[p.type] = p.value;
                return acc;
            }, {});

            // parts.hour ya viene sin cero a la izquierda en 12h
            this.hour = parts.hour || '12';
            this.minutes = (parts.minute || '00').padStart(2, '0');
            this.ampm = (parts.dayPeriod || 'AM').toUpperCase();
        },
        _startClock() {
            this._updateClock();
            this._tick = setInterval(this._updateClock, 60000);
        },
        _stopClock() {
            if (this._tick) {
                clearInterval(this._tick);
                this._tick = null;
            }
        }
    },
    mounted() {
        this._startClock();
    },
    // Compatibilidad Vue 2 y 3 para limpiar el intervalo
    beforeUnmount() { this._stopClock(); },
    beforeDestroy() { this._stopClock(); },

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
        <span class="timer-hour">{{ hour }}</span>
        <div class="timer-minutes">
          <span>:{{ minutes }}</span>
          <span>{{ ampm }}</span>
        </div>
      </section>
      <ul class="im-phone-menu">
        <li v-for="item in btns" :key="item.path">
          <a :href="item.path" :target="item.target ? '_blank' : '_self'">
            <i :class="item.icon"></i>
            <p>{{ item.label }}</p>
          </a>
        </li>
      </ul>
    </div>
  </figure>`
};
