export const tzDemoapps = {
    data: () => ({
        features: [
            {
                id: 1,
                name: "Gráficas y Estadísticas",
                description: "Visualización de datos en tiempo real con métricas interactivas.",
                icon: "insights",
                img: '',
                category: "charts",
                color: "text-blue-500",
                assets: [
                    { name: "Tiempo real", description: "Datos actualizados dinámicamente", icon: "update" },
                    { name: "Interactividad", description: "Zoom, filtros y selección de rangos", icon: "touch_app" }
                ]
            },
            {
                id: 2,
                name: "Tableros Personalizados",
                description: "Paneles dinámicos que combinan distintos widgets y KPIs.",
                icon: "dashboard",
                img: '',
                category: "charts",
                color: "text-green-500",
                assets: [
                    { name: "Widgets", description: "Componentes modulares y reordenables", icon: "view_quilt" },
                    { name: "KPIs", description: "Indicadores clave visibles en todo momento", icon: "analytics" }
                ]
            },

            // 🗂️ SECTIONS
            {
                id: 3,
                name: "Gestión de Usuarios",
                description: "Sección para administración de usuarios, roles y permisos.",
                icon: "group",
                img: '',
                category: "sections",
                color: "text-purple-500",
                assets: [
                    { name: "Roles", description: "Control de acceso con distintos niveles", icon: "admin_panel_settings" },
                    { name: "Perfiles", description: "Información completa de cada usuario", icon: "account_circle" }
                ]
            },
            {
                id: 4,
                name: "Calendario Interactivo",
                description: "Gestión de eventos, recordatorios y citas.",
                icon: "calendar_month",
                img: 'ui-3.png',
                category: "sections",
                color: "text-orange-500",
                assets: [
                    { name: "Eventos", description: "Programación con notificaciones", icon: "event_available" },
                    { name: "Integración", description: "Sincronización con Google/Outlook", icon: "sync" }
                ]
            },
            {
                id: 5,
                name: "Formularios Dinámicos",
                description: "Campos adaptables según el flujo o el perfil del usuario.",
                icon: "description",
                img: 'ui-2.jpeg',
                category: "sections",
                color: "text-teal-500",
                assets: [
                    { name: "Validación", description: "Validaciones en tiempo real", icon: "rule" },
                    { name: "Automatización", description: "Envío y registro automático", icon: "auto_fix_high" }
                ]
            },
            {
                id: 6,
                name: "Chat",
                description: "Sistema de mensajería en tiempo real con soporte multimedia.",
                icon: "chat",
                img: 'ui-1.png',
                category: "sections",
                color: "text-red-400",
                assets: [
                    { name: "Multimedia", description: "Compartir imágenes, audios y documentos", icon: "attach_file" },
                    { name: "Notificaciones", description: "Alertas en tiempo real", icon: "notifications_active" }
                ]
            },
            {
                id: 7,
                name: "Notificaciones Push",
                description: "Alertas instantáneas en web, móvil y escritorio.",
                icon: "notifications",
                img: '',
                category: "sections",
                color: "text-yellow-500",
                assets: [
                    { name: "Segmentación", description: "Envío por grupos o usuarios específicos", icon: "group_work" },
                    { name: "Multiplataforma", description: "Funciona en apps y navegadores", icon: "devices" }
                ]
            },
            {
                id: 8,
                name: "UI Responsiva",
                description: "Interfaces que se adaptan a cualquier dispositivo.",
                icon: "devices",
                img: '',
                category: "interfaces",
                color: "text-cyan-500",
                assets: [
                    { name: "Mobile First", description: "Diseño optimizado para móviles", icon: "phone_iphone" },
                    { name: "Desktop Friendly", description: "Experiencia completa en escritorio", icon: "computer" }
                ]
            },
            {
                id: 9,
                name: "Modo Oscuro/Claro",
                description: "Personalización del tema visual según la preferencia del usuario.",
                icon: "dark_mode",
                img: '',
                category: "interfaces",
                color: "text-gray-700",
                assets: [
                    { name: "Accesibilidad", description: "Mayor legibilidad para todos", icon: "visibility" },
                    { name: "Ahorro de Energía", description: "Optimizado para pantallas OLED", icon: "battery_saver" }
                ]
            },

            // 🔒 SECURITY / EXTRA
            {
                id: 10,
                name: "Autenticación Segura",
                description: "Inicio de sesión con múltiples métodos de seguridad.",
                icon: "lock",
                img: '',
                category: "security",
                color: "text-pink-500",
                assets: [
                    { name: "OAuth2 / JWT", description: "Tokens seguros para APIs", icon: "vpn_key" },
                    { name: "2FA", description: "Autenticación en dos pasos", icon: "verified_user" }
                ]
            },
            {
                id: 11,
                name: "Reportes Automáticos",
                description: "Generación de informes en PDF, Excel o email.",
                icon: "summarize",
                img: '',
                category: "extras",
                color: "text-lime-600",
                assets: [
                    { name: "Exportación", description: "PDF, Excel y CSV", icon: "file_download" },
                    { name: "Programación", description: "Envío automático programado", icon: "schedule_send" }
                ]
            },
            {
                id: 13,
                name: "Soporte Multilenguaje",
                description: "Aplicaciones adaptadas a diferentes idiomas y regiones.",
                icon: "translate",
                img: '',
                category: "extras",
                color: "text-emerald-600",
                assets: [
                    { name: "Internacionalización", description: "Traducciones dinámicas", icon: "language" },
                    { name: "Monedas", description: "Soporte para múltiples divisas", icon: "attach_money" }
                ]
            }
        ],
        select: null
    }),
    created() {
        this.select = this.features[0];
    },
    methods: {
        prev() {
            const idx = this.features.indexOf(this.select);
            const newIdx = (idx - 1 + this.features.length) % this.features.length;
            this.select = this.features[newIdx];
        },
        next() {
            const idx = this.features.indexOf(this.select);
            const newIdx = (idx + 1) % this.features.length;
            this.select = this.features[newIdx];
        },
        change(item) {
            this.select = item;
        }
    },
    template: /* html */`
        <section class="tz-demoapps" style="background-image: url('./assets/img/fondo-cuadrillos.png');">
            <div class="body">
                <menu>
                    <button type="button">
                        Características
                    </button>
                </menu>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 px-2 md:px-0">
                    <div class="nav">
                        <p class="my-4 text-gray-400">Lista de características que logramos crear para una aplicación excepcionales</p>
                        <nav class="features">
                            <template v-for="item in features">
                                <button type="button" :class="{ 'active': item.id === select.id }" @click="change(item)">
                                    <i class="mir" :class="[item.color, 'mi-' + item.icon]"></i>
                                    <span class="font-semibold ml-3 text-sm">{{ item.name }}</span>
                                </button>
                            </template>
                        </nav>
                    </div>
                    <div class="watch">
                        <div class="block bg-gray-800 border border-gray-700 rounded-md">
                            <header class="flex justify-between pb-3">
                                <div class="flex gap-3 p-2">
                                    <div class="w-[30px]" :class="select.color">
                                        <i class="mi" :class="'mi-' + select.icon"></i>
                                    </div>
                                    <div class="grow basis-0">
                                        <h6 class="mb-2">{{ select.name }}</h6>
                                        <p class="text-sm text-gray-400">{{ select.description }}</p>
                                    </div>
                                </div>
                                <div class="flex justify-end gap-2 p-3">
                                    <div class="flex justify-end gap-2 p-3">
                                        <button type="button" @click="prev">
                                            <i class="mir mi-chevron_left"></i>
                                        </button>
                                        <button type="button" @click="next">
                                            <i class="mir mi-chevron_right"></i>
                                        </button>
                                    </div>
                                </div>
                            </header>
                            <div class="px-4">
                                <img :src="'assets/img/' + (select.img || 'chart-ui-kit-xerlee.jpg')" alt="">
                            </div>
                            <div class="block p-4 border-t border-gray-700">
                                d
                            </div>
                            <div class="block p-4 border-t border-gray-700">
                                d
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
};