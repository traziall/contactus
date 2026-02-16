import { interactHelper } from "../../launcher/interactHelper.js";
import { ToggleHelper } from "../scripts.js";
import { storeComponents, storeConnectsLines } from "../store-playground.js";

export const appComponent = {
    template: /* html */`
    <div class="card-form" :style="{ left: position.x + 'px', top: position.y + 'px' }" :data-id="data.id">
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
                        <span class="badge badge-danger position-left" @click="connectPin($event)"></span>
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
                        <span class="badge badge-danger position-left" @click="connectPin($event)"></span>
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
                        <span class="badge badge-success position-right" @click="connectPin($event)"></span>
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
                            <label for="">Title <i class="mio mi-info" @click="connectPin($event)"></i></label>
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
        components: storeComponents(),
        connectsLines: storeConnectsLines(),
        position: {
            x: 400,
            y: 200
        }
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
                onMove: () => {
                    this.updatePinsLine();
                },
                onEnd: (e) => {
                    elements.classList.remove('user-none');
                    this.updatePinsLine();
                }
            });
        },
        remove() {
            const linesToRemove = this.connectsLines.lines.filter(l => {
                const comp = this.$el;
                return comp.contains(l.pinA) || comp.contains(l.pinB);
            });

            linesToRemove.forEach(l => {
                l.line.remove()
            });

            const lines = this.connectsLines.lines.filter(
                l => !linesToRemove.includes(l)
            );
            this.connectsLines.replaceLines(lines);
            this.components.remove(this.data.id);
        },
        sortable() {
            new Sortable(this.$el.querySelector(".card-form-body"), {
              animation: 150,
              handle: ".zone-drag",
            });
        },
        connectPin(e) {
            let pin = e.target;
            let selectedPin = this.connectsLines.selectedPin;
            if (!selectedPin) {
                this.connectsLines.changePin(pin);
                pin.style.boxShadow = "0 0 0 10px rgb(255 132 132 / 0.75)";
            } else {
                if (selectedPin.classList.contains("position-left") === pin.classList.contains("position-left")) {
                    console.warn("Conexión inválida");
                    this.connectsLines.changePin(null);
                } else {
                    this.connectPins(selectedPin, pin);
                }
                selectedPin.style.boxShadow = "";
                selectedPin = null;
            }
        },
        connectPins(pinA, pinB) {
            const line = new LeaderLine(
                LeaderLine.pointAnchor(pinA),
                LeaderLine.pointAnchor(pinB),
                {
                    color: "#95A0B1",
                    size: 3,
                    path: "grid",
                    endPlug: "arrow3"
                }
            );
            this.connectsLines.addLine({ pinA, pinB, line });
        },
        updatePinsLine() {
            for (const c of this.connectsLines.lines) {
                c.line.position();
            }
        }
    }
}