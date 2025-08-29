export const appPersonChart = {
    template: /*html*/`
    <div class="card-ui">
        <section class="person-charts">
            <header>
                <h4>Mi información</h4>
            </header>
            <div class="person">
                <i v-m-icon="'accessibility_new'"></i>
            </div>
            <div class="body">
                <ul>
                    <li>
                        <p>57 <small>kg</small></p>
                        <strong>Peso</strong>
                    </li>
                    <li>
                        <p>1.57 <small>m</small></p>
                        <strong>Talla</strong>
                    </li>
                </ul>
                <footer>
                    <ul>
                        <li class="red"></li>
                        <li class="orange"></li>
                        <li class="amber"></li>
                        <li class="lime"></li>
                        <li class="emerald"></li>
                    </ul>
                    <div class="ponter">
                        <div>Saludable</div>
                    </div>
                </footer>
            </div>
        </section>
    </div>`,
}