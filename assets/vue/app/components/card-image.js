export const appCardImage = {
    props: {
        setData: {
            type: Object,
            default: () => ({
                img: 'http://localhost/multimedia/tematica/turismo/naturaleza.jpg',
                title: 'Tips para la concentración',
                subTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, accusamus?',
            })
        },
        align: {
            type: String, // center, start, end
            default: () => 'center'
        },
        height: {
            type: Number,
            default: () => 220
        },
        text: {
            type: String,
            default: () => 'default'
        }
    },
    template: /*html*/`
    <div class="card-image" :class="[align, cardText]" :style="[img, cardHeight]">
        <div class="body">
            <h3>{{ setData.title }}</h3>
            <p v-if="setData.subTitle">{{ setData.subTitle }}</p>
        </div>
    </div>`,
    computed: {
        img() {
            return { 'background-image': `url(${this.setData.img})` }
        },
        cardHeight() {
            return { '--card-height': this.height + 'px' }
        },
        cardText() {
            return this.text === 'default' ? '' : this.text;
        }
    }
}