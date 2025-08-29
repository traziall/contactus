export const appUlDetails = {
    data: () => ({
        items: [
            {
                title: 'Cardio',
                icon: 'add_task',
                label: '13 Días (-200 calorías)',
            },
            {
                title: 'Estiramiento',
                icon: 'add_task',
                label: '3 Días (Ganancia muscular +12)',
            },
            {
                title: 'Yoga',
                icon: 'add_task',
                label: '7 Días (Recuperación 75%)',
            },
        ]
    }),
    template: /*html*/`
    <ul class="ul-details">
        <template v-for="item in items">
            <li>
                <p>
                    <i class="mir" :class="'mi-' + item.icon"></i>
                    <span>{{ item.title }}</span>
                </p>
                <div>{{ item.label }}</div>
            </li>
        </template>
    </ul>`
}