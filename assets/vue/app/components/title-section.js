export const appTtitleSection = {
    props: {
        setTitle: {
            type: String,
            default: () => 'Title section'
        }
    },
    template: /*html*/`
    <section class="title-section">
        <h2>{{ setTitle }}</h2>
    </section>`
}