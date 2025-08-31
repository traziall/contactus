import { bubbleChat } from './bubble-chat.js';

export const tzChatQuestion = {
    components: {
        "bubble-chat": bubbleChat
    },
    props: {
        question: {
            type: String,
            default: () => 'Pregunta'
        },
        theme: {
            type: String,
            default: () => 'Pregunta'
        },
        id: {
            type: String,
            default: () => '#'
        }
    },
    template: /* html */`
    <section class="flex mb-4">
        <div class="flex min-w-md max-w-xl w-auto gap-6">
            <div class="tz-chat-message-avatar">
                <figure class="tw-avatar rounded-full border-3 border-gray-600">
                    <img class="rounded-full" src="assets/img/traziall-2-logo.jpg" alt="">
                </figure>
            </div>
            <a :href="id">
                <bubble-chat decoration orientation="left" :theme="theme">
                    {{ question }}
                </bubble-chat>
            </a>
        </div>
    </section>
    `,
}