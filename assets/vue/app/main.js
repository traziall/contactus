const { createApp } = Vue;
import { mIcon } from './vue-directives.js';
import { appMenuBotton } from './components/menu-botton.js';
import { appHeader } from './components/header.js';
import { appWeek } from './components/week.js';
import { appHomeSwiper } from './components/home-swiper.js';
import { appTtitleSection } from './components/title-section.js';
import { appStadistics } from './components/stadistics.js';
import { appCardImage } from './components/card-image.js';
import { appNavSegments } from './components/nav-segments.js';
import { appItems } from './components/ul-items.js';
import { appMonth } from './components/month.js';
import { appSwiperSteps } from './components/swiper-steps.js';
import { appPersonChart } from './components/person-charts.js';
import { appUlDetails } from './components/ul-details.js';
import { appHeaderUser } from './components/header-user.js';
import { appBtnsActions } from './components/btns-actions.js';
import { appHeaderFront } from './components/header-front.js';
import { appRutina } from './components/section-rutina.js';
import { appButton } from './components/app-button.js';

createApp({
    directives: {
        mIcon
    },
    components: {
        'menu-bottom': appMenuBotton,
        'app-header': appHeader,
        'app-week': appWeek,
        'app-titlesection': appTtitleSection,
        'app-stadistics': appStadistics,
        'app-homeswiper': appHomeSwiper,
        'app-swiperstep': appSwiperSteps,
        /*
        'app-cardimage': appCardImage,
        'app-navsegment': appNavSegments,
        'app-items': appItems,
        'app-month': appMonth,
        'app-personchart': appPersonChart,
        'app-uldetails': appUlDetails,
        'app-headeruser': appHeaderUser,
        'app-btnsactions': appBtnsActions,
        'app-headerfront': appHeaderFront,
        'app-rutina': appRutina,
        'app-button': appButton,*/
    },
    data: () => ({
        viewActive: null,
        section: {
            isPanel: false,
            panel: 'main'
        },
    }),
    methods: {
        changeMenu(event) {
            this.viewActive = event;
            this.setionDefault();
        },
        onSection(event) {
            console.log("event", event);
            this.section = event;
            if(!event.isPanel) {
                this.setionDefault()
            }
        },
        setionDefault() {
            this.section = {
                isPanel: false,
                panel: 'main'
            };
        }
    }
}).mount('#app')