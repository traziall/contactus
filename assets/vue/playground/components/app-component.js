import { interactHelper } from "../../launcher/interactHelper.js";
import { ToggleHelper } from "../scripts.js";
import { storeComponents } from "../store-playground.js";

export const appComponent = {
    template: /* html */`
    <div class="card-form" :style="{ left: data.position.x + 'px', top: data.position.y + 'px' }" :data-id="data.id">
        <ul class="card-controls">
            <li>
                <button type="button" class="button">
                    <i class="mir mi-code"></i>
                    <span>code</span>
                </button>
            </li>
            <li>
                <button type="button" class="button">
                    <i class="mir mi-tune"></i>
                    <span>Controls</span>
                </button>
            </li>
            <li>
                <button type="button" class="button">
                    <i class="mir mi-block"></i>
                    <span>Frezze Path</span>
                </button>
            </li>
            <li>
                <button type="button" class="button red" @click="remove()">
                    <i class="mir mi-delete"></i>
                </button>
            </li>
        </ul>
        <div class="card-form-header">
            <div class="header">
                <img src="assets/img/avatar-defecto-f.png" class="card-img-avatar" alt="">
                <p>Lorem, ipsum.</p>
                <button type="button" class="btn-collapse">
                    <i class="bi bi-play-fill m-r1"></i>
                </button>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, quibusdam?</p>
        </div>
        <ul class="card-form-body item">
            <li class="drag"></li>
            <template v-if="data.assets.length > 0" v-for="item in data.assets">
                <template v-if="item.type === 'select'">
                    <li>
                        <div class="card-fieldset">
                            <label for="">Options <i class="mio mi-info"></i></label>
                            <div class="input">
                                <select>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>
                            </div>
                        </div>
                        <span class="badge badge-danger position-left"></span>
                        <span class="zone-drag">
                            <i class="mir mi-drag_indicator"></i>
                        </span>
                    </li>
                </template>
                <template v-if="item.type === 'text'">
                    <li>
                        <div class="card-fieldset">
                            <label for="">Text <i class="mio mi-info"></i></label>
                            <div class="input">
                                <input type="text">
                                <i class="mir mi-replay"></i>
                            </div>
                        </div>
                        <span class="badge badge-danger position-left"></span>
                        <span class="zone-drag">
                            <i class="mir mi-drag_indicator"></i>
                        </span>
                    </li>
                </template>
                <template v-if="item.type === 'number'">
                    <li>
                        <div class="card-fieldset">
                            <label for="">Number <i class="mio mi-info"></i></label>
                            <div class="input">
                                <input type="number">
                            </div>
                        </div>
                        <span class="badge badge-success position-right"></span>
                        <span class="zone-drag">
                            <i class="mir mi-drag_indicator"></i>
                        </span>
                    </li>
                </template>
                <template v-if="item.type === 'label'">
                    <li>
                        <div class="card-item">
                            <i class="mir mi-remove_red_eye"></i>
                            <p>Lorem, ipsum.</p>
                        </div>
                        <span class="zone-drag">
                            <i class="mir mi-drag_indicator"></i>
                        </span>
                    </li>
                </template>
                <template v-if="item.type === 'text-out'">
                    <li>
                        <div class="card-fieldset">
                            <label for="">Title <i class="mio mi-info"></i></label>
                            <p>lorem</p>
                        </div>
                        <span class="badge badge-info position-left"></span>
                        <span class="zone-drag">
                            <i class="mir mi-drag_indicator"></i>
                        </span>
                    </li>
                </template>
            </template>
            <template v-else>
                <li>
                    <div class="zone-drop">
                        <div class="content">
                            <span>¡Elemento Aqui!</span>
                        </div>
                    </div>
                </li>
            </template>
        </ul>
    </div>`,
    data: () => ({
        components: storeComponents()
    }),
    props: {
        data: {
            type: Object,
            default: null
        }
    },
    mounted() {
        this.toggle();
        this.sortable();
    },
    methods: {
        toggle() {
            const elements = this.$el;
            new ToggleHelper(elements, {
                focusMode: 'lock',
                classToggle: 'active'
            })
            interactHelper.move(elements, {
                handles: elements.querySelector('.drag'),
                onStart: () => {
                    elements.classList.add('user-none');
                },
                onEnd: () => {
                    elements.classList.remove('user-none');
                }
            });
        },
        remove() {
            this.components.remove(this.data.id)
        },
        sortable() {
            new Sortable(this.$el.querySelector(".card-form-body"), {
              animation: 150,
              handle: ".zone-drag",
            });
        }
    }
}