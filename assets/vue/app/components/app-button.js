export const appButton = {
    props: {
        label: {
            type: String,
            default: () => 'Boton'
        }
    },
    template: /*html*/`
    <button type="button" class="app-btn full">
        {{ label }}
    </button>`
}