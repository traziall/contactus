import { tzChatQuestion } from './tz-chat-question.js';
import { tzContainerChat } from './tz-container-chat.js';
import { bubbleChat } from './bubble-chat.js';

export const answerSchedule = {
    components: {
        "chat-question": tzChatQuestion,
        "container-chat": tzContainerChat,
        "bubble-chat": bubbleChat
    },
    data: () => ({
        seccond: false,
        watchSkills: 'yela',
        organizations: [
            {
                id: "1",
                title: "Reunión inicial",
                subtitle: "Objetivos, alcance y necesidades del proyecto.",
                time: "1–2 días"
            },
            {
                id: "2",
                title: "Propuesta & planificación",
                subtitle: "Roadmap, features, entregables y stack tecnológico.",
                time: "1–2 días"
            },
            {
                id: "3",
                title: "Diseño UI/UX",
                subtitle: "Wireframes, prototipo y sistema visual.",
                time: "3–5 días"
            },
            {
                id: "4",
                title: "Desarrollo Front-End",
                subtitle: "Interfaces responsivas e interacciones.",
                time: "5–10 días"
            },
            {
                id: "5",
                title: "Desarrollo Back-End",
                subtitle: "APIs, base de datos y lógica de negocio.",
                time: "5–10 días"
            },
            {
                id: "6",
                title: "Pruebas & QA",
                subtitle: "Funcional, usabilidad, seguridad y rendimiento.",
                time: "2–4 días"
            },
            {
                id: "7",
                title: "Despliegue",
                subtitle: "Release a producción, dominios y monitoreo inicial.",
                time: "1–2 días"
            },
            {
                id: "8",
                title: "Mantenimiento",
                subtitle: "Soporte, mejoras continuas y nuevas features.",
                time: "Continuo"
            }
        ]
    }),
    template: /* html */`
        <section id="schedule">
            <chat-question id="#schedule" theme="red" question="¿Cómo se organizan en un proyecto?"></chat-question>
            <container-chat>
                <bubble-chat classList="mb-6 animate__animated backInRight animate__fast" decoration orientation="right">
                    <p>El cronograma de organizacion es el siguiente:</p>
                </bubble-chat>
                <ul class="block animate__animated backInRight animate__fast animate__delay-1">
                    <template v-for="item in organizations">
                        <li class="flex w-full">
                          <div class="flex flex-col items-center mr-6 relative">
                            <div class="w-px h-full bg-gray-600 absolute" :class="item.id === '8' ? 'hidden' : ''"></div>
                            <div class="flex items-center border-gray-600 z-[1] justify-center w-8 h-8 text-xs font-medium border rounded-full bg-gray-800">
                              {{ item.id }}
                            </div>
                          </div>
                          <div class="flex flex-col self-center mb-5">
                            <div>
                              <p class="text-base font-semibold">{{ item.title }}</p>
                              <p class="text-sm text-gray-500">{{ item.subtitle }}</p>
                            </div>
                          </div>
                        </li>
                    </template>
                </ul>
            </container-chat>
        </section>
    `,
};