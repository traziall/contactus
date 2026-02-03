export const tzGallery = {
    template: /* html */`
    <div class="block -mt-20 mb-10">
        <section class="block max-w-5xl mx-auto">
            <header class="border-b border-gray-700 mb-5">
                <span class="inline-block py-1 px-5 border-b-2 -mb-px border-red-500">Demostraciones</span>
            </header>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

                <a v-for="(item, i) in gallery" :key="i"
                   :href="item.link" target="_blank"
                   class="block border border-gray-700 p-1 overflow-hidden rounded-sm shadow-md bg-gray-800
                          hover:shadow-lg transition cursor-pointer group">

                    <img :src="item.img" class="w-full h-52 object-cover">
                    <div class="w-100 p-5">
                        <h6 class="text-sm">{{ item.label }}</h6>
                    </div>
                </a>

            </div>
        </section>
    </div>`,

    data: () => ({
        gallery: [
            { link: "launcher.html", label: "Gamer", img: "assets/img/demo-1.png" },
            { link: "#", label: "Dashboard", img: "assets/img/demo-2.png" },
            { link: "#", label: "Hoganizador", img: "" },
            { link: "#", label: "App movil", img: "" }
        ]
    })
}
