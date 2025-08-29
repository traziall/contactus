export const appWeek = {
    template: /*html*/`<section class="section-week mb-1rem">
        <header>
            <h2>Días realizados</h2>
            <div><span class="h2">3</span>/<span>7</span></div>
        </header>
        <ul>
            <template v-for="item in [8,9,10,11,12,13,14]">
                <li :class="[{ 'ok' : item === 9 || item === 10 }, { 'active' : item === 12 }]">{{ item }}</li>
            </template>
        </ul>
    </section>`
}