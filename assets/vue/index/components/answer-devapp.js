import { tzChatQuestion } from './tz-chat-question.js';
import { tzContainerChat } from './tz-container-chat.js';
import { bubbleChat } from './bubble-chat.js';

export const tzAnswerDevapp = {
    components: {
        "chat-question": tzChatQuestion,
        "container-chat": tzContainerChat,
        "bubble-chat": bubbleChat
    },
    data: () => ({
        devApps: [
            {
                icon: 'mi-laptop_mac',
                name: 'Aplicaciones Web/Desktop',
                description: 'Diseñamos y desarrollamos aplicaciones escalables web y de escritorio.',
                list: [
                    'HTML5, CSS3, JavaScript',
                    'Frameworks modernos como Vue, Angular y Electron',
                    'Integración con APIs y servicios externos'
                ],
                delay: 'animate__delay-0.5'
            },
            {
                icon: 'mi-phone_android',
                name: 'Aplicaciones Móviles',
                description: 'iOS y Android multiplataforma con un enfoque en la experiencia del usuario.',
                list: [
                    'Ionic (con Angular o Vue)',
                    'Capacitor para acceso a funciones nativas',
                    'Progressive Web Apps (PWA)'
                ],
                delay: 'animate__delay-2'
            },
            {
                icon: 'mi-dns',
                name: 'Sistemas de Gestión',
                description: 'Implementamos sistemas de gestión personalizados para optimizar procesos empresariales.',
                list: [
                    'Desarrollo de sistemas ERP y CRM',
                    'Integración con bases de datos y servicios en la nube',
                    'Automatización de flujos de trabajo y reportes'
                ],
                delay: 'animate__delay-3'
            }
        ]
    }),
    template: /* html */`
        <section id="devapp">
            <chat-question id="#devapp" theme="red" question="¿Qué tipo de aplicaciones desarrollan?"></chat-question>
            <container-chat>
                <ul class="dev-app space-y-6">
                    <template v-for="(item, index) in devApps">
                        <li class="animate__animated backInRight animate__fast" :class="item.delay">
                            <bubble-chat classList="mb-5" :decoration="index === 0" orientation="right">
                                <div class="flex flex-wrap gap-5">
                                    <div class="tw-icono border rounded-lg border-gray-700 aspect-md">
                                        <i class="mir" :class="item.icon"></i>
                                    </div>
                                    <div class="grow basis-0 space-y-3">
                                        <h3 class="text-base md:text-xl font-semibold">{{ item.name }}</h3>
                                        <p class="text-sm md:text-base text-gray-400">{{ item.description }}</p>
                                    </div>
                                </div>
                            </bubble-chat>
                            <ul class="ul-decoration">
                                <template v-for="(feature, index) in item.list">
                                    <li v-if="feature" class="text-sm md:text-base text-gray-500" :key="index">{{ feature }}</li>
                                </template>
                            </ul>
                        </li>
                    </template>
                </ul>
            </container-chat>
        </section>
    `,
};