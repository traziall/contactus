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
            this.$refs.launcherRef.start();
            // console.log(this.$refs.launcher);
        }
    }
}).use(createPinia()).mount('#app');