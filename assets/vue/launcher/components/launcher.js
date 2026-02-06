import { launcherPlay } from "./launcher-play.js";
import { launcherBanner } from "./launcher-banner.js";
import { interactHelper } from "../interactHelper.js";

export const launcher = {
    components: {
        "launcher-play": launcherPlay,
        "launcher-banner": launcherBanner,
    },
    data: () => ({
        show: false,
        isLoading: true,
        classLoading: '',
        views: [
            {
                id: 'home',
                icon: 'mi-quiz'
            },
            {
                id: 'banner',
                icon: 'mi-auto_awesome'
            },
            {
                id: 'close',
                icon: 'mi-close'
            },
        ],
        view: 'home',
        bg: 'bg-genshi.jpg'
    }),/*
    mounted() {
        this.goView('banner');
        this.show = true;
        this.isLoading = false;
    },*/
    template: /* html */`
    <div class="app-launcher" v-if="show">
        <template v-if="isLoading">
            <div class="launcher-loading">
                <img src="assets/img/genshin-impact-logo.png" alt="">
                <figure class="icono-llenado" :class="classLoading"></figure>
            </div>
        </template>
        <template v-else>
            <div class="launcher" :style="{ backgroundImage: 'url(' + 'assets/img/' + bg + ')' }">
                <header>
                    <div class="logo">
                        <img src="assets/img/genshin-impact-logo.png" alt="">
                    </div>
                    <div class="handler"></div>
                    <menu>
                        <template v-for="item in views">
                            <button type="button" @click="goView(item.id)">
                                <i class="mir" :class="item.icon"></i>
                            </button>
                        </template>
                    </menu>
                </header>
                <section>
                    <template v-if="view === 'home'">
                        <launcher-play @go-view="goView"></launcher-play>
                    </template>
                    <template v-if="view === 'banner'">
                        <launcher-banner @go-view="goView"></launcher-banner>
                    </template>
                </section>
            </div>
        </template>
    </div>
    `,
    methods: {
        start() {
            this.show = !this.show;
            this.isLoading = true;
            this.classLoading = '';
            setTimeout(() => {
                this.classLoading = 'active';
            }, 100)
            setTimeout(() => {
                this.isLoading = false;
                this.move();
            }, 3500)
        },
        move() {
            setTimeout(() => {
                const launcher = this.$el.querySelector(".launcher");

                interactHelper.move(launcher, {
                    handles: ".handler",
                });
            }, 0)
        },
        goView(name) {
            this.view = name;
            switch(this.view) {
                case 'home':
                    this.bg = 'bg-genshi.jpg';
                break
                case 'banner':
                    this.bg = 'bg-genshi-2.png';
                break
                case 'close':
                    this.show = false;
                    this.isLoading = true;
                    this.view = 'home';
                break
            }
        }
    }
}