export const tzContact = {
    data: () => ({
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
                        label: 'App web',
                        color: 'text-orange-400',
                    },
                    {
                        uuid: '254179b3-5a7d-43c0-8211-5e9b0d36c105',
                        icon: 'mi-animation', // Animación gráfica
                        label: 'Animacion',
                        color: 'text-yellow-400',
                    },
                    {
                        uuid: 'f2765f5d-3e86-4798-af52-6c2267b40257',
                        icon: 'mi-storage', // Back-end
                        label: 'Back-end',
                        color: 'text-green-400',
                    },
                    {
                        uuid: '8a2f9083-eb04-421c-94b0-b2407e17c7ce',
                        icon: 'mi-design_services', // Diseño UX UI
                        label: 'Diseño UX/UI',
                        color: 'text-teal-400',
                    },
                    {
                        uuid: '9ff50cca-a4e0-4819-880b-afefaadfed8e',
                        icon: 'mi-desktop_windows', // App desktop
                        label: 'App desktop',
                        color: 'text-teal-400',
                    },
                    {
                        uuid: '5eba8af9-b877-4832-b72e-570d6525ac4a',
                        icon: 'mi-smartphone', // App móvil
                        label: 'App movil',
                        color: 'text-cyan-400',
                    },
                    {
                        uuid: '7c827907-d466-4361-90df-574623a4379c',
                        icon: 'mi-brush', // Ilustraciones
                        label: 'Ilustraciones',
                        color: 'text-sky-400',
                    },
                    {
                        uuid: '40cdf557-360b-4fe1-8385-7597532c1802',
                        icon: 'mi-movie_edit', // Video edición (Material Symbols)
                        label: 'Video edicion',
                        color: 'text-indigo-400',
                    },
                ],
            },
            {
                group: "groupB",
                children: [],
            },
        ],
        contacts: [
            { crow: "KzU3MzA0NjIxNTc4OA==" },  // +57..88
            { apock: "KzU3MzE3ODM4ODYzNw==" }   // +57..37
        ],
        itemLookup: {}, // para mapear uuid → objeto
        form: {
            name: '',
            asunto: '',
            message: ''
        }
    }),
    mounted() {
        this.looup();
    },
    template: /* html */`
        <section class="block" id="contactus">
            <div class="mx-auto max-w-5xl bg-(--gray-850) border border-gray-800 rounded-t-lg">
                <header class="px-5 md:px-10 pt-5">
                    <h3 class="text-xl mb-2 text-gray-300">Selecciona los servicios que necesitas</h3>
                    <p class="text-sm text-gray-500">Arrastra y agrega a tu solicitud los servicios que deseas incluir en tu proyecto.</p>
                </header>
                <div class="ul-sortable py-10 px-4 md:px-10">
                    <div class="group mb-4 md:mb-0">
                        <ul id="groupA">
                            <li
                            v-for="item in items.find(g => g.group === 'groupA').children"
                            :key="item.uuid"
                            :data-uuid="item.uuid">
                                <div class="text-center">
                                    <figure class="tw-icono bg-gray-700/40 shadow-md m-0 p-0" :class="item.color">
                                        <i class="mi" :class="item.icon"></i>
                                    </figure>
                                    <p class="text-[0.8rem] text-gray-400">{{ item.label }}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="group shopping-cart">
                        <span class="span-title ml-1">
                            <i class="mi mi-shopping_cart"></i>
                            Servicios seleccionados {{ cartCount ? '(' + cartCount + ')' : '' }}
                        </span>
                        <ul id="groupB" class="mt-2">
                            <li
                            v-for="item in items.find(g => g.group === 'groupB').children"
                            :key="item.uuid"
                            :data-uuid="item.uuid">
                                <div class="text-center">
                                    <figure class="tw-icono bg-gray-700/40 shadow-md m-0 p-0" :class="item.color">
                                        <i class="mi" :class="item.icon"></i>
                                    </figure>
                                    <p class="text-[0.8rem] text-gray-400">{{ item.label }}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <form class="tw-form relative">
                    <span class="span-title ml-5 md:ml-10">
                        <i class="mi mi-phone"></i>
                        Contactar
                    </span>
                    <div class="col-span-full md:col-span-1">
                        <fieldset>
                            <legend>Nombre</legend>
                            <input type="text" v-model="form.name">
                        </fieldset>
                    </div>
                    <div class="col-span-full md:col-span-2">
                        <fieldset>
                            <legend>Proyecto / Asunto</legend>
                            <input type="text" v-model="form.asunto">
                        </fieldset>
                    </div>
                    <div class="col-span-full">
                        <fieldset>
                            <legend>Mensaje</legend>
                            <textarea v-model="form.message"></textarea>
                        </fieldset>
                    </div>
                    <div class="col-span-full grid grid-cols-2 gap-3">
                        <button type="button" @click="sendWhatsapp('apock')">
                            <i class="icofont-whatsapp"></i>
                            <div>
                                <p>Enviar</p>
                                <small>Asesor 1</small>
                            </div>
                        </button>
                        <button type="button" @click="sendWhatsapp('crow')">
                            <i class="icofont-whatsapp"></i>
                            <div>
                                <p>Enviar</p>
                                <small>Asesor 2</small>
                            </div>
                        </button>
                    </div>
                </form>
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
            this.items.forEach((group) => {
                group.children.forEach((child) => {
                    this.itemLookup[child.uuid] = child;
                });
            });

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
        cart() {
            const group = this.items[1].children;
            return group;
        },
        fromB64toString(key) {
            const found = this.contacts.find(obj => obj[key]);
            if (!found) return null;
            return atob(found[key]);
        },
        sendWhatsapp(key) {
            const phone = this.fromB64toString(key);
            if (!phone) return;

            const { name, asunto, message } = this.form;
            const cart = this.cart().map(x => x.label).join(", ");

            // array para ir sumando líneas válidas
            const parts = [];

            if (name) parts.push(`Hola 👋, soy ${name}.`);
            else parts.push(`Hola 👋.`); // por si no quieres que quede vacío

            if (asunto) parts.push(`Asunto: ${asunto}`);
            if (message) parts.push(`Mensaje: ${message}`);
            parts.push(`Servicios: ${cart || "Ninguno seleccionado"}`);

            // unir con saltos de línea
            const text = parts.join("\n");

            const url = `https://wa.me/${phone.replace(/\+/g, "")}?text=${encodeURIComponent(text)}`;
            window.open(url, "_blank");
        }

    },
    computed: {
        cartCount() {
            return this.cart().length;
        }
    }
};