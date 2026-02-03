export const bubbleChat = {
    props: {
        orientation: {
            type: String,
            default: () => 'left'
        },
        decoration: {
            type: Boolean,
            default: () => false
        },
        classList: {
            type: String,
            default: () => ''
        },
        theme: {
            type: String,
            default: () => ''
        }
    },
    template: /* html */`
    <div class="bubble-chat" :class="[{ 'decoration' : decoration }, classList, orientation, theme]">
        <slot></slot>
    </div>
    `,
}