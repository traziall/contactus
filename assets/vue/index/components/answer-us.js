import { tzChatQuestion } from './tz-chat-question.js';
import { tzContainerChat } from './tz-container-chat.js';
import { bubbleChat } from './bubble-chat.js';

export const tzAnswerUs = {
    components: {
        "chat-question": tzChatQuestion,
        "container-chat": tzContainerChat,
        "bubble-chat": bubbleChat
    },
    template: /* html */`
        <section id="us">
            <chat-question id="#us" theme="red" question="¿Quiénes somos?"></chat-question>
            <container-chat>
                <bubble-chat classList="mb-2 animate__animated backInRight animate__fast" decoration orientation="right">
                    <h3 class="-mt-6 mb-2 text-xl uppercase font-bold">Somos</h3>
                    <p><strong>Yenerson Hernández</strong> y <strong>Yelainer. Hernández</strong>.</p>
                </bubble-chat>
                <bubble-chat classList="animate__animated backInRight animate__fast animate__delay-1">
                    <p class="text-gray-400">Desarrolladores y diseñadores con experiencia en la creación de aplicaciones progresivas eficientes y escalables. Abordamos proyectos complejos con un enfoque estructurado y orientado a resultados.</p>
                </bubble-chat>
                <div class="tz-qualities __apocalipsis animate__animated fadeIn animate__fast animate__delay-2">
                    <img src="assets/img/yenr.png" alt="">
                    <ul>
                        <li><p>Front-End</p></li>
                        <li><p>Diseño centrado en (UI/UX)</p></li>
                        <li><p>Responsividad y adaptabilidad</p></li>
                        <li><p>Interactividad y rendimiento</p></li>
                    </ul>
                </div>
                <div class="tz-qualities __crow177 animate__animated fadeIn animate__fast animate__delay-2">
                    <img src="assets/img/yela.png" alt="">
                    <ul class="text-right">
                        <li><p>Back-End</p></li>
                        <li><p>Arquitectura escalable y mantenible</p></li>
                        <li><p>Seguridad y control de acceso</p></li>
                        <li><p>Integración y manejo de datos</p></li>
                    </ul>
                </div>
            </container-chat>
        </section>
    `,
};