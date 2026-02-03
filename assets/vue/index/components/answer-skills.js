import { tzChatQuestion } from './tz-chat-question.js';
import { tzContainerChat } from './tz-container-chat.js';
import { bubbleChat } from './bubble-chat.js';

export const answerSkills = {
    components: {
        "chat-question": tzChatQuestion,
        "container-chat": tzContainerChat,
        "bubble-chat": bubbleChat
    },
    data: () => ({
        seccond: false,
        watchSkills: 'yela',
        skills: {
            yenr: [
                { name: 'Angular', icon: 'devicon-angularjs-plain', porcent: 90 },
                { name: 'Vue', icon: 'devicon-vuejs-plain', porcent: 94 },
                { name: 'Typescript', icon: 'devicon-typescript-plain', porcent: 85 },
                { name: 'Ionic', icon: 'devicon-ionic-original', porcent: 80 },
                { name: 'Tailwindcss', icon: 'devicon-tailwindcss-plain', porcent: 98 },
                { name: 'Electron', icon: 'devicon-electron-original', porcent: 75 },
            ],
            yela: [
                { name: 'Java', icon: 'devicon-java-plain', porcent: 95 },
                { name: 'Spring boot', icon: 'devicon-spring-plain', porcent: 85 },
                { name: 'Nest', icon: 'devicon-nestjs-plain', porcent: 80 },
                { name: 'UI/UX', icon: 'devicon-figma-plain', porcent: 89 },
                { name: 'Laravel', icon: 'devicon-laravel-plain', porcent: 75 },
                { name: '.NET, C# y ASP.NET core', icon: 'devicon-dotnetcore-plain', porcent: 82 },
            ]
        }
    }),
    template: /* html */`
        <section id="skills">
            <chat-question id="#skills" theme="red" question="¿Qué tecnologías dominan?"></chat-question>
            <container-chat>
                <bubble-chat classList="mb-6 animate__animated backInRight animate__fast" decoration orientation="right">
                    <p>Las Tecnologías que dominamos para crear, optimizar y dar vida a tus ideas.</p>
                </bubble-chat>
                <div class="step-skills" :class="{ 'seccond': seccond }">
                    <div class="w-1/2">
                        <figure class="tw-avatar aspect-md" @click="nextSkill">
                            <img class="rounded-full border-3 border-gray-700" src="assets/img/yelainer-avatar.png" alt="">
                        </figure>
                    </div>
                    <div class="w-1/2">
                        <figure class="tw-avatar aspect-md" @click="nextSkill">
                            <img class="rounded-full border-3 border-gray-700" src="assets/img/yenerson-avatar.png" alt="">
                        </figure>
                    </div>
                </div>
                <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <template v-for="item in currentSkills">
                        <li class="flex p-4 gap-5 items-center bg-gray-800 shadow-md shadow-gray-800 rounded-lg">
                            <div class="text-3xl">
                                <i class="colored" :class="item.icon"></i>
                            </div>
                            <div class="grow basis-0 space-y-2">
                                <h3>{{ item.name }}</h3>
                                <div class="block relative overflow-hidden bg-gray-700 rounded-full w-full h-1">
                                    <span class="block relative left-0 top-0 transition-all h-full bg-gray-500" :style="'width:'+ item.porcent +'%'"></span>
                                </div>
                            </div>
                            <div class="text-base text-gray-500">{{ item.porcent }}%</div>
                        </li>
                    </template>
                </ul>
            </container-chat>
        </section>
    `,
    methods: {
        nextSkill() {
            this.seccond = !this.seccond;
            if (this.seccond) {
                this.watchSkills = 'yenr';
            } else {
                this.watchSkills = 'yela';
            }
        }
    },
    computed: {
        currentSkills() {
            return this.skills[this.watchSkills];
        }
    }
};