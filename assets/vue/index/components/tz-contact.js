export const tzContact = {
    data() {
        return {
            items: [
                {
                    group: "groupA",
                    children: [
                        {
                            uuid: '09297a11-07fb-4c4e-940c-45d273193d77',
                            icon: 'mi-business_center', // Contratarnos
                            label: 'Contratarnos',
                            color: 'text-red-400',
                        },
                        {
                            uuid: '81e2fece-436e-4041-a399-1a8d5da14909',
                            icon: 'mi-web', // App web
                            label: 'app web',
                            color: 'text-red-400',
                        },
                        {
                            uuid: '254179b3-5a7d-43c0-8211-5e9b0d36c105',
                            icon: 'mi-animation', // Animación gráfica
                            label: 'Animacion grafica',
                            color: 'text-red-400',
                        },
                        {
                            uuid: 'f2765f5d-3e86-4798-af52-6c2267b40257',
                            icon: 'mi-storage', // Back-end
                            label: 'Back-end',
                            color: 'text-red-400',
                        },
                        {
                            uuid: '8a2f9083-eb04-421c-94b0-b2407e17c7ce',
                            icon: 'mi-design_services', // Diseño UX UI
                            label: 'Diseño UX UI',
                            color: 'text-red-400',
                        },
                        {
                            uuid: '9ff50cca-a4e0-4819-880b-afefaadfed8e',
                            icon: 'mi-desktop_windows', // App desktop
                            label: 'App desktop',
                            color: 'text-red-400',
                        },
                        {
                            uuid: '5eba8af9-b877-4832-b72e-570d6525ac4a',
                            icon: 'mi-smartphone', // App móvil
                            label: 'App movil',
                            color: 'text-red-400',
                        },
                        {
                            uuid: '7c827907-d466-4361-90df-574623a4379c',
                            icon: 'mi-brush', // Ilustraciones
                            label: 'Ilustraciones',
                            color: 'text-red-400',
                        },
                        {
                            uuid: '40cdf557-360b-4fe1-8385-7597532c1802',
                            icon: 'mi-movie_edit', // Video edición (Material Symbols)
                            label: 'Video edicion',
                            color: 'text-red-400',
                        },
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
        this.looup()
    },
    template: /* html */`
        <section class="block">
            <div class="mx-auto max-w-5xl bg-(--gray-850) border border-gray-800 p-10 -mt-16 rounded-t-lg">
                <header class="mb-5">
                    <h3 class="text-xl mb-2 text-gray-300">¿Qué quieres que hagamos?</h3>
                    <p class="text-sm text-gray-500">Arrastra y agrega al carrito, según lo que quieres de nosotros.</p>
                </header>
                <div class="ul-sortable">
                    <div class="group">
                        <ul id="groupA">
                            <li
                            v-for="item in items.find(g => g.group === 'groupA').children"
                            :key="item.uuid"
                            :data-uuid="item.uuid">
                                <div class="text-center">
                                    <figure class="tw-icono bg-gray-700/40 shadow-md m-0 p-0">
                                        <i class="mi" :class="[item.icon, item.color]"></i>
                                    </figure>
                                    <p class="text-[0.8rem] text-gray-400">{{ item.label }}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="group shopping-cart">
                        <span>
                            <i class="mi mi-shopping_cart"></i>
                            Carrito
                        </span>
                        <ul id="groupB">
                            <li
                            v-for="item in items.find(g => g.group === 'groupB').children"
                            :key="item.uuid"
                            :data-uuid="item.uuid">
                                <div class="text-center">
                                    <figure class="tw-icono bg-gray-700/40 shadow-md m-0 p-0">
                                        <i class="mi" :class="[item.icon, item.color]"></i>
                                    </figure>
                                    <p class="text-[0.8rem] text-gray-400">{{ item.label }}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <figure class="decoration-flat"></figure>
            </div>
        </section>
    `,

    methods: {
        updateItemsArray() {
            this.items = this.items.map((group) => {
                const el = document.getElementById(group.group);
                const children = Array.from(el.children).map((child) => {
                    return { ...this.itemLookup[child.dataset.uuid] };
                });
                return { ...group, children };
            });

            // console.log(JSON.stringify(this.items, null, 2));
        },
        looup() {
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
        }
    },
};