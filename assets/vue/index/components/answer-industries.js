import { tzChatQuestion } from './tz-chat-question.js';
import { tzContainerChat } from './tz-container-chat.js';
import { bubbleChat } from './bubble-chat.js';

export const answerIndustries = {
    components: {
        "chat-question": tzChatQuestion,
        "container-chat": tzContainerChat,
        "bubble-chat": bubbleChat
    },
    data: () => ({
        industries: [
            {
                name: "Salud",
                icon: "health_and_safety",
                color: "#e53935",
                extra: "Historias clínicas, gestión de pacientes, odontología"
            },
            {
                name: "Educación",
                icon: "school",
                color: "#3949ab",
                extra: "LMS, apps para cursos, dashboards de estudiantes"
            },
            {
                name: "E-commerce",
                icon: "shopping_cart",
                color: "#fb8c00",
                extra: "Tiendas online, inventarios, pasarelas de pago"
            },
            {
                name: "Finanzas",
                icon: "account_balance",
                color: "#1e88e5",
                extra: "Apps de banca digital, facturación, control de gastos"
            },
            {
                name: "SaaS y Startups",
                icon: "cloud",
                color: "#00acc1",
                extra: "Plataformas multi-tenant, suscripciones, sistemas colaborativos"
            },
            {
                name: "Empresarial<br>Corporativo",
                icon: "business",
                color: "#6d4c41",
                extra: "Intranets, ERPs, CRMs y sistemas internos"
            },
            {
                name: "Entretenimiento<br>y Medios",
                icon: "movie",
                color: "#8e24aa",
                extra: "Apps de streaming, lanzadores de videojuegos, multimedia"
            },
            {
                name: "Hotelería<br>y Turismo",
                icon: "flight_takeoff",
                color: "#0288d1",
                extra: "Reservas online, guías interactivas, apps de experiencia"
            },
            {
                name: "Agro / Industria",
                icon: "agriculture",
                color: "#2e7d32",
                extra: "Control de producción, monitoreo IoT, gestión de recursos"
            }
        ]
    }),
    template: /* html */`
        <section id="industries">
            <chat-question id="#industries" theme="red" question="¿En qué sectores tienen experiencia?"></chat-question>
            <container-chat>
                <bubble-chat classList="mb-6 animate__animated backInRight animate__fast" decoration orientation="right">
                    <p>Hemos trabajado en proyectos para diferentes sectores como:</p>
                </bubble-chat>
                <ul class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 animate__animated backInRight animate__fast animate__delay-1">
                    <template v-for="item in industries">
                        <li class="flex items-center justify-end h-[80px] relative overflow-hidden rounded-md shadow-md p-4 shadow-gray-900 bg-gray-800">
                            <div class="absolute rotate-[30deg] top-2 left-2 opacity-35">
                                <i class="!text-7xl mi" :class="'mi-' + item.icon" :style="{ color: item.color }"></i>
                            </div>
                            <p class="text-sm mr-2 z-[1]" v-html="item.name"></p>
                        </li>
                    </template>
                </ul>
                <bubble-chat classList="mb-6 animate__animated backInRight animate__fast animate__delay-2" orientation="right">
                    <p class="text-gray-400">Esta diversidad nos permite adaptar nuestras soluciones a las necesidades específicas de cada industria.</p>
                </bubble-chat>
            </container-chat>
        </section>
    `,
};