export const tzContact = {
    template: /* html */`
        <section class="block">
            <div class="mx-auto max-w-5xl bg-(--gray-850) border border-gray-800 p-10 -mt-16 rounded-t-lg">
                <header class="mb-5">
                    <h3 class="text-xl mb-2 text-gray-300">¿Qué quieres que hagamos?</h3>
                    <p class="text-sm text-gray-500">Arrastra los elementos al Carrito, según lo que quieres de nosotros.</p>
                </header>
                <div class="grid grid-cols-2">
                    <ul class="grid grid-cols-3 gap-4" id="groupA">
                        <li
                        v-for="item in items.find(g => g.group === 'groupA').children"
                        :key="item.uuid"
                        class="flex items-center py-3 justify-center bg-gray-800 shadow-md rounded-md aspect-md"
                        :data-uuid="item.uuid">
                            <div class="text-center">
                                <figure class="tw-icono bg-gray-700/40 shadow-md m-0 p-0">
                                    <i class="mi mi-home"></i>
                                </figure>
                                <p class="text-[0.8rem] text-gray-400">{{ item.animal }}</p>
                            </div>
                        </li>
                    </ul>
                    <ul class="grid grid-cols-3 gap-4" id="groupB">
                        <li
                        v-for="item in items.find(g => g.group === 'groupB').children"
                        :key="item.uuid"
                        class="flex items-center py-3 justify-center bg-gray-800 shadow-md rounded-md aspect-md"
                        :data-uuid="item.uuid">
                            <div class="text-center">
                                <figure class="tw-icono bg-gray-700/40 shadow-md m-0 p-0">
                                    <i class="mi mi-home"></i>
                                </figure>
                                <p class="text-[0.8rem] text-gray-400">{{ item.animal }}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <figure class="decoration-flat"></figure>
            </div>
        </section>
    `,
    data() {
        return {
            items: [
                {
                    group: "groupA",
                    children: [
                        { uuid: "dog", animal: "🐶" },
                        { uuid: "rabit", animal: "🐰" },
                        { uuid: "fox", animal: "🦊" },
                    ],
                },
                {
                    group: "groupB",
                    children: [],
                },
            ],
            itemLookup: {}, // para mapear uuid → objeto
        };
    },

    mounted() {
        // inicializar lookup
        this.items.forEach((group) => {
            group.children.forEach((child) => {
                this.itemLookup[child.uuid] = child;
            });
        });

        // crear Sortable para cada grupo
        this.items.forEach((group) => {
            const el = document.getElementById(group.group);
            Sortable.create(el, {
                group: "shared",
                animation: 150,
                onAdd: this.updateItemsArray,
                onRemove: this.updateItemsArray,
                onUpdate: this.updateItemsArray,
            });
        });
    },

    methods: {
        updateItemsArray() {
            this.items = this.items.map((group) => {
                const el = document.getElementById(group.group);
                const children = Array.from(el.children).map((child) => {
                    return { ...this.itemLookup[child.dataset.uuid] };
                });
                return { ...group, children };
            });

            console.log(JSON.stringify(this.items, null, 2));
        },
    },
};