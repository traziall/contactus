export const appStadistics = {
    data: () => ({
        items: [
            {
                color: 'sky',
                icon: 'mi-directions_run',
                title: '13 Dias cardio',
                starts: 2
            },
            {
                color: 'indigo',
                icon: 'mi-directions_bike',
                title: 'Ciclismo 1200 Km',
                starts: 2
            },
            {
                color: 'emerald',
                icon: 'mi-eco',
                title: 'Yoga 13 Horas',
                starts: 2
            },
        ]
    }),
    template: /*html*/`
    <ul class="items-titles">
        <template v-for="item in items">
            <li>
                <article class="item-titles" :class="item.color">
                    <div class="bloq-icon size-vi">
                        <i class="mir" :class="item.icon"></i>
                    </div>
                    <div class="titles">
                        <p class="title">{{ item.title }}</p>
                        <p class="p">Lorem, ipsum dolor sit amet.</p>
                    </div>
                    <div class="stats">
                        <i class="mir mi-star"></i>
                        <i class="mir mi-star_border"></i>
                        <i class="mir mi-star_border"></i>
                    </div>
                </article>
            </li>
        </template>
    </ul>`
}