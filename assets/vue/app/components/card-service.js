export const appCardService = {
    props: {
        setData: {
            type: Object,
            default: () => ({
                title: 'Title',
                dayComplete: 0,
                color: '',
                img: 'assets/img/chica-fitnes-2.png',
                dayEnd: 0,
                message: 'Message lorem ipsum queso'
            })
        },
    },
    template: /*html*/`
    <div class="card-service" :class="setData.color">
        <section>
            <div class="titles">
                <h4 class="title-1">{{ setData.title }}</h4>
                <p class="title-2">{{ setData.dayComplete }} DÍAS de {{ setData.dayEnd }}</p>
                <p class="text-sm" v-html="setData.message"></p>
            </div>
        </section>
        <footer>
            <button type="button">
                Continuar
            </button>
        </footer>
        <div class="img">
            <img :src="setData.img" alt="">
        </div>
    </div>`,
}