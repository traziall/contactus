export const dragItems = {
    template: /* html */`
    <ul class="drag-items">
        <template v-for="item in items">
            <li>
                <div class="drag-item" :data-id="item.id" :data-group="item.group">
                    <i class="mir" :class="item.icon"></i>
                    <span>{{ item.label }}</span>
                </div>
            </li>
        </template>
    </ul>`,
    props: {
        items: {
            type: Array,
            default: []
        }
    }
}