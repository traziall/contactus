const { createApp } = Vue;
import { launcher } from './components/launcher.js';
const { createPinia } = Pinia;

createApp({
    components: {
        "app-launcher": launcher
    },
    mounted() {},
    data() {
        return {
            isShow: false
        }
    },
    methods: {
        show() {
            this.isShow = true;
            this.$refs.launcherRef.start();
        },
        alternateShow() {
            this.$refs.launcherRef.alternateShow();
        },
    }
}).use(createPinia()).mount('#app');